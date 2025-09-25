import demo_logo from "../../assets/logo-demo.png";

function ChangePassword() {
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
                    <h1>Đổi mật khẩu tài khoản Lorem Ipsum</h1>
                    <p>Nhập mật khẩu mới của bạn</p>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-start d-none d-lg-inline">
                    <h3 className="welcome_label">Chào mừng</h3>
                    </div>
                    <form>
                    <div className="form-group form-floating mb-3">
                        <input
                        type="password"
                        id="password"
                        placeholder=""
                        className="form-control"
                        required
                        />
                        <label htmlFor="password">Nhập mật khẩu của bạn</label>
                    </div>
                    <div className="form-group form-floating mb-3">
                        <input
                        type="password"
                        id="re-password"
                        placeholder=""
                        className="form-control"
                        required
                        />
                        <label htmlFor="re-password">Nhập lại mật khẩu của bạn</label>
                    </div>
                    <div className="form-check mb-4">
                        <input type="checkbox" className='form-check-input' id="showpassword" />
                        <label htmlFor="showpassword" className='form-check-label show_password_label'>Hiện mật khẩu</label>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                        type="button"
                        className="btn btn-primary log_in_btn ps-lg-4 pe-lg-4"
                        >
                        Xác nhận
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

export default ChangePassword;