import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editAlt, setEditAlt] = useState("");
  const [editDetail, setEditDetail] = useState("");

  // ✅ Load images from backend
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await axios.get("/galleries");
    setImages(res.data);
  };

  // ✅ Dropzone config
  const onDrop = useCallback(async (acceptedFiles) => {
    for (const file of acceptedFiles) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("alt_tag", file.name); // default alt = filename
      await axios.post("/galleries/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    fetchImages();
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // ✅ Delete image
  const handleDelete = async (id) => {
    await axios.delete(`/galleries/${id}`);
    setImages(images.filter((img) => img.id !== id));
  };

  // ✅ Edit image alt & detail
  const handleEditClick = (img) => {
    setEditingId(img.id);
    setEditAlt(img.alt_tag || "");
    setEditDetail(img.detail || "");
  };

  const handleSaveEdit = async () => {
    await axios.put(`/galleries/${editingId}`, {
      alt_tag: editAlt,
      detail: editDetail,
    });
    setEditingId(null);
    setEditAlt("");
    setEditDetail("");
    fetchImages();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gallery</h2>

      {/* ✅ Drag & Drop Area */}
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #aaa",
          padding: "20px",
          marginBottom: "20px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop files here...</p>
        ) : (
          <p>Drag & drop images, or click to select</p>
        )}
      </div>

      {/* ✅ Image Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {images.map((img) => (
          <div
            key={img.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={img.image}
              alt={img.alt_tag}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />

            {editingId === img.id ? (
              <div style={{ marginTop: "8px" }}>
                <input
                  type="text"
                  placeholder="Alt tag"
                  value={editAlt}
                  onChange={(e) => setEditAlt(e.target.value)}
                  style={{ width: "100%", padding: "4px", marginBottom: "5px" }}
                />
                <textarea
                  placeholder="Detail"
                  value={editDetail}
                  onChange={(e) => setEditDetail(e.target.value)}
                  style={{ width: "100%", padding: "4px", marginBottom: "5px" }}
                />
                <button onClick={handleSaveEdit} style={{ marginRight: "5px" }}>
                  Save
                </button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <p style={{ margin: "8px 0" }}>
                  <strong>Alt:</strong> {img.alt_tag || "—"}
                </p>
                <p style={{ margin: "8px 0", fontSize: "12px", color: "#555" }}>
                  <strong>Detail:</strong> {img.detail || "—"}
                </p>
                <button onClick={() => handleEditClick(img)}>Edit</button>
                <button
                  onClick={() => handleDelete(img.id)}
                  style={{ marginLeft: "5px", color: "red" }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
