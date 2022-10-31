import React, { useEffect, useImperativeHandle, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import { Typography } from '@mui/material';
import { GiveawayData } from '../interface';

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

const category = [
  {
    value: 'Gaming',
    label: 'Gaming'
  },
  {
    value: 'Technology',
    label: 'Technology'
  },
  {
    value: 'Beauty & Fashion',
    label: 'Beauty & Fashion'
  },
  {
    value: 'Food',
    label: 'Food'
  },
  {
    value: 'Health & Fitness',
    label: 'Health & Fitness'
  },
  {
    value: 'Music',
    label: 'Music'
  },
  {
    value: 'Nonprofits & Activism',
    label: 'Nonprofits & Activism'
  },
  {
    value: 'People & Blogs',
    label: 'People & Blogs'
  },
  {
    value: 'Sports',
    label: 'Sports'
  },
  {
    value: 'Travel & Events',
    label: 'Travel & Events'
  },
  {
    value: 'Other',
    label: 'Other'
  }
];

interface Props {
  setExpanded: (s: string) => void;
  giveawayData: GiveawayData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customHandleChange: (name: string, value: any) => void;
}

const Details: React.FC<Props> = ({
  setExpanded,
  giveawayData,
  onInputChange,
  customHandleChange
}) => {
  const [description, setDescription] = useState(EditorState.createEmpty());
  const [rules, setRules] = useState(EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState({
    description: '',
    rules: ''
  });

  const onDescriptionEditorStateChange = (state: EditorState) => {
    setDescription(() => state);
    convertContentToHTML(description, 'description');
  };

  const onRulesEditorStateChange = (state: EditorState) => {
    setRules(() => state);
    convertContentToHTML(rules, 'rules');
  };

  const convertContentToHTML = (state: EditorState, name: string) => {
    let currentContentAsHTML = convertToHTML(state.getCurrentContent());
    setConvertedContent({ ...convertedContent, [name]: currentContentAsHTML });
    customHandleChange(name, currentContentAsHTML);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            name="giveaway_name"
            value={giveawayData.giveaway_name}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Description</Typography>
          <Editor
            editorState={description}
            onEditorStateChange={onDescriptionEditorStateChange}
            toolbarHidden={false}
            wrapperClassName="border h-80"
            editorClassName="h-auto"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Rules</Typography>
          <Editor
            editorState={rules}
            onEditorStateChange={onRulesEditorStateChange}
            toolbarHidden={false}
            wrapperClassName="border h-80"
            editorClassName="h-auto"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="date"
            label="Starts"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            name="start_date"
            value={giveawayData.start_date}
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="date"
            label="End"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            name="end_date"
            value={giveawayData.end_date}
            onChange={onInputChange}
          />
        </Grid>
        {/* <Grid item xs={4}>
          <TextField
            id="outlined-select-currency-native"
            select
            label="TimeZone"
            SelectProps={{
              native: true
            }}
            fullWidth
            name="timezone"
            value={giveawayData.start_date}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid> */}
        <Grid item xs={4}>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Category"
            SelectProps={{
              native: true
            }}
            fullWidth
            name="category"
            value={giveawayData.category}
            onChange={onInputChange}
          >
            <option selected disabled>
              -- Select --
            </option>
            {category.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Button
          sx={{ maxWidth: '250px', width: '100%' }}
          variant="contained"
          onClick={() => setExpanded('steps')}
        >
          Continue
        </Button>
      </Box>
    </div>
  );
};

export default Details;
