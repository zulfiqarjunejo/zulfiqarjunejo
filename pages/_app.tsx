import React from 'react';

const App: React.FC<any> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
