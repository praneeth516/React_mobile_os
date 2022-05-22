import './App.css';
import Lists from './components/Lists';

function App() {
  const os = [{
    name:"Andriod",
    type:"disc"
  },
  {
    name:"Blck berry",
    type:"disc"
  },
  {
    name:"Iphone",
    type:"disc"
  },
  {
    name:"Windows phone",
    type:"disc"
  }
]
const mobile = [{
  name:"Samsung",
  type:"square"
},
{
  name:"HTC",
  type:"square"
},
{
  name:"Micromax",
  type:"disc"
},
{
  name:"Apple",
  type:"circle"
}
]
  return (
    <div className="App">
    <Lists title="Mobile Operating System" lists={os}/>
    <Lists title="Mobile Manufactures" lists={mobile}/>
    </div>
  );
}

export default App;
