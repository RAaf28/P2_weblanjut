import './App.css';
import React from 'react';
import UserList from './components/userList';
import ProductList from './components/ProductList';
import BeritaList from './components/BeritaList';

function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Aplikasi Web Modular</h1>
      <hr />
      <section style={{ marginBottom: '30px' }}>
        <UserList />
      </section>
      <hr />
      <section style={{ marginBottom: '30px' }}>
        <ProductList />
      </section>
      <hr />
      <section style={{ marginBottom: '30px' }}>
        <BeritaList />
      </section>
    </div>
  );
}

export default App;
