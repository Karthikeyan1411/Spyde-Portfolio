import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

  return (
    <div className='clock'>
        {time.toLocaleDateString('en-US', options)}
    </div>
  )
}

export default Clock