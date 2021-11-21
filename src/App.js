import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './Pages/Create'
import Home from './Pages/Home'
import { ThemeProvider, createTheme } from '@material-ui/core'
import { blue, purple } from '@material-ui/core/colors';
import { Layout } from './Pages/Layout';

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: blue,
  },
  typography: {
    fontFamily: 'sans-serif'
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>

            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>

          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
