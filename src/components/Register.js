import React, { useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRcode from 'qrcode';


const Register = () => {

  const [text, setText] = useState('');
  const [sequence, setSequence] = useState('Download QR Code');
  const [ImgURL, setImgURL] = useState('');
  const [StudentDetails, setStudentDetails] = useState({
    fullname: '',
    sid: '',
    pog: ''
  });

  const classes = useStyles();

  const handleStudentDetailsForm = (event) => {
    const { name, value } = event.target;
    setStudentDetails(prevState => ({
      ...prevState,
      [name]: value
    }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setText(StudentDetails.fullname + ' ' + StudentDetails.sid + ' ' + StudentDetails.pog);
      
      const response = await QRcode.toDataURL(text);
      setImgURL(response);
      console.log(ImgURL);

      console.log((StudentDetails.fullname + ' ' + StudentDetails.sid + ' ' + StudentDetails.pog));


    } catch (error) {
      console.log(error);
    }
  };




  // const genQRcode = async () => {
  //   try {
  //     const response = await QRcode.toDataURL(text);
  //     setImgURL(response);
  //     console.log(ImgURL);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <h3>Register Student</h3>

      <div className={classes.wrapper}>


        <div style={{
          width: '60%'

        }}>
          <form noValidate onSubmit={handleSubmit}>
            {/* <TextField className={classes.input} label='Fullname' variant="outlined" onChange={(e) => {setText(e.target.value)}} /> <br /> */}
            <TextField className={classes.input} name='fullname' value={StudentDetails.fullname} label='Fullname' variant="outlined" onChange={handleStudentDetailsForm} /> <br />
            <TextField className={classes.input} name='sid' value={StudentDetails.sid} label='Student ID' variant="outlined" onChange={handleStudentDetailsForm} /> <br />
            <TextField className={classes.input} name='pog' value={StudentDetails.pog} label='Programme of Study' variant="outlined" onChange={handleStudentDetailsForm} /> <br />

            {/* <Button className={classes.btn} variant='contained' color='primary' onClick={() => genQRcode()}>Generate QR Code</Button> onClick={() => handleSubmit()} */}
            <Button className={classes.btn} variant='contained' type='submit' color='primary' >Generate QR Code</Button>
          </form>
        </div>

        <div style={{
          width: '30%',
          marginLeft: '5%',
          marginTop: '2%'
        }}>
          {ImgURL ? (<> <Button className={classes.btn}  variant='contained' color='primary' href={ImgURL} download={StudentDetails.sid + '.png'}>{sequence} </Button> <br />   <img className={classes.QRcode} src={ImgURL} alt={ImgURL} />  </>) : null}
        </div>




      </div>
    </>
  )
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
  },
  input: {
    width: '100%',
    marginTop: '5%'
  },
  QRcode: {
    width: '100%'
  },
  wrapper: {
    display: 'flex'
  }
}));

export default Register