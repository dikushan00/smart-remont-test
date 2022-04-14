import React, {useState} from 'react';
import styles from "./ProjectGallerySlider.module.sass"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Slider from "react-slick";

export const ProjectGallerySlider = ({selectedComplex}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //i - index, 0, 1 ...
        beforeChange: (i) => setCurrentPage(prev => prev === i + 1 ? prev + 1 > selectedComplex.images.length ? 1 : prev + 1 : i + 1),
        nextArrow: <SamplePrevArrow/>,
        prevArrow: <SampleNextArrow/>
    };
    if (!selectedComplex?.images)
        return <div/>
    return <div className={styles.projectGallerySlider}>
        <div className={styles.projectGallerySlider__sliderWrapper}>
            <Slider {...settings}>
                {
                    selectedComplex.images.map((item, i) => {
                        return <div key={i}>
                            <div className={styles.projectGallerySlider__image}
                                 style={{background: `url(${item}) no-repeat`}}
                            />
                        </div>
                    })
                }
            </Slider>
            <div className={styles.projectGallerySlider__addBlock}/>
            <p className={styles.projectGallerySlider__page}>
            <span
                className={styles.projectGallerySlider__pageCurrent}>{`${currentPage || 1}`}</span>{` / ${selectedComplex.images.length}`}
            </p>
        </div>
        <ComplexInfo complex={selectedComplex}/>
    </div>
}

const SampleNextArrow = (props) => <div
    className={`${styles.projectGallerySliderArrow} ${styles.projectGallerySliderArrowLeft}`} onClick={props.onClick}>
    <FontAwesomeIcon icon={faAngleLeft}/>
</div>

const SamplePrevArrow = (props) => <div
    className={`${styles.projectGallerySliderArrow} ${styles.projectGallerySliderArrowRight}`} onClick={props.onClick}>
    <FontAwesomeIcon icon={faAngleRight}/>
</div>

const ComplexInfo = ({complex}) => {
    if (!complex)
        return <div/>
    return <div className={styles.projectGallerySlider__complex}>
        <div className={styles.projectGallerySlider__complexHeader}>
            <p className={styles.projectGallerySlider__complexTitle}>{complex.name} &#8288;—&#8288; </p>
            <p className={styles.projectGallerySlider__complexAddress}><span>&nbsp;</span>{complex.address}</p>
        </div>
        <p className={styles.projectGallerySlider__complexDesc}>{complex.description}</p>
    </div>
}
