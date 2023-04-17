import vector from '../GeToday/Swiper/Vector.svg'
import style from './style.module.css'
import people from './people.jpg'
import india from './india.jpg'
import sustainability from './Sustainability.png'
import women from './women.png'
import future from './Future.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, FreeMode } from "swiper";

export function PowerSpotlight() {


    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.description__container}>
                    <div className={style.button__box}>
                        <button className={style.button_big}>Visit the newsroom</button>
                        <button className={style.button_small}><img src={vector} alt="" className={style.vector} /> </button>
                    </div>
                    <div className={style.description__text}>Power Spotlight</div>
                </div>
                <>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={40}
                        speed={2500}
                        freeMode={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, FreeMode]}
                        className={style.swiper}

                    >
                        <SwiperSlide className={style.slide_1}>001
                            <div className={style.slide_box}>
                                <p className={style.title}>People</p>
                                <img src={people} alt='' className={style.picture} />
                                <div className={style.description}>
                                    <p>Electrification and Decarbonization: The UAE as a Springboard for Action for 2023’s Top Two Priorities</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide_2}>002
                            <div className={style.slide_box}>
                                <p className={style.title}>Sustainability</p>
                                <img src={sustainability} alt='' className={style.picture} />
                                <div className={style.description}>
                                    <p>Like Father, Like Son: How Chris Day Followed His Dad Into GE’s Engineering World</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide_1}>003
                            <div className={style.slide_box}>
                                <p className={style.title}>GE India</p>
                                <img src={india} alt='' className={style.picture} />
                                <div className={style.description}>
                                    <p>Faces of the Future: Meet 3 People Making a Difference at GE India as It Celebrates 120 Years of Innovation</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide_2}>004
                            <div className={style.slide_box}>
                                <p className={style.title}>Empowering women</p>
                                <img src={women} alt='' className={style.picture} />
                                <div className={style.description}>
                                    <p>Winds of Change: Women Are Now Calling the Shots at This Giant Turbine Blade Factory in India</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.slide_1}>005
                            <div className={style.slide_box}>
                                <p className={style.title}>Future of energy</p>
                                <img src={future} alt='' className={style.picture} />
                                <div className={style.description}>
                                    <p>Green Light: Demonstration Project on Long Island Shows a Promising Path Forward for Green Hydrogen</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div >
    )
}