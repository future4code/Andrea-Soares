import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/requests";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import styled from "styled-components"


const ContainerList = styled(List)`
  width: 100%;
  max-width: 300px;
  background-color:#e1bee7;
  min-height:70vh;
  border-radius:5px;
`
const NoMatch = styled.p`
font-size: 20px
`


function MatchPage() {
  /* const classes = useStyles(); */
  /* const [checked, setChecked] = React.useState([1]); */

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


    if(listMatches.length===0)
    return <NoMatch><strong>Tá feia a coisa! Sem match, no momento</strong></NoMatch>
  
    console.log(listMatches);
  return (
    <ContainerList dense >
   
      {listMatches.map((match) => {
        const labelId = `checkbox-list-secondary-label-${match}`;
        return (
          <ListItem key={match} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar ${match.name}`}
                src={match.photo}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={match.name} />
            
          </ListItem>
        );
      })}
    </ContainerList>
  );

}

// function MatchPage() {
//   const [listMatches, setListMatches] = React.useState([ ])

//   React.useEffect(() =>{
//     axios.get(`${BASE_URL}matches`)
//     .then((response) => {
//       setListMatches(response.data.matches)
//     })
//     .catch((error) => {
//       alert(error)
//     })
//   }, [])

//   return (
//     <div>
//       {listMatches.map(match =>{
//         return(
//           <p>{match.name}</p>
//         )
//       })}
//     </div>
//   )
// }

export default MatchPage;