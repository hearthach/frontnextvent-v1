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
          { title: 'Polos 1', path: paths.about },
          { title: 'Polos 2', path: paths.contact },
          { title: 'Polos 3', path: paths.faqs },
          { title: 'Polos 4', path: paths.pricing },
          { title: 'Polos 5', path: paths.payment },
        ],
      },
      {
        subheader: 'Poleras',
        items: [
          { title: 'Poleras 1', path: paths.product.root },
          { title: 'Poleras 2', path: paths.product.demo.details },
          { title: 'Poleras 3', path: paths.product.checkout },
          { title: 'Poleras 4', path: paths.post.root },
          { title: 'Poleras 5', path: paths.post.demo.details },
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
