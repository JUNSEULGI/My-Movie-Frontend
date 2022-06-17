import React from 'react';
import styled from '@emotion/styled';

import MyViewLayout from '../../layout/Layout';

function People() {
  function PeopleLayout() {
    return <div>People</div>;
  }
  return (
    <MyViewLayout
      // leftMenu={<Aside />}
      center={<PeopleLayout />}
    />
  );
}

export default People;
