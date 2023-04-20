import TotalOrders from './Orders/TotalOrders';
import Navbar from './Navbar/Navbar'
import CustomerDevice from './CustomerDevice/CustomerDevice';
import RecentOrders from "./Orders/RecentOrders";
import SalesIncome from './SalesIncome/SalesIncome';
import NavigationWidget from './Navigation/NavigationWidget';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
        <div className='left-container'>
            <NavigationWidget />
        </div>
        <div className='right-container'>
            <div className='dashboard-navbar'>
                <Navbar/>
            </div>
            <div className='dashboard-widget'>
                <TotalOrders/>
            </div>
            <div className='dashboard-widget'>
                <SalesIncome/>
            </div>
            <div className='dashboard-widget'>
                <RecentOrders />
            </div>
            <div className='dashboard-widget'>
                <CustomerDevice/>
            </div>
        </div>
        
    </div>
  );
}

export default Dashboard;