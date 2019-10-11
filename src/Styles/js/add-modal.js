import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
        // color:'red',
    //   backgroundColor: '#fff',
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)

    },
    addForm :{
        padding : '20px',
        backgroundColor: '#fff',
        display:'flex',
        flexDirection : 'column'
    },
    button: {
        margin: theme.spacing(1),
      },
  }));
  export default useStyles;