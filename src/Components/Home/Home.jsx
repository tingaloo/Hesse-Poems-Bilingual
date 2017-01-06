import React from 'react'
import style from './style.css'
import { Link, Match, BrowserRouter } from 'react-router'
import YearList from 'Components/YearList/YearList'

import YearPage from 'Components/YearPage/YearPage'
import PoemSelect from 'Components/PoemSelect/PoemSelect'
import Poem from 'Components/Poem/Poem'
// programmically read years from poems folder
export default function Home () {
    return (
      <BrowserRouter basename="/Poems">
        <div className={style.wrapper}>
          <div className={style.title}><h1>Herman </h1></div>
          <div className={style.lastName}><h1>Hesse </h1></div>
          <YearList />

          <Match pattern="/:year"
            component={YearPage}
          />



        </div>
      </BrowserRouter>
    )
}
