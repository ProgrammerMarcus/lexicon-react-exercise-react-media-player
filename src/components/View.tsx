import "./View.css";
import { Cover } from "./Cover";
import { Range } from "./Range";
import { Controls } from "./Controls";

export interface TrackProps {
    title: string;
    cover: string;
    artist: string;
}

export function View({title, artist, cover}: TrackProps) {
    return (
        <>
            <div className="view">
                <Cover title={title} artist={artist} cover={cover}></Cover>
                <Range elapsed={34} duration={233}></Range>
                <Controls></Controls>
            </div>
        </>
    );
}

export default View;
