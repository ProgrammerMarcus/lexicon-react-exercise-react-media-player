import "./PlaylistItem.css";

export interface TrackProps {
    title: string;
    cover: string;
    artist: string;
}

export function PlaylistItem({ title, cover, artist }: TrackProps) {
    return (
        <>
            <div className="track">
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
