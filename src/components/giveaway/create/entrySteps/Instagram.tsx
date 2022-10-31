import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import instagram_icon from '../../../../images/instagram_icon.svg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import { CloseOutlined } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

import { Step } from '../../interface';

const InstagramOptions = [
  {
    label: 'Visit on Instagram',
    value: 'instagram_visit'
  },
  {
    label: 'View Post on Instagram',
    value: 'instagram_view'
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

const Instagram: React.FC<Props> = ({
  index,
  step,
  onDeleteClick,
  onInputChange
}) => {
  const UrlDescription = useMemo(() => {
    switch (step.action) {
      case 'instagram_visit':
        return 'Username';
      case 'instagram_view':
        return 'Post URL (Photos or Videos must be public)';
      default:
        return '';
    }
  }, [step]);

  return (
    <Box className="bg-fuchsia-700 bg-opacity-10 hover:bg-opacity-20 p-3">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <div className="flex items-center w-full">
          <img className="w-10" src={instagram_icon} />
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
            {InstagramOptions.map((option) => (
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
              {step.action === 'instagram_visit' ? '@' : ' URL'}
            </Button>
            <input
              className="w-full border border-gray-400 outline-none pl-2"
              type="text"
              placeholder={
                step.action === 'instagram_visit'
                  ? 'giveawaylab'
                  : 'https://www.instagram.com/p/Bn43FsqjIC1/'
              }
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

export default Instagram;
