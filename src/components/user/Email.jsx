import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/register.css';
import demo_logo from '../../assets/logo-demo.png';

function Email() {
    return (
        <div className="container">
        <div className="d-flex align-items-center login">
            <div className="align-items-center w-100 p-5 login_card shadow">
            <div className="row">
                <div className="col-12 col-lg-6">
                <img
                    src={demo_logo}
                    alt="demo-logo"
                    width="48px"
                    height="48px"
                    className="mb-2"
                />
                <h1>Tạo tài khoản Lorem Ipsum</h1>
                <p>Nhập email của bạn</p>
                </div>
                <div className="col-12 col-lg-6">
                <div className="d-flex justify-content-start d-none d-lg-inline">
                    <h3 className="welcome_label">Chào mừng</h3>
                </div>
                <form>
                    <div className="d-flex mb-3">
                    <div className="form-group form-floating mb-1 w-75">
                        <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder=""
                        required
                        />
                        <label htmlFor="email">Nhập email của bạn</label>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary mb-1 ms-2 fw-bold w-25"
                    >
                        Nhận OTP
                    </button>
                    </div>
                    <div className="form-group form-floating mb-4">
                    <input
                        type="number"
                        id="otp"
                        placeholder=""
                        className="form-control no-spinner"
                        required
                    />
                    <label htmlFor="otp">Nhập mã OTP của bạn</label>
                    </div>
                    <div className="d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-primary log_in_btn ps-lg-4 pe-lg-4"
                    >
                        Tiếp tục
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Email;