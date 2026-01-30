require('dotenv').config();
const express = require('express');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_your_secret_key_here');
const { getAllProducts, getFeaturedProducts, getProductById } = require('./lib/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper function to render HTML with navigation
function renderPage(title, content, currentPath, additionalCSS = '') {
  const navActive = (path) => currentPath === path ? 'active' : '';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - MushWood</title>
  <link rel="stylesheet" href="/css/globals.css">
  <link rel="stylesheet" href="/css/navigation.css">
  ${additionalCSS}
</head>
<body>
  <nav class="nav">
    <div class="nav-container">
      <a href="/" class="logo">MushWood</a>
      <div class="links">
        <a href="/" class="${navActive('/')}">Home</a>
        <a href="/about" class="${navActive('/about')}">About</a>
        <a href="/store" class="${navActive('/store')}">Store</a>
      </div>
    </div>
  </nav>
  <main>
    ${content}
  </main>
</body>
</html>`;
}

// Home page
app.get('/', (req, res) => {
  const featuredProducts = getFeaturedProducts(3);
  
  // To use your own hero image:
  // 1. Place image in public/images/ folder
  // 2. Update the src below to: '/images/your-hero-image.jpg'
  const heroSection = `
    <section class="hero">
      <div class="heroImage">
        <img src="/images/shade_closeup.jpeg" alt="Handcrafted mushroom woodworking">
      </div>
    </section>
  `;
  
  const featuredSection = `
    <section class="featured">
      <div class="container">
        <div class="productGrid">
          ${featuredProducts.map(product => `
            <a href="/store" class="productCard">
              <div class="productImage">
                <img src="${product.image}" alt="${product.title}">
              </div>
              <div class="productInfo">
                <h3 class="productTitle">${product.title}</h3>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
  
  const content = `
    <div class="home">
      ${heroSection}
      ${featuredSection}
    </div>
  `;
  
  res.send(renderPage('MushWood - Handcrafted Mushroom Woodworking', content, '/', '<link rel="stylesheet" href="/css/home.css">'));
});

// About page
app.get('/about', (req, res) => {
  const content = `
    <div class="about">
      <div class="container">
        <div class="content">
          <div class="textSection">
            <h1 class="title">About MushWood</h1>
            <div class="text">
              <p>
                MushWood (Mushroom Woodworker) is a handcrafted woodworking studio specializing in 
                unique pieces inspired by the natural beauty of mushrooms. 
                Each piece is carefully designed and meticulously crafted to 
                bring the organic elegance of the forest into your home.
              </p>
              <p>
                Our work combines traditional woodworking techniques with 
                contemporary design sensibilities, creating functional art 
                that celebrates the intricate forms found in nature.
              </p>
              <p>
                Every piece is one-of-a-kind, made with sustainably sourced 
                materials and finished with natural oils that enhance the 
                wood's natural character.
              </p>
            </div>
          </div>
          <div class="imageSection">
            <div class="imageWrapper">
              <img src="/images/shade_closeup.jpeg" alt="Woodworking studio">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  res.send(renderPage('About', content, '/about', '<link rel="stylesheet" href="/css/about.css">'));
});

// Store page
app.get('/store', (req, res) => {
  const products = getAllProducts();
  
  const content = `
    <div class="store">
      <div class="container">
        <h1 class="title">Store</h1>
        <div class="productGrid">
          ${products.map(product => `
            <div class="productCard">
              <div class="productImage">
                <img src="${product.image}" alt="${product.title}">
              </div>
              <div class="productInfo">
                <h3 class="productTitle">${product.title}</h3>
                <p class="productDescription">${product.description}</p>
                <p class="productPrice">$${product.price}</p>
                <form action="/checkout" method="POST" style="margin-top: var(--spacing-sm);">
                  <input type="hidden" name="productId" value="${product.id}">
                  <button type="submit" class="buyButton">Buy Now</button>
                </form>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  res.send(renderPage('Store', content, '/store', '<link rel="stylesheet" href="/css/store.css">'));
});

// Checkout page
app.get('/checkout/:productId?', (req, res) => {
  const productId = req.params.productId || req.query.productId;
  let product = null;
  
  if (productId) {
    product = getProductById(productId);
  }
  
  if (!product) {
    return res.redirect('/store');
  }
  
  const content = `
    <div class="checkout">
      <div class="container">
        <h1 class="title">Checkout</h1>
        <div class="checkoutContent">
          <div class="productSummary">
            <div class="productImage">
              <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="productDetails">
              <h2 class="productTitle">${product.title}</h2>
              <p class="productDescription">${product.description}</p>
              <p class="productPrice">$${product.price}</p>
            </div>
          </div>
          <form action="/create-checkout-session" method="POST" class="checkoutForm">
            <input type="hidden" name="productId" value="${product.id}">
            <div class="formGroup">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
            <button type="submit" class="checkoutButton">Proceed to Payment</button>
          </form>
        </div>
      </div>
    </div>
  `;
  
  res.send(renderPage('Checkout', content, '/store', '<link rel="stylesheet" href="/css/checkout.css">'));
});

// Handle checkout form submission
app.post('/checkout', (req, res) => {
  const productId = req.body.productId;
  res.redirect(`/checkout/${productId}`);
});

// Create Stripe checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { productId, email } = req.body;
    const product = getProductById(productId);
    
    if (!product) {
      return res.status(404).send('Product not found');
    }
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.title,
              description: product.description,
              images: [req.protocol + '://' + req.get('host') + product.image],
            },
            unit_amount: product.price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: req.protocol + '://' + req.get('host') + '/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: req.protocol + '://' + req.get('host') + '/store',
    });
    
    res.redirect(303, session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Error creating checkout session');
  }
});

// Success page
app.get('/success', async (req, res) => {
  const sessionId = req.query.session_id;
  let session = null;
  
  if (sessionId) {
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId);
    } catch (error) {
      console.error('Error retrieving session:', error);
    }
  }
  
  const content = `
    <div class="success">
      <div class="container">
        <div class="successContent">
          <h1 class="title">Thank You!</h1>
          <p class="message">Your order has been received. We'll send you a confirmation email shortly.</p>
          ${session ? `<p class="orderInfo">Order ID: ${session.id}</p>` : ''}
          <a href="/store" class="backButton">Continue Shopping</a>
        </div>
      </div>
    </div>
  `;
  
  res.send(renderPage('Order Success', content, '/store', '<link rel="stylesheet" href="/css/checkout.css">'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_your_secret_key_here') {
    console.log('⚠️  WARNING: Please set your STRIPE_SECRET_KEY environment variable');
  }
});
