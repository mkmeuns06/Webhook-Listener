import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🚀 Webhook React App</h1>
      <p>Cette application a été déployée automatiquement via webhook GitHub !</p>
      <div style={{ marginTop: '30px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer',
            backgroundColor: '#0066cc',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Clics : {count}
        </button>
      </div>
    </div>
  )
}

export default App