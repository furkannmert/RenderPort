import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Stack, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ParticleSystem from './ParticleSystem';

const GlassmorphismBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '32px',
  padding: theme.spacing(6),
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 32px 80px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}10, transparent, ${theme.palette.secondary.main}10)`,
    borderRadius: 'inherit',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `
    radial-gradient(ellipse at top left, ${theme.palette.primary.main}15, transparent 50%),
    radial-gradient(ellipse at top right, ${theme.palette.secondary.main}15, transparent 50%),
    radial-gradient(ellipse at bottom left, ${theme.palette.primary.main}08, transparent 50%),
    linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 100%)
  `,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    right: '-50%',
    width: '200%',
    height: '200%',
    background: `conic-gradient(from 0deg, ${theme.palette.primary.main}08, transparent, ${theme.palette.secondary.main}08, transparent)`,
    animation: 'rotate 30s linear infinite',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, ${theme.palette.primary.main}05 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main}05 0%, transparent 50%),
      radial-gradient(circle at 60% 40%, ${theme.palette.primary.main}03 0%, transparent 50%)
    `,
    pointerEvents: 'none',
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 240,
  height: 240,
  border: `6px solid rgba(255, 255, 255, 0.3)`,
  boxShadow: `
    0 20px 60px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2)
  `,
  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.08) rotate(2deg)',
    boxShadow: `
      0 32px 80px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3)
    `,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: '50%',
    background: `conic-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    animation: 'avatarGlow 4s ease-in-out infinite',
    opacity: 0.3,
    zIndex: -1,
  },
  '@keyframes avatarGlow': {
    '0%, 100%': {
      opacity: 0.3,
      transform: 'scale(1)',
    },
    '50%': {
      opacity: 0.6,
      transform: 'scale(1.05)',
    },
  },
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(-50%) translateY(-4px)',
  },
}));

const AnimatedText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'textShimmer 3s ease-in-out infinite',
  '@keyframes textShimmer': {
    '0%, 100%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: theme.palette.common.white,
  padding: theme.spacing(2, 4),
  borderRadius: '20px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
  border: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.02)',
    boxShadow: `0 16px 48px ${theme.palette.primary.main}60`,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
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

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer
      sx={{
        '&::before': {
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(0deg)`,
        },
      }}
    >
      <ParticleSystem particleCount={30} />
      
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={8}
          alignItems="center"
          justifyContent="space-between"
          sx={{ minHeight: '100vh', py: 8, position: 'relative', zIndex: 1 }}
        >
          <Stack spacing={6} flex={1} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <GlassmorphismBox>
              <Stack spacing={4}>
                <AnimatedText variant="h1" gutterBottom>
                  Merhaba, Ben{' '}
                  <Box component="span" sx={{ color: 'primary.main', fontWeight: 800 }}>
                    Furkan
                  </Box>
                </AnimatedText>
                
                <Typography 
                  variant="h3" 
                  color="text.secondary" 
                  sx={{ 
                    fontWeight: 400,
                    background: 'linear-gradient(135deg, #2c3952, #3276ff)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Full Stack Developer
                </Typography>
                
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    maxWidth: 500, 
                    fontSize: '1.2rem', 
                    lineHeight: 1.8,
                    opacity: 0.9,
                  }}
                >
                  Modern web teknolojileri ile kullanıcı odaklı çözümler geliştiren tutkulu bir yazılım geliştiricisiyim. 
                  React, Node.js ve cloud teknolojileri konularında uzmanlaşmış durumdayım.
                </Typography>
                
                <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
                  <CTAButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                    Projelerimi İncele
                  </CTAButton>
                  <CTAButton 
                    variant="outlined" 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'text.primary',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  >
                    İletişime Geç
                  </CTAButton>
                </Stack>
              </Stack>
            </GlassmorphismBox>
          </Stack>
          
          <Stack alignItems="center" spacing={4}>
            <ProfileAvatar
              src="https://i.pravatar.cc/240?img=3"
              alt="Furkan Mert - Full Stack Developer"
            />
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  bgcolor: 'success.main',
                  animation: 'pulse 2s infinite',
                  boxShadow: '0 0 20px rgba(76, 175, 80, 0.5)',
                  '@keyframes pulse': {
                    '0%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.7, transform: 'scale(1.2)' },
                    '100%': { opacity: 1, transform: 'scale(1)' },
                  },
                }}
              />
              <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                Aktif olarak çalışıyor
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      
      <ScrollIndicator onClick={handleScrollDown}>
        <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.7 }}>
          Keşfetmeye devam et
        </Typography>
        <KeyboardArrowDownIcon 
          sx={{ 
            color: 'primary.main', 
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-10px)',
              },
              '60%': {
                transform: 'translateY(-5px)',
              },
            },
          }} 
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;