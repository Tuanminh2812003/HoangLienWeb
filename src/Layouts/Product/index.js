import "./Product.scss";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

import { Link } from "react-router-dom";

function Product(){
    return(
        <>
            <div className="product">
                <div className="product__sectionMain">
                    <div className='product__sectionMain__text'>
                        Sản phẩm
                    </div>
                    <img src='/images/about-sectionMain-logo.png'/>
                </div>

                <div className="product__sectionProduct">
                    <div className="product__sectionProduct__bar">
                        <div className="product__sectionProduct__bar__top">
                            <div className="product__sectionProduct__bar__top__choice test1">
                                Tất cả sản phẩm
                            </div>
                            <div className="product__sectionProduct__bar__top__choice">
                                Hoàng Liên Bạch trà
                            </div>
                            <div className="product__sectionProduct__bar__top__choice">
                                Hoàng Liên Phổ Nhĩ trà
                            </div>
                            <div className="product__sectionProduct__bar__top__choice">
                                Hoàng Liên Hồng trà
                            </div>
                            <div className="product__sectionProduct__bar__top__choice">
                                Hoàng Liên Lục trà
                            </div>
                        </div>
                        <div className="product__sectionProduct__bar__line">

                        </div>
                        <div className="product__sectionProduct__bar__bottom">
                            <div className="product__sectionProduct__bar__bottom__title">
                                Lọc theo
                            </div>
                            <div className="product__sectionProduct__bar__bottom__tag">
                                <div className="product__sectionProduct__bar__bottom__tag__icon">
                                    <IoIosArrowForward/>
                                </div>
                                <div className="product__sectionProduct__bar__bottom__tag__text">
                                    Nguồn gốc
                                </div>
                            </div>
                            <div className="product__sectionProduct__bar__bottom__tag">
                                <div className="product__sectionProduct__bar__bottom__tag__icon">
                                    <IoIosArrowForward/>
                                </div>
                                <div className="product__sectionProduct__bar__bottom__tag__text">
                                    Lên men
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="product__sectionProduct__product">
                            <div className="row">
                                <div className="col-4">
                                    <Link to={"/pho_nhi_chin"}>
                                        <div className="product__sectionProduct__product__box">
                                            <img src="/images/image-product.png"/>
                                            <div className="product__sectionProduct__product__box__title">
                                                Phổ Nhĩ Chín
                                            </div>
                                            <div className="product__sectionProduct__product__box__text">
                                                <div className="product__sectionProduct__product__box__text__main">
                                                    Nguồn gốc:
                                                </div>
                                                <div className="product__sectionProduct__product__box__text__disc">
                                                    Thẳm Dương, Văn Bàn, Lào Cao
                                                </div>
                                            </div>
                                            <div className="product__sectionProduct__product__box__text">
                                                <div className="product__sectionProduct__product__box__text__main">
                                                    Nguyên liệu:
                                                </div>
                                                <div className="product__sectionProduct__product__box__text__disc">
                                                    Trà Shan Tuyết
                                                </div>
                                            </div>
                                            <div className="product__sectionProduct__product__box__text">
                                                <div className="product__sectionProduct__product__box__text__main">
                                                    Lên men:
                                                </div>
                                                <div className="product__sectionProduct__product__box__text__disc">
                                                    Toàn phần
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                        <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                        <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                        <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                    <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                    <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                    <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                    <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                    <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                    <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                    <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product__sectionProduct__product__box">
                                    <img src="/images/image-product.png"/>
                                        <div className="product__sectionProduct__product__box__title">
                                            Phổ Nhĩ Chín
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguồn gốc:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Thẳm Dương, Văn Bàn, Lào Cao
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Nguyên liệu:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Trà Shan Tuyết
                                            </div>
                                        </div>
                                        <div className="product__sectionProduct__product__box__text">
                                            <div className="product__sectionProduct__product__box__text__main">
                                                Lên men:
                                            </div>
                                            <div className="product__sectionProduct__product__box__text__disc">
                                                Toàn phần
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

export default Product;