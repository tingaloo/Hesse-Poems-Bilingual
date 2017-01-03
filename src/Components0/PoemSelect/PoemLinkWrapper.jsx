import React, { Component } from 'react'
import style from './style.css'

import PoemLink from './PoemLink'

export default class PoemLinkWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPoem: ''
    }
  }

  clickHandler(event) {
    console.log("clicked")
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

  parseManifest(manifest) {
    let res = manifest.split('\n')
    return res
  }

  selectPoem(poem) {
    this.setState({selectedPoem: poem})
  }

  render() {
    poemItems = this.parseManifest(this.props.manifest)

    let poems = poemItems.map(function(poem, index) {
      if (poem != "") {
        let filename = this.parseTitle(poem)

        return (


          <PoemLink
            pathname={this.props.pathname}
            poem={poem}
            selectPoem={this.selectPoem.bind(this)}
            selectedPoem={this.state.selectedPoem}
            index={index}
            />
        )
      }
    }, this)

    return (
      <div className={style.wrapper}>
        <ul className={style.linkWrapper}>
          {poems}
        </ul>
      </div>
    )
  }
}
