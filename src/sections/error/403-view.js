'use client';

import { m } from 'framer-motion';
// @mui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// layouts
import CompactLayout from 'src/layouts/compact';
// assets
import { ForbiddenIllustration } from 'src/assets/illustrations';
// components
import { RouterLink } from 'src/routes/components';
import { MotionContainer, varBounce } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function View403() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Sin autorización
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            TLa página&apos;a la que estás intentando acceder tiene acceso restringido.
            <br />
            Por favor, consulta con tu administrador del sistema.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Button component={RouterLink} href="/" size="large" variant="contained">
          Ir a Inicio
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
