import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Article from './pages/Article';
import QnA from './pages/QnA';

const Index = () => {
  return (
    <>
      <h2>
        use /articles for Articles Page
      </h2>
      <h2>
        use /qa for QnA Page
      </h2>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Index/>} path="/" />
          <Route exact element={<Article/>} path="/articles" />
          <Route exact element={<QnA/>} path="/qa" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
