import React from 'react';
import styled from '@emotion/styled';
import { useAppDispatch } from '../app/hooks';
import { deleteTodo, switchStatus } from '../Slices';

type SettingsProps = {
  id: number;
};

const SettingsList = styled.ul`
  list-style-type: none;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  right: -5px;
  padding: 0.4rem 0;
  min-width: 150px;
  transform: scale(0);
  transform-origin: bottom right;
  transition: all 0.3s ease-in-out;

  li {
    .btn {
      height: 25px;
      border-radius: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding: 1rem 0.8rem;

      &:hover {
        background-color: #f5f5f5;
      }
    }
    i {
      padding-right: 0.4rem;
    }
  }
`;

const SettingsMenu = ({ id }: SettingsProps) => {
  const dispatch = useAppDispatch();
  return (
    <SettingsList className='setting-menu'>
      <li>
        <button
          className='btn del-btn'
          onClick={() => dispatch(switchStatus(id))}
        >
          <i className='ri-delete-bin-line'></i>
          Mark as Done
        </button>
      </li>
      <li>
        <button className='btn edit-btn' onClick={() => null}>
          <i className='ri-pencil-line'></i>
          Edit
        </button>
      </li>
      <li>
        <button
          className='btn del-btn'
          onClick={() => dispatch(deleteTodo(id))}
        >
          <i className='ri-delete-bin-line'></i>
          Delete
        </button>
      </li>
    </SettingsList>
  );
};

export default SettingsMenu;
