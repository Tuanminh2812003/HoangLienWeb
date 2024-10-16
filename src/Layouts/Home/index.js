import { Link, NavLink, Outlet } from "react-router-dom";
import { useState,useEffect, useRef } from "react";
import "./Home.scss"

import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

function Home(){

    const [activeBox, setActiveBox] = useState(1);
  const [autoSlide, setAutoSlide] = useState(null);

  useEffect(() => {
    // Set interval to auto-change the active box every 3 seconds
    const interval = setInterval(() => {
      setActiveBox((prev) => (prev === 1 ? 2 : 1)); // Toggle between box1 and box2
    }, 5000);

    // Save interval reference in state
    setAutoSlide(interval);

    return () => {
      clearInterval(interval); // Clear interval on component unmount or re-render
    };
  }, []);

  // Handler for dot click
  const handleDotClick = (boxNumber) => {
    // Clear existing interval to reset timer
    if (autoSlide) {
      clearInterval(autoSlide);
    }

    // Change active box immediately
    setActiveBox(boxNumber);

    // Restart the interval after clicking
    const newInterval = setInterval(() => {
      setActiveBox((prev) => (prev === 1 ? 2 : 1)); // Toggle between box1 and box2
    }, 5000);

    // Save the new interval reference in state
    setAutoSlide(newInterval);
  };
    
    return(
        <>
            <div className="home">
                <div className="home__sectionMain">
                    <div className="container">
                        <div className="row">
                            <div className="col-7 home__sectionMain__content">
                                <img src="/images/section-main-text.png" className="home__sectionMain__title"/>
                                <Link to={"/"}>
                                    <div className=" home__sectionMain__content__button">
                                        <div className="home__sectionMain__content__button__text">
                                            Khám phá ngay
                                        </div>
                                        <div className="home__sectionMain__content__button__icon">
                                            <FaArrowRight />    
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__section2">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="home__section2__box">
                                    <div className="home__section2__box__image1">

                                    </div>
                                    <div className="home__section2__box__title">
                                        Nguyên liệu tinh hoa
                                    </div>
                                    <div className="home__section2__box__disc">
                                        Từ 2000 cây trà cổ thụ
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="home__section2__box">
                                    <div className="home__section2__box__image2">

                                    </div>
                                    <div className="home__section2__box__title">
                                        Nghệ nhân tâm huyết
                                    </div>
                                    <div className="home__section2__box__disc">
                                        Tỉ mỉ trong từng công đoạn
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="home__section2__box">
                                    <div className="home__section2__box__image3">

                                    </div>
                                    <div className="home__section2__box__title">
                                        Hành trình kỳ công
                                    </div>
                                    <div className="home__section2__box__disc">
                                        Tinh túy từ phương thức sản xuất truyền thống
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home__section3">
                    <div className="container">
                        <div className="home__section3__inner">
                            <div className="home__section3__inner__title">
                                Khởi nguồn Cổ tích
                            </div>
                            <div className="home__section3__inner__text">
                                Hoàng Liên Cổ thụ trà là phẩm trà tinh hoa,  khởi nguồn từ những cây trà cổ thụ có tuổi đời hàng trăm năm đến gần nghìn năm tuổi, phát triển nguyên sinh, không hề chịu tác động hay can thiệp của con người tại dãy núi Hoàng Liên Sơn. Để có thể tiếp cận được với những thân trà này, đội ngũ làm trà Hoàng Liên phải đi sâu vào khu rừng rậm rạp, trùng điệp núi non, thung lũng, vô cùng khó khăn, để rồi vỡ òa sung sướng khi gặp được những thân chè mọc thẳng đứng, vỏ xù xì, rong rêu mọc quanh cây, có những búp, tôm chè non mơn mởn, phủ một lớp tuyết trắng bạc, óng ánh
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home__section3p5">

                </div>

                <div className="home__section4">
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <div className="home__section4__title">
                                    Chén trà mở đầu câu chuyện...
                                </div>
                                <div className="home__section4__text">
                                    Uống trà không chỉ là thưởng thức hương vị của thiên nhiên mà còn là cách để người Việt kết nối, giao lưu và thể hiện sự hiếu khách. Văn hóa uống trà được duy trì qua nhiều thế hệ, từ những bậc tiền bối cho đến giới trẻ ngày nay, tạo nên một phong  cách sống thanh tao và sâu lắng...
                                </div>
                                <div className="home__section4__text">
                                    Trà, vì thế, không chỉ là thức uống mà còn là một triết lý sống, biểu trưng cho sự hòa hợp giữa con người và thiên nhiên.
                                </div>
                                <div className="home__section4__image1">

                                </div>
                                <div className="home__section4__title">
                                    Và hơn thế nữa...
                                </div>
                                <div className="home__section4__text">
                                    Uống trà không chỉ mang lại sự thư giãn mà còn có nhiều lợi ích sức khỏe. Trà chứa nhiều chất chống oxy hóa, giúp ngăn ngừa lão hóa và bảo vệ cơ thể khỏi tác động của các gốc tự do.                                 
                                </div>
                                <div className="home__section4__text">
                                    Đặc biệt, các loại trà xanh và trà trắng còn giúp tăng cường hệ miễn dịch, giảm nguy cơ mắc các bệnh tim mạch, hỗ trợ duy trì huyết áp ổn định và giảm cholesterol. Uống trà đều đặn cũng góp phần làm giảm căng thẳng, giúp tinh thần minh mẫn và cải thiện chất lượng giấc ngủ.                                
                                </div>
                                <div className="home__section4__text">
                                    Uống trà thường xuyên có tác dụng tích cực đến hệ tiêu hóa. Các thành phần tự nhiên trong trà, như tannin và polyphenol, giúp hỗ trợ quá trình tiêu hóa, giảm triệu chứng khó tiêu và đầy bụng. Bên cạnh đó, trà còn giúp cân bằng vi khuẩn trong đường ruột, tăng cường chức năng của dạ dày và ruột.                                
                                </div>
                                <div className="home__section4__image2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home__section4p5">

                </div>

                <div className="home__section5">
                    <div className="container">
                        <div className="row home__section5__row1">
                            <div className="col-4">
                                <div className="home__section5__box1">

                                </div>
                            </div>
                            <div className="col-4">
                                <div className="home__section5__box">
                                    <div className="home__section5__box__image1">

                                    </div>
                                    <div className="home__section5__box__text">
                                        Hoàng Liên Phổ Nhĩ chín
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="home__section5__box">
                                    <div className="home__section5__box__image2">

                                    </div>
                                    <div className="home__section5__box__text">
                                        Hoàng Liên Phổ Nhĩ sống
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="home__section5__box">
                                    <div className="home__section5__box__image3">

                                    </div>
                                    <div className="home__section5__box__text">
                                        Hoàng Liên Bạch trà
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="home__section5__box">
                                    <div className="home__section5__box__image4">

                                    </div>
                                    <div className="home__section5__box__text">
                                        Hoàng Liên Hồng trà
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="home__section5__box">
                                    <div className="home__section5__box__image5">

                                    </div>
                                    <div className="home__section5__box__text">
                                        Hoàng Liên Lục trà
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home__section6">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="home__section6__inner">
                                    <img src="/images/section6-text.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home__section7">
                    <div className="home__section7__slider1">
                        <div
                        className={`home__section7__slider1__box1 ${
                            activeBox === 1 ? "active" : ""
                        }`}
                        >
                        <div className="home__section7__slider1__box1__name">
                            Thanh Hương
                        </div>
                        <div className="home__section7__slider1__box1__line"></div>
                        <div className="home__section7__slider1__box1__text">
                            <div className="home__section7__slider1__box1__text__exp1">"</div>
                            <div className="home__section7__slider1__box1__text__inner">
                            Tôi chưa bao giờ nghĩ rằng một tách trà có thể mang lại cảm
                            giác thanh thản và sâu lắng đến vậy. Hương thơm dịu nhẹ, vị
                            trà đạm đà mà vẫn ngọt hậu, thật sự đáng quý.
                            </div>
                            <div className="home__section7__slider1__box1__text__exp2">"</div>
                        </div>
                        </div>
                        <div
                        className={`home__section7__slider1__box2 ${
                            activeBox === 2 ? "active" : ""
                        }`}
                        >
                        <div className="home__section7__slider1__box1__name">Quang Minh</div>
                        <div className="home__section7__slider1__box1__line"></div>
                        <div className="home__section7__slider1__box1__text">
                            <div className="home__section7__slider1__box1__text__exp1">"</div>
                            <div className="home__section7__slider1__box1__text__inner">
                            Uống trà Hoàng Liên là trải nghiệm tuyệt vời. Không chỉ cảm
                            nhận được vị trà thuần khiết, mà còn là sự trân trọng từ
                            những điều giản dị nhất. Một phần của Việt Nam trong tách trà
                            </div>
                            <div className="home__section7__slider1__box1__text__exp2">"</div>
                        </div>
                        </div>
                        <div className="home__section7__slider1__dot">
                            <div
                                className={`home__section7__slider1__dot__dot1 ${
                                activeBox === 1 ? "active" : ""
                                }`}
                                onClick={() => handleDotClick(1)} // On dot click, set activeBox to 1
                            ></div>
                            <div
                                className={`home__section7__slider1__dot__dot2 ${
                                activeBox === 2 ? "active" : ""
                                }`}
                                onClick={() => handleDotClick(2)} // On dot click, set activeBox to 2
                            ></div>
                        </div>

                    </div>
                    <div className="home__section7__image">

                    </div>

                    <div className="home__section7__slider2">
                        <div
                        className={`home__section7__slider1__box1 ${
                            activeBox === 1 ? "active" : ""
                        }`}
                        >
                        <div className="home__section7__slider1__box1__name">
                            Thanh Hương
                        </div>
                        <div className="home__section7__slider1__box1__line"></div>
                        <div className="home__section7__slider1__box1__text">
                            <div className="home__section7__slider1__box1__text__exp1">"</div>
                            <div className="home__section7__slider1__box1__text__inner">
                            Tôi chưa bao giờ nghĩ rằng một tách trà có thể mang lại cảm
                            giác thanh thản và sâu lắng đến vậy. Hương thơm dịu nhẹ, vị
                            trà đạm đà mà vẫn ngọt hậu, thật sự đáng quý.
                            </div>
                            <div className="home__section7__slider1__box1__text__exp2">"</div>
                        </div>
                        </div>
                        <div
                        className={`home__section7__slider1__box2 ${
                            activeBox === 2 ? "active" : ""
                        }`}
                        >
                        <div className="home__section7__slider1__box1__name">Quang Minh</div>
                        <div className="home__section7__slider1__box1__line"></div>
                        <div className="home__section7__slider1__box1__text">
                            <div className="home__section7__slider1__box1__text__exp1">"</div>
                            <div className="home__section7__slider1__box1__text__inner">
                            Uống trà Hoàng Liên là trải nghiệm tuyệt vời. Không chỉ cảm
                            nhận được vị trà thuần khiết, mà còn là sự trân trọng từ
                            những điều giản dị nhất.
                            </div>
                            <div className="home__section7__slider1__box1__text__exp2">"</div>
                        </div>
                        </div>
                        <div className="home__section7__slider1__dot">
                            <div
                                className={`home__section7__slider1__dot__dot1 ${
                                activeBox === 1 ? "active" : ""
                                }`}
                                onClick={() => handleDotClick(1)} // On dot click, set activeBox to 1
                            ></div>
                            <div
                                className={`home__section7__slider1__dot__dot2 ${
                                activeBox === 2 ? "active" : ""
                                }`}
                                onClick={() => handleDotClick(2)} // On dot click, set activeBox to 2
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="home__section7p5">

                </div>

                <div className="home__section7p6">

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
                                                Tên
                                            </label>
                                            <input type="text" placeholder="Tên của bạn" required name="name" id="home__form__name"/>
                                            <label for="home__form__phone">
                                                Số điện thoại
                                            </label>
                                            <input type="text" placeholder="Số điện thoại" required name="phone" id="home__form__phone"/>
                                            <label for="home__form__id">
                                                Lời nhắn
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
            </div>
        </>
    )
}

export default Home;