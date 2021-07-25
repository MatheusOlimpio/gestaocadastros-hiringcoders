import Navbar from './components/Navbar';
import Routes from "./routes";
import { GlobalStyle } from './theme/GlobalStyles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes></Routes>
      </main>
    </>
  );
}
