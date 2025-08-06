import React from 'react';
import { Box, Typography, Container, Stack, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';

const CertificatesContainer = styled(Box)(({ theme }) => ({
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
      linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main}03 50%, transparent 100%),
      linear-gradient(0deg, transparent 0%, ${theme.palette.secondary.main}03 50%, transparent 100%)
    `,
    pointerEvents: 'none',
  },
  '&::after': {
    content: '"achievement.unlock()"',
    position: 'absolute',
    top: '15%',
    left: '5%',
    fontSize: '18px',
    fontFamily: 'monospace',
    color: theme.palette.grey[200],
    opacity: 0.5,
    transform: 'rotate(-10deg)',
    pointerEvents: 'none',
  },
}));

const CertificateCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  border: `1px solid ${theme.palette.grey[200]}`,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
    '& .certificate-image': {
      transform: 'scale(1.02)',
    },
  },
}));

const CertificateImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  transition: 'transform 0.3s ease-in-out',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}10, transparent)`,
  },
}));

const VerifiedBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  credentialId?: string;
}

const CertificatesSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Cloud mimarisi, güvenlik ve ölçeklenebilir sistemler tasarımı konularında uzmanlaşma sertifikası.',
      image: 'https://images.unsplash.com/photo-1524672875191-f3e0c7dd6dcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGRpcGxvbWElMjBhd2FyZCUyMGFjaGlldmVtZW50fGVufDB8MHx8fDE3NTQzMDk5MTZ8MA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Professional certificate, diploma, achievement award, formal document - Tim Mossholder on Unsplash',
      credentialId: 'AWS-SAA-2023-001',
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2023',
      description: 'Modern React geliştirme, hooks, state management ve performans optimizasyonu konularında sertifika.',
      image: 'https://images.unsplash.com/photo-1591655630844-28e59efe0c7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjZXJ0aWZpY2F0ZSUyMGRpcGxvbWElMjBhd2FyZCUyMGFjaGlldmVtZW50fGVufDB8MHx8fDE3NTQzMDk5MTZ8MA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Professional certificate, diploma, achievement award, formal document - Steven Aguilar on Unsplash',
      credentialId: 'META-REACT-2023-002',
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2022',
      description: 'Kapsamlı full stack web geliştirme eğitimi. Frontend, backend ve veritabanı teknolojileri.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMGNlcnRpZmljYXRlJTIwdGVjaG5vbG9neXxlbnwwfDB8fGJsdWV8MTc1NDMwOTkxNnww&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Programming or coding certificate, technology achievement, software development - Luca Bravo on Unsplash',
      credentialId: 'FCC-FSWD-2022-003',
    },
    {
      id: 4,
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2023',
      description: 'Google Cloud Platform servislerinin profesyonel düzeyde kullanımı ve cloud çözümleri geliştirme.',
      image: 'https://images.unsplash.com/photo-1613203713329-b2e39e14c266?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMGNlcnRpZmljYXRlJTIwdGVjaG5vbG9neXxlbnwwfDB8fGJsdWV8MTc1NDMwOTkxNnww&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Programming or coding certificate, technology achievement, software development - Artem R on Unsplash',
      credentialId: 'GCP-PROF-2023-004',
    },
  ];

  return (
    <CertificatesContainer id="certificates">
      <Container maxWidth="lg">
        <Stack spacing={8}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" color="text.primary">
              Sertifikalar
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
              Sürekli öğrenme ve gelişim odaklı yaklaşımımın bir göstergesi olarak aldığım 
              profesyonel sertifikalar ve başarılar.
            </Typography>
          </Stack>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id}>
                <CertificateImage
                  className="certificate-image"
                  image={certificate.image}
                  title={certificate.imageAlt}
                />
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={2}>
                    <Stack spacing={1}>
                      <Typography variant="h5" color="text.primary" sx={{ fontWeight: 600 }}>
                        {certificate.title}
                      </Typography>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" color="primary.main" sx={{ fontWeight: 500 }}>
                          {certificate.issuer}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {certificate.date}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {certificate.description}
                    </Typography>

                    {certificate.credentialId && (
                      <VerifiedBadge>
                        <VerifiedIcon fontSize="small" />
                        <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
                          {certificate.credentialId}
                        </Typography>
                      </VerifiedBadge>
                    )}
                  </Stack>
                </CardContent>
              </CertificateCard>
            ))}
          </Box>
        </Stack>
      </Container>
    </CertificatesContainer>
  );
};

export default CertificatesSection;