import { useState, useEffect } from "react"
import styles from './counter.module.css'
import axios from "axios"
import { BASE_URL } from "../constants/Api_link"

export const Counter = () => {

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(BASE_URL)
        .then(({data}) => {
            setUsers(data.data)
            console.log(data.data)
        })
    },[count])

    // хуки (hooks) - начинаются со слова use
    // useEffect - хук, аналог

    // const divStyles = {
    //     backgroundColor: 'green', 
    //     color: 'white'
    // }

    function handleInc() {
        setCount(count + 1)
    }

    function handleDec() {
        setCount(count - 1)
    }

    const countStyles = count >= 0 ? 
    {color: 'red', fontSize: '40px'} 
    : 
    {color: 'green', fontSize: '40px'}

    const isDisabled = count >= 5 ? true : false
    const isDisabled2 = count <= -5 ? true : false


    return (
        <div>
            <p className={count >= 0 ? styles.inc : styles.dec}> Счетчик: {count}</p>
            <button onClick={handleInc} disabled={isDisabled} > +1 </button>
            <button onClick={handleDec} disabled={isDisabled2}> -1 </button>
            {users.map((user) => {
                return <h2 key={user.id}> {user.first_name}</h2>
            })}
        </div>
    )
}