import "./Gallery.scss"

import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Gallery(){
    const images = [
        "/images/about-section6-image1.png",
        "/images/about-section6-image2.png",
        "/images/about-section6-image3.png",
        "/images/about-section6-image4.png",
        "/images/about-section6-image5.png",
        "/images/about-section6-image6.png",
        "/images/about-section6-image7.png"
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
            <div className="gallery">
                <div className='gallery__sectionMain'>
                    <div className='gallery__sectionMain__text'>
                        Ghé thăm chúng tôi
                    </div>
                    <img src='/images/about-sectionMain-logo.png'/>
                </div>

                <div className='about__section6'>
                    <div className='container'>
                        <div className='about__section6__title'>
                            Nguyên liệu tạo nên Hoàng Liên Cổ thụ trà
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
                    </div>

                    <div className="gallery__line">
                        <div className="gallery__line__inner">
                            
                        </div>
                    </div>

                    <div className='about__section6'>
                    <div className='container'>
                        <div className='about__section6__title'>
                            Nghệ nhân của chúng tôi
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
                    </div>
                    </div>

                    <div className="gallery__line">
                        <div className="gallery__line__inner">

                        </div>
                    </div>

                    <div className='about__section6'>
                    <div className='container'>
                        <div className='about__section6__title'>
                            Hành trình từ lá trà cổ  thụ đến chén trà tinh hoa
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
            </div>
        </>
    )
}

export default Gallery;