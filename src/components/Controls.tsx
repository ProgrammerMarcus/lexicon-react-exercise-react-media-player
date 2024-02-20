import "./Controls.css";

export function Controls() {
    return (
        <>
            <div className="controls">
                <span className="material-symbols-outlined small">repeat</span>
                <span className="material-symbols-outlined medium">skip_previous</span>
                <span className="material-symbols-outlined big">play_circle</span>
                <span className="material-symbols-outlined medium">skip_next</span>
                <span className="material-symbols-outlined right small">shuffle</span>
            </div>
        </>
    );
}

export default Controls;
