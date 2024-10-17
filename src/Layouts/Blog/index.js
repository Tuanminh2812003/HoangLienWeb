import "./Blog.scss"
import { Link, NavLink, Outlet } from "react-router-dom";

import { IoMdArrowRoundForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

function Blog(){
    return(
        <>
            <div className="blog">
                <div className="product__sectionMain">
                    <div className='product__sectionMain__text'>
                        Blog
                    </div>
                    <img src='/images/about-sectionMain-logo.png'/>
                </div>

                <div className="blog__section">
                    <div className="container">
                        <div className="blog__section__section1">
                            <div className="blog__section__section1__title">
                                <div className="blog__section__section1__title__main">
                                    Đề xuất hôm nay
                                </div>
                                <div className="blog__section__section1__title__disc">
                                    <div className="blog__section__section1__title__disc__text">
                                        Xem thêm
                                    </div>
                                    <div className="blog__section__section1__title__disc__icon">
                                        <IoMdArrowRoundForward />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 blog__setting2">
                                    <Link to={"/van_hoa_tra"}>
                                        <div className="blog__section__section1__left">
                                            <div className="blog__section__section1__left__img">
                                                <img src="/images/image-product.png"/>
                                            </div>
                                            <div className="blog__section__section1__left__text">
                                                <div className="blog__section__section1__left__text__main">
                                                    Chén trà là đầu câu truyện
                                                </div>
                                                <div className="blog__section__section1__left__text__disc">
                                                    Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. Mỗi phẩm trà sẽ có cách dùng riêng để giữ được đặc trưng hương vị tốt nhất
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <div className="blog__section__section1__right">
                                        <div className="blog__section__section1__right__box">
                                            <div className="blog__section__section1__right__box__img">
                                                <img src="/images/blog-image1.png"/>
                                            </div>
                                            <div className="blog__section__section1__right__box__text">
                                                <div className="blog__section__section1__right__box__text__title">
                                                    Chén trà là đầu câu chuyện
                                                </div>
                                                <div className="blog__section__section1__right__box__text__disc">
                                                    Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. Mỗi phẩm trà sẽ có cách dùng riêng để giữ được đặc trưng hương vị tốt nhất
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog__section__section1__right__box">
                                            <div className="blog__section__section1__right__box__img">
                                                <img src="/images/blog-image1.png"/>
                                            </div>
                                            <div className="blog__section__section1__right__box__text">
                                                <div className="blog__section__section1__right__box__text__title">
                                                    Chén trà là đầu câu chuyện
                                                </div>
                                                <div className="blog__section__section1__right__box__text__disc">
                                                    Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. Mỗi phẩm trà sẽ có cách dùng riêng để giữ được đặc trưng hương vị tốt nhất
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog__section__section2">
                            <div className="blog__section__section1__title">
                                <div className="blog__section__section1__title__main">
                                    Văn hóa trà
                                </div>
                                <div className="blog__section__section1__title__disc">
                                    <div className="blog__section__section1__title__disc__text">
                                        Xem thêm
                                    </div>
                                    <div className="blog__section__section1__title__disc__icon">
                                        <IoMdArrowRoundForward />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 blog__setting2">
                                    <div className="blog__section__section1__left">
                                        <div className="blog__section__section1__left__img">
                                            <img src="/images/image-product.png"/>
                                        </div>
                                        <div className="blog__section__section1__left__text">
                                            <div className="blog__section__section1__left__text__main">
                                                Chén trà là đầu câu truyện
                                            </div>
                                            <div className="blog__section__section1__left__text__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. Mỗi phẩm trà sẽ có cách dùng riêng để giữ được đặc trưng hương vị tốt nhất
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 blog__setting">
                                    <div className="blog__section__section2__right">
                                        <div className="blog__section__section2__right__box">
                                            <div className="blog__section__section2__right__box__img">
                                                <img src="/images/blog-image1.png"/>
                                            </div>
                                            <div className="blog__section__section2__right__box__text">
                                                <div className="blog__section__section2__right__box__text__title">
                                                    Chén trà là đầu câu truyện
                                                </div>
                                                <div className="blog__section__section2__right__box__text__disc">
                                                    Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. Mỗi phẩm trà sẽ có cách dùng riêng để giữ được đặc trưng hương vị tốt nhất
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog__section__section2__right__box">
                                            <div className="blog__section__section2__right__box__img">
                                                <img src="/images/blog-image1.png"/>
                                            </div>
                                            <div className="blog__section__section2__right__box__text">
                                                <div className="blog__section__section2__right__box__text__title">
                                                    Chén trà là đầu câu truyện
                                                </div>
                                                <div className="blog__section__section2__right__box__text__disc">
                                                    Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. Mỗi phẩm trà sẽ có cách dùng riêng để giữ được đặc trưng hương vị tốt nhất
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog__section__section3">
                            <div className="container">
                                <div className="blog__section__section1__title">
                                    <div className="blog__section__section1__title__main">
                                        Kỹ thuật pha trà
                                    </div>
                                    <div className="blog__section__section1__title__disc">
                                        <div className="blog__section__section1__title__disc__text">
                                            Xem thêm
                                        </div>
                                        <div className="blog__section__section1__title__disc__icon">
                                            <IoMdArrowRoundForward />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="blog__section__section3__box">
                                            <div className="blog__section__section3__box__img">
                                                <img src="/images/blog-image2.png"/>
                                            </div>
                                            <div className="blog__section__section3__box__title">
                                                Chén trà là đầu câu truyện
                                            </div>
                                            <div className="blog__section__section3__box__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="blog__section__section3__box">
                                            <div className="blog__section__section3__box__img">
                                                <img src="/images/blog-image3.png"/>
                                            </div>
                                            <div className="blog__section__section3__box__title">
                                                Chén trà là đầu câu truyện
                                            </div>
                                            <div className="blog__section__section3__box__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="blog__section__section3__box">
                                            <div className="blog__section__section3__box__img">
                                                <img src="/images/blog-image4.png"/>
                                            </div>
                                            <div className="blog__section__section3__box__title">
                                                Chén trà là đầu câu truyện
                                            </div>
                                            <div className="blog__section__section3__box__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog__section__section3">
                            <div className="container">
                                <div className="blog__section__section1__title">
                                    <div className="blog__section__section1__title__main">
                                        Trà và Sức khỏe
                                    </div>
                                    <div className="blog__section__section1__title__disc">
                                        <div className="blog__section__section1__title__disc__text">
                                            Xem thêm
                                        </div>
                                        <div className="blog__section__section1__title__disc__icon">
                                            <IoMdArrowRoundForward />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="blog__section__section3__box">
                                            <div className="blog__section__section3__box__img">
                                                <img src="/images/blog-image2.png"/>
                                            </div>
                                            <div className="blog__section__section3__box__title">
                                                Chén trà là đầu câu truyện
                                            </div>
                                            <div className="blog__section__section3__box__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="blog__section__section3__box">
                                            <div className="blog__section__section3__box__img">
                                                <img src="/images/blog-image3.png"/>
                                            </div>
                                            <div className="blog__section__section3__box__title">
                                                Chén trà là đầu câu truyện
                                            </div>
                                            <div className="blog__section__section3__box__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="blog__section__section3__box">
                                            <div className="blog__section__section3__box__img">
                                                <img src="/images/blog-image4.png"/>
                                            </div>
                                            <div className="blog__section__section3__box__title">
                                                Chén trà là đầu câu truyện
                                            </div>
                                            <div className="blog__section__section3__box__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế.
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

export default Blog;