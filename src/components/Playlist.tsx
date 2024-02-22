import "./Playlist.css";
import { PlaylistItem } from "./PlaylistItem";
import { Dispatch, SetStateAction, useState } from "react";

const tracks = [
    {
        id: 0,
        title: "Colorful Sound",
        artist: "Some artist",
        cover: "colorful.jpg",
    },
    {
        id: 1,
        title: "Demonic Fury",
        artist: "$@1@#",
        cover: "demon.jpg",
    },
    {
        id: 2,
        title: "Drums",
        artist: "A drummer",
        cover: "drums.jpg",
    },
    {
        id: 3,
        title: "Future Dreams",
        artist: "Time Traveler",
        cover: "future.jpg",
    },
    {
        id: 4,
        title: "Monochrome Grayscale",
        artist: "Old as dirt",
        cover: "greyscale.jpg",
    },
    {
        id: 5,
        title: "Moony Moons",
        artist: "Aliens",
        cover: "moon.jpg",
    },
    {
        id: 6,
        title: "Colorful Sound In Color",
        artist: "Some artist",
        cover: "colorful.jpg",
    },
    {
        id: 7,
        title: "Holy Rock",
        artist: "$@1@#",
        cover: "demon.jpg",
    },
    {
        id: 8,
        title: "Drums Drumming",
        artist: "A drummer",
        cover: "drums.jpg",
    },
    {
        id: 9,
        title: "Future Dreams II",
        artist: "Time Traveler",
        cover: "future.jpg",
    },
    {
        id: 10,
        title: "Monochrome Grayscale Black",
        artist: "Old as dirt",
        cover: "greyscale.jpg",
    },
    {
        id: 11,
        title: "Moony Moons Moonier",
        artist: "Aliens",
        cover: "moon.jpg",
    },
];

export interface PlaylistProps {
    current: Dispatch<
        SetStateAction<{
            title: string;
            artist: string;
            cover: string;
        }>
    >;
}

export function Playlist({ current }: PlaylistProps) {

    const [trackId, setTrackId] = useState(0);

    return (
        <>
            <div className="playlist">
                {tracks.map((track) => (
                    <PlaylistItem click={setTrackId} selected={trackId===track.id} id={track.id} key={track.id} current={current} title={track.title} artist={track.artist} cover={track.cover}></PlaylistItem>
                ))}
            </div>
        </>
    );
}

export default Playlist;
