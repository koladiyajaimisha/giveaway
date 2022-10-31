import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CloseOutlined } from '@mui/icons-material';

const Customization = () => {
  const [image, setImage] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const [file] = e.target.files;
    if (file) {
      setImageFile(file);
      const src = URL.createObjectURL(file);
      setImage(src);
    }
  };

  return (
    <>
      <Typography variant="h4">Images & Branding</Typography>
      <Typography marginTop="10px">
        Giveaway Image (Max file size: 5MB)
      </Typography>
      <Typography>
        (We recommend using a 4:3 or 16:9 aspect ratio for images. Example:
        1280×960, 1280×720)
      </Typography>
      <Box display="flex" width="100%" className="mt-5">
        <Button
          variant="contained"
          component="label"
          className="rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none"
        >
          Browse
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={handleImageChange}
          />
        </Button>
        <input
          value={imageFile?.name || ''}
          readOnly
          className="w-full border border-gray-400"
          type="text"
        />
        <Button
          variant="outlined"
          className="rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md"
          onClick={() => {
            setImage('');
            setImageFile(null);
          }}
        >
          <CloseOutlined />
        </Button>
      </Box>
      <img src={image} className="max-w-xs max-h-80 mt-4" />
    </>
  );
};

export default Customization;
