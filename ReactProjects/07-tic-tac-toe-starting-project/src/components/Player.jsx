import { useState } from "react";

const Player = ({initialName, symbol, isActive, onChangeName}) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = () => {
        setIsEditing((editing) => !editing)
        if(isEditing){
           onChangeName(symbol, playerName); 
        }
        
    }
    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }
    return(
       <li className={isActive ? 'active' : ''}>
        <span className="player">
            {!isEditing && <span className="palyer-name">{playerName}</span>}
            {isEditing && <input type="text" required value={playerName} onChange={handleChange}/>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li> 
    );
}

export default Player;