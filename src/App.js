import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/reset.css'; //초기화
import './styles/common.css'; //공통 서식 변수 
import './styles/layout.css'; //레이아웃 서식(헤더, 푸터)
import Header from './layout/Header'; 
import Footer from './layout/Footer'; 
import Main from './components/Main'; 
import Intro from './components/Intro'; 
import Info from './components/Info'; 
import Event from './components/Event'; 
import Customer from './components/Customer'; 
import Login from './components/Login'; 
import Join from './components/Join';
import Cart from './components/Cart';
import Order from './components/Order';


function App() {
  return (
    <>
      <BrowserRouter>
        
        <Header />

          <Routes>
            <Route path='/' element={<Main />} /> 
            <Route path='/intro' element={<Intro />} /> 
            <Route path='/info' element={<Info />} />
            <Route path='/event' element={<Event />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/join' element={<Join />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
          </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;