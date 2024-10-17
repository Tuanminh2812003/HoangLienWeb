import { Link } from "react-router-dom";
import "./ProductDetail.scss"

import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

function ProductDetail(){
    return(
        <>
            <div className="productDetail">
                <div className="productDetail__sectionMain">
                    <div className='productDetail__sectionMain__text'>
                        Phổ nhĩ chín
                    </div>
                    <img src='/images/Logo.png'/>
                </div>

                <div className="productDetail__navBar">
                    <div className="container">
                        <div className="productDetail__navBar__inner">
                            <Link to={"/san_pham"}>
                                Sản phẩm
                            </Link>
                            <div className="productDetail__navBar__inner__icon">
                                <IoIosArrowForward />
                                <IoIosArrowForward />
                            </div>
                            <div className="productDetail__navBar__inner__text">
                                Phổ Nhĩ Chín
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productDetail__sectionProduct">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="productDetail__sectionProduct__image">

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="productDetail__sectionProduct__right">
                                    <div className="productDetail__sectionProduct__right__title">
                                        Phổ Nhĩ Chín
                                    </div>
                                    <div className="productDetail__sectionProduct__right__text">
                                        <div className="productDetail__sectionProduct__right__text__main">
                                            Nguồn gốc:
                                        </div>
                                        <div className="productDetail__sectionProduct__right__text__disc">
                                            Thẳm Dương, Văn Bàn, Lào Cai
                                        </div>
                                    </div>
                                    <div className="productDetail__sectionProduct__right__text">
                                        <div className="productDetail__sectionProduct__right__text__main">
                                            Nguyên liệu:
                                        </div>
                                        <div className="productDetail__sectionProduct__right__text__disc">
                                            Trà Shan Tuyết
                                        </div>
                                    </div>
                                    <div className="productDetail__sectionProduct__right__text">
                                        <div className="productDetail__sectionProduct__right__text__main">
                                            Lên men:
                                        </div>
                                        <div className="productDetail__sectionProduct__right__text__disc">
                                            Toàn phần
                                        </div>
                                    </div>
                                    <form>
                                        <div className="productDetail__sectionProduct__right__select">
                                            <div className="productDetail__sectionProduct__right__select__select1">
                                                <label required>Kích thước*</label>
                                                <select>
                                                    <option>100Gr</option>
                                                    <option>125Gr</option>
                                                    <option>150Gr</option>
                                                </select>
                                            </div>
                                            <div className="productDetail__sectionProduct__right__select__select2">
                                                <label for="productDetail__form__soLuong">Số lượng*</label>
                                                <input type="number" required id="productDetail__form__soLuong" placeholder="1">

                                                </input>
                                            </div>
                                        </div>
                                        <button>
                                            <div className="productDetail__form__text">
                                                Thêm vào giỏ hàng
                                            </div>
                                            <div className="productDetail__form__icon">
                                                <IoMdArrowRoundForward />
                                            </div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productDetail__sectionInfo">
                    <div className="container">
                        <div className="row">
                                <div className="col-6">
                                    <div className="productDetail__sectionInfo__left">
                                        <div className="productDetail__sectionInfo__left__title">
                                            Cách dùng
                                        </div>

                                        <div className="productDetail__sectionInfo__left__text">
                                            <div className="productDetail__sectionInfo__left__text__inner">
                                                <div className="productDetail__sectionInfo__left__text__inner__circle">

                                                </div>
                                                <div className="productDetail__sectionInfo__left__text__inner__text">
                                                    Tráng và làm ấm bộ ấm trà Tử Sa/chén Khải bằng nước nóng 100°C. Chỉ cần đổ nước nóng vào ấm pha trà và chén uống trà. Xoay và đổ bỏ nước.
                                                </div>
                                            </div>
                                            <div className="productDetail__sectionInfo__left__text__inner">
                                                <div className="productDetail__sectionInfo__left__text__inner__circle">

                                                </div>
                                                <div className="productDetail__sectionInfo__left__text__inner__text">
                                                    Đặt trà vào ấm trà Tử Sa/ chén Khải và đổ một lượng nhỏ nước nóng lên trên. Khi rót nước vào ấm phải rót thành dòng nước lớn, tráng đều khắp búp trà để trà ngậm nước.                                                   
                                                </div>
                                            </div>
                                            <div className="productDetail__sectionInfo__left__text__inner">
                                                <div className="productDetail__sectionInfo__left__text__inner__circle">

                                                </div>
                                                <div className="productDetail__sectionInfo__left__text__inner__text">
                                                    Với trà Phổ Nhĩ chín, hãy lặp lại việc tráng lá trà một lần nữa                                                 
                                                </div>
                                            </div>
                                            <div className="productDetail__sectionInfo__left__text__inner clear">
                                                <div className="productDetail__sectionInfo__left__text__inner__circle">

                                                </div>
                                                <div className="productDetail__sectionInfo__left__text__inner__text">
                                                    Đổ đầy nước nóng vào ấm trà Tử Sa/ chén Khải ở nhiệt độ  với trà Phổ Nhĩ chín                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="productDetail__sectionInfo__right">
                                        <div className="productDetail__sectionInfo__right__title">
                                            Lưu ý:
                                        </div>
                                        <div className="productDetail__sectionInfo__right__text">
                                            <ul>
                                                <li>
                                                    Trà Phổ Nhĩ được đúc thành bánh chắc chắn nên cần dùng trà cụ là cây xiên trà để tách trà ra khỏi bánh với lượng vừa đủ để pha. Tỉ lệ trà và nước thích hợp là khoảng 2-4 gram trà/100ml nước, tùy thuộc số lượng người uống, thể tích ấm và sở thích uống trà của từng người.     
                                                </li>
                                                <li>
                                                    Sau khi đã lấy một lượng trà vừa phải, hãy cho trà vào cung nhãn trà để tránh trà tiếp xúc với tay của người pha làm thay đổi hương vị.  
                                                </li>
                                                <li>
                                                    Ấm và các chén trà phải được tráng bằng nước nóng trước khi pha, vừa tiệt trùng vừa làm nóng trà cụ trước khi pha để đảm bảo chất lượng của trà.  
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="productDetail__sectionInfo__line">
                            <div className="productDetail__sectionInfo__line__inner">
                            
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className="productDetail__sectionInfo__left2">
                                    <div className="productDetail__sectionInfo__left2__title">
                                        Cách bảo quản
                                    </div>
                                    <div className="productDetail__sectionInfo__left2__text">
                                        <ol>
                                            <li>
                                                Tráng và làm ấm bộ ấm trà Tử Sa/chén Khải bằng nước nóng 100°C. Chỉ cần đổ nước nóng vào ấm pha trà và chén uống trà. Xoay và đổ bỏ nước.   
                                            </li>
                                            <li>
                                                Đặt trà vào ấm trà Tử Sa/ chén Khải và đổ một lượng nhỏ nước nóng lên trên. Khi rót nước vào ấm phải rót thành dòng nước lớn, tráng đều khắp búp trà để trà ngậm nước.                                               </li>
                                            <li>
                                                Với trà Phổ Nhĩ chín, hãy lặp lại việc tráng lá trà một lần nữa                                             </li>
                                            <li>
                                                Đổ đầy nước nóng vào ấm trà Tử Sa/ chén Khải ở nhiệt độ  với trà Phổ Nhĩ chín                                              
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="productDetail__sectionInfo__right2">
                                    <div className="productDetail__sectionInfo__right2__title">
                                        <div className="productDetail__sectionInfo__right2__title__main">
                                            Sản phẩm tương tự
                                        </div>
                                        <Link to={"/san_pham"}>
                                            <div className="productDetail__sectionInfo__right2__title__disc">
                                                Xem thêm
                                            </div>
                                            <div className="productDetail__sectionInfo__right2__title__icon">
                                                <IoMdArrowRoundForward/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="productDetail__sectionInfo__right2__product">
                                        <div className="productDetail__sectionInfo__right2__product__box">
                                            <img src="/images/image-product.png"/>
                                            <div className="productDetail__sectionInfo__right2__product__box__text">
                                                Phổ Nhĩ Chín
                                            </div>
                                        </div>
                                        <div className="productDetail__sectionInfo__right2__product__box">
                                            <img src="/images/image-product.png"/>
                                            <div className="productDetail__sectionInfo__right2__product__box__text">
                                                Phổ Nhĩ Chín
                                            </div>
                                        </div>
                                        <div className="productDetail__sectionInfo__right2__product__box">
                                            <img src="/images/image-product.png"/>
                                            <div className="productDetail__sectionInfo__right2__product__box__text">
                                                Phổ Nhĩ Chín
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__form">
                    <div className="container">
                        <div className="home__form__left__title">
                            Nhận tư vấn từ chúng tôi!
                        </div>
                        <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="home__form__left">
                                    <div className="home__form__left__logo">
                                        <img src="/images/form-logo.png"/>
                                    </div>
                                    <div className="home__form__left__line">
                                        <div className="home__form__left__line__inner">

                                        </div>
                                    </div>
                                    <div className="home__form__left__icon">
                                        <div className="home__form__left__icon__inner">
                                            <div className="home__form__left__icon__inner__icon">
                                                <FaPhoneAlt/>
                                            </div>
                                            <div className="home__form__left__icon__inner__text">
                                                1900 10068
                                            </div>
                                        </div>
                                        <div className="home__form__left__icon__inner">
                                            <div className="home__form__left__icon__inner__icon">
                                                <IoMdMail/>
                                            </div>
                                            <div className="home__form__left__icon__inner__text">
                                                HoangLientra@gmail.com
                                            </div>
                                        </div>
                                        <div className="home__form__left__icon__inner">
                                            <div className="home__form__left__icon__inner__icon">
                                                <FaFacebookF/>
                                            </div>
                                            <div className="home__form__left__icon__inner__text">
                                                HoangLientra.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="home__form__right">
                                        <div className="home__form__right__inner">
                                            <label for="home__form__name">
                                                <div>
                                                    Tên
                                                </div>
                                                <div className="sao">
                                                    *
                                                </div>
                                            </label>
                                            <input type="text" placeholder="Tên của bạn" required name="name" id="home__form__name"/>
                                            <label for="home__form__phone">
                                                <div>
                                                    Số điện thoại
                                                </div>
                                                <div className="sao">
                                                    *
                                                </div>
                                            </label>
                                            <input type="text" placeholder="Số điện thoại" required name="phone" id="home__form__phone"/>
                                            <label for="home__form__id">
                                                <div>
                                                    Lời nhắn
                                                </div>
                                                <div className="sao">
                                                    *
                                                </div>
                                            </label>
                                            <textarea placeholder="Nội dung cần tư vấn" required name="note" id="home__form__id"/>
                                        </div>
                                </div>
                            </div>
                            <div className="home__form__right__button">
                                <button>Nhận tư vấn ngay</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div className='about__section6p6'>

                </div>
        </>
    )
}

export default ProductDetail;