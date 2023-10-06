
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import Textform from './COMPONENTS/Textform';


function App() {
  return (
<>
<Navbar title = "Textutils" about= "Aboutus" />
<div className = "container">
<Textform heading= " Enter a Text to analyze"/>
</div>

</>
 );
}

export default App;
