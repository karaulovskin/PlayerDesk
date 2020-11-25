import React from 'react';
import PlayControls from './components/PlayControls/PlayControls';

import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.App}>
      <PlayControls />
    </div>
  );
};

export default App;
