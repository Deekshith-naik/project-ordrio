import './App.css';
import TotalOrders from './Component/Dashboard/Orders/TotalOrders';
import Navbar from './Component/Dashboard/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar';
import CustomerDevice from './Component/Dashboard/CustomerDevice/CustomerDevice';
import Dashboard from './Component/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <Navbar/>
      <TotalOrders/>
      <CustomerDevice/> */}
    </div>
  );
}

export default App;
