import React from 'react';
import { StyleProvider } from '@providers/all';
import IconButton from '@atoms/IconButton';
import * as I from '@assets/icons/fileIcons'

const ralewayUrl = 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[ralewayUrl]}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton><I.iconUpload /></IconButton>
      </div>
    </StyleProvider>
  );
};

export default Home;
