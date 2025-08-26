const express = require('express');
const path = require('path');
const app = express();

// Import security middleware
require('./middleware')(app);

const PORT = 3000;

// Middleware
app.use(express.json());

// Serve uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const productsRoutes = require('./routes/productsRoutes');
const blogCategoriesRoutes = require('./routes/blogCategoriesRoutes');
const blogsRoutes = require('./routes/blogsRoutes');
const blogCommentsRoutes = require('./routes/blogCommentsRoutes');
const authorsRoutes = require('./routes/authorsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const faqsRoutes = require('./routes/faqs');
const galleriesRoutes = require('./routes/galleries');
const productImagesRoutes = require('./routes/productImages');
const reviewsRoutes = require('./routes/reviewsRoutes');
const metasRoutes = require('./routes/metasRoutes');
const pageRoutes = require('./routes/pagesRoutes');
const portfolioImagesRoutes = require('./routes/portfolioImagesRoutes');
const redirectionRoutes = require('./routes/redirectionsRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const usersRoutes = require('./routes/usersRoutes');
const newsLetterRoutes = require('./routes/newsletterRoutes');

// Use routes
app.use('/categories', categoriesRoutes);
app.use('/products', productsRoutes);
app.use('/blog_categories', blogCategoriesRoutes);
app.use('/blogs', blogsRoutes);
app.use('/blog_comments', blogCommentsRoutes);
app.use('/authors', authorsRoutes);
app.use('/faqs', faqsRoutes);
app.use('/galleries', galleriesRoutes); // <-- updated galleries route
app.use('/product_images', productImagesRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/metas', metasRoutes);
app.use('/pages', pageRoutes);
app.use('/portfolio_images', portfolioImagesRoutes);
app.use('/redirections', redirectionRoutes);
app.use('/services', servicesRoutes);
app.use('/slider', sliderRoutes);
app.use('/users', usersRoutes);
app.use('/stats', require('./routes/stats'));
app.use('/newsletter', newsLetterRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
