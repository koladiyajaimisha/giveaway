import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Grid, Card, CardContent, Snackbar } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

import Details from "./Details";
import EntrySteps from "./EntrySteps";
import Prizes from "./Prizes";
import Eligibility from "./Eligibility";
import Customization from "./Customization";
import { GiveawayData } from "../interface";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate } from "react-router";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return (
    <MuiAlert
      action={false}
      elevation={6}
      ref={ref}
      variant="filled"
      {...props}
    />
  );
});

const initialData = {
  giveaway_name: "",
  description: "",
  rules: "",
  start_date: "",
  end_date: "",
  category: "",
  steps: [],
  prizes: [],
  image: "",
};

const CreateGiveawayContainer = () => {
  const [expanded, setExpanded] = useState<string | false>("details");
  const [giveawayData, setGiveawayData] = useState<GiveawayData>(initialData);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGiveawayData({ ...giveawayData, [name]: value });
  };

  const customHandleChange = (name: string, value: any) => {
    setGiveawayData({ ...giveawayData, [name]: value });
  };

  const isValidForm = (): boolean => {
    let isValid = true;
    let errorMess = "";
    if (!giveawayData.giveaway_name) {
      errorMess = "Title is Required";
      isValid = false;
    } else if (!giveawayData.description) {
      errorMess = "Description can't be blank";
      isValid = false;
    } else if (!giveawayData.start_date) {
      errorMess = "Start date is required";
      isValid = false;
    } else if (!giveawayData.end_date) {
      errorMess = "End date is required";
      isValid = false;
    } else if (!giveawayData.category) {
      errorMess = "Category is required";
      isValid = false;
    } else if (!giveawayData.steps.length) {
      errorMess = "Giveaway must have at least 1 step";
      isValid = false;
    } else if (
      giveawayData.steps.some(
        (p) => !p.action || !p.title || !p.type || !(p.url || p.tweet)
      )
    ) {
      errorMess = "Please fill steps information";
      isValid = false;
    } else if (giveawayData.prizes.some((p) => !p.name || !p.value)) {
      errorMess = "Prizes data is required";
      isValid = false;
    } else if (!giveawayData.image) {
      errorMess = "Image is required";
      isValid = false;
    }
    console.log("message", errorMess);
    setErrorMessage(errorMess);

    return isValid;
  };

  const onCreateCampaign = () => {
    if (isValidForm()) {
      navigate("/giveaway/manage");
    }
  };

  return (
    <>
      <Helmet>
        <title>Create giveaway</title>
      </Helmet>
      <Container maxWidth="lg" className="pb-9">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          paddingTop="20px"
          paddingBottom="20px"
        >
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Accordion
                  expanded={expanded === "details"}
                  onChange={handleAccordionChange("details")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="details-content"
                    id="details-header"
                  >
                    <Typography variant="h4">Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Details
                      setExpanded={setExpanded}
                      giveawayData={giveawayData}
                      onInputChange={onInputChange}
                      customHandleChange={customHandleChange}
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "steps"}
                  onChange={handleAccordionChange("steps")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="steps-content"
                    id="steps-header"
                  >
                    <Typography variant="h4">Steps</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <EntrySteps
                      setExpanded={setExpanded}
                      customHandleChange={customHandleChange}
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "prizes"}
                  onChange={handleAccordionChange("prizes")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="steps-content"
                    id="steps-header"
                  >
                    <Typography variant="h4">Prizes</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Prizes
                      setExpanded={setExpanded}
                      customHandleChange={customHandleChange}
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "eligibility"}
                  onChange={handleAccordionChange("eligibility")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="steps-content"
                    id="steps-header"
                  >
                    <Typography variant="h4">Eligibility</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Eligibility setExpanded={setExpanded} />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "customization"}
                  onChange={handleAccordionChange("customization")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="steps-content"
                    id="steps-header"
                  >
                    <Typography variant="h4">Customization</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Customization customHandleChange={customHandleChange} />
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box className="flex justify-center items-center my-5">
          <Button variant="contained" onClick={onCreateCampaign}>
            Create Campaign
          </Button>
          <Button variant="contained" className="bg-gray-400 ml-3">
            Save to Drafts
          </Button>
        </Box>
      </Container>
      {errorMessage && (
        <Snackbar
          open={!!errorMessage}
          autoHideDuration={2000}
          onClose={() => setErrorMessage("")}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          className="z-50"
        >
          <Alert
            onClose={() => setErrorMessage("")}
            severity="error"
            sx={{ width: "100%" }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default CreateGiveawayContainer;
