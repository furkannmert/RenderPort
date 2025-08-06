import React from 'react';
import { Box, Typography, Container, Stack, Card, CardContent, CardMedia, Chip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 100%)`,
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
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.slice(1)}' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
    pointerEvents: 'none',
  },
  '&::after': {
    content: '"console.log(\\"Building amazing projects\\");"',
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    fontSize: '16px',
    fontFamily: 'monospace',
    color: theme.palette.grey[300],
    opacity: 0.4,
    transform: 'rotate(-5deg)',
    pointerEvents: 'none',
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '32px',
  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-16px) scale(1.02)',
    boxShadow: '0 32px 80px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.2)',
    border: `1px solid ${theme.palette.primary.main}30`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}05, transparent, ${theme.palette.secondary.main}05)`,
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const ProjectImage = styled(CardMedia)(({ theme }) => ({
  height: 280,
  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}10, transparent, ${theme.palette.secondary.main}10)`,
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover': {
    transform: 'scale(1.08)',
  },
  '&:hover::after': {
    opacity: 1,
  },
}));

const TechChip = styled(Chip)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: theme.palette.common.white,
  fontSize: '0.75rem',
  height: 28,
  fontWeight: 500,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
    transform: 'translateY(-2px) scale(1.05)',
    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
  },
}));

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Hasat Bazaar',
      description: 'Hasat Bazaar, Türk çiftçileri ve tüketicileri doğrudan buluşturan yenilikçi bir e-ticaret platformudur. React, Node.js ve PostgreSQL kullanılarak geliştirilen bu platform, kullanıcıya dost bir arayüz ve güvenilir ödeme çözümleri sunar. Gerçek zamanlı stok yönetimi ve kullanıcı odaklı admin paneli ile hem çiftçiler hem de tüketiciler için sorunsuz bir alışveriş deneyimi sağlar.',
      image: 'https://images.unsplash.com/photo-1612425626229-632fab8bfc02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGUlMjBwcm9kdWN0c3xlbnwwfDB8fHwxNzU0MzA5OTE2fDA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'E-commerce website, online shopping interface, product catalog - QingYu on Unsplash',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'HTML', 'CSS', 'Express.js',],
    },
    {
      id: 2,
      title: 'Mobil Uygulama Dashboard',
      description: 'React Native ile geliştirilmiş mobil uygulama ve web dashboard\'u. Kullanıcı analitikleri, push notification sistemi ve offline çalışma desteği.',
      image: 'https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzbWFydHBob25lJTIwaW50ZXJmYWNlfGVufDB8MXx8fDE3NTQzMDk5MTZ8MA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Mobile application interface, smartphone screen, modern UI design - Kevin Grieve on Unsplash',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    },
    {
      id: 3,
      title: 'Veri Analiz Platformu',
      description: 'Python ve React ile geliştirilmiş veri analiz ve görselleştirme platformu. Machine learning modelleri entegrasyonu ve interaktif dashboard özellikleri.',
      image: 'https://images.unsplash.com/photo-1486927181919-3ac1fc3a8082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkJTIwbW9kZXJufGVufDB8MHx8Ymx1ZXwxNzU0MzA5OTE2fDA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Modern website interface, clean design, dashboard or landing page - Luca Bravo on Unsplash',
      technologies: ['Python', 'React', 'D3.js', 'MongoDB', 'Docker'],
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <Container maxWidth="lg">
        <Stack spacing={8}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" color="text.primary">
              Projelerim
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
              Geliştirdiğim bazı öne çıkan projeler. Her biri farklı teknolojiler ve yaklaşımlar kullanılarak 
              gerçek dünya problemlerine çözüm üretmek amacıyla tasarlandı.
            </Typography>
          </Stack>

          <Stack spacing={6}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id}>
                <Stack 
                  direction={{ xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }} 
                  spacing={0}
                >
                  <Box flex={1}>
                    <ProjectImage
                      image={project.image}
                      title={project.imageAlt}
                    />
                  </Box>
                  <CardContent sx={{ flex: 1, p: 4 }}>
                    <Stack spacing={3} height="100%">
                      <Stack spacing={2}>
                        <Typography variant="h4" color="text.primary">
                          {project.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {project.description}
                        </Typography>
                      </Stack>

                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {project.technologies.map((tech) => (
                          <TechChip key={tech} label={tech} size="small" />
                        ))}
                      </Stack>

                      <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                        <IconButton 
                          color="primary" 
                          sx={(theme) => ({ 
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                            color: 'white',
                            width: 48,
                            height: 48,
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': { 
                              background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
                              transform: 'translateY(-4px) scale(1.1)',
                              boxShadow: `0 12px 30px ${theme.palette.primary.main}50`,
                            }
                          })}
                        >
                          <LaunchIcon />
                        </IconButton>
                        <IconButton 
                          color="primary" 
                          sx={{ 
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'text.primary',
                            width: 48,
                            height: 48,
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': { 
                              background: 'rgba(255, 255, 255, 0.2)',
                              transform: 'translateY(-4px) scale(1.1)',
                              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
                            }
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Stack>
              </ProjectCard>
            ))}
          </Stack>
        </Stack>
      </Container>
    </ProjectsContainer>
  );
};

export default ProjectsSection;