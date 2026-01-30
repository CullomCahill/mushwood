# MushWood Website

A minimal, art gallery-style website for a mushroom woodworking business.

## Features

- **Home Page**: Hero image with three featured product previews
- **About Page**: Simple layout with text and image
- **Store Page**: Grid layout displaying all products with images, titles, descriptions, and prices
- **Design**: Clean, minimal aesthetic with white background and generous spacing
- **Responsive**: Mobile-friendly design

## Tech Stack

- Express.js
- Node.js 18.14.0
- Vanilla HTML/CSS/JavaScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the server:
```bash
npm start
```
or
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── server.js           # Express server
├── lib/
│   └── products.js     # Product data
├── public/
│   └── css/            # Stylesheets
│       ├── globals.css
│       ├── navigation.css
│       ├── home.css
│       ├── about.css
│       └── store.css
└── package.json
```

## Customization

- Product data can be edited in `lib/products.js`
- Images are currently using Unsplash placeholders - replace with your own images
- Styling can be customized in the CSS files in `public/css/`
