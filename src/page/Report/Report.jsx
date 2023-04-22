import style from './style.module.css'
import doc_1 from './doc/doc_1.pdf'
import doc_2 from './doc/doc_2.pdf'
import doc_3 from './doc/doc_3.pdf'
import doc_4 from './doc/doc_4.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Report() {
    return (
        <div className={style.container}>

            <div className={style.title__box} >
                <p className={style.text}>GE EVENTS & REPORTS</p>
                <p className={style.title}>2023 GE Investor Conference</p>
                <div className={style.button__box}>
                    <button className={style.button}>WATCH NOW</button>
                    <button className={style.button}>FORWARD LOOKING STATEMENT</button>
                    <button className={style.button}>ALL EVENTS</button>
                </div>
            </div>
            <div className={style.description__container}>
                <p className={style.description__title}>DOWNLOADABLE CONTENT</p>
                <div className={style.description__text}>
                    <a href={doc_1} target='_blank'>Download Agenda
                        <i class="fa-solid fa-download" style={{ color: "#ffffff" }}></i>
                    </a>
                    <a href={doc_2} target='_blank'>Download Presentation
                        <i class="fa-solid fa-download" style={{ color: "#ffffff" }}></i></a>
                    <a href={doc_3} target='_blank'>Download Press Release
                        <i class="fa-solid fa-download" style={{ color: "#ffffff" }}></i></a>
                    <a href={doc_4} target='_blank'>Download Transcript
                        <i class="fa-solid fa-download" style={{ color: "#ffffff" }}></i></a>
                </div>
            </div>
        </div>
    )
}