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
    if (this.state.clicked == false) {
      this.setState({
        active: !this.state.active
      })
    }

  }

  // fix click later
  click(event){
    // if (this.state.clicked===true){
    //   event.preventDefault()
    // } else {
      console.log("clickd here")
      console.log(this.props.poem)
      this.props.onClick(this.props.poem)
        this.setState({clicked:true})
    

  }

  componentWillUpdate() {
    this.state.clicked=false
    this.state.active=false
  }


  render() {
    console.log("new render")
    // console.log(this.props.poem)
    // console.log(this.props.focus)
    let listItem = cx({
      active: this.state.active,
      listItem: true,
      hover: this.state.active,
      clicked: this.state.clicked,
      hidden: (this.props.poem != this.props.focus) && this.props.clicked
    });
    let self = this
    console.log("display LINK")
    console.log(this.props.link)
    return (
      <Link
      className={listItem}
      key={this.props.index}
      onClick={this.click.bind(this)}
      onMouseOver={self.transform.bind(this)}
      onMouseLeave={self.transform.bind(this)}
      to={this.props.link}>
      {this.props.poem}
      </Link>
    )
  }
}
