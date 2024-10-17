import "./BlogDetail.scss"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

import { Link } from "react-router-dom";

function BlogDetail(){
    return(
        <>
            <div className="blogDetail">
                <div className="blogDetail__sectionMain">
                    <div className='blogDetail__sectionMain__text'>
                        Văn hóa trà
                    </div>
                    <img src='/images/Logo.png'/>
                </div>

                <div className="product__sectionProduct">
                    <div className="product__sectionProduct__bar blogBar">
                        <div className="product__sectionProduct__bar__top">
                            <div className="product__sectionProduct__bar__top__title">
                                Danh mục sản phẩm
                            </div>
                            <div className="product__sectionProduct__bar__top__choice blogChoice">
                                Hoàng Liên Bạch trà
                            </div>
                            <div className="product__sectionProduct__bar__top__choice blogChoice">
                                Hoàng Liên Phổ Nhĩ trà
                            </div>
                            <div className="product__sectionProduct__bar__top__choice blogChoice">
                                Hoàng Liên Hồng trà
                            </div>
                            <div className="product__sectionProduct__bar__top__choice blogChoice">
                                Hoàng Liên Lục trà
                            </div>
                        </div>
                        <div className="product__sectionProduct__bar__line">

                        </div>
                        <div className="product__sectionProduct__bar__top">
                            <div className="product__sectionProduct__bar__top__title blogChoice__title">
                                Bài viết liên quan
                            </div>
                            <div className="product__sectionProduct__bar__top__choice blogChoice">
                                Trà Hoàng Liên - hương vị từ cội nguồn
                            </div>
                            <div className="product__sectionProduct__bar__top__choice blogChoice">
                                Trà Hoàng Liên - hương vị từ cội nguồn
                            </div>
                            <div className="product__sectionProduct__bar__top__choice blogChoice">
                                Trà Hoàng Liên - hương vị từ cội nguồn
                            </div>
                            <div className="product__sectionProduct__bar__top__choice blogChoice">
                                Trà Hoàng Liên - hương vị từ cội nguồn
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="blogDetail__inner">
                            <div className="blogDetail__inner__title">
                                Văn Hóa Trà Việt Nam: Một Chuyến Hành Trình Qua Hương Vị và Truyền Thống
                            </div>
                            <div className="blogDetail__inner__disc">
                                Trung tâm hỗ trợ khách hàng Hoàng Liên cổ thụ trà
                            </div>
                            <div className="blogDetail__inner__text">
                                Từ những làn sương sớm của vùng núi cao, nơi những đồi trà xanh mướt vươn mình trong ánh nắng đầu ngày, văn hóa trà của Việt Nam mở ra một câu chuyện thơ mộng, đậm đà bản sắc dân tộc. Trà không chỉ là thức uống, mà là một phần không thể thiếu trong nhịp sống của người Việt, là sợi chỉ đỏ kết nối các thế hệ, từ quá khứ xa xôi đến hiện tại.
                            </div>
                            <div className="blogDetail__inner__image1">
                                <div className="blogDetail__inner__image1__anh1">

                                </div>
                                <div className="blogDetail__inner__image1__anh2">
                                    
                                </div>
                            </div>
                            <div className="blogDetail__inner__discimage">
                                Các thay đổi gần đây về hệ thống điện có  thể là nguyên nhân khiến nhà bạn thường xuyên bị sụt áp
                            </div>
                            <div className="blogDetail__inner__text">
                                Chúng ta hãy cùng nhau lắng nghe những giai điệu từ những lá trà non, cùng cảm nhận hương vị đặc biệt đã theo chân người Việt qua bao năm tháng. Trà Việt, với sự đa dạng phong phú của các loại trà cổ thụ, trà xanh, trà sen, và trà ướp hương, không chỉ mang lại một cảm giác thư giãn, mà còn chứa đựng cả những câu chuyện văn hóa sâu lắng.                            
                            </div>
                            <div className="blogDetail__inner__image2">

                            </div>
                            <div className="blogDetail__inner__discimage">
                                Sụt áp thường xuyên có thể do nhiều nguyên nhân
                            </div>

                            <div className="blogDetail__inner__titleDisc">
                                Trà - Một tượng đài văn hóa
                            </div>
                            <div className="blogDetail__inner__discTitle">
                                Trà đã được người Việt trân trọng từ những ngày xưa. Mỗi tách trà không đơn thuần là một loại thức uống, mà là một nghi thức, một phần trong đời sống tinh thần của con người. Những bậc cao niên thường chia sẻ rằng, uống trà là để tìm về sự thanh tịnh, để cảm nhận sự hòa quyện giữa con người và thiên nhiên. Từ những búp trà non đến những lá trà già cỗi, mỗi loại trà đều mang trong mình một phần của tâm hồn người Việt.
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

export default BlogDetail;