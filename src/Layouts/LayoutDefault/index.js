import './LayoutDefault.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function LayoutDefault(){
    return(
        <>
                <div className='layoutDefault__header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='layoutDefault__header__logo'>
                                    <NavLink to={"/"}>
                                        <img src="/images/Logo.png" alt="logo"/>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='layoutDefault__header__menu'>
                                    <NavLink to={"/ve_chung_toi"} className={({ isActive }) => isActive ? "header__menu__tab active" : "header__menu__tab"}>
                                        Về chúng tôi
                                    </NavLink>
                                    <NavLink to={"/san_pham"} className={({ isActive }) => isActive ? "header__menu__tab active" : "header__menu__tab"}>
                                        Sản phẩm
                                    </NavLink>
                                    <NavLink to={"/lien_he"} className={({ isActive }) => isActive ? "header__menu__tab active" : "header__menu__tab"}>
                                        Liên hệ
                                    </NavLink>
                                    <NavLink to={"/blog"} className={({ isActive }) => isActive ? "header__menu__tab active" : "header__menu__tab"}>
                                        Blog
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main>
                    <Outlet/>
                </main>

                <div className='layoutDefault__footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 layoutDefault__footer__area'>
                                <div className='layoutDefault__footer__logo'>

                                </div>
                                <div className='layoutDefault__footer__text'>
                                    <div className='layoutDefault__footer__text__up'>
                                        <b>Hoàng Liên Cổ Thụ Trà</b> tự hào được Hội Di Sản Văn Hóa Việt Nam công nhận, một minh chứng cho giá trị văn hóa và truyền thông sâu sắc mà sản phẩm mang lại.
                                    </div>
                                    <div className='layoutDefault__footer__text__line'>

                                    </div>
                                    <div className='layoutDefault__footer__text__down'>
                                        <div className='layoutDefault__footer__text__down__text1'>
                                            Cơ sở 1: <b>MW9J+8CW, Vân Hòa, Đông Hỷ, Thái Nguyên</b>
                                        </div>
                                        <div className='layoutDefault__footer__text__down__text1'>
                                            Cơ sở 2: <b>Số 123, Đường Kim Mã, Phường Kim Mã, Quận Ba Đình, Hà Nội, Việt Nam</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 layoutDefault__footer__area2'>
                                <div className='layoutDefault__footer__right'>
                                    <div className='layoutDefault__footer__right__bar'>
                                        <div className='layoutDefault__footer__right__bar__title'>
                                            VỀ CHÚNG TÔI
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Câu chuyện thương hiệu
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Tầm nhìn & Sứ mệnh
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Các dấu mốc quan  trọng
                                        </div>
                                    </div>
                                    <div className='layoutDefault__footer__right__bar'>
                                        <div className='layoutDefault__footer__right__bar__title'>
                                            SẢN PHẨM
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Hoàng Liên Bạch trà
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Hoàng Liên Phố Nhĩ trà
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Hoàng Liên Hồng trà
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Hoàng Liên Lục trà
                                        </div>
                                    </div>
                                    <div className='layoutDefault__footer__right__bar'>
                                        <div className='layoutDefault__footer__right__bar__title'>
                                            LIÊN HỆ
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Biểu mẫu liên hệ
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Hệ thống cửa hàng
                                        </div>
                                    </div>
                                    <div className='layoutDefault__footer__right__bar'>
                                        <div className='layoutDefault__footer__right__bar__title'>
                                            BLOG
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Trà và văn hóa Việt
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Văn hóa trà
                                        </div>
                                        <div className='layoutDefault__footer__right__bar__disc'>
                                            Thưởng thức trà
                                        </div>
                                    </div>
                                </div>
                                <div className='layoutDefault__footer__icon'>
                                    <div className='layoutDefault__footer__icon__ele'>
                                        <FaInstagram/>
                                    </div>
                                    <div className='layoutDefault__footer__icon__ele'>
                                        <FaFacebook/>
                                    </div>
                                    <div className='layoutDefault__footer__icon__ele'>
                                        <FaTwitter/>
                                    </div>
                                    <div className='layoutDefault__footer__icon__ele'>
                                        <FaLinkedin/>
                                    </div>
                                    <div className='layoutDefault__footer__icon__ele'>
                                        <FaYoutube/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='layoutDefault__copyright'>
                Copyright © Hoàng Liên Cổ Thụ Trà. All rights reserved.
            </div>
        </>
    )
}

export default LayoutDefault;