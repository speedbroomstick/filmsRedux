import { IRedButton } from "../../types/films.types";
import "./redButton.scss";

export default function RedButton({content,width}:IRedButton){
    const styles = {
        width: `${width}vw`
    }
    return(
        <input style={styles} className="redButton" type="button" value={content}/>
    )
}