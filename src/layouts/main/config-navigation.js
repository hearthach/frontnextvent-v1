// routes
import { paths } from 'src/routes/paths';

// components
import Iconify from 'src/components/iconify';

// Estilos para el subheader "POLOS"
const subheaderStyle = {
  cursor: 'pointer',
  textDecoration: 'underline', // Mantener el subrayado
  color: 'black', // Color de texto negro
  fontWeight: 'bold', // Texto en negrita
};

const subheaderHoverStyle = {
  color: 'green', // Color de texto verde cuando se pase el mouse
};

export const navConfig = [
  {
    title: 'Inicio',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'Tienda',
    path: '/pages',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: (
          <a
            href={paths.product.category.polos.root}
            style={subheaderStyle}
            onMouseEnter={(e) => e.target.style.color = '#00A76F'} // Cambia a verde cuando se pase el mouse
            onMouseLeave={(e) => e.target.style.color = 'black'} // Vuelve al color negro cuando se deje de pasar el mouse
          >
            POLOS
          </a>
        ),
        items: [
          { title: 'Polos', path: paths.product.category.polos.root },
          { title: 'Jersey 30/1', path: paths.product.category.polos.jersey301 },
          { title: 'Jersey 20/1', path: paths.product.category.polos.jersey201 },
          { title: 'Pima', path: paths.product.category.polos.pima },
        ],
      },
      {
        subheader: 'POLERAS',
        items: [
          { title: 'Poleras', path: paths.product.category.poleras },
        ],
      },
      {
        subheader: 'Auth Demo',
        items: [
          { title: 'New password (modern)', path: paths.authDemo.modern.newPassword },
          { title: 'Verify (modern)', path: paths.authDemo.modern.verify },
        ],
      },
      {
        subheader: 'Error',
        items: [
          { title: 'Page 403', path: paths.page403 },
          { title: 'Page 404', path: paths.page404 },
          { title: 'Page 500', path: paths.page500 },
        ],
      },
    ],
  },
];
