import './App.css';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <header className="App-header" style={{ textAlign: 'center' }}>
        <img src="itproject1.png" className="App-logo" alt="logo" style={{ maxWidth: '315px', marginBottom: '20px' }} />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
