import "./Range.css";

export interface RangeProps {
    duration: number;
    elapsed: number;
}

export function Range({ duration, elapsed }: RangeProps) {

    return (
        <>
            <div className="range">
                <span className="time lato-regular">{Math.floor(elapsed / 60) + ":" + Math.floor(elapsed % 60)}</span>
                <div className="bar" />
                <span className="time lato-regular right">{Math.floor(duration / 60) + ":" + Math.floor(duration % 60)}</span>
            </div>
        </>
    );
}

export default Range;
