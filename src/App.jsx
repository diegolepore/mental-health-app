import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Journal from './pages/Journal';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Journal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
