import React, { useState } from 'react';
import { Box, Button, Container, Grid, Paper, Typography, TextField } from '@mui/material';
import axios from 'axios';

const PDFComponent = () => {    
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [fileURL, setFileURL] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Create a temporary URL for the selected file
    setFileURL(URL.createObjectURL(selectedFile));
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('method', 'PDF');
      formData.append('content', file);
      console.log("this is my formadata",formData.content) 
    }
  };

  const textFieldStyle = {
    border: 'none',
    resize: 'none',
    outline: 'none',
    boxShadow: 'none',
  };

  return (
    <Container maxWidth="lg">
      <Box mt={3} textAlign="center">
        <Typography variant="h4">PDF Uploader and Summarizer</Typography>
      </Box>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Display the uploaded file in an iframe */}
            {fileURL && <iframe src={fileURL} title="Uploaded File" style={{ width: '100%', height: '400px' }} />}

            {/* Center the "Choose File" button */}
            <Box mt={2} textAlign="center" mb={2}>
              <input type="file" onChange={handleFileChange} />
            </Box>

            <Box mt={2} textAlign="center" mb={2}>
              <Button variant="contained" color="primary" onClick={handleUpload}>
                Upload
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <TextField
              label="Summary"
              multiline
              rows={20}
              fullWidth
              variant="outlined"
              value={summary}
              disabled
              inputProps={{ style: textFieldStyle }}
              sx={{
                flex: 1,
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PDFComponent;


