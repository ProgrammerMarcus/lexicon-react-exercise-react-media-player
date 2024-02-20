import "./Controls.css";

export function Controls() {
    return (
        <>
            <div className="controls">
                <span className="material-symbols-outlined">repeat</span>
                <span className="material-symbols-outlined">skip_previous</span>
                <span className="material-symbols-outlined">play_circle</span>
                <span className="material-symbols-outlined">skip_next</span>
                <span className="material-symbols-outlined right">shuffle</span>
            </div>
        </>
    );
}

export default Controls;
