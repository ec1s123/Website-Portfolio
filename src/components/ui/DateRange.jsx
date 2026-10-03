import { formatCareerDate } from "../../data/careers";

// "Jan 2026 — May 2026", or "… — Present" when `end` is empty. Style it from the parent.
export const DateRange = ({ start, end }) => (
    <>
        <time dateTime={start}>{formatCareerDate(start)}</time>
        {" — "}
        {end ? <time dateTime={end}>{formatCareerDate(end)}</time> : "Present"}
    </>
);
