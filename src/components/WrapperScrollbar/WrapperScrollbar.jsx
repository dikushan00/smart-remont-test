import React from "react";
import styles from "./WrapperScrollbar.module.scss";

const WrapperScrollbar = (
    {className, children, type, id, style},
    other
) => {
    const classNames = [
        styles.wrapper,
        type ? styles[`wrapper_type_${type}`] : "",
        className,
    ].join(" ");

    return (
        <div style={style} id = {id || ""} className={classNames} {...other}>
            {children}
        </div>
    );
};

export default WrapperScrollbar;
