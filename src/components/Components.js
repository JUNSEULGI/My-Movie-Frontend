import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function Components() {
  return (
    <>
      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
      <Button>asdf</Button>
      <MainColor>MainColor</MainColor>
      <SecondColor>SecondColor</SecondColor>
      <ThirdColor>ThirdColor</ThirdColor>
      <FourColor>FourColor</FourColor>
    </>
  );
}

export default Components;

const MainColor = styled.div`
  /* background-color: #ff6d00; */
  /* color: #f09819; */
  width: 200px;
  height: 200px;
  background: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
`;
const SecondColor = styled.div`
  background-color: #ff9201;
`;
const ThirdColor = styled.div`
  background-color: #ffab41;
`;
const FourColor = styled.div`
  background-color: #ffd181;
`;
