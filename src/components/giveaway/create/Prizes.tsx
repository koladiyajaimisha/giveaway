import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface PrizesData {
  prizeName: '';
  PrizeValue: '';
}

const Prizes = ({ setExpanded }) => {
  const [numberOfPrizes, setNumberOfPrizes] = useState(1);
  const [prizesData, setPrizesData] = useState<PrizesData[]>(
    Array(5).fill({
      prizeName: '',
      PrizeValue: ''
    })
  );

  return (
    <>
      <Typography>
        Choose how many prizes you wish to give below, and then include each
        prize description and value (optional). Example: If you plan to give 3
        prizes away, you'll want to select 3 below and include a description for
        each prize.
      </Typography>
      <p>Number of Prizes</p>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => setNumberOfPrizes(1)}>1</Button>
        <Button onClick={() => setNumberOfPrizes(2)}>2</Button>
        <Button onClick={() => setNumberOfPrizes(3)}>3</Button>
        <Button onClick={() => setNumberOfPrizes(4)}>4</Button>
        <Button onClick={() => setNumberOfPrizes(5)}>5</Button>
      </ButtonGroup>
      <Grid container spacing={2} marginTop="20px">
        {prizesData.slice(0, numberOfPrizes).map(() => (
          <>
            <Grid item xs={6}>
              <TextField
                size="small"
                id="prizeName"
                label="Prize Name"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                id="prizeName"
                label="Prize Value - Example: $100/£100"
                type="text"
                fullWidth
              />
            </Grid>
          </>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Button
          sx={{ maxWidth: '250px', width: '100%' }}
          variant="contained"
          onClick={() => setExpanded('eligibility')}
        >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default Prizes;
