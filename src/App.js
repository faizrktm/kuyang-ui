import React from 'react';

import Box from './components/Box';

function App() {
  return (
    <Box background="chill-1" pad="large" margin="large" gap="large" direction="row">
      <Box flex="shrink" background="chill-2">Inside a row box</Box>
      <Box gap="large" background="brand" pad="small" flex="grow">
        <div>Nested a column box</div>
        <div>Nested a column box</div>
      </Box>
      <Box flex="grow" background="nature-1" pad="small" round={[{ corner: 'top-right', size: 'large' }, { corner: 'bottom-left', size: 'large' }]}>Inside a row box</Box>
    </Box>
  );
}

export default App;
