import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { ThemeProvider } from '../context/ThemeContext';

import '../scss/main.scss';

library.add(fab, fas);

const App = ({ Component, pageProps }) => (
  <div className='App'>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
);

export default App;
