import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Popper,
  Autocomplete,
  TextField,
  Paper,
} from '@mui/material';

function Nav() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);

  //토큰 가져오기
  const access_token = localStorage.getItem('access_token');
  useEffect(() => {
    fetch(`http://6b44-110-11-194-32.ngrok.io/users/info`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        setUserInfo(res.result);
      });
  }, []);

  const { nickname, email, Profile_image } = userInfo;

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const moveMoviePage = id => {
    navigate(`/movie/${id}`);
  };

  return (
    <NavBar scrollPosition={scrollPosition}>
      <MyToolbar sx={{ display: 'flex', alignContent: 'center' }}>
        <a href="/list">
          <Logo scrollPosition={scrollPosition} component="h1">
            My View!
          </Logo>
          {/* <a href="/">로그인으로</a> */}
        </a>
        <Box sx={{ display: 'flex', alignContent: 'baseline' }}>
          <NavSearch
            sx={{ marginTop: '-6px' }}
            PaperComponent={StyledPaper}
            PopperComponent={StyledPopper}
            // componentsProps={{
            //   clearIndicatorDirty: .clearIndicator,
            // }}
            freeSolo
            autoHighlight="true"
            autoComplete
            color="orange"
            id="free-solo-2-demo"
            onChange={(e, value) => {
              moveMoviePage(value.id);
            }}
            disableClearable
            getOptionLabel={option => option.title}
            options={top100Films}
            renderInput={params => (
              <TextField
                {...params}
                label="영화 제목을 검색하세요"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
          {localStorage.access_token ? (
            <Avatar src={Profile_image} />
          ) : (
            ''
            // <SignUp>회원가입하러 가기</SignUp>
          )}
        </Box>
      </MyToolbar>
    </NavBar>
  );
}

const NavBar = styled(AppBar)`
  padding: 10px 40px;
  display: flex;
  align-content: center;
  background: white;
  &.MuiPaper-root {
    background: none;

    &.MuiAppBar-root {
      box-shadow: none;
      background-color: ${props =>
        props.scrollPosition < 60 ? 'transparent' : 'black'};
      transition: all 0.3s;
    }
  }
`;

const MyToolbar = styled(Toolbar)`
  display: flex;
  padding-top: 10px;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

const Logo = styled(Typography)`
  color: ${props => (props.scrollPosition < 60 ? '#FF6E01' : 'white')};
  transition: all 0.3s;
  font-family: 'Galada', cursive;
  font-weight: bold;
  font-size: 32px;
`;

const SignUp = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
  font-size: 16px;
`;

const NavSearch = styled(Autocomplete)`
  margin-right: 40px;
  padding: 0;
  width: 200px;
  height: 10px;

  //눌렀을 때 lable색
  label.Mui-focused {
    color: orange;
    font-weight: bold;
  }

  //아무것도 안했을 때
  & .MuiOutlinedInput-root {
    color: white;
    font-weight: bold;

    & fieldset {
      border-color: translate;
      color: orange;
    }

    &:hover fieldset {
      border-color: orange;
    }
    &.Mui-focused fieldset {
      border-color: orange;
    }
  }
`;

const StyledPopper = styled(Popper)``;

const StyledPaper = styled(Paper)`
  color: white;
  :focus {
    background-color: yellow;
  }
`;

export default Nav;

const top100Films = [
  { title: '닥터스트레인지', year: 1994, id: 1 },
  { title: 'The Godfather', year: 1972, id: 2 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
