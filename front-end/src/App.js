import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Article from './pages/Article';
import QnA from './pages/QnA';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Article/>} path="/articles" />
          <Route exact element={<QnA/>} path="/qa" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
