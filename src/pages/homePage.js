import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import TextComponent from '../components/TextComponent'; // Import your Text component here
import UrlComponent from '../components/URLComponent'; // Import your URL component here
import PDFComponent from '../components/PDFComponent'; // Import your PDF component here

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState('Text');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={() => handleOptionChange('Text')}
          variant={selectedOption === 'Text' ? 'contained' : 'outlined'}
        >
          Text
        </Button>
        <Button
          onClick={() => handleOptionChange('URL')}
          variant={selectedOption === 'URL' ? 'contained' : 'outlined'}
        >
          URL
        </Button>

        <Button
          onClick={() => handleOptionChange('PDF')}
          variant={selectedOption === 'PDF' ? 'contained' : 'outlined'}
        >
          PDF
        </Button>
      </ButtonGroup>
      {selectedOption === 'Text' ? <TextComponent /> : null}
      {selectedOption === 'URL' ? <UrlComponent /> : null}
      {selectedOption === 'PDF' ? <PDFComponent /> : null}
    </Box>
  );
};

export default HomePage;
