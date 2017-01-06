import React, { Component } from 'react'
import style from './style.css'
import { Link, Match } from 'react-router'
import PoemLink from './PoemLink'
import PoemLinkWrapper from './PoemLinkWrapper'
import store from 'Store/PoemStore'
import YearPage from 'Components/YearPage/YearPage'

// TODO: handle changing state outside of render.
// look into router that passes state.
export default class PoemSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      manifest:'',
    }
  }

  fetchManifest(year) {
    let path =  year + "/manifest.txt"

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
    console.log("rendered on back")
  }

  // componentWillMount() {
  //   console.log("WILL MOUNT")
  //   if ((window.location.pathname).match(/\//g).length === 2) {
  //     store.resetSelectedPoem()
  //   }
  // }

  render() {
    let poemItems = []
    let year = this.props.params.year
    let pathname = this.props.pathname
    if ((window.location.pathname).match(/\//g).length === 2) {
      store.resetSelectedPoem()
    }

    return <PoemLinkWrapper
    manifest={this.state.manifest}
    pathname= {this.props.pathname} />
  }
}
