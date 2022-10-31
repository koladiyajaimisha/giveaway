import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet-async';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

const HomePageComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          paddingTop="20px"
        >
          <Grid item xs={12}>
            {' '}
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe" />}
                title="Hello, User!"
                subheader="Account Settings"
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  Manage Giveaways
                </Typography>
                <Typography variant="h5" gutterBottom>
                  You currently have 0 active giveaways.
                </Typography>
                <Button
                  sx={{ marginTop: 1, borderRadius: '6px' }}
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/giveaway/create')}
                >
                  Create Giveaway
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePageComponent;
