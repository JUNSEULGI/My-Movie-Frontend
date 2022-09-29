import React from 'react';
import styled from '@emotion/styled';
import { Typography, Box, Chip } from '@mui/material';
import { MyLink } from '../../components/Link';

function Character({ data }) {
  const { id, name, profile_image, known_for, department } = data;

  return (
    <Container sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <PortraitWrapper>
        <Portrait src={profile_image} />
      </PortraitWrapper>
      <Box style={{ flex: 2 }}>
        <TitleBox>
          <SubTitle variant="subtitle2">{department}</SubTitle>
          <MyLink to={`/people/${id}`}>
            <Title variant="h3" component="span">
              {name}
            </Title>
          </MyLink>
        </TitleBox>
        <FlexBox>
          <Title variant="body" style={{ width: 50 }}>
            출연작
          </Title>
          <ChipBox>
            {known_for.map(
              item =>
                item.title !== '' && (
                  <Chip
                    key={item.id}
                    label={item.title}
                    variant="outlined"
                    size="small"
                    clickable
                    component="a"
                    href={`/movie/${item.id}`}
                  />
                )
            )}
          </ChipBox>
        </FlexBox>
      </Box>
    </Container>
  );
}

const Container = styled(Box)`
  display: flex;
  gap: 20px;
  padding-bottom: 40px;
`;

const PortraitWrapper = styled.div`
  flex: 1;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 7px 20px -4px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const Portrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FlexBox = styled(Box)`
  display: flex;
  margin-bottom: 20px;
  gap: 5px;
`;

const TitleBox = styled(FlexBox)`
  flex-direction: column;
`;

const SubTitle = styled(Typography)`
  font-weight: bold;
  color: gray;
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.common.white};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChipBox = styled(Box)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;
`;

export default Character;
