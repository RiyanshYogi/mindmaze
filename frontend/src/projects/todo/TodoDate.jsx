import { useEffect, useState } from "react";

export const TodoDate = () => {

    const [dateTime, setDateTime] = useState("");

    
    const getDateTime = () => {

        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();

        setDateTime(`${formattedDate} - ${formattedTime}`)
    }

    useEffect(() => {
        const interval = setInterval(() => { getDateTime() }, 1000)
        return () => clearInterval(interval);
    }, []);

    return (
        <h2 className="date-time" >{dateTime}</h2>  
    )
}