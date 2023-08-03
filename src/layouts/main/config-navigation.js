// routes
import { paths } from 'src/routes/paths';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    // title: 'Home',
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
        subheader: 'Polos',
        items: [
          { title: 'Polos 1', path: paths.product.category.polos },
          { title: 'Jersey 30/1', path: paths.product.category.polos.jersey301 },
          // { title: 'Camiseros', path: paths.product.category.polosCamiseros },
          // { title: 'Clásicos', path: paths.product.category.polosClasicos },
          // { title: 'Manga Larga', path: paths.product.category.polosMangaLarga },
        ],
      },
      {
        subheader: 'Poleras',
        items: [
          { title: 'Poleras 1', path: paths.product.category.poleras },
          { title: 'Jackets', path: paths.product.category.polerasJackets },
          { title: 'Cortavientos', path: paths.product.category.polerasCortavientos },
          { title: 'Poleras Y Casacas', path: paths.product.category.polerasPolerasCasacas },
          { title: 'Chompas', path: paths.product.category.polerasChompas },
          { title: 'Camisas', path: paths.product.category.polerasCamisas },
        ],
      },
      {
        subheader: 'Pantalones',
        items: [
          { title: 'Pantalones 1', path: paths.authDemo.classic.login },
          { title: 'Pantalones 2', path: paths.authDemo.classic.register },
          { title: 'Pantalones 3', path: paths.authDemo.classic.forgotPassword },
          { title: 'Pantalones 4', path: paths.authDemo.classic.newPassword },
          { title: 'Pantalones 5', path: paths.authDemo.classic.verify },
        ],
      },
      {
        subheader: 'Zaptillas',
        items: [
          { title: 'Zaptillas 1', path: paths.authDemo.classic.login },
          { title: 'Zaptillas 2', path: paths.authDemo.classic.register },
          { title: 'Zaptillas 3', path: paths.authDemo.classic.forgotPassword },
          { title: 'Zaptillas 4', path: paths.authDemo.classic.newPassword },
          { title: 'Zaptillas 5', path: paths.authDemo.classic.verify },
        ],
      },
      {
        subheader: 'Otros',
        items: [
          { title: 'Otros 1', path: paths.page403 },
          { title: 'Otros 2', path: paths.page404 },
          { title: 'Otros 3', path: paths.page500 },
        ],
      },
      // {
      //   subheader: 'Dashboard',
      //   items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      // },
    ],
  },
  // {
  //   title: 'Pages',
  //   path: '/pages',
  //   icon: <Iconify icon="solar:file-bold-duotone" />,
  //   children: [
  //     {
  //       subheader: 'Polos',
  //       items: [
  //         { title: 'Polos 1', path: paths.about },
  //         { title: 'Contact us', path: paths.contact },
  //         { title: 'FAQs', path: paths.faqs },
  //         { title: 'Pricing', path: paths.pricing },
  //         { title: 'Payment', path: paths.payment },
  //         { title: 'Maintenance', path: paths.maintenance },
  //         { title: 'Coming Soon', path: paths.comingSoon },
  //       ],
  //     },
  //     {
  //       subheader: 'Poleras',
  //       items: [
  //         { title: 'Shop', path: paths.product.root },
  //         { title: 'Product', path: paths.product.demo.details },
  //         { title: 'Checkout', path: paths.product.checkout },
  //         { title: 'Posts', path: paths.post.root },
  //         { title: 'Post', path: paths.post.demo.details },
  //       ],
  //     },
  //     {
  //       subheader: 'Pantalones',
  //       items: [
  //         { title: 'Login', path: paths.authDemo.classic.login },
  //         { title: 'Register', path: paths.authDemo.classic.register },
  //         { title: 'Forgot password', path: paths.authDemo.classic.forgotPassword },
  //         { title: 'New password', path: paths.authDemo.classic.newPassword },
  //         { title: 'Verify', path: paths.authDemo.classic.verify },
  //         { title: 'Login (modern)', path: paths.authDemo.modern.login },
  //         { title: 'Register (modern)', path: paths.authDemo.modern.register },
  //         { title: 'Forgot password (modern)', path: paths.authDemo.modern.forgotPassword },
  //         { title: 'New password (modern)', path: paths.authDemo.modern.newPassword },
  //         { title: 'Verify (modern)', path: paths.authDemo.modern.verify },
  //       ],
  //     },
  //     {
  //       subheader: 'Otros',
  //       items: [
  //         { title: 'Page 403', path: paths.page403 },
  //         { title: 'Page 404', path: paths.page404 },
  //         { title: 'Page 500', path: paths.page500 },
  //       ],
  //     },
  //     // {
  //     //   subheader: 'Dashboard',
  //     //   items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
  //     // },
  //   ],
  // },
  {
    title: 'Components',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.components,
  },
  // {
  //   title: 'Tienda',
  //   icon: <Iconify icon="solar:atom-bold-duotone" />,
  //   path: paths.product.root,
  // },
  
  // {
  //   title: 'Docs',
  //   icon: <Iconify icon="solar:notebook-bold-duotone" />,
  //   path: paths.docs,
  // },
];
