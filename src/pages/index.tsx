import React from 'react';
import { StyleProvider } from '@providers/all';
import UsedData from '@organisms/UsedData';
import FilesLoader from '@organisms/FilesLoader';
import FlexWrap from '@components/templates/FlexWrap';


const ralewayUrl = 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap';

const storage = {
  full: 1000,
  left: 185,
  used: 815,
};

const Home = () => {
  return (
    <StyleProvider fonts={[ralewayUrl]}>
      <FlexWrap>
        <FilesLoader />
        <UsedData {...storage} />
      </FlexWrap>
    </StyleProvider>
  );
};

export default Home;
