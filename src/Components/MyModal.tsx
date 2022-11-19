import React, { useCallback } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { closeModal } from '../Slices';
import MyForm from './MyForm';

const MyModal = () => {
  const open = useAppSelector((state: RootState) => state.modal.visible);
  const title = useAppSelector((state: RootState) => state.modal.title);
  const dispatch = useAppDispatch();

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      fullWidth={true}
      maxWidth={'xs'}
    >
      <DialogTitle className='modal-title'>{title}</DialogTitle>
      <MyForm handleCloseModal={handleCloseModal} />
    </Dialog>
  );
};

export default MyModal;
