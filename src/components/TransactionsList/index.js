import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { green, red } from "@mui/material/colors";

export default ({ transactions }) => {
  return (
    <List>
      {transactions.map((trx) => (
        <ListItem>
          <ListItemButton component="nav" divider>
            <ListItemText
              secondary={trx.date}
              primary={
                "$" + (trx.amount < 0 ? trx.amount * -1 : trx.amount)
              }
              sx={{
                color: trx.amount > 0 ? green[500] : red[500],
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
