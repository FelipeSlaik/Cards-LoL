import { useState } from "react";
import ChampionCard from "./ChampionCard";
import { useEffect } from "react";

const ChampionList = () =>{
    const [champions, setChampions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChampions = async () => {
            try{
                const response = await fetch(
                "/championFull.json"
                );
                if(!response.ok){
                    throw new Error("Erro na busca de campeões");
                }
                const data = await response.json();
                setChampions(Object.values(data.data));
                console.log(data)
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