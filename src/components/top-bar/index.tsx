import {Box, Grid, IconButton, InputBase, useTheme} from '@mui/material';
import React, {useContext} from 'react';
import {useAppSelector} from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext, tokens} from "../../theme";
import {useStyles} from "./styles";

const TopBarComponent = () => {
    const {user} = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext);
    const classes = useStyles()

    return (
        <Box display='flex' justifyContent='space-between' px='32px' py='24px'>
            <Grid>Welcome {user.firstName}</Grid>
          <Box display='flex'>
              <Grid onClick={colorMode.toggleColorMode}
              sx={{pr: '37px', borderRight: `1px solid ${colors.primary.DEFAULT}`}}
              >
                  <IconButton sx={{mr: '45px'}}>
                      {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                  </IconButton>
                  <IconButton>
                      <NotificationsNoneIcon/>
                  </IconButton>
              </Grid>
              <Grid
              sx={{
                  display: 'flex',
                  backgroundColor: `${colors.primary[600]}`,
                  borderRadius: '8px',
                  ml: '20px'
              }}
              >
                  <IconButton className={classes.root}>
                      <SearchIcon/>
                  </IconButton>
                  <InputBase placeholder='Пошук'
                  sx={{px: '18px', py: '12px'}}/>
              </Grid>
          </Box>

        </Box>
    );
};

export default TopBarComponent;