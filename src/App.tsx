import React from 'react';
import {RecoilRoot} from 'recoil';
import Content from './Content';

const App = () => {
  return (
    <RecoilRoot>
      <Content />
    </RecoilRoot>
  );
};

export default App;
