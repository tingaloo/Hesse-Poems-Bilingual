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

    let self = this;
      let html = combinedLines.map(function(line,index){
        if (line =="") {
          return <div key={index} ><br /></div>
        } else {
          return (
            <div key={index}>
              <LineItem key={index} combinedLines={combinedLines} index={index}/>
            </div>
          )
        }
      }, this)

      return (
        <div>{html}</div>
      )
  }
}
