import React from 'react';
import {Paper,InputBase } from '@material-ui/core';  
import SearchIcon from '@material-ui/icons/Search';
import PanoramaIcon from '@material-ui/icons/Panorama';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import useStyles from '../Styles/js/users-list'
import {connect} from 'react-redux'
import {getUserList,deleteUser} from '../Action/action'
import AddModal from './add-modal'
import ModifModal from './modif-modal'
import { Link } from 'react-router-dom';

function UsersList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(undefined);
  const [search, setSearch] = React.useState("");

  // props.getUserList()

  React.useEffect(() => {
    props.getUserList()
  },[])
  // React.useEffect(() => {
  //   console.log(props.usersList)
  // })
  console.log('hhhh',props.usersList)

  const handleOpen = () => {
    setOpen(true);
  };

 
  const handleClose = () => {
    setOpen(false);
    props.getUserList()

  };
  const handlemodif = (user) => {
    console.log(user)
    setOpen(true);
    setUser(user);
  };
  const handlChange=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <section className='Users-list'>
      <Paper className={classes.root}>
        <header className={classes.header}>
          <h1>Users List</h1>
         
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
              onChange={(e)=>handlChange(e)}
            />
          <button className={classes.mybutton} onClick={handleOpen}>
            +
          </button>
          <AddModal open={open} handleClose={handleClose}/>
          </div>
          
      
        </header>
        <main>
          <section className={classes.line}>

          <section className={classes.names+' col-2'}>Names</section>
          <section className={classes.surnames+' col-4'}>surnames</section>
          <section className={classes.birthY+' col-1'}>Birth Year</section>
          <section className={classes.birthP+' col-3'}>Birth Place</section>
          <section className={classes.action+' col-2'}>Action</section>

          </section>
        { props.usersList.map(el=><section className={classes.line}>
     
     <section className={classes.names+' col-2'}>{el.name}</section>
     <section className={classes.surnames+' col-4'}>{el.surname}</section>
     <section className={classes.birthY+' col-1'}>{el.birthY}</section>
     <section className={classes.birthP+' col-3'}>{el.birthP}</section>
     <section className={classes.action+' col-2'}>
       <Link to={`/profile/${el._id}`}>
    
       <PanoramaIcon/>
    
       </Link>
       <EditIcon  onClick={()=>
        handlemodif(el)
    
       }
         
         />
         <AddModal open={open} handleClose={handleClose} modif={true} user={user} />;
    
       <DeleteOutlineIcon onClick={()=>{
         console.log(el._id)
         props.deleteUser(el._id)
         props.getUserList()
         
         }}/>
     </section>
    
     </section>
        )}
         
         

        </main>
      </Paper>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: (payload)=>{dispatch(getUserList(payload))},
    deleteUser: (payload)=>{dispatch(deleteUser(payload))},
    }
};
const mapStateToProps = (state) => ({
  // contactList: state.contactListReducer
  // viewType :state.changeViewReduce,
  usersList :state.userReducer
})
export default connect(mapStateToProps,mapDispatchToProps)(UsersList)