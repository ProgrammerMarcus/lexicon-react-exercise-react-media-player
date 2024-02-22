import "./App.css";
import { Header } from "./components/Header";
import { Playlist } from "./components/Playlist";
import { View } from "./components/View";
import { useState } from "react";

export function App() {

    const [current, setCurrent] = useState({
        title: "Select a track to play!",
        artist: "None",
        cover: "none.jpg",
    });

    return (
        <>
            <Header></Header>
            <div className="responsive">
                <View title={current.title} artist={current.artist} cover={current.cover}></View>
                <Playlist current={setCurrent}></Playlist>
            </div>
        </>
    );
}
