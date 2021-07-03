import './App.css';
import Routers from './Routers'
import StateContext from './ContextApi/index'

function App() {
  return (
    <>
    <StateContext>
      <Routers/>
    </StateContext>
    </>
  );
}

export default App;
