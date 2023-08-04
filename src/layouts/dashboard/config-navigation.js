import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('Vista General'), //overview
        items: [
          { title: t('ecommerce'), path: paths.dashboard.general.ecommerce, icon: ICONS.ecommerce },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: t('administración'), //management
        items: [
          // USER - USUARIOS
          {
            title: t('Usuarios'),
            path: paths.dashboard.user.root,
            icon: ICONS.user,
            children: [
              { title: t('Listado'), path: paths.dashboard.user.list },
              { title: t('Crear'), path: paths.dashboard.user.new },
            ],
          },

          // PRODUCT - PRODUCTOS
          {
            title: t('productos'),
            path: paths.dashboard.product.root,
            icon: ICONS.product,
            children: [
              { title: t('listado'), path: paths.dashboard.product.root },
              { title: t('crear'), path: paths.dashboard.product.new },
            ],
          },

          // ORDER - ORDENES
          {
            title: t('ordenes'),
            path: paths.dashboard.order.root,
            icon: ICONS.order,
            children: [
              { title: t('listado'), path: paths.dashboard.order.root },
            ],
          },

          // INVOICE - FACTURAS
          {
            title: t('facturas'),
            path: paths.dashboard.invoice.root,
            icon: ICONS.invoice,
            children: [
              { title: t('listado'), path: paths.dashboard.invoice.root },
              { title: t('crear'), path: paths.dashboard.invoice.new },
            ],
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
