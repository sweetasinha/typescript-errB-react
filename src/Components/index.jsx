import React,{useState} from 'react'
import { Button } from '@material-ui/core';
import Greeting from './Greeting';

const HomePage = () => {
const [showGreeting,setShowGreeting]=useState(false);

    return (
        <div>
            <h1>Hello All</h1>
            <Button variant="contained" onClick={()=>setShowGreeting(true)}>Show Greeting</Button>
            {showGreeting && <Greeting />}
        </div>
    )
}

export default HomePage
