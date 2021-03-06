import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import WhiteButton from './WhiteButton';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles(theme => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
   },
   main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
   },
   footer: {
      padding: theme.spacing(2),
      marginTop: 'auto',
      backgroundColor: 'white',
   }
}));

const theme = createMuiTheme({
   palette: {
      primary: blue,
      secondary: {
         main: '#f44336',
      },
   }
});

function Copyright() {
   return (
      <Typography variant="body2" color="textSecondary" align="center">
         {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website111
        </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

function App() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <CssBaseline/>
         <Container component="main" className={classes.main} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
               Sticky footer
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
               {'Pin a footer to the bottom of the viewport.'}
               {'The footer will move as the main element of the page grows.'}
            </Typography>
            <Typography variant="body1">Sticky footer placeholder.</Typography>
            <WhiteButton
               size="medium"
            >
               White Button
            </WhiteButton>
         </Container>

         <footer className={classes.footer}>
            <Container maxWidth="sm">
               <Typography variant="body1">My sticky footer can be found here.</Typography>
               <Copyright/>
            </Container>
         </footer>
      </div>
   );
}

export default function CustomApp() {
   return (
      <ThemeProvider theme={theme}>
         <App/>
      </ThemeProvider>
   )
}