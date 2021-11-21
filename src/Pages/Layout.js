import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import { Avatar } from '@material-ui/core'
const UseStyles = makeStyles((theme) => {
    return {
        page: {

            background: '#f9f9f9',
            width: '100%',
            marginLeft: theme.spacing(22)
        },
        dr: {
            marginTop: 20
        },

        root: {
            display: 'flex'

        },
        active: {
            backgroundColor: "#f4f4f4"
        },
        title: {
            padding: theme.spacing(2)
        },
        apbar: {
            marginLeft: theme.spacing(2),
            backgroundColor:'#f4f4f4',
            color:'black',
            
        },
        toolbar: theme.mixins.toolbar,
        toolbar: {
            paddingTop: theme.spacing(10)
        },
        date: {

            flexGrow: 1,
            textAlign: 'center',
            //  marginLeft: theme.spacing(75)
        }


    }
})

export const Layout = ({ children }) => {
    const classes = UseStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined
                color='primary'
            />,
            path: '/'
        },
        {
            text: "Create Notes",
            icon: <AddCircleOutlined
                color='primary'
            />,
            path: '/create'
        }
    ]

    return (
        <div className={classes.root}>


            <AppBar className={classes.apbar} elevation={0}  >
                <Toolbar>

                    <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography className={classes.title}>
                        Dani
                    </Typography>
                    <Avatar src='/img.png' />
                </Toolbar>
            </AppBar>


            <Drawer
                className={classes.dr}
                variant='permanent'
                anchor='left'

            >
                <Typography
                    variant='h5'
                    className={classes.title}
                >
                    Dani Notes
                </Typography>

                <List>
                    {menuItems.map(item =>
                    (
                        <ListItem
                            button
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                            key={item.text}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>

                            <ListItemText primary={item.text} />

                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}>

                    {children}

                </div>

            </div>
        </div>
    )
}
