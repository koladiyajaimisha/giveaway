import React from 'react';
import { Box, Typography } from '@mui/material';
import youtube_icon from '../../../../images/youtube_icon.svg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import { CloseOutlined } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import { Step } from '../../interface';

const youtubeOptions = [
  {
    label: 'Visit YouTube Channel',
    value: 'youtube_visit'
  },
  {
    label: 'Subscribe to Youtube Channel',
    value: 'youtube_sub'
  },
  {
    label: 'Watch Youtube Video',
    value: 'youtube_watch'
  },
  {
    label: 'Like YouTube Video',
    value: 'youtube_like'
  },
  {
    label: 'Comment on YouTube Video',
    value: 'youtube_comment'
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

const YouTube: React.FC<Props> = ({
  index,
  step,
  onDeleteClick,
  onInputChange
}) => {
  return (
    <Box className="bg-red-600 bg-opacity-10 hover:bg-opacity-20 p-3">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <div className="flex items-center w-full">
          <img className="w-10" src={youtube_icon} />
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
            {youtubeOptions.map((option) => (
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
              placeholder="https://www.youtube.com/user/PewDiePie"
              name="url"
              onChange={(event) => onInputChange(event, index)}
            />
          </Box>
          <Typography>
            {step.action === 'youtube_sub' || step.action === 'youtube_visit'
              ? 'Channel URl'
              : 'Video URL'}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default YouTube;
