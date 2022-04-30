import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import PostDetailPage from './pages/PostDetailPage';
import PostsPage from './pages/PostsPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<PostsPage />} />
        <Route path='/:postId' element={<PostDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
