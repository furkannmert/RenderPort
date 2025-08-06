import React from 'react';
import { Box, Typography, Container, Stack, IconButton, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[100]} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20%',
    left: '-10%',
    width: '120%',
    height: '60%',
    background: `radial-gradient(ellipse, ${theme.palette.primary.main}08 0%, transparent 70%)`,
    animation: 'aurora 15s ease-in-out infinite',
  },
  '&::after': {
    content: '"connect() { return success; }"',
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    fontSize: '14px',
    fontFamily: 'monospace',
    color: theme.palette.grey[300],
    opacity: 0.4,
    transform: 'rotate(5deg)',
    pointerEvents: 'none',
  },
  '@keyframes aurora': {
    '0%, 100%': {
      transform: 'translateX(0px) translateY(0px)',
      opacity: 0.8,
    },
    '50%': {
      transform: 'translateX(20px) translateY(-10px)',
      opacity: 1,
    },
  },
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: '32px',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  zIndex: 1,
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  width: 70,
  height: 70,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: theme.palette.common.white,
  borderRadius: '20px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
  '&:hover': {
    transform: 'translateY(-8px) scale(1.1) rotate(5deg)',
    boxShadow: `0 20px 40px ${theme.palette.primary.main}50`,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
    transition: 'left 0.6s ease',
  },
  '&:hover::before': {
    left: '100%',
  },
  '&:active': {
    transform: 'translateY(-4px) scale(1.05)',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(3, 6),
  borderRadius: '25px',
  fontSize: '1.2rem',
  fontWeight: 700,
  textTransform: 'none',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: theme.palette.common.white,
  border: 'none',
  boxShadow: `0 12px 30px ${theme.palette.primary.main}40`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
    transform: 'translateY(-6px) scale(1.05)',
    boxShadow: `0 20px 50px ${theme.palette.primary.main}60`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.6s ease',
  },
  '&:hover::before': {
    left: '100%',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: '12px',
  background: theme.palette.grey[50],
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.grey[100],
    transform: 'translateX(4px)',
  },
}));

const ContactSection: React.FC = () => {
  const socialLinks = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      href: 'mailto:furkannmert06@gmail.com',
      color: '#EA4335',
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/furkannmert/',
      color: '#0077B5',
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      href: 'https://github.com/furkannmert',
      color: '#333333',
    },

    {
      icon: <PhoneIcon />,
      label: 'Telefon',
      href: 'tel:+905534974337',
      color: '#34A853',
    },
  ];

  return (
    <ContactContainer id="contact">
      <Container maxWidth="md">
        <ContactCard elevation={0}>
          <Stack spacing={6} alignItems="center" textAlign="center">
            <Stack spacing={2}>
              <Typography variant="h2" color="text.primary">
                İletişime Geçin
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, fontSize: '1.125rem' }}>
                Yeni projeler, iş birlikleri için benimle iletişime geçin. 
                
              </Typography>
            </Stack>

            <Stack spacing={4} sx={{ width: '100%' }}>
              <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={3}>
                {socialLinks.map((social) => (
                  <SocialIconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </SocialIconButton>
                ))}
              </Stack>

              <Stack spacing={3} sx={{ maxWidth: 400, mx: 'auto', width: '100%' }}>
                <ContactInfo>
                  <EmailIcon color="primary" />
                  <Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                      Email
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                      furkannmert06@gmail.com
                    </Typography>
                  </Stack>
                </ContactInfo>

                <ContactInfo>
                  <PhoneIcon color="primary" />
                  <Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                      Telefon
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                      +90 553 497 43 37
                    </Typography>
                  </Stack>
                </ContactInfo>
              </Stack>

              <ContactButton
                component="a"
                href="mailto:alex@example.com"
                size="large"
              >
                Hemen İletişime Geç
              </ContactButton>
            </Stack>

            <Stack spacing={2} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'success.main',
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: 'success.main',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                      '100%': { opacity: 1 },
                    },
                  }}
                />
                <Typography variant="caption" sx={{ fontWeight: 500 }}>
                  Şu anda aktif
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </ContactCard>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;