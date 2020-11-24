import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';
import './custom.css';

const App = () => {
  console.log('###: Some log');

  return <div className={cn(s.header, 'red')}>This is App</div>;
};

export default App;
