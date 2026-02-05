import React from 'react'
import  style from './Footer.module.css'

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={`container-fluid ${style.containerFluid}`} dir="rtl">
        <footer className={`row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top ${style.footer}`}>
          <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
              <div className={style.footLogo}>ع</div>
              <h3 className={style.footTitle}>عدسه</h3>
            </a>
            <p className="text-body-secondary">مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.

            </p>
          </div>
          <div className="col mb-3"></div>
          <div className="col mb-3">
            <h5 className={style.explore}>استكشف</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className={`${style.navLink} nav-link p-0 text-body-secondary`}>الرئيسيه</a></li>
              <li className="nav-item mb-2"><a href="#" className={`${style.navLink} nav-link p-0 text-body-secondary`}>المدونه</a></li>
              <li className="nav-item mb-2"><a href="#" className={`${style.navLink} nav-link p-0 text-body-secondary`}>من نحن</a></li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>التصنيفات</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className={`${style.navLink} nav-link p-0 text-body-secondary`}>اضافه</a></li>
              <li className="nav-item mb-2"><a href="#" className={`${style.navLink} nav-link p-0 text-body-secondary`}>بورتريه</a></li>
              <li className="nav-item mb-2"><a href="#" className={`${style.navLink} nav-link p-0 text-body-secondary`}>مناظر طبيعيه</a></li>
              <li className="nav-item mb-2"><a href="#" className={`${style.navLink} nav-link p-0 text-body-secondary`}>تقنيات</a></li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>ابقى على اطلاع</h5>
            <p className="text-body-secondary">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <input type="text" placeholder='أدخل بريدك الإلكتروني' className={style.footInput} />
            <button className={` ${style.btnFoot}`}>اشترك</button>
          </div>
        </footer>
      </div>



    </div>
  )
}
