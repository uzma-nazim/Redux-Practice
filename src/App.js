
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './login';
import Redux from './redux';

function App() {
  return (

    // <Redux/>
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
