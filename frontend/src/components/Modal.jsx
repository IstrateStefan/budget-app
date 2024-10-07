import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import InputAmount from './Input/InputAmount';

const Modal = ({ open, handleOpen, category, onSubmit }) => {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>{category.category}</DialogHeader>
      <DialogBody>
        <InputAmount />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={onSubmit}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;
