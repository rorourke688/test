import { useState, useEffect } from 'react'
import Header from './components/Header'
import DataDisplay from './components/DataDisplay'
import './App.css'

interface ApiData {
  message: string;
  timestamp: string;
  data: Array<{
    id: number;
    name: string;
    description: string;
  }>;
}

function App() {
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setApiData(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <h2>Welcome to React + TypeScript + Node</h2>
          <p className="subtitle">A full-stack application starter</p>

          <button onClick={fetchData} className="refresh-btn">
            Refresh Data
          </button>

          {loading && <p>Loading...</p>}
          {error && <p className="error">Error: {error}</p>}
          {apiData && <DataDisplay data={apiData} />}
        </div>
      </main>
    </div>
  )
}

export default App
