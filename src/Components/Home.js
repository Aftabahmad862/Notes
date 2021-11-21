import '../App.css';
//import { Button } from '@material-ui/core';
import { useState } from 'react'
import Button from '@mui/material/Button';
export default function Home() {

    const [num, setnum] = useState(0);
    return (
        <div className="stack" style={{ placeContent: 'center' }} >
            <h1  style={{fontSize:'70px'}}>{num}</h1>
       
                <Button variant="contained" color='success' onClick={() => { setnum(num + 1) }}> Increment</Button>
                <Button variant="contained" onClick={() => { setnum(num - 1) }}> Decrement</Button>

        </div>
    )
}
