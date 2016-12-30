import React from 'react'
import Poem from 'Components/Poem/Poem'
import Home from 'Components/Home/Home'

import YearPage from 'Components/YearPage/YearPage'
import { BrowserRouter, Match, Miss, Link } from 'react-router'


// <div>
//   <Home />
//   <Poem path="Poems/1902/ich-weiss,-du-gehst/" />
// </div>
export default function App () {

    return (

        <BrowserRouter>
        <div>


        <Match exactly pattern="/" component={Home} />
        <Match pattern="/1902" render={
            () => <YearPage year ='1902'/>
        }/>
        <Match pattern="/1911" render={
            () => <YearPage year ='1911'/>
        }/>
        <Match pattern="/1915" render={
            () => <YearPage year ='1915'/>
        }/>

      </div>
  </BrowserRouter>
    )
}
