import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import twitter_icon from '../../../../images/twitter_icon.svg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import { CloseOutlined } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

import { Step } from '../../interface';

const twitterOptions = [
  {
    label: 'Follow on Twitter',
    value: 'twitter_follow'
  },
  {
    label: 'Tweet this on Twitter',
    value: 'twitter_tweet'
  },
  {
    label: 'Retweet Tweet',
    value: 'twitter_retweet'
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

const Twitter: React.FC<Props> = ({
  index,
  step,
  onDeleteClick,
  onInputChange
}) => {
  const UrlDescription = useMemo(() => {
    switch (step.action) {
      case 'twitter_follow':
        return 'Username';
      case 'twitter_tweet':
        return "We will automatically include a link to your giveaway if you don't include one.";
      case 'twitter_retweet':
        return 'Tweet URL';
      default:
        return '';
    }
  }, [step]);

  return (
    <Box className="bg-sky-500 bg-opacity-10 hover:bg-opacity-20 p-3">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <div className="flex items-center w-full">
          <img className="w-10" src={twitter_icon} />
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
            {twitterOptions.map((option) => (
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
          {step.action === 'twitter_tweet' ? (
            <textarea
              rows={4}
              className="w-full mt-3 border border-gray-400 outline-none pl-2"
              placeholder="I'm in the running to win a giveaway thanks to @GiveLab! #giveaway"
              name="tweet"
              onChange={(event) => onInputChange(event, index)}
            />
          ) : (
            <Box display="flex" width="100%" className="mt-3">
              <Button
                variant="contained"
                component="div"
                className="font-normal rounded-tl-md whitespace-nowrap rounded-bl-md rounded-tr-none rounded-br-none bg-slate-300 text-black"
              >
                {step.action === 'twitter_follow' ? '@' : ' URL'}
              </Button>
              <input
                className="w-full border border-gray-400 outline-none pl-2"
                type="text"
                placeholder={
                  step.action === 'twitter_follow'
                    ? 'GiveLab'
                    : 'https://twitter.com/GiveLab/status/1044655790752235520'
                }
                name="url"
                onChange={(event) => onInputChange(event, index)}
              />
            </Box>
          )}
          <Typography>{UrlDescription}</Typography>
        </>
      )}
    </Box>
  );
};

export default Twitter;
