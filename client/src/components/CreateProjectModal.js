import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const CreateProjectModal = ({ open }) => {
  return (
    <Dialog open={open}>
      <p>Modal</p>
    </Dialog>
  );
};

export default CreateProjectModal;
