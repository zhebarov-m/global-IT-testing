import styles from './MyLoader.module.scss'
export const MyLoader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
