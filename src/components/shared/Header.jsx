import { Link } from 'react-router-dom';
import '../../css/header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import empty_bag from '../../assets/empty-bag.png';
import { useEffect, useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuClosed, setMenuClosed] = useState(true);
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
    const [discountCode, setDiscountCode] = useState('');
    const [discountValid, isDiscountValid] = useState('true');
    const [totalProductPrice, setTotalProductPrice] = useState(0);
    const [category, setCategory] = useState([
        {
            name : 'Bút máy',
            link : '#'
        },
        {
            name : 'Bút bi',
            link : '#'
        },
        {
            name : 'Bút ký',
            link : '#'
        },
        {
            name : 'Bút chì',
            link : '#'
        }
    ]);
    const [originalProductPrice, setOriginalProductPrice] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [totalOrderPrice, setTotalOrderPrice] = useState(0);
    const [originalOrderPrice, setOriginalOrderPrice] = useState(0);
    
    useEffect(() => {
        let total = 0;
        products.forEach(product => {
            total += product.totalprice;
        });
        setOriginalProductPrice(total)
        setTotalProductPrice(total - (total * (discountAmount / 100)));
        setOriginalOrderPrice(originalProductPrice + deliveryFee);
        setTotalOrderPrice(totalProductPrice + deliveryFee);
    }, [products, discountAmount, deliveryFee, totalProductPrice]);

    const applyDiscountCode = () => {
        if (discountCode != 'abcdef1') {
            isDiscountValid(false);
            return;
        }
        isDiscountValid(true)
        setDiscountAmount(20);
    }

    const handleDiscountInput = (e) => {
        setDiscountCode(e.target.value);
    }

    const [closed, isClosed] = useState(true);

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => isClosed(true), 450);
    };

    const handleOpen = () => {
        setOpen(true);
        isClosed(false);
    }

    const handleMenuOpen = () => {
        setMenuOpen(true);
        setMenuClosed(false);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setTimeout(() => setMenuClosed(true), 450);
    }

    return (
        <div className='main'>
            <div className="shadow-sm pb-2" >
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <button className="btn_menu d-lg-none d-md-block" type="button" onClick={handleMenuOpen} >
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
                                <button type='button' className='btn_bag me-3' onClick={handleOpen}>
                                    <i className="bi bi-bag fs-3"></i>
                                </button>
                                <Link to='/auth/login' className='icon_w_link'>
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
                        {category.map(cat => (
                            <div className="menu_item">
                                <Link to={cat.link} className="desktop_category_link">{cat.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`menu_wrapper ${ menuOpen ? 'menu_open_animation' : 'menu_close_animation' } ${ menuClosed ? 'd-none' : '' } `}>
                <div className="menu_wrapper_header">
                    <p className='menu_title'>Menu</p>
                    <button type="button" className='btn_close_menu' onClick={handleMenuClose}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
                {category.map(cat => (
                    <div className="menu_item">
                        <Link to={cat.link} className="category_link">{cat.name}</Link>
                    </div>
                ))}
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
                            <>
                                <div className='bag_items'>
                                    { products.map(product => (
                                            <div className="bag_item">
                                                <img src={product.img} alt="product img" className='product_image'/>
                                                <div className="product_info">
                                                    <h5 className='product_name'>{product.name}</h5>
                                                    <p>{"color: " + product.name + ", tip: " + product.tip}</p>
                                                    <div className="product_info_footer">
                                                        <p className='product_price'>{product.totalprice + "vnd"}</p>
                                                        <div className="product_quantity_form">
                                                            <button type='button' className='btn_plus_product'>
                                                                <i className="bi bi-plus"></i>
                                                            </button>
                                                            <p className='product_quantity'>{product.quantity}</p>
                                                            <button type='button' className='btn_minus_product'>
                                                                <i className="bi bi-dash"></i>
                                                            </button>
                                                        </div>    
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="desktop_bag_items_footer">
                                <p className='bag_items_footer_header'>MÃ GIẢM GIÁ</p>
                                <div className="discount_code_wrapper">
                                    <div className='form-floating w-100'>
                                        <input type="text" className='form-control' id='discountcode' value={discountCode} onChange={handleDiscountInput} placeholder=''/>
                                        <label htmlFor="discountcode">Nhập mã của bạn</label>
                                    </div>
                                    <button type='button' className='btn_submit_discount_code' onClick={applyDiscountCode}>Áp dụng</button>
                                </div>
                                <p className={`${ discountValid ? 'd-none' : 'discount_code_invalid_warn'}`} >Mã giảm giá không hợp lệ!</p>
                                <div className="order_summary_wrapper">
                                    <p className="order_summary_header">TÓM TẮT ĐƠN HÀNG</p>
                                    <div className="order_summary_body">
                                        <div className="total_product_price">
                                            <label className="total_products_price_label">Giá trị đơn hàng</label>
                                            <div className="value_wrapper">
                                                    <p className='value'>{totalProductPrice}vnd</p>
                                                    <p className={` ${discountAmount == 0 ? 'd-none' : 'value_before_discount' } `}>{originalProductPrice}vnd</p>
                                            </div>
                                        </div>
                                        <div className="shipping_fee">
                                            <lable className="shipping_fee_label">Phí vận chuyển</lable>
                                            <p className='value'>{deliveryFee}vnd</p>
                                        </div>
                                        <div className="total_price">
                                            <label className="total_price_label">Tổng giá trị đơn hàng</label>
                                            <div className="value_wrapper">
                                                <p className="total_value">{totalOrderPrice}vnd</p>
                                                <p className={` ${discountAmount == 0 ? 'd-none' : 'value_before_discount' } `}>{originalOrderPrice}vnd</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type='button' className='order_button'>Đặt hàng </button>
                            </div>
                        </>
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
                                    { products.map(product => (
                                            <div className="bag_item">
                                                <img src={product.img} alt="product img" className='product_image'/>
                                                <div className="product_info">
                                                    <h5 className='product_name'>{product.name}</h5>
                                                    <p>{"color: " + product.name + ", tip: " + product.tip}</p>
                                                    <div className="product_info_footer">
                                                        <p className='product_price'>{product.totalprice + "vnd"}</p>
                                                        <div className="product_quantity_form">
                                                            <button type='button' className='btn_plus_product'>
                                                                <i className="bi bi-plus"></i>
                                                            </button>
                                                            <p className='product_quantity'>{product.quantity}</p>
                                                            <button type='button' className='btn_minus_product'>
                                                                <i className="bi bi-dash"></i>
                                                            </button>
                                                        </div>    
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="bag_items_footer">
                                    <p className='bag_items_footer_header'>MÃ GIẢM GIÁ</p>
                                    <div className="discount_code_wrapper">
                                        <div className='form-floating w-100'>
                                            <input type="text" className='form-control' id='discountcode' value={discountCode} onChange={handleDiscountInput} placeholder=''/>
                                            <label htmlFor="discountcode">Nhập mã của bạn</label>
                                        </div>
                                        <button typpe='button' className='btn_submit_discount_code' onClick={applyDiscountCode}>Áp dụng</button>
                                    </div>
                                    <p className={`${ discountValid ? 'd-none' : 'discount_code_invalid_warn'}`} >Mã giảm giá không hợp lệ!</p>
                                    <div className="order_summary_wrapper">
                                        <p className="order_summary_header">TÓM TẮT ĐƠN HÀNG</p>
                                        <div className="order_summary_body">
                                            <div className="total_product_price">
                                                <label className="total_products_price_label">Giá trị đơn hàng</label>
                                                <div className="value_wrapper">
                                                    <p className='value'>{totalProductPrice}vnd</p>
                                                    <p className={` ${discountAmount == 0 ? 'd-none' : 'value_before_discount' } `}>{originalProductPrice}vnd</p>
                                                </div>
                                            </div>
                                            <div className="shipping_fee">
                                                <lable className="shipping_fee_label">Phí vận chuyển</lable>
                                                <p className='value'>{deliveryFee}vnd</p>
                                            </div>
                                            <div className="total_price">
                                                <label className="total_price_label">Tổng giá trị đơn hàng</label>
                                                <div className="value_wrapper">
                                                    <p className="total_value">{totalOrderPrice}vnd</p>
                                                    <p className={` ${discountAmount == 0 ? 'd-none' : 'value_before_discount' } `}>{originalOrderPrice}vnd</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type='button' className='order_button'>Đặt hàng </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <button type='button' className={`btn_overlay ${menuOpen ? 'btn_overlay_animation_open' : 'btn_overlay_animation_close'} ${ menuClosed ? 'd-none' : '' }`} onClick={handleMenuClose}></button>
            <button type='button' className={`btn_overlay ${open ? 'btn_overlay_animation_open' : 'btn_overlay_animation_close'} ${ closed ? 'd-none' : '' }`} onClick={handleClose}></button>
        </div>
    )
}

export default Header;