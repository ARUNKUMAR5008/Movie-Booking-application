import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import MoviesData from '../../common/moviesData.js';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
//   gridList: {
//     height: '350',
//   },
});

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {MoviesData.map(movie => (
          <GridListTile style={{margin: 16, height: 350}} key={movie.poster_url}>
            <img src={movie.poster_url} alt={movie.title} />
            <GridListTileBar
              title={movie.title}
              subtitle={<span>Release Date: {movie.release_date}</span>}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList); 