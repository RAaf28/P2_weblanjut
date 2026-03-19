import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => {
        console.log('Data produk dari API:', response.data);
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching produk:', error));
  }, []);

  return (
    <div>
      <h2>Daftar Produk</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Stok</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nama}</td>
                <td>Rp {product.harga.toLocaleString('id-ID')}</td>
                <td>{product.stok}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Data tidak tersedia</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
