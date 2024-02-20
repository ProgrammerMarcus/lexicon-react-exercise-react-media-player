import "./Cover.css";

export interface CoverProps {
    title: string;
    cover: string;
    artist: string;
}

export function Cover({ title, cover, artist }: CoverProps) {
    return (
        <>
            <div className="cover">
                <img src={cover} alt="An album cover" className="image" />
                <div className="info">
                    <span className="material-symbols-outlined btn">add_circle</span>
                    <div className="meta">
                        <span className="lato-bold">{title}</span>
                        <span className="lato-regular subtitle">{artist}</span>
                    </div>
                    <span className="material-symbols-outlined btn dim">favorite</span>
                </div>
            </div>
        </>
    );
}

export default Cover;
