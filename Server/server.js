const express = require('express');
const app = express();

// Import security middleware
require('./middleware')(app);

const PORT = 3000;

// Middleware
app.use(express.json());

// Import routes
const productsRoutes = require('./routes/productsRoutes');
const blogCategoriesRoutes = require('./routes/blogCategoriesRoutes');
const blogsRoutes = require('./routes/blogsRoutes');
const blogCommentsRoutes = require('./routes/blogCommentsRoutes');
const authorsRoutes = require('./routes/authorsRoutes');
const categoriesRoutes = require('./routes/categories');
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

// Use routes
app.use('/products', productsRoutes);
app.use('/blog_categories', blogCategoriesRoutes);
app.use('/blogs', blogsRoutes);
app.use('/blog_comments', blogCommentsRoutes);
app.use('/authors', authorsRoutes);
app.use('/categories', categoriesRoutes);
app.use('/faqs', faqsRoutes);
app.use('/galleries', galleriesRoutes);
app.use('/product_images', productImagesRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/metas', metasRoutes);
app.use('/pages', pageRoutes);
app.use('/portfolio_images', portfolioImagesRoutes);
app.use('/redirections', redirectionRoutes);
app.use('/services', servicesRoutes);
app.use('/slider', sliderRoutes);
app.use('/users', usersRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
