import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useForm, SubmitHandler } from 'react-hook-form';
import { todoSchema } from '../Schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { ITodo } from '../Interfaces';
import { useAppDispatch } from '../app/hooks';
import { addTodo, closeModal } from '../Slices';

interface FormProps {
  handleCloseModal: () => void;
}

interface IFormInput {
  title: string;
  description: string;
}

const MyForm = ({ handleCloseModal }: FormProps) => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(todoSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const todo: ITodo = { ...data, id: Date.now(), status: false };
    dispatch(addTodo(todo));
    reset({
      description: '',
      title: '',
    });
    dispatch(closeModal());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent style={{ marginTop: '1rem' }}>
        <TextField
          autoFocus
          id='title'
          label='Title'
          type='text'
          fullWidth
          variant='standard'
          style={{ marginBottom: '1rem' }}
          {...register('title')}
          error={errors.title?.message !== ''}
          helperText={errors.title?.message}
        />
        <TextField
          id='description'
          label='Description'
          multiline
          fullWidth
          maxRows={3}
          variant='standard'
          style={{ marginBottom: '1rem' }}
          {...register('description')}
        />
      </DialogContent>
      <DialogActions>
        <Button color={'error'} onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button type='submit' startIcon={<AddIcon />}>
          Add
        </Button>
      </DialogActions>
    </form>
  );
};

export default MyForm;
