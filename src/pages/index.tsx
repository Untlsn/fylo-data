import React from 'react';
import { StyleProvider } from '@providers/all';
import FilesLoader from '@organisms/FilesLoader';

const ralewayUrl = 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[ralewayUrl]}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <FilesLoader />
      </div>
    </StyleProvider>
  );
};

export default Home;
