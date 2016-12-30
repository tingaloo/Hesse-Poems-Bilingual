import React, { Component } from 'react';
import style from './style.css'

export default class LineItem extends Component {
  constructor(props) {
    super(props)
  }

  translate(event, index) {

    let elem = document.getElementById(index+1)

    if (elem.style.visibility == 'visible') {
        elem.style.visibility = 'hidden';
        elem.style.opacity = 0;
      } else {
        elem.style.visibility = 'visible'
        elem.style.opacity = 1;
      }
  }

  render() {
    let index = this.props.index
    let combinedLines = this.props.combinedLines

    if (index % 2 == 0) {
      return (
          <div id={index} className={style.original}
          onClick={() => {this.translate(this,index)}}> {combinedLines[index]} </div>
      )
    } else {
      return (
          <div id={index} className={style.translated}>{combinedLines[index]} </div>
      )
    }

  }
}
