import { Form, NavLink } from '@remix-run/react';
import {
  AccountCircleTwoTone,
  CloudUploadTwoTone,
  PaidTwoTone,
  PaletteTwoTone,
  PeopleAltTwoTone,
  SellTwoTone,
  WidgetsTwoTone,
} from '@mui/icons-material';
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Skeleton,
  Typography,
} from '@mui/material';
import { globals, theme } from '~/styles/emotion/theme';
import { useState } from 'react';
import { UserAccountNames } from '~/common/models/user-account-names';

type NavigationItem = {
  name: string;
  href: string;
  end: boolean;
  icon?: JSX.Element;
  initials?: string;
  childs?: NavigationItem[];
};

const mainNavigation: NavigationItem[] = [
  // { name: 'Dashboard', href: '/app/dashboard', end: true, icon: <HomeIcon className="w-6 h-6" /> },
  { name: 'Ventas', href: '/app/ventas/facturas', end: false, icon: <PaidTwoTone /> },
  { name: 'Contactos', href: '/app/contactos', end: false, icon: <PeopleAltTwoTone /> },
  {
    name: 'Productos',
    href: '/app/productos',
    end: false,
    icon: <SellTwoTone />,
    childs: [
      { name: 'Categorias', href: '/app/productos/categorias', end: false, initials: 'CA' },
      { name: 'Colores', href: '/app/productos/colores', end: false, initials: 'CO' },
    ],
  },
  { name: 'Theme', href: '/app/theme', end: false, icon: <PaletteTwoTone /> },
  { name: 'Import', href: '/app/import', end: false, icon: <CloudUploadTwoTone /> },
];

const style = {
  navigationRail: {
    bgcolor: globals.theme.background,
    margin: globals.size.s150,
    width: '13rem',
    overflow: 'hidden',
    borderRadius: globals.size.s200,
    boxShadow: theme.shadows[9],
  },
  navigationHeader: {
    alignItems: 'center',
    padding: '24px',
    gap: '0.5rem',
  },
  backPanel: {
    bgcolor: globals.theme.surfaceContainerHigh,
    height: '100%',
    color: globals.theme.onSurfaceVariant,
  },
};

interface Props {
  accountNames: UserAccountNames;
  children: React.ReactNode;
}

export default function LayoutPage({ children, accountNames }: Props) {
  return (
    <Box {...style.backPanel} display="flex">
      <Box {...style.navigationRail} display="flex" flexDirection="column">
        <Box {...style.navigationHeader} display="flex">
          {!accountNames.accountName ? (
            <>
              <Skeleton variant="circular" width={globals.size.s650} height={globals.size.s650} />
              <Skeleton variant="text" sx={{ fontSize: globals.size.s400, flexGrow: 1 }} />
            </>
          ) : (
            <>
              <Avatar sx={{ bgcolor: globals.palette.tertiary.c40 /*deepPurple[600]*/ }}>{accountNames.accountInitials}</Avatar>
              <Typography variant="subtitle1" noWrap component="span">
                {accountNames.accountName}
              </Typography>
            </>
          )}
        </Box>
        <Divider />
        <List sx={{ padding: globals.size.s200 }}>
          {mainNavigation.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: globals.size.s200,
                  '&.active': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.05)' },
                }}
                to={item.href}
                component={NavLink}
              >
                <ListItemIcon sx={{ minWidth: '36px', color: style.backPanel?.color }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: '1' }} />
        <BottomNavigation>
          <UserMenu accountNames={accountNames} />
          <BottomNavigationAction label="Modules" icon={<WidgetsTwoTone />} />
        </BottomNavigation>
      </Box>
      <Box flexGrow="1" component="main">
        {children}
      </Box>
    </Box>
  );
}

function UserMenu({ accountNames }: { accountNames: UserAccountNames }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <BottomNavigationAction label={accountNames.userName} icon={<AccountCircleTwoTone />} onClick={handleClick} />
      <Menu id="user-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Form method="post" action="/logout">
          <MenuItem onClick={handleClose} type="submit" component="button" sx={{ width: '100%' }}>
            Logout
          </MenuItem>
        </Form>
      </Menu>
    </>
  );
}
