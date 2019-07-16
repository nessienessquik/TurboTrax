import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import AddCircle from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: 'red',
    },
  },
}));

export default function AddNewButton() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>

      <AddCircle onClick={handleClick}></AddCircle>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <FormControl>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <Button>Save</Button>
        </FormControl>
        
      </Popover>
    </div>
  );
}
