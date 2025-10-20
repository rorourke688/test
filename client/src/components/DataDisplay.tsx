import './DataDisplay.css'

interface DataItem {
  id: number;
  name: string;
  description: string;
}

interface DataDisplayProps {
  data: {
    message: string;
    timestamp: string;
    data: DataItem[];
  };
}

function DataDisplay({ data }: DataDisplayProps) {
  return (
    <div className="data-display">
      <div className="data-info">
        <p><strong>Message:</strong> {data.message}</p>
        <p><strong>Timestamp:</strong> {new Date(data.timestamp).toLocaleString()}</p>
      </div>

      <h3>Items from API:</h3>
      <div className="items-grid">
        {data.data.map((item) => (
          <div key={item.id} className="item-card">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataDisplay
