import { Container } from "semantic-ui-react"
import NavBar from "./NavBar"
import { EventPanel } from "../../features"

function App() {

  return (
    <div>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <EventPanel/>
      </Container>
    </div>
  )
}

export default App
