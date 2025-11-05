import pic from "../../assets/main.png"
import styles from './MainHeader.module.css'

const MainHeader = () => { 
    return (
        <header className={styles.mainHeaderBackground}>
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <img
                        src={pic}
                        alt="Main Header"
                        className={styles.mainHeaderImage}
                    />
                </div>
            </div>
        </header>
    )
}

export default MainHeader