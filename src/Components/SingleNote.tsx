import React from 'react';
import { Grid } from '@mui/material';
import SettingsMenu from './SettingsMenu';
import styled from '@emotion/styled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type IProps = {
  todo: {
    id: number;
    title: string;
    status: boolean;
  };
};

const SingleNote = ({ todo: { id, title, status } }: IProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <NoteContainer>
        <div className='details'>
          <h2 className='title'>{title}</h2>
          <p className='description'>{title + title}</p>
        </div>
        <div className='bottom-content'>
          <span className='date'>{id}</span>
          <div className='actions'>
            <button className='btn more'>
              <i>
                <MoreHorizIcon className='icon' />
              </i>
            </button>
            <SettingsMenu id={id} />
          </div>
        </div>
      </NoteContainer>
    </Grid>
  );
};

const NoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 230px;
  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1rem 1.2rem 1.2rem;

  .details {
    max-height: 165px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    &:hover::-webkit-scrollbar {
      width: 5px;
    }
    &:hover::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 25px;
    }
    &:hover::-webkit-scrollbar-thumb {
      background: #e6e6e6;
      border-radius: 25px;
    }
    .title {
      font-size: 1.2rem;
      font-weight: 500;
    }
    .description {
      font-size: 1rem;
      font-weight: 400;
      color: #575757;
      margin-top: 0.3rem;
    }
  }

  .bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.4rem;
    padding-top: 0.5rem;
    border-top: 1px solid #ccc;

    .more {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0.3rem 0.1rem 0.3rem 0.7rem;
    }
    .iocn {
      font-size: 1.3rem;
      color: #6d6d6d;
      margin-top: 0.2rem;
      display: inline-block;
      cursor: pointer;
    }

    .actions {
      position: relative;

      :hover .setting-menu {
        transform: scale(1);
      }
    }
  }
`;

export default SingleNote;
