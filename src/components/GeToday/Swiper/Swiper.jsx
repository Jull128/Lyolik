// import { animated, useSpring } from "react-spring";
import style from './style.module.css'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'

export function Swiper() {

    const movies = [
        img1, img2, img3, img3, img3
    ];

    return (
        <>
            <div className={style.container}>
                {movies.map(src => (
                    <div
                        key={src}
                        className={style.card}
                        style={{
                            backgroundImage: `url(${src})`
                        }}
                    />
                ))}
            </div>
        </>
    );
};