import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { FC } from 'react';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { ITodo, ITodoList } from '../Interfaces';
import AddBox from './AddBox';
import SingleNote from './SingleNote';

const Container: FC = () => {
  const todoList: ITodoList = useAppSelector(
    (state: RootState) => state.todo.todoList
  );

  return (
    <ContainerDiv>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12, lg: 10 }}
      >
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <AddBox />
        </Grid>
        {todoList &&
          todoList?.map((todo: ITodo) => (
            <SingleNote todo={todo} key={todo?.id} />
          ))}
      </Grid>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  padding: 3rem 2rem;
`;

export default Container;
