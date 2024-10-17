import "./Contact.scss";

import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Contact(){
    return(
        <>
            <div className="contact">
                <div className="contact__sectionMain">
                    <div className='contact__sectionMain__text'>
                        Liên hệ
                    </div>
                    <img src='/images/about-sectionMain-logo.png'/>
                </div>

                <div className="contact__section0p5">

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

                <div className="contact__section1p5">
                    
                </div>

                <div className="contact__section1">
                    <div className="container">
                        <div className="contact__section1__inner">
                            <div className="contact__section1__inner__title">
                                Trung tâm hỗ trỡ
                            </div>
                            <div className="contact__section1__inner__qa">
                                <div className="contact__section1__inner__qa__bar">
                                    <div className="contact__section1__inner__qa__bar__choice">
                                        Câu hỏi thường gặp
                                    </div>

                                    <div className="contact__section1__inner__qa__bar__choice">
                                        Về thưởng thức trà
                                    </div>
                                    <div className="contact__section1__inner__qa__bar__choice">
                                        Về các sản phẩm trà
                                    </div>
                                    <div className="contact__section1__inner__qa__bar__choice">
                                        Khác
                                    </div>
                                </div>
                                <div className="contact__section1__inner__qa__ques">
                                    <div className="contact__section1__inner__qa__ques__box">
                                        <div className="contact__section1__inner__qa__ques__box__text">
                                            <div className="contact__section1__inner__qa__ques__box__text__title">
                                                Nên pha trà ở nhiệt độ và thời gian bao lâu để có hương vị ngon nhất?
                                            </div>
                                            <div className="contact__section1__inner__qa__ques__box__text__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. Mỗi phẩm trà có cách dùn...
                                            </div>
                                        </div>
                                        <div className="contact__section1__inner__qa__ques__box__button">
                                            <IoIosArrowUp />
                                        </div>
                                    </div>
                                    <div className="contact__section1__inner__qa__ques__box">
                                        <div className="contact__section1__inner__qa__ques__box__text">
                                            <div className="contact__section1__inner__qa__ques__box__text__title">
                                                Nên pha trà ở nhiệt độ và thời gian bao lâu để có hương vị ngon nhất?
                                            </div>
                                            <div className="contact__section1__inner__qa__ques__box__text__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. Mỗi phẩm trà có cách dùn...
                                            </div>
                                        </div>
                                        <div className="contact__section1__inner__qa__ques__box__button">
                                            <IoIosArrowUp />
                                        </div>
                                    </div>
                                    <div className="contact__section1__inner__qa__ques__box">
                                        <div className="contact__section1__inner__qa__ques__box__text">
                                            <div className="contact__section1__inner__qa__ques__box__text__title">
                                                Nên pha trà ở nhiệt độ và thời gian bao lâu để có hương vị ngon nhất?
                                            </div>
                                            <div className="contact__section1__inner__qa__ques__box__text__disc">
                                                Hướng dẫn pha trà được đi kèm trong brochure của mỗi hộp trà, giúp bạn pha đúng cách để tận hưởng hương vị tinh tế. Mỗi phẩm trà có cách dùn...
                                            </div>
                                        </div>
                                        <div className="contact__section1__inner__qa__ques__box__button">
                                            <IoIosArrowUp />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact__section1p5">
                    
                </div>
            </div>
        </>
    )
}

export default Contact;