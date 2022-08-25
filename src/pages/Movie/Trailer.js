import React from 'react';
import styled from '@emotion/styled';

function Trailer({ video }) {
  return (
    <MovieTrailer>
      <DarkPaperContainer>
        <video controls width="560" height="315">
          <source src={video} deletecommandtype="video/webm" />
          <source src={video} deletecommandtype="video/mp4" />
          <source src={video} type="video/quicktime" />
        </video>
      </DarkPaperContainer>
    </MovieTrailer>
  );
}

export default Trailer;

const MovieTrailer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.palette.test.card};
  box-shadow: 5px 7px 20px -4px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 0;
`;

const DarkPaperContainer = styled.div`
  position: relative;
`;

// const DarkPaper = styled.div`
//   position: absolute;
//   z-index: 98;
//   width: 100%;
//   height: 100%;
//   background-color: black;
//   opacity: 0.4;
// `;

// const PlayButton = styled(PlayIcon)`
//   position: absolute;
//   z-index: 99;
//   left: 44%;
//   top: 40%;
//   fill: ${({ theme }) => theme.palette.test.main};

//   :hover {
//     fill: ${({ theme }) => theme.palette.test.second};
//     cursor: pointer;
//   }
// `;
