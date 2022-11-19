import React from 'react';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../app/hooks';
import { openModal } from '../Slices';
import { motion } from 'framer-motion';

const parent = {
  hidden: { opacity: 1, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 1,
      delayChildren: 0.5,
    },
  },
};

const child = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AddBox = () => {
  const dispatch = useAppDispatch();
  const handleOpenModal = (): void => {
    dispatch(openModal({ title: 'Add a new note' }));
  };
  return (
    <motion.div
      onClick={handleOpenModal}
      variants={parent}
      initial='hidden'
      animate='visible'
    >
      <MyBox>
        <motion.div
          className='icon'
          variants={child}
          initial='hidden'
          animate='visible'
        >
          <i>
            <AddIcon />
          </i>
        </motion.div>
        <motion.h2
          variants={child}
          initial='hidden'
          animate='visible'
          className='box-title'
        >
          Add New Note
        </motion.h2>
      </MyBox>
    </motion.div>
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
