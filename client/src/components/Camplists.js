import { map } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchCampgrounds } from '../redux/actions';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1200,
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


class Camplists extends Component {
  componentWillMount() {
    console.log(this.props.dispatch)
    this.props.dispatch(fetchCampgrounds());
  }


  render() {
    const { classes, campgrounds } = this.props;
    if (!campgrounds) {
      return;
    }
    return (
      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={3}>
          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <ListSubheader component="div">Campgrounds</ListSubheader>
          </GridListTile>
          {map(campgrounds, row => (
            <GridListTile key={row._id} cols={1} >
              <img src={row.image} alt={row.name} />
              <GridListTileBar
                title={row.name}
                subtitle={<span>by: {row.description}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>

                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

function mapStateToProps({ campgrounds }) {
  return { campgrounds };
}

Camplists.propTypes = {
  classes: PropTypes.object.isRequired,
  campgrounds: PropTypes.object,
};

Camplists.defaultProps = {
  campgrounds: null,
}

export default withStyles(styles)(connect(mapStateToProps)(Camplists));