import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

/*icones */
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PaymentIcon from '@mui/icons-material/Payment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function ListItemDashboard({ listHeader, type }) {
  const itemsApp = [
    {
      name: "Usuários",
      icon: <GroupIcon />,
    },
    {
      name: "Perfis App",
      icon: <AssignmentIndIcon />,
    },
    {
      name: "Produtos",
      icon: <ListAltIcon />,
    },
    {
      name: "Meios de Pagamento",
      icon: <PaymentIcon />,
    },
    {
      name: "Terminais",
      icon: <DesktopWindowsIcon />,
    },
  ];

  const itemsPortal = [
    {
      name: "Usuários Portal",
      icon: <GroupIcon />,
    },
    {
      name: "Perfis Portal",
      icon: <AssignmentIndIcon />,
    },
    {
      name: "Permissões",
      icon: <ManageAccountsIcon />,
    },
  ];
  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {listHeader}
        </ListSubheader>
      }
    >
      {type === "MENUAPP"
        ? itemsApp.map((item) => (
            <ListItem>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))
        : itemsPortal.map((item) => (
            <ListItem>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
    </List>
  );
}

export default ListItemDashboard;
