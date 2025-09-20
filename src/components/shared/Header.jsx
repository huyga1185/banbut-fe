import { Link } from 'react-router-dom';
import '../../css/header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className="">
        <div className="container mb-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <button className="btn_menu d-lg-none d-md-block" type="button" data-bs-toggle='collapse' data-bs-target='#collapse-items'   aria-expanded="false" aria-controls="collapse-items">
                    <i class="bi bi-list fs-3"></i>
                </button>
                <div className="d-flex">
                    <Link to='/' className='nav_brand fs-2 fw-bold'>Lorem Ipsum</Link>
                </div>
                <div className="">
                    <div className="d-flex justify-content-end h-100 align-items-center">
                        <form className="me-2 d-none d-lg-flex">
                            <input type="text" id="search-input" className='input_search fs-5 p-1' placeholder='Bạn muốn tìm kiếm gì?'/>
                            <button className="btn_search p-1">
                                <i class="bi bi-search fs-5"></i>
                            </button>
                        </form>
                        <button type='button' className='btn_search_standalone me-2 d-lg-none d-flex'>
                            <i class="bi bi-search fs-3"></i>
                        </button>
                        <Link to='#' className='icon_w_link me-2'>
                            <i class="bi bi-bag fs-3"></i>
                        </Link>
                        <Link to='/auth/login' className='icon_w_link'>
                            <i class="bi bi-person fs-3"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="nav d-none d-lg-flex">
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
            </div>
            <div className="nav collapse flex-column" id='collapse-items'>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
                <Link to="#" className="category_link me-2">Lorem ipsum</Link>
            </div>
        </div>
        </div>
    )
}

export default Header;