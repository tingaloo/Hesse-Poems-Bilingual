import React, { Component } from 'react';
import style from './style.css'
import Lines from 'components/Lines/Lines'

export default class Poem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      original: '',
      translation: '',
    }
  }

  componentDidMount() {
    let path = this.props.path
    let links = new Map([
      ["original", path + "original.md"],
      ["translation", path+"translation.md"]
    ])
    for (let [key,val] of links) {
      fetch(val)
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

  onItemClick (event) {

    event.currentTarget.style.backgroundColor = '#ccc';
    console.log(event.currentTarget)
}

  render() {

    let original_lines = this.state.original
    let translated_lines = this.state.translation
    let title = this.props.path;

    title = title.split('/')[2].replace(/-/g, ' ')

    if (original_lines != "") {
      console.log(original_lines)
          return (
            <div className={style.poem}>
            <div onClick={this.onItemClick}>Component 1</div>

              <div className={style.title}>{title} </div>
              <Lines original={original_lines} translated={translated_lines} />
            </div>
          )
    } else {
      return <div>Loading</div>
    }



  }
}
