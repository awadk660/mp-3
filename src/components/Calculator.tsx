import { useState } from "react";

export default function Calculator() {
    const [number1, setNumber1] = useState<number | string>("");
    const [number2, setNumber2] = useState<number | string>("");
    const [res, setRes] = useState<number | string>("");

    const addition = () => {
        const n1 = Number(number1);
        const n2 = Number(number2);
        const result = n1 + n2;
        setRes(result);
    }

    const subtract = () => {
        const n1 = Number(number1);
        const n2 = Number(number2);
        const result = n1 - n2;
        setRes(result);
    }

    const multiply = () => {
        const n1 = Number(number1);
        const n2 = Number(number2);
        const result = n1 * n2;
        setRes(result);
    }

    const divide = () => {
        const n1 = Number(number1);
        const n2 = Number(number2);
        const result = n1 / n2;
        setRes(result);
    }

    const exponential = () => {
        const n1 = Number(number1);
        const n2 = Number(number2);
        const result = n1 ** n2;
        setRes(result);
    }

    const clearFields = () => {
        setNumber1("");
        setNumber2("");
        setRes("");
    }

    return (
        <>
        <h2>Calculator</h2>
            <table border={1}>
                <tr>
                    <td>
                        {/* First Number:  */}
                        <input value={number1} onChange={(e) => setNumber1((e.target.value))} />
                    </td>
                    <td>
                        {/* Second Number: */}
                        <input value={number2} onChange={(e) => setNumber2((e.target.value))} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={addition}>+</button>
                        <button onClick={subtract}>-</button>
                        <button onClick={multiply}>*</button>
                        <button onClick={divide}>/</button>
                        <button onClick={exponential}>**</button>
                    </td>
                        <button onClick={clearFields} style={{width: "100%"}}>Clear</button>
                </tr>

            </table>
            <p>{res}</p>
        </>
    )
}