import React from 'react'
import style from './style.css'
import { Link, Match } from 'react-router'
import YearList from 'Components/YearList/YearList'

import YearPage from 'Components/YearPage/YearPage'
import PoemSelect from 'Components/PoemSelect/PoemSelect'
// programmically read years from poems folder
export default function Home () {
    return (
        <div className={style.wrapper}>
          <div className={style.title}><h1>Herman </h1></div>
          <div className={style.lastName}><h1>Hesse </h1></div>

          <Match exactly pattern="/"
            component={YearList}
          />

          <Match exactly pattern="/:year"
            component={YearPage}
          />
        </div>
    )
}
