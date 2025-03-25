import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../ChampionPage.css";

const ChampionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { champion } = location.state || {};
  

  if (!champion) {
    return <p>Dados do campeão não encontrados</p>;
  }

  return (
    <div
      className="character"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        alt={champion.name}
      />
      <h1>{champion.name}</h1>
      <h2>{champion.title}</h2>
      <p>{champion.lore}</p>
      <div>
      <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    </div>
    
  );
};

export default ChampionPage;
