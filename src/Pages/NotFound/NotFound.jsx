import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.code}>404</h1>
                <h2 className={styles.title}>الصفحة غير موجودة</h2>
                <p className={styles.message}>عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
                <Link to="/" className={styles.homeLink}>العودة للرئيسية</Link>
            </div>
        </div>
    )
}
