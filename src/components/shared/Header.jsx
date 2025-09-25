import { Link } from 'react-router-dom';
import '../../css/header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import empty_bag from '../../assets/empty-bag.png';
import { useEffect, useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([
        {
        name : 'product a',
        price : 2000.0,
        color:'red',
        tip:'0.5mm',
        quantity : 1,
        totalprice : 2000.0,
        img : 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
        },
        {
        name : 'product a',
        price : 2000.0,
        quantity : 1,
        color:'red',
        tip:'0.5mm',
        totalprice : 2000.0,
        img : 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
        }
    ]);
    const [closed, isClosed] = useState(true);

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => isClosed(true), 200);
    };

    const handleOpen = () => {
        setOpen(true);
        isClosed(false);
    }

    return (
        <div className='main'>
            <div className="shadow-sm pb-2" >
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <button className="btn_menu d-lg-none d-md-block" type="button" data-bs-toggle='collapse' data-bs-target='#collapse-items'   aria-expanded="false" aria-controls="collapse-items">
                            <i class="bi bi-list fs-3"></i>
                        </button>
                        <div className="d-flex">
                            <Link to='/' className='nav_brand fs-2 fw-bold'>Lorem Ipsum</Link>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-end h-100 align-items-center me-3">
                                <form className="me-3 mt-2 d-none d-lg-flex">
                                    <input type="text" id="search-input" className='input_search fs-5 p-1 ps-3' placeholder='Bạn muốn tìm kiếm gì?'/>
                                    <button className="btn_search p-1 pe-3">
                                        <i className="bi bi-search fs-5"></i>
                                    </button>
                                </form>
                                <button type='button' className='btn_bag me-3 mt-1' onClick={handleOpen}>
                                    <i className="bi bi-bag fs-3"></i>
                                </button>
                                <Link to='/auth/login' className='icon_w_link mt-2'>
                                    <i className="bi bi-person fs-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <form className="me-3 mt-2 d-lg-none d-flex">
                        <input type="text" id="search-input" className='input_search fs-5 p-1 ps-3 flex-grow-1' placeholder='Bạn muốn tìm kiếm gì?'/>
                        <button className="btn_search p-1 pe-3 flex-shrink-0">
                            <i class="bi bi-search fs-5"></i>
                        </button>
                    </form>
                    <div className="nav d-none d-lg-flex">
                        <Link to="#" className="category_link me-2">Bút máy</Link>
                        <Link to="#" className="category_link me-2">Bút bi</Link>
                        <Link to="#" className="category_link me-2">Bút ký</Link>
                        <Link to="#" className="category_link me-2">Bút chì</Link>  
                    </div>
                    <div className="nav collapse flex-column" id='collapse-items'>
                        <Link to="#" className="category_link me-2 mt-1 mb-1">Bút máy</Link>
                        <Link to="#" className="category_link me-2 mt-1 mb-1">Bút bi</Link>
                        <Link to="#" className="category_link me-2 mt-1 mb-1">Bút chì</Link>
                        <Link to="#" className="category_link me-2 mt-1 mb-1">Bút ký</Link>
                    </div>
                </div>
            </div>
            <div className={`bag_wrapper ${ open && screen.width >= 992 ? 'open_bag_animation' : 'close_bag_animation'} ${ screen.width < 992 ? 'd-none' : '' } ${ closed ? 'd-none' : '' }`}>
                <div className='bag'>
                    <div className="bag_header">
                        <div className="header_title">GIỎ HÀNG CỦA BẠN</div>
                        <button type="button" className='btn_close_bag' onClick={handleClose}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className="bag_body">
                        {products.length == 0 ? (
                            <div className="empty_bag">
                                <img src={empty_bag} alt="empty bag" className='empty_bag_img'/>
                                <h3 className='empty_bag_title'>GIỎ HÀNG CỦA BẠN TRỐNG</h3>
                                <p className='empty_bag_des'>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                                <button type='button' className='btn_shop_now' onClick={() => window.location.href = '/index'}>
                                    Mua ngay
                                </button>
                            </div>
                        ): (
                            <div className='bag_items'>
                                <div className="bag_item">
                                    <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="product img" className='product_image'/>
                                    <div className="product_info">
                                        <h5 className='product_name'>Product name</h5>
                                        <p>color: red, tip: 0.5mm</p>
                                        <div className="product_info_footer">
                                            <p className='product_price'>20000vnd</p>
                                            <div className="product_quantity_form">
                                                <button type='button' className='btn_plus_product'>
                                                    <i className="bi bi-plus"></i>
                                                </button>
                                                <p className='product_quantity'>1</p>
                                                <button type='button' className='btn_minus_product'>
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>  
            <div className={`mobile_bag_wrapper ${ open && screen.width < 992 ? 'mobile_open_bag_animation' : 'mobile_close_bag_animation' } ${ screen.width >= 992 ? 'd-none' : '' } ${ closed && screen.width < 992 ? 'd-none' : '' }`}>
                <div className="mobile_bag">
                    <div className="mobile_bag_header">
                        <div className="header_title">GIỎ HÀNG CỦA BẠN</div>
                        <button type="button" className='btn_close_bag' onClick={handleClose}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className="bag_body">
                        {products.length == 0 ? (
                            <div className="empty_bag">
                                <img src={empty_bag} alt="empty bag" className='empty_bag_img'/>
                                <h3 className='empty_bag_title'>GIỎ HÀNG CỦA BẠN TRỐNG</h3>
                                <p className='mobile_empty_bag_des'>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                                <button type='button' className='btn_shop_now' onClick={() => window.location.href = '/index'}>
                                    Mua ngay
                                </button>
                            </div>
                        ): (
                            <div className='bag_items_wrapper'>
                                <div className='bag_items_mobile'>
                                    <div className="bag_item">
                                        <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="product img" className='product_image'/>
                                        <div className="product_info">
                                            <h5 className='product_name'>Product name namenamenamenamenamenamenamenamenamenamenamenamename </h5>
                                            <p>color: red, tip: 0.5mm</p>
                                            <div className="product_info_footer">
                                                <p className='product_price'>20000vnd</p>
                                                <div className="product_quantity_form">
                                                    <button type='button' className='btn_plus_product'>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                    <p className='product_quantity'>1</p>
                                                    <button type='button' className='btn_minus_product'>
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                        <div className="bag_item">
                                        <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="product img" className='product_image'/>
                                        <div className="product_info">
                                            <h5 className='product_name'>Product name</h5>
                                            <p>color: red, tip: 0.5mm</p>
                                            <div className="product_info_footer">
                                                <p className='product_price'>20000vnd</p>
                                                <div className="product_quantity_form">
                                                    <button type='button' className='btn_plus_product'>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                    <p className='product_quantity'>1</p>
                                                    <button type='button' className='btn_minus_product'>
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                        <div className="bag_item">
                                        <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="product img" className='product_image'/>
                                        <div className="product_info">
                                            <h5 className='product_name'>Product name</h5>
                                            <p>color: red, tip: 0.5mm</p>
                                            <div className="product_info_footer">
                                                <p className='product_price'>20000vnd</p>
                                                <div className="product_quantity_form">
                                                    <button type='button' className='btn_plus_product'>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                    <p className='product_quantity'>1</p>
                                                    <button type='button' className='btn_minus_product'>
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                        <div className="bag_item">
                                        <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="product img" className='product_image'/>
                                        <div className="product_info">
                                            <h5 className='product_name'>Product name</h5>
                                            <p>color: red, tip: 0.5mm</p>
                                            <div className="product_info_footer">
                                                <p className='product_price'>20000vnd</p>
                                                <div className="product_quantity_form">
                                                    <button type='button' className='btn_plus_product'>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                    <p className='product_quantity'>1</p>
                                                    <button type='button' className='btn_minus_product'>
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                        <div className="bag_item">
                                        <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="product img" className='product_image'/>
                                        <div className="product_info">
                                            <h5 className='product_name'>Product name</h5>
                                            <p>color: red, tip: 0.5mm</p>
                                            <div className="product_info_footer">
                                                <p className='product_price'>20000vnd</p>
                                                <div className="product_quantity_form">
                                                    <button type='button' className='btn_plus_product'>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                    <p className='product_quantity'>1</p>
                                                    <button type='button' className='btn_minus_product'>
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                        <div className="bag_item">
                                        <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="product img" className='product_image'/>
                                        <div className="product_info">
                                            <h5 className='product_name'>Product name</h5>
                                            <p>color: red, tip: 0.5mm</p>
                                            <div className="product_info_footer">
                                                <p className='product_price'>20000vnd</p>
                                                <div className="product_quantity_form">
                                                    <button type='button' className='btn_plus_product'>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                    <p className='product_quantity'>1</p>
                                                    <button type='button' className='btn_minus_product'>
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bag_item">
                                        <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="product img" className='product_image'/>
                                        <div className="product_info">
                                            <h5 className='product_name'>Product name</h5>
                                            <p>color: red, tip: 0.5mm</p>
                                            <div className="product_info_footer">
                                                <p className='product_price'>20000vnd</p>
                                                <div className="product_quantity_form">
                                                    <button type='button' className='btn_plus_product'>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                    <p className='product_quantity'>1</p>
                                                    <button type='button' className='btn_minus_product'>
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bag_item">
                                        <img src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4" alt="product img" className='product_image'/>
                                        <div className="product_info">
                                            <h5 className='product_name'>Product name</h5>
                                            <p>color: red, tip: 0.5mm</p>
                                            <div className="product_info_footer">
                                                <p className='product_price'>20000vnd</p>
                                                <div className="product_quantity_form">
                                                    <button type='button' className='btn_plus_product'>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                    <p className='product_quantity'>1</p>
                                                    <button type='button' className='btn_minus_product'>
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bag_items_footer">
                                    <button type='button' className='order_button'>Order</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <button type='button' className={`btn_overlay ${open ? 'btn_overlay_animation_open' : 'btn_overlay_animation_close'} ${ closed ? 'd-none' : '' }`} onAnimationEnd={(e) => { if (e.animationName == 'btn_overlay_animation_close' && !open) isClosed(true)} } onClick={() => setOpen(false)}></button>
 
        </div>
    )
}

export default Header;