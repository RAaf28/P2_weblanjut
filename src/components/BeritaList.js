import React, { useState, useEffect } from 'react';
import { getBerita } from '../services/beritaService';

const BeritaList = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    getBerita()
      .then(response => {
        console.log('Data berita dari API:', response.data);
        setBerita(response.data);
      })
      .catch(error => console.error('Error fetching berita:', error));
  }, []);

  return (
    <div>
      <h2>Daftar Berita</h2>
      {berita.length > 0 ? (
        berita.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '12px', marginBottom: '10px' }}>
            <h3>{item.judul}</h3>
            <p>{item.isi}</p>
            <small>Tanggal: {item.tanggal}</small>
          </div>
        ))
      ) : (
        <p>Data tidak tersedia</p>
      )}
    </div>
  );
};

export default BeritaList;
