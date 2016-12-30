import React, { Component } from 'react';
import style from './style.css'
import LineItem from 'Components/LineItem/LineItem'

export default class LineWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let original_lines = this.props.original.split('\n')
    let translated_lines = this.props.translated.split('\n')
    let combinedLines = [];

    for (let i in original_lines) {
      combinedLines.push(original_lines[i])
      combinedLines.push(translated_lines[i])
    }

    // broken way to make visible
    let translate = function(event, index) {
      let elem = document.getElementById(index+1)
      if (elem.style.visibility == 'visible') {
        elem.style.visibility = 'hidden';
      } else {

        elem.style.visibility = 'visible'
      }
    }
    let self = this;
      let html = combinedLines.map(function(line,index){
        // index*2+2 is a workaround for nested react onclick handlers
        if (line =="") {
          return <div><br /></div>
        } else {
          return (
            <div>
              <LineItem combinedLines={combinedLines} index={index}/>
            </div>
          )
        }
      }, this)

      return (
        <div>{html}</div>
      )
  }
}
