import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DoarPix from './pages/DoacaoPag'; // ← Importação

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doar" element={<DoarPix />} /> {/* ← Nova rota */}
    </Routes>
  );
}

export default App;