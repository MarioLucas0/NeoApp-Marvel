import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/index';

export const AppRouter = () => {

  return (

    <Routes>
      <Route  path="/" element={ <Home /> } />
    </Routes>
  )
  

};