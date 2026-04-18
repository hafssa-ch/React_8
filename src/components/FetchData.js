// src/components/FetchData.js
import { useState, useEffect, useRef } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const fetchPosts = async () => {
    // Annuler la requête précédente si elle existe
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Créer un nouvel AbortController
    const controller = new AbortController();
    abortControllerRef.current = controller;
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal });
      if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
      const data = await response.json();
      setPosts(data.slice(0, 10)); // 10 premiers articles
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      if (!signal.aborted) setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    return () => {
      // Nettoyage : annuler la requête si le composant est démonté
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  if (loading) return <div className="state-card loading">⏳ Chargement des articles (fetch)...</div>;
  if (error) return <div className="state-card error">❌ Erreur fetch : {error}</div>;

  return (
    <div className="card">
      <h2>📰 Articles (fetch)</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
      <button className="reload-btn" onClick={fetchPosts}>
        🔄 Recharger
      </button>
    </div>
  );
}

export default FetchData;