import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Eligibility = ({ setExpanded }) => {
  return (
    <>
      <p>
        <span className="text-bold">
          By default your giveaway can be entered by anyone worldwide.{' '}
        </span>
        If you only want users from specific countries to enter your giveaway,
        you can define them below. Any countries not selected will be unable to
        enter.
      </p>
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Button
          sx={{ maxWidth: '250px', width: '100%' }}
          variant="contained"
          onClick={() => setExpanded('customization')}
        >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default Eligibility;
