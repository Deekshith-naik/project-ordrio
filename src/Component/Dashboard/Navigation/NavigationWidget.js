import './NavigationWidget.css';
import DashboardNavBarData from '../../Data/DashboardNavBarData.json';
import 'bootstrap/dist/css/bootstrap.css';

function NavigationWidget() {
  return (
    <div className="dashboard">
        
            <div className='logo'><img src={require('../../../images/logo/Ordrio_logo_white.png')} /></div>
            <div className='menu-navigation'>
                <ul>
                    {DashboardNavBarData && DashboardNavBarData.map(({name,icon}) => (
                        <li>
                            <i class={icon}></i>
                            <i class="bi bi-house-door"></i>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>

    </div>
  );
}

export default NavigationWidget;