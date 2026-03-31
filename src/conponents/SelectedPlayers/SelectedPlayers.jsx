import React from 'react';

import SelectedCard from '../ui/selectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin }) => {
    console.log(selectedPlayers);
    const handleDeleteSelectedPlayer = (player) => {
        console.log(player, "player");
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.id !== player.id);
        console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);

    };
    
    return (
        <div>
            { selectedPlayers.length === 0 ? <div className='text-center text-2xl font-bold text-gray-500'>No players selected yet</div> :
                selectedPlayers.map((player) => {
                    return (
                        <SelectedCard key={player.id} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer} />
                    );
                })
            }
        </div>
    );
};

export default SelectedPlayers;