import { use, useState } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../../SelectedPlayers/SelectedPlayers';

const Players = ({ playerPromise, setCoin, coin }) => {
    // console.log(playerPromise);
    const data = use(playerPromise);
    // console.log(data);
    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    
    return (
        <div className='container mx-auto'>
           <div className='flex justify-between items-center gap-4 my-4'>
             {selectedType === "available" ? <h2 className='font-bold text-xl'>Available Players</h2> : <h2 className='font-bold text-xl'>Selected Players ({selectedPlayers.length}/{data.length})</h2>}
            <div>
                <button
                onClick={() => setSelectedType("available")}
                 className={`btn ${selectedType === "available" ? "bg-[#e7fe29]" : "bg-gray-300"}  rounded-r-none rounded-l-xl`}>Available</button>
                <button 
                onClick={() => setSelectedType("selected")}
                className={`btn ${selectedType === "selected" ? "bg-[#e7fe29]" : "bg-gray-300"} rounded-l-none rounded-r-xl`}> Selected ({selectedPlayers.length})</button>
            </div>
           </div>

            {selectedType === "available" ? (
                <AvailablePlayers players={data} setCoin={setCoin} coin={coin}  setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}/>
            ) : (
                <SelectedPlayers  selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}/>
            )}
        </div>
    );
};

export default Players;