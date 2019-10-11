import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'

import useStyles from "../Styles/js/add-modal";
import {addUser,editUser} from '../Action/action'
function AddModal(props) {
  console.log(props.open);
  const classes = useStyles();
  let user={
    name : "",
    surname: "",
    birthY: "",
    birthP :"",
}
let modif=false
  //   const [open, setOpen] = React.useState(props.open);
  console.log(props.user)
 
  if(props.user!==undefined){
    // setname(props.user.name)
   user=props.user
   modif=props.modif
  }
  const [name, setname] = React.useState(user.name);
  const [surname, setsurname] = React.useState(user.surname);
  const [birthY, setbirthY] = React.useState(user.birthY);
  const [birthP, setbirthP] = React.useState(user.birthP);


  console.log('user.name',user.name)

  const handlename = (e) => {
    setname(e.target.defaultValue);
    
  };

  const handlesurname = (e) => {
    e.target.value=e.target.defaultValue
    setsurname( e.target.value);
  };

  const handlebirthY = (e) => {
    setbirthY(e.target.defaultValue);

  };

  const handlebirthP = (e) => {
    setbirthP(e.target.defaultValue);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      {/* <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transiton-group animates me.</p>
          </div>
        </Fade> */}
      <div className={classes.addForm}>
        <TextField
          id="name"
          label="Name"
          placeholder="Set Name"
          className={classes.textField}
          margin="normal"
          defaultValue={user.name}
          onChange={handlename}
        />

        <TextField
          id="surname"
          label="surName"
          placeholder="Set surName"
          className={classes.textField}
          margin="normal"
          onChange={handlesurname}
          defaultValue={user.surname}

        />

        <TextField
          id="birthY"
          label="birthday year"
          placeholder="Set birthday year"
          className={classes.textField}
          margin="normal"
          onChange={handlebirthY}
          defaultValue={user.birthY}

        />

        <TextField
          id="birthP"
          label="birthday place"
          placeholder="Set birthday place"
          className={classes.textField}
          margin="normal"
          onChange={handlebirthP}
          defaultValue={user.birthP}

        />
        <Button variant="outlined" className={classes.button} onClick={()=>{
            console.log(name,surname,birthY,birthP)
            if(modif===false){
              console.log('add',modif)

              props.addUser({
                name : name,
                surname: surname,
                birthY: birthY,
                birthP :birthP,
            })
            }
            else{
              console.log('update',modif)
              console.log("NEWWWWWUSER   /       :::: ",props.user._id,name,surname,birthY,birthP)
              props.editUser({
                _id : props.user._id,
                name : name,
                surname: surname,
                birthY: birthY,
                birthP :birthP,
            })
            }
           
            props.handleClose()
            }}>
        Default
      </Button>
      </div>
    </Modal>
  );
}
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (payload)=>{dispatch(addUser(payload))},
        editUser:(payload)=>{dispatch(editUser(payload))},
      }
  };
export default connect(null,mapDispatchToProps)(AddModal)