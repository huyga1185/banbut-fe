import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/login.css';
import demo_logo from '../../assets/logo-demo.png';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container-fluid container-lg">
            <div className="d-flex align-items-center login">
                <div className="align-items-center w-100 p-5 login_card shadow">

                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img src={demo_logo} alt="demo-logo" width={"48px"} height={"48px"} className="mb-2"/>
                            <h1>Đăng nhập</h1>
                            <p>Tiếp tục với banbut</p>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className='d-flex justify-content-start d-none d-lg-inline'>
                                <h3 className="welcome_label">Chào mừng</h3>
                            </div>
                            <form>
                                <div className="form-group form-floating mb-3">
                                    <input type="text" id="email" className="form-control" placeholder='' required/>
                                    <label htmlFor="email">Nhập username của bạn</label>
                                </div>
                                <div className="form-group form-floating mb-3">
                                    <input type='password' className="form-control" placeholder='' id="password" required/>
                                    <label htmlFor="password">Nhập mật khẩu của bạn</label>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' id="showpassword" />
                                        <label htmlFor="showpassword" className='form-check-label show_password_label'>Hiện mật khẩu</label>
                                    </div>
                                    <Link to="#" className='forgot_password'>Bạn quên tài khoản hoặc mật khẩu?</Link>
                                </div>
                                <div className="d-flex justify-content-between justify-content-lg-end">
                                    <Link to='/user/register' className='btn sign_up_btn me-2 ps-2 pe-2 ps-lg-4 pe-lg-4 pt-2 pt-2'>Tạo tài khoản</Link>
                                    <button type='button' className='btn btn-primary log_in_btn pe-2 ps-2 ps-lg-4 pe-lg-4 pt-2 pb-2'>Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;