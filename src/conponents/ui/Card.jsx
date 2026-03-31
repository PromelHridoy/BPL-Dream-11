import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    // console.log("player", player);
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {
         let newCoin = coin - player.price;
         if(newCoin >= 0) {
             setCoin(newCoin);
         }else {
            // alert("You don't have enough coins to select this player");
            toast.error(`Not enough coins to select ${player.playerName}`);
            return;
         }

        // alert(`${player.playerName} selected`);
        toast.success(`${player.playerName} is selected`);
         setIsSelected(true);
         setSelectedPlayers([...selectedPlayers, player]);
        
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <img className='w-100'
                  src={player.images[0]}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                    <FaUser></FaUser>
                    {player.playerName}
                    </h2>
                    <div className='flex justify-between gap-2 items-center'>
                       <div className='flex gap-2 items-center'>
                         <FaFlag></FaFlag>
                        <p className='font-semibold'>{player.playerCountry}</p>
                       </div>
                       <button className="btn ">{player.playertype}</button>
                    </div>
                    <div className='divider'></div>
            
                    <h2 className='font-bold'>{player.rating}</h2>
                    <div className='flex justify-between gap-2 font-bold'>
                        <span>{player.batStyle}</span>
                        <span>{player.bowlingStyle}</span>
                    </div>
                
                <div className="card-actions justify-between items-center">
                    <p className='font-semibold'>Price: ${player.price.toFixed(2)}</p>
                  <button className="btn" onClick={handleChoosePlayer} disabled={isSelected}>
                    {isSelected === true ? "Selected" : "Choose Player"}
                  </button>
                </div>
              </div>
                        </div>
        </div>
    );
};

export default Card;