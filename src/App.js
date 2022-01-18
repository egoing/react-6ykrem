import React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Typography from '@mui/material/Typography';
import MuiAlert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function App() {
  return (
    <Container>
      <Paper className="item">
        <h1>Button</h1>
        <Stack direction="row" spacing={2}>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>
      </Paper>
      <Paper className="item">
        <h1>Checkobx</h1>
        <Stack direction="row" spacing={2}>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} defaultChecked color="secondary" />
          <Checkbox {...label} defaultChecked color="success" />
          <Checkbox {...label} defaultChecked color="default" />
        </Stack>
      </Paper>
      <Paper className="item">
        <h1>List</h1>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton selected={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </List>
        </Box>
      </Paper>
      <Paper className="item">
        <h1>List</h1>
        <Typography variant="h1" component="div" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom component="div">
          h2. Heading
        </Typography>
      </Paper>
      <Paper className="item">
        <h1>Snackbar</h1>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Alert severity="error">This is an error message!</Alert>
          <Alert severity="warning">This is a warning message!</Alert>
          <Alert severity="info">This is an information message!</Alert>
          <Alert severity="success">This is a success message!</Alert>
        </Stack>
      </Paper>
    </Container>
  );
}
