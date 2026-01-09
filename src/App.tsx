import React from 'react';
import ApiComponent from './ApiComponent';

function App() {
  return (
    <div className="App">
      <ApiComponent />
      
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        color: '#666',
        fontSize: '14px'
      }}>
        <p>Desenvolvido para a aula de Web Services (Client) - Front-End</p>
        <p>Turma 32 PE - C1 - ID82</p>
      </footer>
    </div>
  );
}

export default App;
