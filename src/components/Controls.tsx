import "./Controls.css";

export function Controls() {
    return (
        <>
            <div className="controls">
                <span className="material-symbols-outlined small btn">repeat</span>
                <span className="material-symbols-outlined medium btn">skip_previous</span>
                <span className="material-symbols-outlined big btn">play_circle</span>
                <span className="material-symbols-outlined medium btn">skip_next</span>
                <span className="material-symbols-outlined right small btn">shuffle</span>
            </div>
        </>
    );
}

export default Controls;
