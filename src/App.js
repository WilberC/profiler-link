import './App.css';
import { ProfileData } from "./data";
import { Profile } from "./components/profile";
import { Container } from "@material-ui/core";


function App() {
  return (
    <div className="App">
      <Container color="background" p={2}>
        { [ProfileData].map(profile => (
          <Profile key={ profile.name } profileData={ profile }/>
        )) }
      </Container>
    </div>
  );
}

export default App;
