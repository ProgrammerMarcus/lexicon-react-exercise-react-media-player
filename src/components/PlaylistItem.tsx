import { Dispatch, SetStateAction } from "react";
import "./PlaylistItem.css";

export interface TrackProps {
    id: number;
    title: string;
    cover: string;
    artist: string;
    selected: boolean;
    current: Dispatch<
        SetStateAction<{
            title: string;
            artist: string;
            cover: string;
        }>
    >;
    click: Dispatch<SetStateAction<number>>;
}

export function PlaylistItem({ id, title, cover, artist, selected, current, click }: TrackProps) {
    const trigger = () => {
        click(id)
        current({ title: title, artist: artist, cover: cover })
    }
    return (
        <>
            <div className={selected ? "track selected" : "track"} onClick={trigger}>
                <img className="cover" src={cover} alt="Album cover image" />
                <div className="meta">
                    <div className="title lato-bold">{title}</div>
                    <div className="artist lato-regular">{artist}</div>
                </div>
                <span className="material-symbols-outlined icon">play_circle</span>
            </div>
        </>
    );
}

export default PlaylistItem;
