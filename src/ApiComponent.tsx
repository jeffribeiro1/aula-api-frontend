
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number; 
  name: string; 
  email: string; 
  phone: string; 
}

type ApiState = 'idle' | 'loading' | 'success' | 'error';
const ApiComponent: React.FC = () => {

const [users, setUsers] = useState<User[]>([]);
const [apiState, setApiState] = useState<ApiState>('idle');
const [error, setError] = useState<string | null>(null);

useEffect(() => {
const fetchUsers = async () => {
setApiState('loading'); 
setError(null); 

try {

      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');

        setUsers(response.data); 
        setApiState('success'); 
        } catch (err) {
          
          setApiState('error'); 
       
          if (axios.isAxiosError(err)) {
            
            setError(`Erro na API: ${err.message}`);
          } else {
            
            setError('Erro desconhecido ao buscar dados');
          }
          
          console.error('Erro ao buscar usuários:', err);
        }
      };
     
      fetchUsers();
      
    }, []);

return (

    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>

      <h1 style={{
        color: '#333',
        textAlign: 'center'
      }}>
📡 CONSUMINDO API NO FRONT-END
</h1>

      <p style={{
        textAlign: 'center',
        color: '#666'
      }}>
Componente reutilizável para todos os projetos
</p>

      {apiState === 'loading' && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          
          <div style={{
            fontSize: '48px',
            marginBottom: '10px'
          }}>
            ⏳
          </div>
          <h3>Carregando dados...</h3>
          <p>Buscando informações da API</p>
        </div>
      )}

      {apiState === 'error' && error && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#ffebee',
          borderRadius: '8px',
          margin: '20px 0',
          border: '1px solid #ffcdd2'
        }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '10px'
          }}>
            ❌
          </div>
          <h3 style={{ color: '#d32f2f' }}>Erro ao carregar dados</h3>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#d32f2f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Tentar novamente
          </button>
        </div>
      )}

      {apiState === 'success' && (
        <div>
          <div style={{
            display: 'flex',
            backgroundColor: '#2196f3',
            color: 'white',
            padding: '12px',
            borderRadius: '8px 8px 0 0',
            fontWeight: 'bold'
          }}>
            <div style={{ flex: 1 }}>ID</div>
            <div style={{ flex: 2 }}>Nome</div>
            <div style={{ flex: 3 }}>Email</div>
            <div style={{ flex: 2 }}>Telefone</div>
</div>

{users.map((user) => (
              <div
                key={user.id}
                style={{
                  display: 'flex',
                  padding: '12px',
                  borderBottom: '1px solid #eee',
                  backgroundColor: user.id % 2 === 0 ? '#f9f9f9' : 'white'
                }}
              >
                <div style={{ flex: 1, fontWeight: 'bold' }}>
                  #{user.id}
                </div>
                <div style={{ flex: 2 }}>
                  {user.name}
                </div>
                <div style={{ flex: 3, color: '#1976d2' }}>
                  {user.email}
                </div>
                <div style={{ flex: 2, fontFamily: 'monospace' }}>
                  {user.phone}
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#e8f5e9',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3>🎯 Como usar nos seus projetos:</h3>
          <p>
            <strong>Grupo Verde (AnyLAI):</strong> Troque por API de imóveis<br />
            <strong>Grupo Laranja (Inspeções):</strong> Troque por API de checklists<br />
            <strong>Grupo Rosa (Diagnóstico):</strong> Troque por API de pacientes
          </p>
        </div>
      </div>
    );
  };

  export default ApiComponent;

