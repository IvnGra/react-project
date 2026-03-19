
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './partials/Quiz';
import Results from './partials/Results';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

