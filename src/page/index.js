import React, { useEffect, useState } from 'react'
import './page.css'
import isFibonacci from './isFibonacci'
import isPrime from './isPrime'

const Page = () => {
    const [number, setNumber] = useState('')
    const [mode, setMode] = useState('isPrime')
    const [answer, setAnswer] = useState('')

    useEffect(() => {
        if (number) {
            if (mode === 'isPrime') {
                setAnswer(JSON.stringify(isPrime(number)))
            } else {
                setAnswer(isFibonacci(number))
            }
        }
    }, [number, mode])

    const handleEnterNumber = e => {
        let value = e.target.value

        if (value % 1 !== 0) value = Math.round(value)
        if (value < 0) value = 1

        setNumber(value)
    }

    const handleSelectMode = e => setMode(e.target.value)

    return (
        <div className="pageContainer">
            <div className="col1">
                <input
                    type="number"
                    placeholder="enter number"
                    onChange={handleEnterNumber}
                    value={number}
                />
            </div>

            <div className="col2">
                <select onChange={handleSelectMode}>
                    <option>isPrime</option>
                    <option>isFibonacci</option>
                </select>
            </div>

            <div className="col3">
                <span>{answer}</span>
            </div>
        </div>
    )
}

export default Page