import ChampionList from "./assets/components/ChampionList";
import "./assets/App.css";
function App(){
  return(
    <div>
      <h1 className="titulo">Campeões de League of Legends</h1>
      <ChampionList />
    </div>
  );
}

export default App;