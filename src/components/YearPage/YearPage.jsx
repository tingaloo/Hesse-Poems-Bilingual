import React, { Component } from 'react'
import style from './style.css'
import { Link, Match } from 'react-router'
import Poem from 'Components/Poem/Poem'
import PoemSelect from 'Components/PoemSelect/PoemSelect'

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
