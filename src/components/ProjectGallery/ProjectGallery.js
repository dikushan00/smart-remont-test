import React, {useEffect, useState} from 'react';
import styles from "./ProjectGallery.module.sass"
import {ProjectGallerySelect} from "../ProjectGallerySlider/ProjectGallerySelect";
import {ProjectGallerySlider} from "../ProjectGallerySelect/ProjectGallerySlider";

export const ProjectGallery = ({complexes}) => {

    const [foundComplexes, setFoundComplexes] = useState(null)
    const [selectedComplex, setSelectedComplex] = useState(null)

    useEffect(() => {
        complexes && setFoundComplexes(complexes)
    }, [complexes])

    const onSelectChange = (type) => {
        if(type.id === 1) {
            //all option
            return setFoundComplexes(complexes)
        }
        const found = complexes.filter(item => item.typeId === type.id)
        setFoundComplexes(found)
    }

    const onComplexClick = (complex) => {
        const found = complexes.find(item => item.id === complex.id)
        found && setSelectedComplex(found)
    }
    return <div>
        <header className={styles.projectGallery__header}>
            <div className={`col-md-3 ${styles.projectGallery__header__left}`}>
                <h1 className={styles.projectGallery__header__leftTitle}>Галерея <br/> проектов</h1>
                <p className={styles.projectGallery__header__leftDesc}>
                    Сумма экономии рассчитана в сравнении
                    с суммой цен этого же перечня товаров по отдельности
                </p>
                <button className={styles.projectGallery__header__leftButton}>
                    Выбрать дизайн
                </button>
            </div>
            <div className={`col-md-9 ${styles.projectGallery__header__right}`}>
                <h2 className={styles.projectGallery__header__rightTitle}>Мы успешно завершили <br/>
                    уже <span>более 450</span> ремонтов</h2>
            </div>
        </header>
        <div className={`row ${styles.projectGallery__content}`}>
            <div className={"col-md-3"}>
                <ProjectGallerySelect onSelectChange={onSelectChange} onComplexClick = {onComplexClick} selectedComplex = {selectedComplex} foundComplexes={foundComplexes}/>
            </div>
            <div className={"col-md-9"}>
                <ProjectGallerySlider selectedComplex = {selectedComplex}/>
            </div>
        </div>
    </div>
}
