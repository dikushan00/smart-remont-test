import React from 'react';
import styles from "./LoaderData.module.sass"

export const LoaderData = () => {
    return <div className={styles.LdsRingWrapper}>
        <div className={`${styles.LdsRing}`}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
}
