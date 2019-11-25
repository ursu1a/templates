import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
   root: {
      background: 'white',
      borderRadius: '2'
   }
};

function WhiteButton(props) {
   const {classes, children, className, ...other} = props;

   return (
      <Button
         className={clsx(classes.root, className)}
         variant="outlined"
         color="primary"
         {...other}
      >
         {children || 'empty'}
      </Button>
   );
}

WhiteButton.propTypes = {
   children: PropTypes.node,
   classes: PropTypes.object.isRequired,
   className: PropTypes.string,
};

export default withStyles(styles)(WhiteButton);