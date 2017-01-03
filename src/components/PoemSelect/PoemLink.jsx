import React, { Component } from 'react'
import style from './style.css'
import store from 'Store/PoemStore'
import { Link } from 'react-router'
import classNames from 'classnames/bind';
import { observer } from 'mobx-react'

let cx = classNames.bind(style);
@observer
export default class PoemLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  componentWillUpdate() {
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

  changeSelectedPoem(event) {
    // this.props.selectPoem(this.props.poem)
    store.changeSelectedPoem(this.props.poem)
  }

  render() {
    console.log(store.selectedPoem)
    let listItem = cx({
      active: this.props.poem === store.selectedPoem,
      listItem: true,
      hover: this.state.active,
      hidden: this.props.poem != store.selectedPoem && store.selectedPoem != ''
    });


    let filename = this.parseTitle(this.props.poem)

    let url = this.props.pathname + "/" + filename
    return (
      <li className={listItem} key={this.props.index}
      >
      <Link
        onClick = {this.changeSelectedPoem.bind(this)}
        key={this.props.index}
        to={url}>

      {this.props.poem}
      </Link>
      </li>
    )
  }
}
