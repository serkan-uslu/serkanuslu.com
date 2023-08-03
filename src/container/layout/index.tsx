import Link from 'next/link';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import Drawer from '@mui/material/Drawer';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Connection from '@/components/connection';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { SITE_SETTINGS } from 'config/siteSettings';
import Navigation from 'container/navigation/index';
import LanguageChange from '@/components/languageChange';
import ColorToggleButton from '@/components/colorToggleButton';

interface ILayoutProps {
  children: ReactNode;
  window?: () => Window;
}

export default function Layout(props: ILayoutProps) {
  const { window, children } = props;

  const { locale } = useRouter();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Connection></Connection>
      <Divider />
      <Toolbar></Toolbar>
      <Navigation></Navigation>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <LanguageChange></LanguageChange>
          <ColorToggleButton></ColorToggleButton>
        </Box>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${SITE_SETTINGS.drawerWidth}px)` },
            ml: { sm: `${SITE_SETTINGS.drawerWidth}px` },
            display: { sm: 'none', xs: 'block' },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              locale={locale}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {SITE_SETTINGS.siteName}
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            width: { sm: SITE_SETTINGS.drawerWidth },
            flexShrink: { sm: 0 },
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: SITE_SETTINGS.drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: SITE_SETTINGS.drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${SITE_SETTINGS.drawerWidth}px)` },
          }}
        >
          <Box sx={{ mr: 2, display: { sm: 'none' } }}>
            <Toolbar />
          </Box>
          <Container>{children}</Container>
        </Box>
      </Box>
    </>
  );
}
