import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/requests";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { NoMatch, ContainerList, ContainerMatchPage, } from "./styled"


function MatchPage() {
  const [ listMatches, setListMatches ] = React.useState( [] )

  React.useEffect(() => {
    axios.get( `${ BASE_URL }matches` )
      .then(( response ) => {
        setListMatches( response.data.matches )
      })
      .catch(( error ) => {
        alert( error )
      })
  }, [])


  if ( listMatches.length === 0 )
    return (
      <ContainerMatchPage>
        <NoMatch><strong>Tá feia a coisa! <br /> Sem match, no momento</strong></NoMatch>
      </ContainerMatchPage>)

  return (
    <ContainerMatchPage>
      <ContainerList dense >
        {listMatches.map(( match ) => {
          const labelId = `checkbox-list-secondary-label-${ match }`;
          return (
            <ListItem key={ match } button>
              <ListItemAvatar>
                <Avatar
                  alt={ `Avatar ${ match.name }` }
                  src= { match.photo }
                />
              </ListItemAvatar>
              <ListItemText id={ labelId } primary={ match.name } />
            </ListItem>
          );
        })}
      </ContainerList>
    </ContainerMatchPage>
  );
}

export default MatchPage;