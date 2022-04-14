import {useOutsideAlerter} from "../../utils/hooks/useOutsideClick";
import styles from "./InputSelect.module.sass"
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export const InputSelect = ({
                                options: initialOptions,
                                onChange,
                                defaultSelectedFirst,
                                placeholder
                            }) => {
    const [isSelectMode, setIsSelectMode] = useState(false);
    const [selectedOption, setSelectedOption] = useState(false);
    const [options, setOptions] = useState([])

    useEffect(() => {
        if (initialOptions) {
            if(defaultSelectedFirst) {
                setSelectedOption(initialOptions[0])
                onChange && onChange(initialOptions[0])
            }
            setOptions(initialOptions)
        }
    }, [initialOptions, defaultSelectedFirst])

    const selectRef = useRef(null)
    //change state when click outside the block
    useOutsideAlerter(selectRef, setIsSelectMode)

    const setActiveOption = (id) => {
        setOptions(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    onChange && onChange(item)
                    setSelectedOption(item)
                    return {...item, isSelected: true}
                }
                return {...item, isSelected: false}
            })
        })
        setIsSelectMode(false)
    };

    return <div className={styles.selectPosition__wrapper} ref={selectRef}>
        <div className={styles.select__wrapper}>
            <div className={styles.select}
                 onClick={() => setIsSelectMode(state => !state)}>
                {
                    selectedOption ? <span> {selectedOption.title || selectedOption.name}</span> :
                        <span className={styles.select__placeholder}> {placeholder}</span>
                }
                <FontAwesomeIcon icon={faAngleDown} className={`${styles.select__arrow} ${isSelectMode ? styles.selectFlip: ""}`}/>
            </div>
            {
                isSelectMode && <ul className={styles.select__list}>
                    {
                        options.map((item, index) =>
                            <li onClick={() => setActiveOption(item.id)} className={`${styles.select__list__item} ${item.isSelected ? styles.select__list__itemSelected  : ""}`}
                                key={index}>{item.title || item.name}</li>
                        )
                    }
                </ul>
            }
        </div>
    </div>
};