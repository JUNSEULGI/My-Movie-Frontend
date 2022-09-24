import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';
import PropTypes from 'prop-types';
import { Typography, Tabs, Tab, Box } from '@mui/material';
import MyViewLayout from '../../layout/Layout';
import LoadWrap from '../../components/Loading/LoadWrap';
import Content from './Content';
import { CardContainer } from '../../components/CardContainer';
import { CONTENTS_MOCK, CHARACTERS_MOCK } from '../../assets/mockData/contents';
import { NoResult } from './NoResult';
import NewMovie from './NewMovie';
import Character from './Character';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function Search() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [actorLoading, setActorLoading] = useState(true);
  const [movieLoading, setMovieLoading] = useState(true);
  const [searchedActor, setSearchedActor] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [backgroundInfo, setBackgroundInfo] = useState({});
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(searchedActor);

  const getMovie = async () => {
    setMovieLoading(true);
    try {
      const { data } = await fetcher(`${API.search_movie}${search}`);
      setSearchedMovie(data.result);
    } catch (e) {
      console.log(e);
    }
    setMovieLoading(false);
  };

  const getActor = async () => {
    setActorLoading(true);
    try {
      const { data } = await fetcher(`${API.search_actor}${search}`);
      setSearchedActor(data.result);
    } catch (e) {
      console.log(e);
    }
    setActorLoading(false);
  };

  useEffect(() => {
    getMovie();
    getActor();
  }, []);

  useEffect(() => {
    if (!movieLoading && !actorLoading) setLoading(false);
  }, [movieLoading, actorLoading]);

  function SearchContainer() {
    return (
      <Box sx={{ width: '100%' }}>
        <TitleContainer>
          <Title variant="h2">
            <OrangeText>"{query.get('q')}"</OrangeText>에 대한 검색 결과입니다.
          </Title>
        </TitleContainer>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs ">
            <Tab label="컨텐츠" {...a11yProps(0)} />
            <Tab label="인물" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {searchedMovie.length > 0 ? (
            <ContentsContainer sx={{ borderBottom: 1, borderColor: 'divider' }}>
              {searchedMovie.map(content => (
                <Content key={content.id} data={content} />
              ))}
            </ContentsContainer>
          ) : (
            <NoResult />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {searchedActor.length > 0 ? (
            <CharactersContainer>
              {searchedActor.map(character => (
                <Character key={character.id} data={character} />
              ))}
            </CharactersContainer>
          ) : (
            <NoResult />
          )}
        </TabPanel>
        <Box>
          <Title variant="h3" style={{ marginBottom: 20 }}>
            최신 개봉작
          </Title>
          {CONTENTS_MOCK && (
            <NewMoviesContainer>
              {CONTENTS_MOCK.map(content => (
                <NewMovie key={content.id} data={content} />
              ))}
            </NewMoviesContainer>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <MyViewLayout
      loginBack={backgroundInfo}
      center={<LoadWrap loading={loading} content={<SearchContainer />} />}
    />
  );
}

const TitleContainer = styled(CardContainer)`
  margin: 60px 0 30px;
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.common.white};
`;

const OrangeText = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;

const ContentsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px 10px;
  padding-bottom: 200px;
  @media ${p => p.theme.deviceSize.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${p => p.theme.deviceSize.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 40px;
  @media ${p => p.theme.deviceSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NewMoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 10px;
  margin-bottom: 100px;
  @media ${p => p.theme.deviceSize.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${p => p.theme.deviceSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Search;
