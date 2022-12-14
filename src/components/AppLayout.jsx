import { useState } from "react";
import Button from "../ui/Button";
import InputBox from "../ui/InputBox";
import { generetedPin } from "../utils/generate-pin";
import Result from "./Result";

export default function AppLayout() {
    const [generatedPin, setGeneratedPin] = useState()
    const [pastedPin, setPastedPin] = useState()
    const [result, setResult] = useState("")
    const [title, setTitle] = useState('copy pin')

    const generatePinAndSave = () => {
        const pin = generetedPin()
        setGeneratedPin(pin)
    }

    const copyPin = () => {
        const element = document.querySelector("[title='generated-pin']")
        if(element.value === "" || element.value === undefined) {
            alert('Please generate your pin first')
        } else {
            document.querySelector("[title='generated-pin']").select()
            document.execCommand('copy')
            setTitle('copied')
        }
    }

    const onChangeHandler = (event) => {
        setPastedPin(event.target.value)
    }
    
    const submitPinForChecking = (event) => {
        event.preventDefault();
        if(pastedPin === undefined) {
            alert('paste your copied pin please')
            setResult()
        }

        if(pastedPin && (generatedPin === Number(pastedPin))) {
            setResult(true)
        } else {
            setResult(false)
        }
    }

    const resetAll = () => {
        setGeneratedPin("")
        setPastedPin("")
        setResult()
    }
 
    return (
        <>
            {/* app */}
            <InputBox placeholder="generate pin" title="generated-pin" value={generatedPin} readOnly />
            <Button style={{margin: "0px 0px 0px 5px"}} onClick={generatePinAndSave}>generate pin</Button>
            <Button style={{margin: "0px 0px 0px 5px"}} onClick={copyPin}>{title}</Button>
            <Button style={{margin: "0px 0px 0px 5px"}} onClick={resetAll}>reset</Button>
            <br />
            <br />
            <form onSubmit={submitPinForChecking}>
                <InputBox placeholder="paste copied pin" onChange={onChangeHandler} value={pastedPin} />
                <Button style={{margin: "0px 0px 0px 5px"}}>check</Button>
            </form>
            {/* result set */}
            <Result result={result} style={{margin: "10px 0px 0px 0px"}} />
        </>
    )
}