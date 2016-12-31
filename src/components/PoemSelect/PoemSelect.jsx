import React, { Component } from 'react'
import style from './style.css'
import { Link, Match } from 'react-router'
const HOME_ADDR="http://localhost:3000/"


import YearPage from 'Components/YearPage/YearPage'

export default class PoemSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      manifest:'',
    }
  }

  parseTitle(title) {
    let filename = title.toLowerCase()
    filename = filename.replace(/\s/g, "-")
    filename = filename.replace(/\(|\)|,|\./g, "")
    filename = filename.replace(/ä/g, "a")
    filename = filename.replace(/ö/g, "o")
    filename = filename.replace(/ü/g, "u")
    return filename
  }

  parseManifest(manifest) {
    let res = manifest.split('\n')
    console.log(res)
    return res
  }

  componentDidMount() {
    console.log(this.props)
    let path = HOME_ADDR + "Poems/" + this.props.params.year + "/manifest.txt"
    fetch(path)
    .then((res) => {
      if(res.ok) {
        return res.text()
      } else {
        console.log('Network response was not ok.');
      }
    })
    .then((text) => {
      this.setState({
        manifest: text
      })
    })
  }
  render() {
    let poemItems = []
    let year = this.props.params.year
    let pathname = this.props.pathname
    if (this.state.manifest != '') {
      poemItems = this.parseManifest(this.state.manifest)
    }

    let poems = poemItems.map(function(poem, index) {
      if (poem != "") {
        let filename = this.parseTitle(poem)
        let link = year + "/" + filename
        return (
          <li className={style.link} key={index}><Link to={link}>{poem}</Link></li>
        )
      }
    }, this)
    return (
      <div className={style.wrapper}>
        <div className={style.year}>{year}</div>
        <ul className={style.linkWrapper}>
          {poems}
        </ul>
      </div>
    )
  }
}
