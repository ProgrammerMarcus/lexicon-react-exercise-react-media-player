import { Dispatch, SetStateAction } from "react";
import "./PlaylistItem.css";

export interface TrackProps {
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
}

export function PlaylistItem({ title, cover, artist, selected, current }: TrackProps) {
    return (
        <>
            <div className={selected ? "track selected" : "track"} onClick={() => current({ title: title, artist: artist, cover: cover })}>
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
