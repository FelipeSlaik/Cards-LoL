const ChampionCard = ({ champion }) => {
    return (
        <div className="card">
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
            alt={champion.name} 
            />

            <h2>{champion.name}</h2>
            <p>{champion.title}</p>
        </div>
    );
};
export default ChampionCard;