import React from 'react';
import { Box, Typography, Container, Stack, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.text.primary,
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0, 4, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.grey[400],
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      href: 'https://linkedin.com/in/alex',
      label: 'LinkedIn',
    },
    {
      icon: <GitHubIcon />,
      href: 'https://github.com/alex',
      label: 'GitHub',
    },
    {
      icon: <TwitterIcon />,
      href: 'https://twitter.com/alex',
      label: 'Twitter',
    },
    {
      icon: <EmailIcon />,
      href: 'mailto:alex@example.com',
      label: 'Email',
    },
  ];

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            justifyContent="space-between" 
            alignItems="center"
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  color: 'white'
                }}
              >
                Furkan Mert
              </Typography>
              <Typography variant="body2" color="grey.400">
                Full Stack Developer
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </SocialIcon>
              ))}
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: 'grey.800' }} />

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            justifyContent="space-between" 
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" color="grey.400">
              © {currentYear} Tüm hakları saklıdır.
            </Typography>
            
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body2" color="grey.400">
                
              </Typography>
              <Typography variant="body2" color="grey.400">
                
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;