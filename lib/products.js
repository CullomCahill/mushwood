const products = [
  {
    id: '1',
    title: 'Mushroom lamp 1',
    description: 'Mycelium based shade and hickory base',
    price: 324,
    image: '/images/lamp1.jpg'
  },
  {
    id: '2',
    title: 'Repurposed Standing floor Lamp',
    description: 'Repurposed Standing floor Lamp with mycelium lampshade',
    price: 180,
    image: '/images/ikea_standing_lamp.jpeg' 
  },
  {
    id: '3',
    title: 'Desk lamp',
    description: 'Ikea lamp from the thrift store repurposed',
    price: 165,
    image: '/images/desklamp.jpeg'
  },
  {
    id: '4',
    title: 'Flower pot',
    description: 'Mycelium Flower Pot',
    price: 60,
    image: '/images/flower_pot1.jpeg'
  },
  {
    id: '5',
    title: 'Mycelium Candle Holders',
    description: 'Floating candle holders made from mycelium',
    price: 30,
    image: '/images/candle_holders.jpeg' 
  },
  {
    id: '6',
    title: 'Christmas Ornaments',
    description: 'Mushroom ornaments grown from mushrooms!',
    price: 30,
    image: '/images/ornaments.jpg' 
  },
  /*
  {
    id: '7',
    title: 'Stem Bookend',
    description: 'Pair of bookends shaped like mushroom stems. Solid walnut.',
    price: 125,
    image: '/images/stem-bookend.jpg' // Replace with your image filename
  },
  {
    id: '8',
    title: 'Fungi Coaster Set',
    description: 'Set of four coasters with mushroom-inspired inlays. Mixed hardwoods.',
    price: 45,
    image: '/images/fungi-coaster-set.jpg' // Replace with your image filename
  }
    */
];

function getAllProducts() {
  return products;
}

function getFeaturedProducts(count) {
  return products.slice(0, count);
}

function getProductById(id) {
  return products.find(product => product.id === id);
}

module.exports = {
  getAllProducts,
  getFeaturedProducts,
  getProductById
};
