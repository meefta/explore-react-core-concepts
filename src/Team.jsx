import { useState } from "react"

export default function Team(){
    const [teamCount ,setTeamCount ] = useState(11)

    function handleAdd(){
        let newTeamCount = teamCount + 1;
        setTeamCount(newTeamCount)
    }

    function handleRemove(){
        let newTeamCount = teamCount -1;
        setTeamCount(newTeamCount)
    }
    return(
        <div>
            <h3>Player : {teamCount}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}