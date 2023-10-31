import "./searchInput.scss"
import {PiMagnifyingGlassThin} from "react-icons/pi"

export default function SearchInput(){
    return(
        <div className="inputSearch">
            <PiMagnifyingGlassThin className="glass" />
            <input className="searchInput" type="text" placeholder="Search..." />
        </div>
    )
}