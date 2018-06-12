import { map } from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from '../redux/actions';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './styles/itemLists';


class Itemlists extends Component {
  componentWillMount() {
    this.props.dispatch(fetchItems());
  }


  render() {
    const { classes, items } = this.props;

    if (!items) {
      return;
    }
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell numeric>Price</TableCell>
              <TableCell>DateBought</TableCell>
              <TableCell>DateFinish</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {map(items, (item, key) => {
              return (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell numeric>{item.price}</TableCell>
                  <TableCell>{moment(item.dateBought).format('L')}</TableCell>
                  <TableCell>{moment(item.dateFinish).format('L')}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

function mapStateToProps({ items }) {
  return { items };
}

Itemlists.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.object,
};

Itemlists.defaultProps = {
  items: null,
}

export default withStyles(styles)(connect(mapStateToProps)(Itemlists));