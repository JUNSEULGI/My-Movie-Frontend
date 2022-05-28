import React from 'react';
import styled from '@emotion/styled';
import MyViewLayout from '../../layout/Layout';
import Aside from '../../components/Aside';
import { style } from '@mui/system';

function List() {
  function ListLayout() {
    return <Test>list</Test>;
  }
  return <MyViewLayout leftMenu={<Aside />} center={<ListLayout />} />;
}

export default List;

const Test = styled.div`
  background-color: antiquewhite;
`;
