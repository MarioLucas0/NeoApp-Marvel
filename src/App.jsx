import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { AppRouter } from './routers';
import GlobalStyle from './styles/global';

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
