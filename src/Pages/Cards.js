import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Avatar, IconButton } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { blue, green, pink, yellow } from '@material-ui/core/colors'

const useStyles= makeStyles({
    avatar:{
        backgroundColor:(note)=>{
            if(note.catagory ==='work')
            return yellow[500]
            if(note.catagory ==='Money')
            return green[500]
            if(note.catagory ==='todo')
            return pink[500]
            return blue[500]
        }

    }
})



const Cards = ({note}) => {
   const classes=useStyles(note)
   
    return (
        <div>       
            <Card elevation={1}>

                <CardHeader
                avatar={
                    <Avatar className={classes.avatar} >
                   {note.catagory[0].toUpperCase()}     
                    </Avatar>
                }
                action={
                        <IconButton >
                            <DeleteOutlined></DeleteOutlined>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.catagory}
                />
                <CardContent>
                    <typography color="textsecondary" vatrant="body2">
                        {note.details}
                    </typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default Cards