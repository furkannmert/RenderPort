import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Drawer, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&.scrolled': {
    background: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  textTransform: 'none',
  padding: theme.spacing(1.5, 3),
  borderRadius: '16px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(50, 118, 255, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}20, transparent)`,
    transition: 'left 0.6s ease',
  },
  '&:hover::before': {
    left: '100%',
  },
  '&.active': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 800,
  fontSize: '1.8rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'brightness(1.2)',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 320,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: 'none',
    padding: theme.spacing(3),
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
  },
}));

const MobileNavButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  color: theme.palette.text.primary,
  fontWeight: 500,
  textTransform: 'none',
  padding: theme.spacing(2, 3),
  borderRadius: '16px',
  width: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    color: theme.palette.common.white,
    transform: 'translateX(8px)',
    boxShadow: '0 8px 25px rgba(50, 118, 255, 0.3)',
  },
}));

interface NavigationProps {
  currentSection?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Ana Sayfa', href: '#hero', id: 'hero' },
    { label: 'Hakkımda', href: '#about', id: 'about' },
    { label: 'Projeler', href: '#projects', id: 'projects' },
    { label: 'Sertifikalar', href: '#certificates', id: 'certificates' },
    { label: 'İletişim', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string, id: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    setMobileOpen(false);
  };

  const drawer = (
    <Stack spacing={4} sx={{ mt: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Logo></Logo>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{
            background: 'rgba(0, 0, 0, 0.05)',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.1)',
              transform: 'rotate(90deg)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <Stack spacing={2}>
        {navItems.map((item) => (
          <MobileNavButton
            key={item.label}
            onClick={() => handleNavClick(item.href, item.id)}
          >
            {item.label}
          </MobileNavButton>
        ))}
      </Stack>
    </Stack>
  );

  return (
    <>
      <StyledAppBar 
        position="fixed" 
        elevation={0}
        className={scrolled ? 'scrolled' : ''}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
          <Logo onClick={() => handleNavClick('#hero', 'hero')}>
            Furkan Mert
          </Logo>

          {/* Desktop Navigation */}
          <Stack 
            direction="row" 
            spacing={1} 
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {navItems.map((item) => (
              <NavButton
                key={item.label}
                onClick={() => handleNavClick(item.href, item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </NavButton>
            ))}
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: 'none' },
              color: 'text.primary',
              background: 'rgba(0, 0, 0, 0.05)',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.1)',
                transform: 'scale(1.1)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </MobileDrawer>
    </>
  );
};

export default Navigation;