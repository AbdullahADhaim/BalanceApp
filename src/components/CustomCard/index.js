import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BalanceCard({
  balance,
  account_number,
  type,
  user_name,
  iban,
  last_login
}) {
  return (
    <Card sx={{minHeight:150}}>
      <CardContent >
        {type == 'balance' ? <>
          <Typography variant="h5" component="div">
          Current Account Balance
        </Typography>
        <Typography variant="h5" component="div">
          ${balance}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Account {account_number}
        </Typography>

        
        </> : <>
        <Typography variant="h6" component="div">
          Welcome {user_name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          IBAN: {iban}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Last Login: {last_login}
        </Typography>

        </>}
      </CardContent>
    </Card>
  );
}
