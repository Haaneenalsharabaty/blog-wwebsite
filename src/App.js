
import './App.css';
import Footer from './copmonent/Footer';
import Intro from './copmonent/Intro';
import NavBar from './copmonent/NavBar';
import LogIn from './copmonent/LogIn';
import SignUp from './copmonent/SignUp';
import Blog from './copmonent/Blog'
import  {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/Intro" element={<Intro />}/>
          <Route  path="/Blog" element={<Blog />}/>
          <Route  path="/LogIn" element={<LogIn />}/>
          <Route  path="/SignUp" element={<SignUp />}/>


          
          </Routes>
      
    
       <Footer/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
