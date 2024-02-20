import "./View.css";
import { Cover } from "./Cover";
import { Range } from "./Range";
import { Controls } from "./Controls";

const track = {
    title: "Colorful Sound",
    artist: "Some artist",
    cover: "colorful.jpg",
};

export function View() {
    return (
        <>
            <div className="view">
                <Cover title={track.title} artist={track.artist} cover={track.cover}></Cover>
                <Range elapsed={34} duration={233}></Range>
                <Controls></Controls>
            </div>
        </>
    );
}

export default View;
