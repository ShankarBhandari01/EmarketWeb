import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './header/header'
import 'jquery'
import { BrowserRouter } from 'react-router-dom';
import Container from './container/container'
import Footer from './footer/footer';
function App() {
  return (
    <BrowserRouter>
      <div className=" fluid-container App">
        <Header />
        <Container />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
