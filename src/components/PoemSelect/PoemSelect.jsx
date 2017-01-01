import React, { Component } from 'react'
import style from './style.css'
import { Link, Match } from 'react-router'
import PoemLink from './PoemLink'
import PoemLinkWrapper from './PoemLinkWrapper'
const HOME_ADDR="http://localhost:3000/"


import YearPage from 'Components/YearPage/YearPage'


export default class PoemSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      manifest:'',
      focus: '',
      clicked: false
    }
  }

  fetchManifest(year) {
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
      this.setState({
        manifest: text
      })
    })
  }

  componentDidMount() {
    this.fetchManifest(this.props.params.year)
  }

  componentWillUpdate(nextProps) {
    if (this.props.params.year != nextProps.params.year) {
      this.fetchManifest(nextProps.params.year);

    }
  }

  render() {

    let poemItems = []
    let year = this.props.params.year
    let pathname = this.props.pathname

    // if (this.state.manifest != '') {
    //   poemItems = this.parseManifest(this.state.manifest)
    // }

    return <PoemLinkWrapper
    manifest={this.state.manifest}
    pathname= {this.props.pathname} />
  }
}
