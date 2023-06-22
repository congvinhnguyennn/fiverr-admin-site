import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Slide.module.scss'

// Import Swiper styles
import 'swiper/css';

function SlideItems() {
    return (
        <div>
            <div>

            </div>
            <div className={style.slide}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className={`${style.card} card`} style={{ width: 250 }}>
                            <img className="card-img-top" className={style.hinhAnh} src="./img/Lotion-vs-Cream.png" />
                            <div className={`${style.card} card-img-overlay`}>
                                <h5 className="card-title">Build Your Brand</h5>
                                <h2 className="card-text">Logo Design</h2>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${style.card} card`} style={{ width: 250 }}>
                            <img className="card-img-top" className={style.hinhAnh} src="./img/computer.jpg" alt="Card image" />
                            <div className={`${style.card} card-img-overlay`}>
                                <h5 className="card-title">Customize your site</h5>
                                <h3 className="card-text">WordPress</h3>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${style.card} card`} style={{ width: 250 }}>
                            <img className="card-img-top" className={style.hinhAnh} src="./img/micro.jpg" alt="Card image" />
                            <div className={`${style.card} card-img-overlay`}>
                                <h5 className="card-title">Share Your Message</h5>
                                <h3 className="card-text">Voice Over</h3>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${style.card} card`} style={{ width: 250 }}>
                            <img className="card-img-top" className={style.hinhAnh} src="./img/camera.jpg" alt="Card image" />
                            <div className={`${style.card} card-img-overlay`}>
                                <h5 className="card-title">Engage your audience</h5>
                                <h3 className="card-text">Video Explainer</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${style.card} card`} style={{ width: 250 }}>
                            <img className="card-img-top" className={style.hinhAnh} src="./img/phone.jpg" alt="Card image" />
                            <div className={`${style.card} card-img-overlay`}>
                                <h5 className="card-title">Reach more customer</h5>
                                <h3 className="card-text">Social Media</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default SlideItems