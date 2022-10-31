import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import { CloseOutlined } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

import snapchat_icon from '../../../../images/snapchat_icon.png';
import { Step } from '../../interface';

const SnapchatOptions = [
  {
    label: 'Follow on Snapchat',
    value: 'snapchat_follow'
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

const Snapchat: React.FC<Props> = ({
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
    <Box className="bg-yellow-400 bg-opacity-10 hover:bg-opacity-20 p-3">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <div className="flex items-center w-full">
          <img className="w-10" src={snapchat_icon} />
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
            {SnapchatOptions.map((option) => (
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
            <input
              className="w-full border border-gray-400 outline-none pl-2 h-10"
              type="text"
              placeholder="Username"
              name="url"
              onChange={(event) => onInputChange(event, index)}
            />
          </Box>
          <Typography>Username</Typography>
        </>
      )}
    </Box>
  );
};

export default Snapchat;
