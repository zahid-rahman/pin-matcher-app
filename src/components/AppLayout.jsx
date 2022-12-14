import Button from "../ui/Button";
import InputBox from "../ui/InputBox";

export default function AppLayout() {
    return (
        <>
            {/* app */}
            <InputBox placeholder="generate pin" readonly="true" />
            <Button style={{margin: "0px 0px 0px 5px"}}>generate pin</Button>
            <Button style={{margin: "0px 0px 0px 5px"}}>copy pin</Button>
            <Button style={{margin: "0px 0px 0px 5px"}}>reset</Button>
            <br />
            <br />
            <InputBox placeholder="paste copied pin" />
            <Button style={{margin: "0px 0px 0px 5px"}}>check</Button>
            {/* result set */}
        </>
    )
}