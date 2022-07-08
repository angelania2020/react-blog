import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

const Blog = () => {
  return <h1>This is my blog!</h1>;
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
