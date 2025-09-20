import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/register.css';
import demo_logo from '../../assets/logo-demo.png';
import { Link, Outlet } from 'react-router-dom';

function ResetPassword() {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default ResetPassword;