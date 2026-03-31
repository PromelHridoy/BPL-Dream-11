import React from 'react';
import Card from '../ui/Card';

const Availables = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    // console.log("data", players);

    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                players.map((player) => (
                    <Card key={player.id} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} />
                ))
            }
        </div>
    );
};

export default Availables;