import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(response => {
        console.log('Data pengguna dari API:', response.data);
        const data = response.data;
        setUsers(Array.isArray(data) ? data : [data]);
      })
      .catch(error => console.error('Error fetching pengguna:', error));
  }, []);

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id}>{user.nama} - {user.email}</li>
          ))
        ) : (
          <p>Data tidak tersedia</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;