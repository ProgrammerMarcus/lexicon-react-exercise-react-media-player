import "./Header.css"

export function Header() {
    return (
        <>
            <div className="header">
                <span className="material-symbols-outlined">arrow_back_ios_new</span>
                <h1 className="header-text lato-light">Playlist - Media Player</h1>
                <span className="material-symbols-outlined">more_vert</span>
            </div>
        </>
    );
}

export default Header;
