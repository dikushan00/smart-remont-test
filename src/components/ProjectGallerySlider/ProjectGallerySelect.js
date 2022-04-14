import React from 'react';
import {InputSelect} from "../InputSelect/InputSelect";
import styles from "./ProjectGallerySelect.module.sass"
import {typeOptions} from "../../data";
import WrapperScrollbar from "../WrapperScrollbar/WrapperScrollbar";
import {getCorrectWord} from "../../utils/getCorrectWord";

export const ProjectGallerySelect = ({
                                         onSelectChange, foundComplexes, onComplexClick,
                                         selectedComplex
                                     }) => {
    return <div>
        <span className={styles.projectGallerySelect__label}>Тип ремонта</span>
        <InputSelect
            placeholder="Тип"
            options={typeOptions}
            onChange={onSelectChange}
            defaultSelectedFirst
        />
        <FoundComplexes complexes={foundComplexes} onComplexClick={onComplexClick} selectedComplex={selectedComplex}/>
    </div>
}

const FoundComplexes = ({complexes, onComplexClick, selectedComplex}) => {
    if (!complexes)
        return <div/>
    return <div>
        <div className={styles.projectGallerySelect__BlockSelect}>
            <span className={styles.projectGallerySelect__label}>Сделанные ремонты</span>
            <InputSelect
                placeholder="ЖК"
                options={complexes}
                onChange={onComplexClick}
                defaultSelectedFirst
            />
        </div>
        <div className={styles.projectGallerySelect__BlockList}>
            <p className={styles.projectGallerySelect__result}>Найдено {complexes.length} {getCorrectWord(complexes.length, words)}:</p>
            <div>
                <WrapperScrollbar className={styles.projectGallerySelect__scroll}>
                    <ul className={styles.projectGallerySelect__list}>
                        {
                            complexes.map(item => {
                                return <li onClick={() => onComplexClick(item)}
                                           className={`${styles.projectGallerySelect__listItem} 
                                   ${selectedComplex?.id === item.id ? styles.projectGallerySelect__listItemSelected : ""}`}
                                           key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                </WrapperScrollbar>
            </div>
        </div>
    </div>
}

let words = ["объект", "объекта", "объектов"]