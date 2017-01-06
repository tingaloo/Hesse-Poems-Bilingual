import React, { Component } from 'react';
import style from './style.css'
import LineWrapper from 'Components/LineWrapper/LineWrapper'

export default class Poem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      original: '',
      translation: '',
    }
  }

  parsePoems(pathname) {
    const { location, pattern, params } = this.props
    let links = new Map([
      ["original", params.poem + "/original.md"],
      ["translation", params.poem + "/translation.md"]
    ])
    for (let [key,val] of links) {
      fetch(val)
        .then((res) => {
          if(res.ok) {
            return res.text()
          } else {
            console.log('Network response was not ok.');
          }
        })
        .then((text) => {
          if (key === 'original') {
            this.setState({original: text})
          } else {
            this.setState({translation: text})
          }
          return text
        })
    }
  }

  componentDidMount() {
    this.parsePoems(this.props.pathname)
  }

  componentWillUpdate(nextProps) {
    if (this.props.pathname != nextProps.pathname) {
      this.parsePoems(nextProps.pathname);

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
