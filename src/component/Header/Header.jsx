import React  from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import logo from "../../images/Header/logo.svg";
import logoTablet from "../../images/Header/wallet icon.png";
import styles from "./Header.module.css";

const Header = ({name}) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logoContainer}>
                    <div className={styles.imgContainer}>
                        <img src={logo} alt="logo" srcSet={`${logoTablet} 768w`} />
                    </div>
                    <p className={styles.logoName}>Wallet</p>
                </Link>
                <div className={styles.logoutContainer}>
                    <p className={styles.name}>{name}</p>
                    <button type="button" className={styles.button} onClick={logoutHandler}>Logout</button>
                </div>
            </div>
        </header>
    );
}

const mapDispatchToProps = (state) => ({
    name: state.auth.user.name
})
export default connect(mapDispatchToProps)(Header)
// export default Header;
