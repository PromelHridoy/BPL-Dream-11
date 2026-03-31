import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const selectedCard = ({ player, handleDeleteSelectedPlayer }) => {
    return (
        <div>
            <div key={player.id} className='flex items-center justify-between p-4 rounded-2xl border-2 border-gray-300 mb-4'>
                            <div className='flex gap-4 items-center '>
                                <div className='flex items-center gap- border-2 border-green-400 rounded-full'>
                                <img src={player.images} alt={player.playerName} className='w-20 h-20 rounded-full' />
                            </div>
                            <div>
                                <h2 className='flex items-center gap-6 font-bold text-2xl'><FaUser></FaUser> {player.playerName}</h2>
                                <p className='text-lg text-gray-600 pl-15'>{player.playertype}</p>
                            </div>
                            </div>
                            
                            <button className='btn text-red-500' onClick={() => handleDeleteSelectedPlayer (player)}>
                                <MdDelete></MdDelete>
                            </button>
                        </div>
        </div>
    );
};

export default selectedCard;