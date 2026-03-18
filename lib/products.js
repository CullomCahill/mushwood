// status options: 'inStock' | 'soldOut' | 'madeToOrder'
const products = [
    {
    id: '1',
    title: 'Drum Pendant',
    description: 'Drum shaped mycelium lampshade',
    price: 125,
    image: '/images/drum_pendant.jpg',
    status: 'inStock'
  },
  {
    id: '2',
    title: 'Mushroom lamp 1',
    description: 'Mycelium based shade and hickory base',
    price: 324,
    image: '/images/lamp1.jpg',
    status: 'madeToOrder'
  },
  {
    id: '3',
    title: 'Dome Pendant',
    description: 'Dome shaped pendant lampshade',
    price: 45,
    image: '/images/rope_pendant.jpg', 
    status: 'inStock'

  },
  {
    id: '4',
    title: 'Portal Lamp',
    description: 'Table lamp, hand sculpted wood base with mycelium shade',
    price: 180,
    image: '/images/portal_lamp.jpg',
    status: 'madeToOrder'
  },
  {
    id: '5',
    title: 'Repurposed Standing floor Lamp',
    description: 'Repurposed Standing floor Lamp with mycelium lampshade',
    price: 180,
    image: '/images/ikea_standing_lamp.jpeg',
    status: 'inStock'
  },
  {
    id: '6',
    title: 'Flower pot',
    description: 'Mycelium Flower Pot',
    price: 60,
    image: '/images/flower_pot1.jpeg',
    status: 'madeToOrder'
  },
  {
    id: '7',
    title: 'Desk lamp',
    description: 'Ikea lamp from the thrift store repurposed',
    price: 165,
    image: '/images/desklamp.jpeg',
    status: 'madeToOrder'
  },
  {
    id: '8',
    title: 'Mycelium Candle Holders',
    description: 'Floating candle holders made from mycelium',
    price: 30,
    image: '/images/candle_holders.jpeg',
    status: 'soldOut'
  },
  {
    id: '9',
    title: 'Christmas Ornaments',
    description: 'Mushroom ornaments grown from mushrooms!',
    price: 30,
    image: '/images/ornaments2.jpg',
    status: 'madeToOrder'
  },
  
    
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
