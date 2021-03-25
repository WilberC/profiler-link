import './App.css';
import { Button } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

function App() {
  return (
    <div className="App">
      <Button startIcon={ <AddIcon/> } color="secondary" variant="contained">Send</Button>
    </div>
  );
}

export default App;
