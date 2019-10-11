import React from 'react';
import ImgCard from './img-card'
import {InputBase } from '@material-ui/core';  
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "../Styles/js/img-list";

import AddCircleIcon from '@material-ui/icons/AddCircle';
import {connect} from 'react-redux'



function ImgList(props) {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <header className={classes.header}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
         
          </div>
          <div>
          <InputBase
              placeholder="Add new picture"
              classes={{
                root: classes.AddInputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <AddCircleIcon className={classes.AddIcon}/>
          </div>
         
        </header>
        <main className={classes.imgList}>
            {props.imgList.map(el=><ImgCard title={el.title} src={el.src} />)}
        </main>

    </div>
  );
}
const mapStateToProps = (state) => ({
    // contactList: state.contactListReducer
    // viewType :state.changeViewReduce,
    imgList :state.imgReducer
  })
export default connect(mapStateToProps)(ImgList);
