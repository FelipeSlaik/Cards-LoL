import { useState } from "react";
import ChampionCard from "./ChampionCard";
import { useEffect } from "react";

const ChampionList = () =>{
    const [champions, setChamions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChampions = async () => {
            try{
                const response = await fetch(
                    "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/pt_BR/champion.json"
                );
                if(!response.ok){
                    throw new Error("Erro na busca de campeões");
                }
                const data = await response.json();
                setChamions(Object.values(data.data));
            } catch (err){
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchChampions();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return(
        <div className="champion-grid">
            {champions.map((champion) =>(
                <ChampionCard key={champion.id} champion={champion} />
            ))}
        </div>
    );
};

export default ChampionList;