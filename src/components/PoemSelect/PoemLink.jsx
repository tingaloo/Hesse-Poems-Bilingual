import React, { Component } from 'react'
import style from './style.css'
import { Link } from 'react-router'
import classNames from 'classnames/bind';

let cx = classNames.bind(style);

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      clicked: false
    }
  }

  transform(event) {
    console.log("transforming")
    // if (this.state.clicked == false) {
    //   this.setState({
    //     active: !this.state.active
    //   })
    // }

  }

  componentWillUpdate() {
    this.state.clicked=false
    this.state.active=false
  }

  parseTitle(title) {
    let filename = title.toLowerCase()
    filename = filename.replace(/\s/g, "-")
    filename = filename.replace(/\(|\)|,|\./g, "")
    filename = filename.replace(/ä/g, "a")
    filename = filename.replace(/ö/g, "o")
    filename = filename.replace(/ü/g, "u")
    return filename
  }

  handleClick(event) {
    this.props.selectPoem(this.props.poem)
  }

  render() {
    console.log(this.props.selectedPoem)
    let listItem = cx({
      active: this.props.poem === this.props.selectedPoem,
      listItem: true,
      hover: this.state.active,
      clicked: this.state.clicked,
    });


    let filename = this.parseTitle(this.props.poem)

    let url = this.props.pathname + "/" + filename
    return (
      <Link
        className={listItem}
        onClick = {this.handleClick.bind(this)}
        key={this.props.index}
        to={url}>

      {this.props.poem}
      </Link>
    )
  }
}
