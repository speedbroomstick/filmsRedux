import { ISegmentBarProps } from "../../types/films.types";
import "./segmentBar.scss"
import { useAppSelector } from '../../hooks/hooks'
import { useActions } from "../../hooks/useActions";

export default function SegmentBar({segment, head}:ISegmentBarProps){
    const activeLink = useAppSelector((state)=>state.activeLink.value)
    const {setState} = useActions()

    function handleClick(event:React.MouseEvent, linkIndex:number) {
        event.preventDefault();
        setState(linkIndex);
      }

    return(
        <div className="segmentMenu">
            <h1 className="segmentHead">{head}</h1>
            {segment.map(item => (
                    <a 
                    key={item.id}
                    className={activeLink === item.id ? 'activeLink': ''}
                    href="" 
                    onClick={e => handleClick(e,item.id)}
                    >
                        <item.icon className="iconOption"/>
                        <h1>{item.label}</h1>
                    </a>
            ))}
        </div>
    );
}