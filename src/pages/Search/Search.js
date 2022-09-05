import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { API } from '../../Modules/API';
import { fetcher } from '../../Modules/fetcher';
import PropTypes from 'prop-types';
import { Container, Typography, Tabs, Tab, Box } from '@mui/material';
import MyViewLayout from '../../layout/Layout';
import LoadWrap from '../../components/Loading/LoadWrap';
import Content from './Content';

function Search() {
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = useState(true);
  const [backgroundInfo, setBackgroundInfo] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        {value === index && (
          <Box sx={{ py: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function SearchContainer() {
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs ">
            <Tab label="컨텐츠" {...a11yProps(0)} />
            {/* <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Content />
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel> */}
      </Box>
    );
  }

  return (
    <MyViewLayout loginBack={backgroundInfo} center={<SearchContainer />} />
  );
}

export default Search;

const ContainerTitle = styled(Typography)`
  font-weight: bold;
  margin: 80px 0 6px;
  color: ${({ theme }) => theme.palette.common.white};
`;
