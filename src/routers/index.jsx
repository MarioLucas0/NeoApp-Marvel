import { Route, Routes } from 'react-router-dom';
import { CarrinhoCompras } from '../pages/Carrinho';
import { Home } from '../pages/Home/index';

export const AppRouter = () => {

  return (

    <Routes>
      <Route  path="/" element={ <Home /> } />
      <Route  path="/carrinho" element={ <CarrinhoCompras /> } />
    </Routes>
  )
  

};