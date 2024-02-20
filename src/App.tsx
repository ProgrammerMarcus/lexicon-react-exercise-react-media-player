import "./App.css";
import { Header } from "./components/Header";
import { Playlist } from "./components/Playlist";
import { View } from "./components/View";

export function App() {
    return (
        <>
            <Header></Header>
            <div className="responsive">
                <View></View>
                <Playlist></Playlist>
            </div>
        </>
    );
}
