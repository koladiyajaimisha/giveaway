import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import Header from "src/layouts/SidebarLayout/Header";
import { Helmet } from "react-helmet-async";
import ActiveGiveaways from "./ActiveGiveaways";

const ManageGiveaway = () => {
  return (
    <>
      <Helmet>
        <title>Manage giveaway</title>
      </Helmet>
      <div className="px-5">
        <Grid container spacing={4} marginTop="20px">
          <Grid item xs={4}>
            <Card variant="outlined">
              <CardContent className="text-center">
                <div className="flex items-center">
                  <CheckCircleRoundedIcon className="mr-4 text-4xl" />
                  <div className="text-center w-full">
                    <Typography className="text-lg font-medium" gutterBottom>
                      Active Giveaways
                    </Typography>
                    <Typography className="text-sm" gutterBottom>
                      0
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <CardContent className="text-center">
                <div className="flex items-center">
                  <FactCheckRoundedIcon className="mr-4 text-4xl" />
                  <div className="text-center w-full">
                    <Typography className="text-lg font-medium" gutterBottom>
                      Total Entries
                    </Typography>
                    <Typography className="text-sm" gutterBottom>
                      0
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <CardContent className="text-center">
                <div className="flex items-center">
                  <CardGiftcardRoundedIcon className="mr-4 text-4xl" />
                  <div className="text-center w-full">
                    <Typography className="text-lg font-medium" gutterBottom>
                      Total Winners
                    </Typography>
                    <Typography className="text-sm" gutterBottom>
                      0
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <ActiveGiveaways/>
      </div>
    </>
  );
};

export default ManageGiveaway;
