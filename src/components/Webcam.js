import React, { useState } from 'react';
import { QrReader, useQrReader } from 'react-qr-reader';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import Divider from '@mui/material/Divider';

export const Webcam = () => {

  const [scanResultText, setScanResultText] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');
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

  function extractTextBeforeSecondSpace(str) {
    const firstSpaceIndex = str.indexOf(' ');
    const secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);
    
    if (secondSpaceIndex === -1) {
      return str;
    }
    
    return str.substring(0, secondSpaceIndex);
  }

  function getCharsBetweenSecondAndThirdSpace(str) {
    const firstSpaceIndex = str.indexOf(' ');
    const secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);
    const thirdSpaceIndex = str.indexOf(' ', secondSpaceIndex + 1);
  
    if (thirdSpaceIndex === -1 || secondSpaceIndex === -1) {
      return '';
    }
  
    return str.substring(secondSpaceIndex + 1, thirdSpaceIndex);
  }
  

  function getCharsAfterThirdSpace(str) {
    const firstSpaceIndex = str.indexOf(' ');
    const secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);
    const thirdSpaceIndex = str.indexOf(' ', secondSpaceIndex + 1);
  
    if (thirdSpaceIndex === -1) {
      return '';
    }
  
    return str.substring(thirdSpaceIndex + 1);
  }
  
  
  
  

  return (
    <div style={
      {
        width: '100%',
        alignContent: 'center',
        marginTop: '-7%',
        display: 'flex'
      }
    }>

      <div style={
        {
          width: '50%'
        }
      }>
        <QrReader
          delay={100}
          style={{
            width: '100%'
          }}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
          onResult={handleResult}

        />
      </div>

      <>
        {scanResultText ?
          <div style={{ 
            margin: '5%', 
            border: '1px solid lightgray', 
            width: '50%', 
            padding: '5%' }}> 
            {/* <p>Output: {scanResultText.text}</p>  */}
            <Alert severity="success">
              {/* DUDE YOU GOTTA VALIDATE THESE SCAN RESULTS WITH A DB OF STUDENTS */}
              <AlertTitle>{extractTextBeforeSecondSpace(scanResultText.text)} </AlertTitle> 
              <Divider/>
               <p>Student ID: <strong>{getCharsBetweenSecondAndThirdSpace(scanResultText.text)}</strong> </p>
               <p>Program of Study: <strong>{getCharsAfterThirdSpace(scanResultText.text)}</strong> </p>
              <Divider/>
              <h2><strong>Next Student Please!</strong> </h2>
              
            </Alert> </div>
          : <div style={{ margin: '5%', border: '1px solid lightgray', width: '50%', padding: '10%' }}> <Typography variant="h6" gutterBottom> Set your Student ID <FeaturedVideoIcon color='success' /> <br /> Towards the WebCam <br /> <PhotoCameraFrontIcon color='error' fontSize='large' /> </Typography> </div>}
      </>

    </div>
  )
}

export default Webcam;
