import React from 'react'
import styles from './Navbar.module.css'
import adasa from '../../../assets/logo-GdqARQRt.png'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <nav className={`${styles.navbar} navbar navbar-expand-lg position-fixed w-100 z-3`} >
                <Link className={`${styles.navbarBtn} btn rounded-5`} to="/blog">
                    ابدأ القراءة
                </Link>
                <div className={`${styles.navbar1} navbar-expand-lg  mx-auto my-auto `}>
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav gap-3">
                                <li className="nav-item">
                                    <NavLink className={({isActive}) => `${styles.navLink} nav-link ${isActive ? styles.active : ''}`} to="/aboutus">من نحن</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({isActive}) => `${styles.navLink} nav-link ${isActive ? styles.active : ''}`} to="/blog">المدونة</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className={({isActive}) => `${styles.navLink} nav-link ${isActive ? styles.active : ''}`} to="/">الرئيسية</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.logoContainer} dir="rtl">
                    <img src={adasa} alt="عدسة - عالم التصوير الفوتوغرافي" className={styles.navIcon} />
                    <div className={styles.logoText}>
                        <h2 className={styles.navTitle}>عدسة</h2>
                        <p className={styles.navSubtitle}>عالم التصوير الفوتوغرافي</p>
                    </div>
                </div>




            </nav>



        </div>
    )
}
