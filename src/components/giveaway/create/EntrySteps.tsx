import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

import YouTube from './entrySteps/YouTube';
import youtube_icon from '../../../images/youtube_icon.svg';
import twitter_icon from '../../../images/twitter_icon.svg';
import facebook_icon from '../../../images/facebook_icon.png';
import instagram_icon from '../../../images/instagram_icon.svg';
import linkedin_icon from '../../../images/linkedin_icon.svg';
import snapchat_icon from '../../../images/snapchat_icon.png';
import Twitter from './entrySteps/Twitter';
import { Step } from '../interface';
import Facebook from './entrySteps/Facebook';
import Instagram from './entrySteps/Instagram';
import Linkedin from './entrySteps/Linkedin';
import Snapchat from './entrySteps/Snapchat';

interface Props {
  setExpanded: (s: string) => void;
  customHandleChange: (name: string, value: any) => void;
}

const EntrySteps: React.FC<Props> = ({ setExpanded, customHandleChange }) => {
  const [steps, setSteps] = useState<Step[]>([]);

  const onDelete = (index: number): void => {
    console.log(index);
    setSteps(() => steps.filter((s, i) => i !== index));
  };

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;

    const newArray = steps.map((item, i) => {
      if (index === i) {
        return { ...item, [event.target.name]: event.target.value };
      } else {
        return item;
      }
    });
    setSteps(newArray);
  };

  useEffect(() => {
    customHandleChange('steps', steps);
  }, [steps]);

  const getStepComponent = (
    step: Step,
    index: number
  ): ReactJSXElement | null => {
    switch (step.type) {
      case 'youtube':
        return (
          <YouTube
            index={index}
            step={step}
            onDeleteClick={onDelete}
            onInputChange={onInputChange}
          />
        );
      case 'twitter':
        return (
          <Twitter
            index={index}
            step={step}
            onDeleteClick={onDelete}
            onInputChange={onInputChange}
          />
        );
      case 'facebook':
        return (
          <Facebook
            index={index}
            step={step}
            onDeleteClick={onDelete}
            onInputChange={onInputChange}
          />
        );
      case 'instagram':
        return (
          <Instagram
            index={index}
            step={step}
            onDeleteClick={onDelete}
            onInputChange={onInputChange}
          />
        );
      case 'linkedin':
        return (
          <Linkedin
            index={index}
            step={step}
            onDeleteClick={onDelete}
            onInputChange={onInputChange}
          />
        );
      case 'snapchat':
        return (
          <Snapchat
            index={index}
            step={step}
            onDeleteClick={onDelete}
            onInputChange={onInputChange}
          />
        );
      default:
        return null;
    }
  };
  console.log('steps', steps);

  const onStepsClick = (type: string): void => {
    if (steps.length < 8) setSteps([...steps, { type }]);
  };

  return (
    <div>
      <Typography>
        Start by choosing entry steps you'd like users to complete below. You
        can re-order steps by dragging and dropping to your preferred layout.
      </Typography>
      <Typography variant="h5" align="center" marginTop="16px">
        {steps.length}/8 Steps Remaining
      </Typography>
      <Typography variant="h3" align="center" marginTop="16px">
        Entry Steps
      </Typography>
      <Grid container spacing={4} marginTop="20px">
        <Grid item xs={3}>
          <Button
            variant="outlined"
            className="text-black"
            startIcon={<img width={26} src={youtube_icon} />}
            fullWidth
            onClick={() => onStepsClick('youtube')}
          >
            Youtube
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            className="text-black"
            startIcon={<img width={26} src={twitter_icon} />}
            fullWidth
            onClick={() => onStepsClick('twitter')}
          >
            Twitter
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            className="text-black"
            startIcon={<img width={26} src={facebook_icon} />}
            fullWidth
            onClick={() => onStepsClick('facebook')}
          >
            Facebook
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            className="text-black"
            startIcon={<img width={26} src={instagram_icon} />}
            fullWidth
            onClick={() => onStepsClick('instagram')}
          >
            Instagram
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            className="text-black"
            startIcon={<img width={26} src={linkedin_icon} />}
            fullWidth
            onClick={() => onStepsClick('linkedin')}
          >
            Linkedin
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            className="text-black"
            startIcon={<img width={26} src={snapchat_icon} />}
            fullWidth
            onClick={() => onStepsClick('snapchat')}
          >
            Snapchat
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} marginTop="26px">
        {steps.map((s, index) => (
          <Grid key={index} item xs={12}>
            {getStepComponent(s, index)}
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Button
          sx={{ maxWidth: '250px', width: '100%' }}
          variant="contained"
          onClick={() => setExpanded('prizes')}
        >
          Continue
        </Button>
      </Box>
    </div>
  );
};

export default EntrySteps;
