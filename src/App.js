
import React, { useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRcode from 'qrcode';
import { QrReader } from 'react-qr-reader';
import ClippedDrawer from './components/ClippedDrawer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ControlledAccordions from './components/ControlledAccordions';
import Register from './components/Register';
import Profile from './components/Profile';
import Students from './components/Students';



function App() {
  const [text, setText] = useState('');
  const [ImgURL, setImgURL] = useState('');
  const [scanResultText, setScanResultText] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');
  const classes = useStyles();

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
      console.log(scanResultWebCam);
    }
  }

  const handleResult = (result) => {
    if (result) {
      setScanResultText(result);
      console.log(scanResultText);
    }
  }

  const genQRcode = async () => {
    try {
      const response = await QRcode.toDataURL(text);
      setImgURL(response);
      console.log(ImgURL);
    } catch (error) {
      console.log(error);
    }
  }
  return (

    <Router>

      <Container className={classes.container}>
        {/* <Card>
        <CardContent className={classes.title}>JCTC | QR CODE</CardContent>
        <CardContent container spacing={2}>
          <Grid item xl={6} lg={6} md={8} sm={12} xs={12}>
            <TextField label='Enter Content here ...' onChange={(e) => {setText(e.target.value)}} />
            <Button className={classes.btn} variant='contained' color='primary' onClick={() => genQRcode()}>Generate</Button>
            <br />
            <br />
            
            {ImgURL ? ( <> <small>click the QRcode to download</small> <br />  <a href={ImgURL} download> <img src={ImgURL} alt={ImgURL} /> </a> </>) : null}
          </Grid>
          <Grid item xl={6} lg={6} md={8} sm={12} xs={12}>
            <h3>Web cam QR code scan</h3>
            <QrReader
              delay={100}
              style={{width: '100%'}}
              onError = {handleErrorWebCam}
              onScan = {handleScanWebCam}
              onResult = {handleResult}
            />
            <Button className={classes.btn} variant='contained' color='primary' onClick={() => handleScanWebCam()}>Scan</Button>
            <h3>Result : {scanResultWebCam.text } | {scanResultText.text}</h3>
          </Grid>
        </CardContent>
      </Card> */}

        <Switch>

          <Route exact path='/'>
            {/* <ControlledAccordions/> */}
            <ClippedDrawer Page={<ControlledAccordions />} />
          </Route>

          <Route path='/register'>
            <ClippedDrawer Page={<Register />} />
            {/* <Register/> */}
          </Route>

          <Route path='/students'>
            <ClippedDrawer Page={<Students />} />
            {/* <Students></Students> */}
          </Route>

          <Route path='/profile'>
          <ClippedDrawer Page={<Profile />} />
            {/* <Profile></Profile> */}
            {/* <Profile></Profile> */}
          </Route>


        </Switch>


      </Container>
    </Router>
  );
}


const useStyles = makeStyles(() => ({
  container: {
    marginTop: 10
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3f51b5',
    color: 'white',
    padding: 20,
    fontWeight: 'bold'
  },
  btn: {
    marginTop: 10,
  }
}));

export default App;
