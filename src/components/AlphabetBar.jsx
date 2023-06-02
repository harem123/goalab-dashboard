import React from 'react';
import { AppBar, Toolbar, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const AlphabetNavBar = () => {
  const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  return (
    
        <Grid container spacing={1} justifyContent="center">
          {alphabet.map((letter) => (
           
              <Button
              size="small"
              style={{ borderRadius: '30%', minWidth: 'unset', padding: 5 }}
                to={`/${letter}`}
                variant="outlined"
                
                
              >
                {letter}
              </Button>
            
          ))}
        </Grid>
      
  );
};

export default AlphabetNavBar;