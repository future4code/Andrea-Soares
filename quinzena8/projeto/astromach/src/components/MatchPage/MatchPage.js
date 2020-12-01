import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/requests";


function MatchPage() {
  const [listMatches, setListMatches] = React.useState([ ])

  React.useEffect(() =>{
    axios.get(`${BASE_URL}matches`)
    .then((response) => {
      setListMatches(response.data.matches)
    })
    .catch((error) => {
      alert(error)
    })
  }, [])

  return (
    <div>
      {listMatches.map(match =>{
        return(
          <p>{match.name}</p>
        )
      })}
      ola
    </div>
  )
}

export default MatchPage;