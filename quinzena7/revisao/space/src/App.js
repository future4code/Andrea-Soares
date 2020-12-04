import React from "react"
import axios from "axios";
import Card from "./components/Card";
import { ContainerApp, SelectApp, ContainerMissions, Header, Img } from "./styled";
import image from "./components/image/pexels-spacex-23769.jpg";


export default class App extends React.Component {
  state = {
    listMissions: [],
    listInfos: {},
    oneMission: []
  }

  componentDidMount() {
    this.getMissions()
    this.getInfos()
    this.getOneMission()
  }


  changeSelect = (event) => {
    const valueSelect = event.target.value
    this.getOneMission(valueSelect)
  }
  getInfos = () => {
    axios.get("https://api.spacexdata.com/v3/info")
      .then((response) => {
        this.setState({ listInfos: response.data })
      })
      .catch((error) => {
        alert(error)
      })
  }

  getMissions = () => {
    axios.get("https://api.spacexdata.com/v3/missions")
      .then((response) => {
        this.setState({ listMissions: response.data })
      })
      .catch((error) => {
        alert(error)
      })
  }

  getOneMission = (id) => {
    if (id === undefined) {
      return
    }
    axios.get(`https://api.spacexdata.com/v3/missions/${id}`)
      .then((response) => {
        this.setState({ oneMission: [response.data] })
      })
      .catch((error) => {
        alert(error)
      })
  }

  render() {

    const renderListMissions = this.state.listMissions.map((mission) => {
      return (
        <div key={mission.id}>
          <Card
            name={mission.mission_name}
            description={mission.description}
            manufacturers={mission.manufacturers}
            website={mission.website}
          />
        </div>
      )
    })

    const renderOneMission = this.state.oneMission.map((mission) => {
      return (
        <div key={mission.id}>
          <Card
            name={mission.mission_name}
            description={mission.description}
            manufacturers={mission.manufacturers}
            website={mission.website}
          />
        </div>
      )
    })


    return (
      <ContainerApp>
        <Header>
          <Img src={image} alt="rocket" />
          <h1>Launches {this.state.listInfos.name}</h1>
          <p>{this.state.listInfos.summary}</p>
          <h3>Fonunded in {this.state.listInfos.founded} by {this.state.listInfos.founder}</h3>
        </Header>

        <h4>Choose one mission for details</h4>
        <SelectApp onChange={this.changeSelect}>
          {this.state.listMissions.map((item) => {
            return (
              <option value={item.mission_id} key={item.mission_id}>{item.mission_name}</option>
            )
          })
          }
        </SelectApp>

        { renderOneMission}

        <ContainerMissions>
          <h3>All Missions</h3>
          {renderListMissions}
        </ContainerMissions>
      </ContainerApp>
    );
  }
}


