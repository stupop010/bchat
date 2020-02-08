import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const EditMessage = () => {
  return (
    <Box>
      <form>
        <TextField size="small" label="Outlined" variant="outlined" />
      </form>
    </Box>
  );
};

export default EditMessage;
