import React, {useState} from 'react';
import {QrReader, useQrReader} from 'react-qr-reader';
// import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';

export const Webcam = () => {

    const [scanResultText, setScanResultText] = useState('');
    const [scanResultWebCam, setScanResultWebCam] = useState('');
    const handleErrorWebCam = (error) => {
      console.log(error);
    }
    const handleScanWebCam = (result) => {
      if(result){
        setScanResultWebCam(result);
        console.log(scanResultWebCam);
      }
    }
  
    const handleResult = (result) => {
      if(result){
        setScanResultText(result);
        console.log(scanResultText);
      }
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
              onError = {handleErrorWebCam}
              onScan = {handleScanWebCam}
              onResult = {handleResult}
              
            />

        <Button type='submit' variant='outlined' color='secondary' >Finish Register</Button>

        </div>

        <span style={
        {
            marginTop: '10%',
            marginLeft: '10%'
         }}>
            Student Details
            <p>Output: {scanResultText.text}</p>
            
        </span>
        
    </div>
  )
}

export default Webcam;
