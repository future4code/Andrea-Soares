import React from "react"
import axios from "axios";
import Card from "./components/Card";
import { ContainerApp } from "./styled";


export default class App extends React.Component {
  state = {
    listMissions:[],
    listInfos: {}
  }

  componentDidMount(){
    this.getMissions()
    this.getInfos()
  }

  getInfos = () => {
    axios.get("https://api.spacexdata.com/v3/info")
    .then((response) => {
      this.setState({ listInfos: response.data})
    })
    .catch((error) => {
      alert(error)
    })
  }

  getMissions = () => {
    axios.get("https://api.spacexdata.com/v3/missions")
    .then((response) => {
      this.setState({ listMissions: response.data})
    })
    .catch((error) => {
      alert(error)
    })
  }

  render(){
  
    const renderListMissions = this.state.listMissions.map((mission) => {
      return(
        <div key={mission.id}>
         <Card
          name={ mission.mission_name } 
          description={ mission.description }
          manufacturers = { mission.manufacturers }
          website = {mission.website}
        />
        </div>
      )
    })

  return (
    <ContainerApp>
     <h1>Missões espaciais</h1>
     <h2>{this.state.listInfos.name}</h2>
     <h3>Fundada em {this.state.listInfos.founded} por {this.state.listInfos.founder}</h3>
     {renderListMissions}
    </ContainerApp>
  );
}
}


