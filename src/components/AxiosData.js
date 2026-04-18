// src/components/AxiosData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let cancelTokenSource = null;

  const fetchUsers = async () => {
    // Annuler la requête précédente
    if (cancelTokenSource) {
      cancelTokenSource.cancel('Requête annulée par un nouveau chargement');
    }
    cancelTokenSource = axios.CancelToken.source();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        cancelToken: cancelTokenSource.token,
      });
      setUsers(response.data);
    } catch (err) {
      if (!axios.isCancel(err)) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    return () => {
      if (cancelTokenSource) cancelTokenSource.cancel('Composant démonté');
    };
  }, []);

  if (loading) return <div className="state-card loading">⏳ Chargement des utilisateurs (axios)...</div>;
  if (error) return <div className="state-card error">❌ Erreur axios : {error}</div>;

  return (
    <div className="card">
      <h2>👥 Utilisateurs (axios)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
            <br />
            <span className="city">📍 {user.address.city}</span>
          </li>
        ))}
      </ul>
      <button className="reload-btn" onClick={fetchUsers}>
        🔄 Recharger
      </button>
    </div>
  );
}

export default AxiosData;