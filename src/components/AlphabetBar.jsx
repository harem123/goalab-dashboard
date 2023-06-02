import React from 'react';
import { AppBar, Toolbar, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const AlphabetNavBar = ({ onLetterClick }) => {
  const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  const handleLetterClick = (letter) => {
    // 👇️ take the parameter passed from the Child component
    onLetterClick(letter)
    console.log(letter)
  };
  return (
    
        <Grid container spacing={1} justifyContent="center">
          {alphabet.map((letter) => (
           
              <Button
              onClick={event => handleLetterClick(letter)}
              size="small"
              style={{ borderRadius: '30%', minWidth: 'unset', padding: 5 }}
                
                variant="outlined"
                
              >
                {letter}
              </Button>
            
          ))}
        </Grid>
      
  );
};

export default AlphabetNavBar;