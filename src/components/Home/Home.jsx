import React from 'react'
import style from './style.css'
import { Link } from 'react-router'

import YearPage from 'Components/YearPage/YearPage'
// programmically read years from poems folder
export default function Home () {
    return (
        <div className={style.wrapper}>
          <div className={style.title}><h1>Herman Hesse</h1></div>
          <ul className={style.years}>
            <li><Link to="/1899">1899</Link></li>
            <li><Link to="/1902">1902</Link></li>
            <li><Link to="/1911">1911</Link></li>
            <li><Link to="/1915">1915</Link></li>
          </ul>
        </div>
    )
}
