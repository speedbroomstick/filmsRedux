import { PiCassetteTapeFill } from 'react-icons/pi';
import "./leftToolBar.scss";
import SegmentBar from '../SegmentBar/SegmentBar';
import { generalSegments, menuSegments, popularSegments } from './segments';

export default function LeftToolBar(){

    return(
        <div className="leftToolBar">
            <div className="iconsContainer">
                <PiCassetteTapeFill className="iconClapper"/>
                <h1>HTMLLESSONS.RU</h1>
            </div>
            <SegmentBar head="MENU" segment={menuSegments} />
            <SegmentBar head="POPULAR GENRES" segment={popularSegments} />
            <SegmentBar head="GENERAL" segment={generalSegments} />
        </div>
    )
} 