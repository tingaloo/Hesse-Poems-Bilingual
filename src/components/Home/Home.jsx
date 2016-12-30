import React from 'react'
import style from './style.css'
import { Link } from 'react-router'

import YearPage from 'Components/YearPage/YearPage'
// programmically read years from poems folder
export default function Home () {
    return (
        <div>
          <div className={style.title}>Herman Hesse</div>
          <ul>
            <li><Link to="/1902">1902</Link></li>
            <li><Link to="/1911">1911</Link></li>
            <li><Link to="/1915">1915</Link></li>



          </ul>
        </div>
    )
}
