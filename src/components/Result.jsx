export default function Result({ result, ...props }) {
    if(result === undefined || result === "") {
        return null;
    }
    return (
        <div {...props}>
        {result ? <div style={{color: "green"}}>Matched</div>: <div style={{color: "red"}}>Not matched</div>}
        </div>
    )
}