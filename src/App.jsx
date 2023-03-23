import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/index';
import { AppRouter } from './routers/index';
import { GlobalStyle } from './styles/global';


function App() {
  return (
   
    <Router>
      <GlobalStyle />
      <Header />
      <AppRouter />
    </Router>  
  );
}

export default App;
