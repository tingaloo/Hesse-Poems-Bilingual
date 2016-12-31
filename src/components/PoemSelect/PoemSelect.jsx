import React, { Component } from 'react'
import style from './style.css'
import { Link, Match } from 'react-router'
const HOME_ADDR="http://localhost:3000/"


import YearPage from 'Components/YearPage/YearPage'
// programmically read years from poems folder

//TODO: fix url after displaying in list
export default class PoemSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      manifest:'',
    }
  }

  parseManifest(manifest) {
    let res = manifest.split('\n')
    res.replace(/,/g, " ")
    console.log(res)
    return res
  }

  componentDidMount() {
    console.log(this.props)
    let path = HOME_ADDR + "Poems/" + this.props.params.year + "/manifest.txt"
    fetch(path)
    .then((res) => {
      if(res.ok) {
        return res.text()
      } else {
        console.log('Network response was not ok.');
      }
    })
    .then((text) => {
      this.setState({
        manifest: text
      })
    })
  }
  render() {
    console.log(this.props.pathname)
    console.log(this.state.manifest)
    let poemItems = []
    let year = this.props.params.year
    let pathname = this.props.pathname
    if (this.state.manifest != '') {
      poemItems = this.parseManifest(this.state.manifest)
    }

    let poems = poemItems.map(function(poem, index) {
      if (poem != "") {
        let link = "Poems/" + year + "/" + poem
        return (
          <li><Link to={link}>{poem}</Link></li>
        )
      }
    })
    return (
      <div>
        {year}
        <ul>
          {poems}
        </ul>
      </div>
    )
  }
}
// const PoemSelect = ({ params, pathname }) => {
//   switch (params.year) {
//     case '1899':
//       return (
//           <div>
//             <h1>{params.year}</h1>
//             <li><Link to={`${pathname}/ich-weiss-du-gehst`}>ich weiss, du gehst</Link></li>
//           </div>
//       )
//       break;
//       case '1902':
//         return (
//           <div>
//             <h1>{params.year}</h1>
//             <li><Link to={`${pathname}/RavennaOne`}>Ravenna (1)</Link></li>
//             <li><Link to={`${pathname}/RavennaTwo`}>Ravenna (2)</Link></li>
//             <li><Link to={`${pathname}/Elisabeth`}>Elisabeth</Link></li>
//           </div>
//         )
//         break;
//       case '1905':
//         return (
//           <div>
//           <h1>{params.year}</h1>
//           <li><Link to="/Einsame-nacht">Einsame nacht</Link></li>
//           <li><Link to="/Muckenschwarm">Mückenschwarm</Link></li>
//           <li><Link to="/Der-dichter">Der Dichter</Link></li>
//           <li><Link to="/Berge-in-der-Nacht">Berge in der Nacht</Link></li>
//           <li><Link to="/Bei-Nacht">Bei Nacht</Link></li>
//           <li><Link to="/An-eine-chinesische-sangerin">An eine chinesische Sängerin</Link></li>
//           <li><Link to="/Abschied-vom-urwald">Apschied vom Urwald</Link></li>
//           <li><Link to="/Bose-zeit">Böse Zeit</Link></li>
//           <li><Link to="/Auf-Wanderung">Auf Wanderung</Link></li>
//           <li><Link to="/Wohl-lieb-ich-die-finstre-nacht">Wuhl lieb die finstre Nacht</Link></li>
//           <li><Link to="/Schicksal">Schicksal</Link></li>
//           </div>
//         )
//         break;
//       case '1911':
//         return (
//           <div>
//           <h1>{params.year}</h1>
//           <li><Link to="/Ode-an-Holderlin">Ode to Hölderlin</Link></li>
//           <li><Link to="/Die-kindheit">Die Kindheit</Link></li>
//           <li><Link to="/Im-grase-liegend">Im Grase liegend</Link></li>
//           <li><Link to="/Wie-sind-die-tage">Wie sind die Tage</Link></li>
//           <li><Link to="/In-einer-Sammlung-iigyptischer-bildwerke">In einer Sammlung iigyptischer Bilderwerke</Link></li>
//           </div>
//         )
//         break;
//   }
//
// }
//
// export default PoemSelect
