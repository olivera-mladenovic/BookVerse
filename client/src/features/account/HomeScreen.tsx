import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Grid, Header, Image, Segment } from "semantic-ui-react";
export default function HomeScreen() {
    const navigate =useNavigate();
    return (
        <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>
    
          <Grid.Row verticalAlign='middle' as='a'>
            <Grid.Column>
              <Header icon>
              <Image src='/assets/login.png' wrapped ui={false} />
              </Header>
              <Button content='Login' onClick={()=> navigate('/login')}></Button>
            </Grid.Column>
    
            <Grid.Column>
              <Header icon>
              <Image src='/assets/register.png' wrapped ui={false} />
              </Header>
              <Button content='Register' onClick={()=> navigate('/register')}></Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}