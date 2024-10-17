import './About.scss' 

import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function About(){

    const images = [
        "/images/about-section6-image1.png",
        "/images/about-section6-image2.png",
        "/images/about-section6-image3.png",
        "/images/about-section6-image4.png",
        "/images/about-section6-image5.png",
        "/images/about-section6-image6.png",
        "/images/about-section6-image7.png",
    ];

    const [isOpen, setIsOpen] = useState(false);  // Trạng thái mở modal
    const [currentIndex, setCurrentIndex] = useState(0);  // Vị trí ảnh hiện tại

    const openModal = (index) => {
        setCurrentIndex(index);  // Đặt ảnh đang được bấm vào
        setIsOpen(true);  // Mở modal
    };

    const closeModal = () => {
        setIsOpen(false);  // Đóng modal
    };

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);  // Chuyển đến ảnh tiếp theo
    };

    const goToPrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);  // Chuyển đến ảnh trước
    };

    return(
        <>
            <div className='about'>
                <div className='about__sectionMain'>
                    <div className='about__sectionMain__text'>
                        Về chúng tôi
                    </div>
                    <img src='/images/about-sectionMain-logo.png'/>
                </div>

                <div className='about__section1'>
                    <div className='container'>
                        <img src='/images/about-section1-text.png'/>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='about__section1__left'>
                                    <div className='about__section1__left__title'>
                                        Nguyên liệu tinh hoa
                                    </div>
                                    <div className='about__section1__left__text'>
                                        Nguyên liệu quý giá là một trong những giá trị lớn nhất, góp phần tạo nên chất riêng cho trà Hoàng Liên. Hoàng Liên cổ thụ trà có nguồn nguyên liệu quý giá khai thác từ 2000 cây trà cổ thụ có độ tuổi từ 300 năm tuổi trở lên. Trong đó, có khoảng 200 cây có độ tuổi từ 500 - 800 tuổi, trường tồn bền vững theo thời gian, sinh trưởng mạnh mẽ dọc địa phận các huyện Bắc Hà, Mường Khương, Si Ma Cai, Sa Pa, Bát Xát và Văn Bàn của tỉnh Lào Cai; phát triển trong khí hậu nhiệt đới ẩm gió mùa của Hoàng Liên Sơn, điều kiện lý tưởng cho phẩm trà chất lượng cao và hương vị đặc trưng.                                      
                                    </div>
                                    <div className='about__section1__left__text'>
                                        Để có được nguyên liệu tinh hoa nhất, Hoàng Liên trà chỉ thực hiện thu hoạch những búp trà đạt chuẩn trong 2 mùa vụ: Vụ Xuân và vụ Thu cuối năm, bởi sau khi thu hoạch thì cây trà cần thời gian dài để nghỉ, từ đó búp trà sẽ có nhiều dưỡng chất hơn và mùi hương đặc biệt hơn. Cùng thời điểm đó, hoa trong rừng Hoàng Liên đúng dịp nở rộ góp phần tẩm ướp hương thêm cho các lá, búp trà thấm đượm mùi hương thơm ngát, ngọt ngào của hoa rừng. Đây cũng chính là yếu tố khác biệt để tạo nên hồn cốt cho sản phẩm Hoàng Liên cổ thụ trà.  
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='about__section1__right'>
                                    <div className='about__section1__right__image1'>

                                    </div>
                                    <div className='about__section1__right__image2'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='about__line'>
                    <div className='about__line__inner'>

                    </div>
                </div>

                <div className='about__section2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='about__section2__left'>

                                </div>
                            </div>
                            <div className='col-6 about__section2__setting'>
                                <div className='about__section2__right'>
                                    <div className='about__section2__right__text'>
                                        <div className='about__section2__right__text__title'>
                                            Nghệ nhân tâm huyết
                                        </div>
                                        <div className='about__section2__right__text__text'>
                                            Đối với người nghệ nhân làm trà, mọi giác quan đều được đánh thức và huy động. Mỗi công đoạn trong quy trình sản xuất đều được thực hiện tỉ mỉ, cẩn trọng, thể hiện sự tâm huyết và tài hoa của người nghệ nhân.
                                        </div>
                                        <div className='about__section2__right__text__text'>
                                            Ngay từ bước phơi trà, trà sư của chúng tôi đã cần dành nhiều công sức. Có thể phơi trà dưới nắng hoặc phơi mát trong bóng râm tùy điều kiện thời tiết. Thời gian phơi tùy thuộc vào điều kiện thời tiết và loại trà định làm. Lá trà được rải một lớp mỏng lên mẹt và luôn đảm bảo lá trà được dàn đều. Khi phơi, mép lá rất dễ bị héo, nước không thoát ra được. Vì vậy, cứ cách mỗi 1-2 tiếng trà sư sẽ cần đi đảo trà và kiểm tra quá trình hạ thủy phần của lá.  
                                        </div>
                                    </div>
                                    <div className='about__section2__right__image'>
                                        <div className='about__section2__right__image__image1'>

                                        </div>
                                        <div className='about__section2__right__image__image2'>
                                            
                                        </div>
                                        <div className='about__section2__right__image__image3'>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='about__line'>
                    <div className='about__line__inner'>

                    </div>
                </div>

                <div className='about__section3'>
                    <div className='container'>
                        <div className='about__section3__title'>
                            Hành trình kỳ công
                        </div>
                        <div className='about__section3__disc'>
                            Để làm ra được thành phẩm trà ngon thượng hạng mà vẫn giữ nguyên sự tinh túy, thanh cao nhất của đất trời, của thiên nhiên, những sản phẩm Hoàng Liên Cổ thụ trà vẫn áp dụng phương thức sản xuất truyền thống, với tay nghề của các nghệ nhân nhiều kinh nghiệm, thâm niên và nhân công ở vùng Thẩm Dương, Văn Bàn, Lào Cai đóng vai trò quan trọng và yếu tố then chốt cho ra vị trà đầy đủ 
                            hương vị nhất  
                        </div>
                        <div className='about__section3__image'>

                        </div>
                    </div>
                </div>

                <div className='about__section3p5'>

                </div>

                <div className='about__section4'>
                    <div className='container'>
                        <img src='/images/about-section4-text.png'/>
                        <div className='about__section4__text'>
                            Hoàng Liên cổ thụ trà luôn dành nhiều tâm huyết, nỗ lực bảo tồn và khai thác bền vững hệ sinh thái chè cổ thụ của vùng đại ngàn Hoàng Liên.
                        </div>
                        <div className='about__section4__text'>
                            Những cây trà quý, những tri thức phong phú, độc đáo về việc làm trà, sử dụng các sản phẩm từ trà cổ thụ chính là một tài sản văn hóa quý giá. Hoàng Liên cổ thụ trà mong muốn đưa thương hiệu dần trở thành một nét văn hóa riêng trong cộng đồng người yêu trà.                         
                        </div>
                        <div className='about__section4__text'>
                            Đặc biệt, Hoàng Liên kiên định mục tiêu làm ra sản phẩm trà cổ thụ chất lượng tuyệt hảo nhất, để đem phẩm trà quý giới thiệu rộng rãi đến những người yêu trà, người sành trà, góp một phần sức để nâng tầm vị thế trà Việt, đưa danh trà cổ thụ Việt vươn ra tầm quốc tế. Bên cạnh đó, là mục tiêu góp phần tạo ra các giá trị xã hội, qua việc tạo ra nhiều việc làm, hỗ trợ tăng sinh kế cho những người dân bản địa.                         
                        </div>
                        <div className='about__section4__text'>
                            Hoàng Liên được lấy từ tên của chính nơi mà loại trà cổ thụ này được lớn lên mà nương náu qua hàng ngàn năm qua. Đó chính là nơi nuôi dưỡng, ấp ủ nên sự tinh túy có trong cây chè mà chúng tôi khai thác và sử dụng để chế biến thành loại trà thơm ngon thượng hạng.                         
                        </div>
                    </div>
                </div>

                <div className='about__section5'>
                    <div className='container'>
                        <div className='about__section5__logo'>
                            <img src='/images/Logo Chứng chỉ-01.png'/>
                            <img src='/images/Logo Chứng chỉ-02.png'/>
                            <img src='/images/Logo Chứng chỉ-03.png'/>
                            <img src='/images/Logo Chứng chỉ-04.png'/>
                        </div>
                        <div className='about__section5__text'>
                            Tiêu chuẩn quốc tế  về quản lý an toàn thực phẩm, đảm bảo quy trình sản xuất chặt chẽ từ chọn nguyên liệu đến thành phẩm
                        </div>
                    </div>
                </div>

                {/* Nội dung trang About của bạn */}
                <div className='about__section6'>
                    <div className='container'>
                        <div className='about__section6__title'>
                            Ghé thăm chúng tôi!
                        </div>
                        <div className='about__section6__image'>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`item item-${index + 1}`}
                                    onClick={() => openModal(index)}  // Mở modal khi bấm vào ảnh
                                >
                                    <img src={image} alt={`Ảnh ${index + 1}`} />
                                </div>
                            ))}
                        </div>

                        <div className='about__section6__more'>
                            <Link to={"/ghe_tham"}>
                                <div className='about__section6__more__text'>
                                    Xem thêm
                                </div>
                                <div className='about__section6__more__icon'>
                                    <FaArrowRight />
                                </div>
                            </Link>
                        </div>
                    </div>

                {/* Modal Popup */}
                {isOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <img src={images[currentIndex]} alt="Current" className="modal-image" />
                            <button onClick={goToPrev} className="prev"><IoIosArrowBack /></button>
                            <button onClick={goToNext} className="next"><IoIosArrowForward /></button>
                        </div>
                    </div>
                )}
            </div>

                <div className='about__section6p5'>

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

export default About;