import { Home } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}
export const MenuLateral: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Avatar
              sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZl_h_5grtXg8CtBkPE6jYysxz0xBfp0e0MZtW4SyoA7cy-1WJ527ZQJSSubpixDyVyS8&usqp=CAU"
            />
          </Box>
        </Box>

        <Divider />
        <Box flex={1}>
          <List component="nav">
            <ListItemButton>
              <ListItemIcon>
                  <Home/>
              </ListItemIcon>
              <ListItemText primary="Pagina inicial"/>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
