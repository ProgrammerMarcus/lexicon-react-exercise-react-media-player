import "./Playlist.css";
import { PlaylistItem } from "./PlaylistItem";

const tracks = [
    {
        title: "Colorful Sound",
        artist: "Some artist",
        cover: "colorful.jpg",
    },
    {
        title: "Demonic Fury",
        artist: "$@1@#",
        cover: "demon.jpg",
    },
    {
        title: "Drums",
        artist: "A drummer",
        cover: "drums.jpg",
    },
    {
        title: "Future Dreams",
        artist: "Time Traveler",
        cover: "future.jpg",
    },
    {
        title: "Monochrome Grayscale",
        artist: "Old as dirt",
        cover: "greyscale.jpg",
    },
    {
        title: "Moony Moons",
        artist: "Aliens",
        cover: "moon.jpg",
    },
    {
        title: "Colorful Sound In Color",
        artist: "Some artist",
        cover: "colorful.jpg",
    },
    {
        title: "Holy Rock",
        artist: "$@1@#",
        cover: "demon.jpg",
    },
    {
        title: "Drums Drumming",
        artist: "A drummer",
        cover: "drums.jpg",
    },
    {
        title: "Future Dreams II",
        artist: "Time Traveler",
        cover: "future.jpg",
    },
    {
        title: "Monochrome Grayscale Black",
        artist: "Old as dirt",
        cover: "greyscale.jpg",
    },
    {
        title: "Moony Moons Moonier",
        artist: "Aliens",
        cover: "moon.jpg",
    },
];

export function Playlist() {
    return (
        <>
            <div className="playlist">
                {tracks.map((track) => (
                    <PlaylistItem key={track.title} title={track.title} artist={track.artist} cover={track.cover}></PlaylistItem>
                ))}
            </div>
        </>
    );
}

export default Playlist;
