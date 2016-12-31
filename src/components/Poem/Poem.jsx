import React, { Component } from 'react';
import style from './style.css'
import LineWrapper from 'Components/LineWrapper/LineWrapper'

const HOME_ADDR="http://localhost:3000/"
export default class Poem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      original: '',
      translation: '',
    }
  }

  componentDidMount() {
    const { location, pattern, pathname, isExact, params } = this.props

    // let path = this.props.path
    let path = "Poems/"+pathname+"/"
    let links = new Map([
      ["original", path + "original.md"],
      ["translation", path+"translation.md"]
    ])
    for (let [key,val] of links) {
      fetch(HOME_ADDR + val)
        .then((res) => {
          console.log(key)
          if(res.ok) {
            return res.text()
          } else {
            console.log('Network response was not ok.');
          }
        })
        .then((text) => {
          // set text to state
          if (key === 'original') {
            this.setState({original: text})
          } else {
            this.setState({translation: text})
          }
          return text
        })
    }

  }

  render() {
    let original_lines = this.state.original
    let translated_lines = this.state.translation

    if (original_lines != "") {
          return (
            <div className={style.poem}>
              <LineWrapper original={original_lines} translated={translated_lines} />
            </div>
          )
    } else {
      return <div>Loading</div>
    }

  }
}
