import React, { Component } from 'react'
import style from './style.css'
import { Link } from 'react-router'

// programmically read years from poems folder
export default class YearPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    switch (this.props.year) {
      case '1902':
        return (
          <div>
            <li><Link to="1902/Ravenna">Ravenna</Link></li>
            <li><Link to="1902/ich-weiss-du-gehst">ich weiss, du gehst</Link></li>
            <li><Link to="1902/Elisabeth">Elisabeth</Link></li>
          </div>
        )
        break;
      case '1905':
        return (
          <div>
          <li><Link to="/Einsame-nacht">Einsame nacht</Link></li>
          <li><Link to="/Muckenschwarm">Mückenschwarm</Link></li>
          <li><Link to="/Der-dichter">Der Dichter</Link></li>
          <li><Link to="/Berge-in-der-Nacht">Berge in der Nacht</Link></li>
          <li><Link to="/Bei-Nacht">Bei Nacht</Link></li>
          <li><Link to="/An-eine-chinesische-sangerin">An eine chinesische Sängerin</Link></li>
          <li><Link to="/Abschied-vom-urwald">Apschied vom Urwald</Link></li>
          <li><Link to="/Bose-zeit">Böse Zeit</Link></li>
          <li><Link to="/Auf-Wanderung">Auf Wanderung</Link></li>
          <li><Link to="/Wuhl-lieb-ich-die-finstre-nacht">Wuhl lieb die finstre Nacht</Link></li>
          <li><Link to="/Schicksal">Schicksal</Link></li>
          </div>
        )
        break;
      case '1911':
        return (
          <div>
          <li><Link to="/Ode-an-Holderlin">Ode to Hölderlin</Link></li>
          <li><Link to="/Die-kindheit">Die Kindheit</Link></li>
          <li><Link to="/Im-grase-liegend">Im Grase liegend</Link></li>
          <li><Link to="/Wie-sind-die-tage">Wie sind die Tage</Link></li>
          <li><Link to="/In-einer-Sammlung-iigyptischer-bildwerke">In einer Sammlung iigyptischer Bilderwerke</Link></li>
          </div>
        )
    }
  }

}
