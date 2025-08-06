import React from 'react';
import { Box, Typography, Container, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: theme.palette.common.white,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(45deg, transparent 40%, ${theme.palette.primary.main}02 50%, transparent 60%),
      linear-gradient(-45deg, transparent 40%, ${theme.palette.secondary.main}02 50%, transparent 60%)
    `,
    pointerEvents: 'none',
  },
  '&::after': {
    content: '"{ } < /> [ ] ( ) => { return code; }"',
    position: 'absolute',
    top: '20%',
    right: '-10%',
    fontSize: '120px',
    fontFamily: 'monospace',
    color: theme.palette.grey[100],
    opacity: 0.3,
    transform: 'rotate(15deg)',
    pointerEvents: 'none',
    zIndex: 0,
  },
}));

const TechPattern = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  opacity: 0.02,
  backgroundImage: `
    radial-gradient(circle at 25% 25%, ${theme.palette.primary.main} 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, ${theme.palette.secondary.main} 2px, transparent 2px)
  `,
  backgroundSize: '50px 50px',
  animation: 'patternMove 20s linear infinite',
  '@keyframes patternMove': {
    '0%': {
      transform: 'translateX(0) translateY(0)',
    },
    '100%': {
      transform: 'translateX(50px) translateY(50px)',
    },
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.primary.main}20`,
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '0.9rem',
  height: 40,
  borderRadius: '20px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    color: theme.palette.common.white,
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: `0 12px 30px ${theme.palette.primary.main}40`,
    border: `1px solid ${theme.palette.primary.main}`,
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

const AboutSection: React.FC = () => {
  const skills = [
    'React', 'C/C++', 'Node.js', 'Python', 'PostgreSQL', 
    'MongoDB', 'Java', 'JavaScript', 'Express.js', 'MySQL', 'PostgreSQL'
  ];

  return (
    <AboutContainer id="about">
      <TechPattern />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={8}>
          <Stack spacing={4} sx={{ maxWidth: 800 }}>
            <Typography variant="h2" color="text.primary">
              Hakkımda
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              Merhaba, ben Furkan Mert. Atılım Üniversitesi Bilgisayar Mühendisliği mezunu ve teknoloji tutkunu bir yazılım geliştiricisiyim. C/C++, Python, Java ve JavaScript gibi dillerde uzmanlaştım. TÜRKSAT ve MIA Teknoloji'deki stajlarım sayesinde web ve veritabanı geliştirmede derinlemesine deneyim kazandım. Yenilikçi teknolojilere adapte olarak güçlü projeler geliştirmeyi hedefliyorum. 
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              Sürekli öğrenmeye ve kendimi geliştirmeye odaklanan bir yaklaşımla, teknolojik trendleri takip ediyor 
              ve projelerimde en güncel çözümleri kullanmaya özen gösteriyorum. Takım çalışmasına yatkın, 
              problem çözme odaklı bir geliştirici olarak karmaşık projeleri başarıyla tamamladım.
            </Typography>
          </Stack>

          <Stack spacing={3}>
            <Typography variant="h4" color="text.primary">
              Teknolojiler & Araçlar
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {skills.map((skill, index) => (
                <SkillChip
                  key={`${skill}-${index}`} // Burada key benzersiz oldu
                  label={skill}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {[
              {
                title: 'Frontend',
                description: 'Modern React ekosistemi, TypeScript, responsive tasarım ve kullanıcı deneyimi odaklı arayüz geliştirme konularında uzmanım.',
                icon: '⚛️'
              },
              {
                title: 'Backend',
                description: 'Node.js, Python ile API geliştirme, veritabanı tasarımı ve cloud servislerinin entegrasyonu konularında deneyimliyim.',
                icon: '⚙️'
              },
              {
                title: 'Database',
                description: 'MySQL ve PostgreSQL veritabanları konusunda deneyimliyim, etkili veritabanı yönetimi sağlayabilirim.',
                icon: '🚀'
              }
            ].map((item) => (
              <Box
                key={item.title}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '24px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: theme => `1px solid ${theme.palette.primary.main}30`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: theme => `linear-gradient(135deg, ${theme.palette.primary.main}05, transparent, ${theme.palette.secondary.main}05)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover::before': {
                    opacity: 1,
                  },
                }}
              >
                <Stack spacing={3}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        fontSize: '2rem',
                        width: 60,
                        height: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: theme => `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                        borderRadius: '16px',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{
                        background: theme => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;
