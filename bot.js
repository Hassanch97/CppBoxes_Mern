console.log("start");
const url = "https://www.cppboxes.com/"; // replace with your site



// Array(1000).fill(0).forEach((_, i) => {
//   console.log(i);
// });
Array.from({ length: 1000 }).forEach((_, i) => {
  fetch(url)
    .then(res => console.log(`Request ${i} status:`, res.status))
    .catch(err => console.error(`Request ${i} failed:`, err));
});