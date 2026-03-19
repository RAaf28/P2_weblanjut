console.log('productController module loaded');

const products = [
  { id: 1, nama: 'Laptop Asus', harga: 8500000, stok: 15 },
  { id: 2, nama: 'Mouse Logitech', harga: 250000, stok: 40 },
  { id: 3, nama: 'Keyboard Mechanical', harga: 650000, stok: 25 },
];

exports.getProducts = (req, res) => {
  res.json(products);
};
