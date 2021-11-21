import { useState } from 'react';
import Container from '@material-ui/core/Container'
//import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Radio, RadioGroup, FormControlLabel, TextField, FormControl, FormLabel } from '@material-ui/core';
import { useHistory } from 'react-router';
const UseStyles = makeStyles({
  btn: {
    marginTop: 20,
    fontSize: 16,
    '&:hover': {
      backgroundColor: 'violet'
    }
  },

  field: {

    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

const Create = () => {

  const history=useHistory()
  const classes = UseStyles()

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [catagory, setcatagory] = useState('todo')

  const [titleError, settitleError] = useState(false)
  const [detailsError, setdetailsError] = useState(false)



  const submitcall = (e) => {
    e.preventDefault()
    setdetailsError(false)
    settitleError(false)

    if (title === '') {
      settitleError(true)
    }
    if (details === '') {
      setdetailsError(true)
    }

    if (title && details) {
      fetch('http://localhost:8000/notes' , {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({title, details, catagory})

      })//.then(()=>history.push("/"))
    }

  }



  return (

    <Container>

      <Typography
        variant="h6"
        component='h1'
        color="TextSecondary"
        gutterBottom
      >
        Create Notes page
      </Typography>

      <form noValidate autoComplete='off' onSubmit={submitcall}>
        <TextField
          onChange={(e) => { settitle(e.target.value) }}

          className={classes.field}
          label='Note Title'
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e) => { setdetails(e.target.value) }}
          className={classes.field}
          label='Details'
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel> Note Category</FormLabel>
          <RadioGroup value={catagory} onChange={(e) => setcatagory(e.target.value)} >
            <FormControlLabel value="Money" control={<Radio />} label="Money" />
            <FormControlLabel value="todo" control={<Radio />} label="Todo" />
            <FormControlLabel value="reminder" control={<Radio />} label="Reminder" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />

          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          className={classes.btn}
          variant="contained"
          color="primary"
          //   startIcon={ < SendIcon />}
          endIcon={< KeyboardArrowRightIcon />}
        >      Send
        </Button>


      </form>


    </Container>
  )
}

export default Create