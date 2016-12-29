import React, { Component } from 'react';
import style from './style.css'

export default class Lines extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let original_lines = this.props.original.split('\n')
    let translated_lines = this.props.translated.split('\n')

    // broken way to make visible
    let translate = function(event, index) {
      let elem = document.getElementById(index+1)
      if (elem.style.visibility == 'visible') {
        elem.style.visibility = 'hidden';
      } else {

        elem.style.visibility = 'visible'
      }
    }
    console.log(original_lines)
    let self = this;
      let html = original_lines.map(function(line,index){
        // index*2+2 is a workaround for nested react onclick handlers
        if (line =="") {
          return <div><br /><br /><br /></div>
        } else {
          return (
            <div>
              <div id={index*2+1}  className={style.original}
              onClick={() => {
                translate(this, index*2+1)
              }}>{line}</div>
              <div id={index*2+2} className={style.translated}> {translated_lines[index]}</div>
            </div>
          )
        }
      }, this)

      return (
        <div>{html}</div>
      )
  }
}
