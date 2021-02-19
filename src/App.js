import logo from './logo.svg';
import './App.css';
import Fruits from './Components/Fruits';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calories from './Components/Calories';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="sapWoodApp">
      <Header></Header>
      <Fruits></Fruits>
      <Calories></Calories>
      <Footer></Footer>
    </div>
  );
}

export default App;
