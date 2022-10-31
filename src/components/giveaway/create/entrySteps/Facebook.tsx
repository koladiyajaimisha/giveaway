import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import facebook_icon from '../../../../images/facebook_icon.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import { CloseOutlined } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import { Step } from '../../interface';

const facebookOptions = [
  {
    label: 'Visit Page on Facebook',
    value: 'facebook_visit'
  },
  {
    label: 'View Post on Facebook',
    value: 'facebook_view'
  },
  {
    label: 'Share on Facebook',
    value: 'facebook_url'
  }
];

interface Props {
  index: number;
  step: Step;
  onDeleteClick: (index: number) => void;
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => void;
}

const Facebook: React.FC<Props> = ({
  index,
  step,
  onDeleteClick,
  onInputChange
}) => {
  const UrlDescription = useMemo(() => {
    switch (step.action) {
      case 'facebook_visit':
        return 'Profile URl';
      case 'facebook_view':
        return 'Post URL (Post must be public)';
      case 'facebook_url':
        return 'Enter the URL you wish to be shared on Facebook. Leave this empty if you wish to use your giveaway URL.';
      default:
        return '';
    }
  }, [step]);

  const UrlPlaceholder = useMemo(() => {
    switch (step.action) {
      case 'facebook_visit':
        return 'https://www.facebook.com/givelabcom';
      case 'facebook_view':
        return 'https://www.facebook.com/givelabcom/photos/a.217387769133071/217387855799729/';
      case 'facebook_url':
        return 'https://givelab.com';
      default:
        return '';
    }
  }, [step]);

  return (
    <Box className="bg-blue-600 bg-opacity-10 hover:bg-opacity-20 p-3">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <div className="flex items-center w-full">
          <img className="w-10" src={facebook_icon} />
          <TextField
            select
            label="Step"
            SelectProps={{
              native: true
            }}
            size="small"
            className="ml-5 max-w-lg w-full"
            name="action"
            onChange={(event) => onInputChange(event, index)}
          >
            <option selected disabled={true}>
              -- Choose Step --
            </option>
            {facebookOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <Button
          variant="outlined"
          className="rounded-md"
          color="error"
          onClick={() => onDeleteClick(index)}
        >
          <CloseOutlined />
        </Button>
      </Box>
      {step.action && (
        <>
          <Divider className="mt-2" />
          <Box display="flex" width="100%" className="mt-3">
            <Button
              variant="contained"
              component="div"
              className="font-normal rounded-tl-md whitespace-nowrap rounded-bl-md rounded-tr-none rounded-br-none bg-slate-300 text-black"
            >
              Step Title
            </Button>
            <input
              className="w-full border border-gray-400 outline-none pl-2"
              type="text"
              placeholder="Like YouTube Video"
              name="title"
              onChange={(event) => onInputChange(event, index)}
            />
          </Box>
          <Box display="flex" width="100%" className="mt-3">
            <Button
              variant="contained"
              component="div"
              className="font-normal rounded-tl-md whitespace-nowrap rounded-bl-md rounded-tr-none rounded-br-none bg-slate-300 text-black"
            >
              Worth # Entries
            </Button>
            <input
              className="w-3/5 border border-gray-400 outline-none pl-2"
              placeholder="Number of Entries"
              type="number"
              name="points"
              onChange={(event) => onInputChange(event, index)}
            />
          </Box>
          <Box display="flex" width="100%" className="mt-3">
            <Button
              variant="contained"
              component="div"
              className="font-normal rounded-tl-md whitespace-nowrap rounded-bl-md rounded-tr-none rounded-br-none bg-slate-300 text-black"
            >
              URL
            </Button>
            <input
              className="w-full border border-gray-400 outline-none pl-2"
              type="text"
              placeholder={UrlPlaceholder}
              name="url"
              onChange={(event) => onInputChange(event, index)}
            />
          </Box>
          <Typography>{UrlDescription}</Typography>
        </>
      )}
    </Box>
  );
};

export default Facebook;
