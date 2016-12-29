import React, { Component } from 'react';
import marked from 'marked';
import style from './style.css'

export default class Poem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
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


  formatHTML(text) {
    var lineBreak = /\s\s/g;

    // let newstr = text.replace(lineBreak, '<br>')
    // console.log(newstr)
    let newstr = text
    return newstr
  }

  appendTranslation() {
    console.log(this.state.original)
    let original_lines = this.state.original.split('\n')
    let translated_lines = this.state.translation.split('\n')
    let appended = ''

    for (let i in original_lines) {
      appended = appended.concat(original_lines[i])
      appended = appended.concat(translated_lines[i])
    }
    console.log(appended)
    return appended
  }

  render() {
    // <div className={style.poem} dangerouslySetInnerHTML={{__html: html}} />
    let original_lines = this.state.original.split('\n')
    let translated_lines = this.state.translation.split('\n')

    let html = original_lines.map(function(name,index){
      if (name =="") {
        return <div><br /><br /><br /></div>
      } else {
        return (
          <div className={style.poem}>
            <div className={style.original}>{name}</div>
            <div className={style.translated}> {translated_lines[index]}</div>
          </div>
        )
      }
    })
    if (original_lines != "") {
      return (
        <div>
          {html}
        </div>
      )

    } else {
      return <div>damn</div>
    }



  }
}
