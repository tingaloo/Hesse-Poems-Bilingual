import React from 'react'
import Poem from 'Components/Poem/Poem'
import Home from 'Components/Home/Home'
import store from 'Store/PoemStore'

import YearPage from 'Components/YearPage/YearPage'
import { HashRouter, BrowserRouter, Match, Miss, Link } from 'react-router'


// <div>
//   <Home />
//   <Poem path="Poems/1902/ich-weiss-du-gehst/" />
// </div>
export default function App () {

    return (
      <Home store={store}/>
    )
}
