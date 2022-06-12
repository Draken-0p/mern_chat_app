
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/chat" element={<Chat/>} />
   </Routes>
    </div>
  );
}

export default App;
