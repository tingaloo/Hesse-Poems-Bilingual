import React, { Component } from 'react'
import style from './style.css'
import { Link, Match } from 'react-router'
import Poem from 'Components/Poem/Poem'
import PoemSelect from 'Components/PoemSelect/PoemSelect'

// <Match pattern={`1902/:topicId`} render={
//     () => <Poem path ='Poems/1902/ich-weiss-du-gehst'/>
// }/>
// programmically read years from poems folder
//
// <Match pattern={`${pathname}/:poem`}
//   component={Poem}
// />

const YearPage = ({ params, pathname }) => {
  return (
    <div>
      <Match exactly pattern="/:year"
        component={PoemSelect}
      />
      <Match exactly pattern="/:year/:poem"
        component={Poem}
      />
    </div>
  )
}

export default YearPage
