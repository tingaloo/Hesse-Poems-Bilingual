import React from 'react'
import Poem from 'Components/Poem/Poem'
import Home from 'Components/Home/Home'

import YearPage from 'Components/YearPage/YearPage'
import { HashRouter, BrowserRouter, Match, Miss, Link } from 'react-router'


// <div>
//   <Home />
//   <Poem path="Poems/1902/ich-weiss-du-gehst/" />
// </div>
export default function App () {

    return (

        <BrowserRouter>
        <div>


        <Match exactly pattern="/" component={Home} />
        <Match pattern="/:year" component={YearPage} />
      </div>
  </BrowserRouter>
    )
}
