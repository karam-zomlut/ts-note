import React from 'react';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../app/hooks';
import { openModal } from '../Slices';

const AddBox = () => {
  const dispatch = useAppDispatch();
  const handleOpenModal = (): void => {
    dispatch(openModal({ title: 'Add a new note' }));
  };
  return (
    <MyBox onClick={handleOpenModal}>
      <div className='icon'>
        <i>
          <AddIcon />
        </i>
      </div>
      <h2 className='box-title'>Add New Note</h2>
    </MyBox>
  );
};

const MyBox = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1rem 1.2rem 1.2rem;
  cursor: pointer;

  .icon {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px dashed #88abff;
    color: #88abff;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;

    svg {
      font-size: 2.3rem;
      margin-bottom: 0;
    }
  }

  .box-title {
    color: #88abff;
    font-weight: 500;
    margin-top: 1.2rem;
    font-size: 1rem;
  }
`;

export default AddBox;
