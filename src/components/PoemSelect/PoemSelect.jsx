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

  fetchManifest(year) {
    console.log("fetching " + year)
    let path = HOME_ADDR + "Poems/" + year + "/manifest.txt"
    fetch(path)
    .then((res) => {
      if(res.ok) {
        return res.text()
      } else {
        console.log('Network response was not ok.');
      }
    })
    .then((text) => {
      console.log("resetting manifest")

      this.setState({

        manifest: text
      })
    })
  }

  componentDidMount() {
    this.fetchManifest(this.props.params.year)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.params.year != nextProps.params.year ||
        this.state.manifest != nextState.manifest) {
      return true
    } else {
      return false
    }
  }

  componentWillUpdate(nextProps) {
    this.fetchManifest(nextProps.params.year);
  }

  render() {
    console.log(this.props.params.year)

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
    // <div className={style.year}>{year}</div>

    return (
      <div className={style.wrapper}>
        <ul className={style.linkWrapper}>
          {poems}
        </ul>
      </div>
    )
  }
}
