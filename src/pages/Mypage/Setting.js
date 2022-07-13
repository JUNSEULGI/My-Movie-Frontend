import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box } from '@mui/material';
import { BASE_URL } from '../../Modules/API';
import { useResetRecoilState } from 'recoil';
import { userState } from '../../state';

const options = ['delete my account'];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const navigate = useNavigate();

  const resetUser = useResetRecoilState(userState);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const access_token = localStorage.getItem('access_token');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    resetUser();
    navigate('/');
  };

  const DeleteAccount = () => {
    if (window.confirm('정말 삭제시겠습니까?')) {
      alert('삭제되었습니다.'); //true
      fetch(`${BASE_URL}users/delete`, {
        method: 'DELETE',
        headers: {
          Authorization: access_token,
        },
      });
      logout();
      navigate('/');
    } else {
      alert('취소합니다.'); //false
    }
  };

  return (
    <Box sx={{ position: 'absolute', right: '10px', top: '10px' }}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map(option => (
          <MenuItem
            sx={{ color: 'white' }}
            key={option}
            selected={option === 'Pyxis'}
            onClick={() => DeleteAccount()}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
