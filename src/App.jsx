import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header/index";
import { ContextProvider } from "./context/carrinho";
import { AppRouter } from "./routers/index";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ContextProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <AppRouter />
      </Router>
    </ContextProvider>
  );
}

export default App;
