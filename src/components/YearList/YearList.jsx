import React, { Component } from 'react'
import style from './style.css'
import { Link, Match } from 'react-router'

import YearPage from 'Components/YearPage/YearPage'
import { observer } from 'mobx-react'
import store from 'Store/PoemStore'

const years = [1899, 1902, 1922, 1915]

@observer
export default class YearList extends Component {

  changeSelectedYear(year) {
    store.changeSelectedYear(year)
  }

  render() {
    return (
        <div className={style.wrapper}>
          <ul className={style.years}>
            <li><Link onClick={() => this.changeSelectedYear('1899')} to="/1899">1899</Link></li>
            <li><Link onClick={() => this.changeSelectedYear('1902')} to="/1902">1902</Link></li>
            <li><Link onClick={() => this.changeSelectedYear('1922')} to="/1911">1911</Link></li>
            <li><Link onClick={() => this.changeSelectedYear('1915')} to="/1915">1915</Link></li>
          </ul>
        </div>
    )
  }

}
