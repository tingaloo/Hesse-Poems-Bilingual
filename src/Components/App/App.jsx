import React from 'react'
import Home from 'Components/Home/Home'
import store from 'Store/PoemStore'

export default function App () {

    return (
      <Home store={store}/>
    )
}
