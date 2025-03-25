import { useNavigate } from 'react-router-dom';

const ChampionCard = ({ champion }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Champion/${champion.id}`, { state: { champion } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        alt={champion.name}
      />
      <h2>{champion.name}</h2>
      <h3>{champion.title}</h3>
    </div>
    
  );
};

export default ChampionCard;