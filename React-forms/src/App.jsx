import './App.css'
import { useState } from 'react';
import Authenticate from './Componets/Authenitcate';
import SignUpForm from './Componets/SignUpForm'

function App() {

const [token, setToken] = useState(null);
  return (
    <div>
      <SignUpForm  token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}

export default App