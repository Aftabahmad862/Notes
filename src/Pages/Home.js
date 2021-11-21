import { Container, Grid} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import  Cards  from './Cards'

const Home = () => {
    const [Notes, setNotes] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/notes")
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

// const deletefun=async(id)=>{
// await fetch("http://localhost:8000/notes/"+id ,{
//     method:"DELETE"
// })
            
// const newnotes= Notes.filter(note=> note.id!==id)
// setNotes(newnotes) 

//}

    return (

        <Container>
            <Grid container spacing={2} >
                {Notes.map(note => (
                    <Grid item  key={note.id} xs={12} md={6} lg={4}  >
                        <Cards note={note} /> 
                        </Grid>
                ))}
            </Grid>
        </Container>
    )


}

export default Home
