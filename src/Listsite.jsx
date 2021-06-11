import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import List from './List.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontSize: '27px',
      letterSpacing: '3px',
      textAlign: 'center',
      display: 'none',
      color: 'black',
      fontFamily: 'Verdana',
      fontWeight: 'bold',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    list:{
      backgroundColor: '#eefd68',
    },
  }));

export default function Listsite() {


    return (
        <div className="List">
            <div className="box">NEWS</div>
            <div className="box">CHARTS</div>
            <div className="box">VIDEOS</div>
            <div className="box">MERCH</div>
            <div className="box1"></div>
        </div>
    )
}

