import { fade,makeStyles } from '@material-ui/core/styles';

const  useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      // margin: '5% 10%',
    },
    header:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    search: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',

      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      // position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      borderBottom: '1px solid',

    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    mybutton :{
      border :'none',
      // padding : 0,
      margin : '0 5px',
      fontWeight: 400,
      fontSize: '24px',
    },
    line :{
      display: 'flex',
      alignItems: 'center',
      paddingBottom : '5px',
      borderBottom : '1px solid #d4d4d4'
    },
    names:{
        // flexGrow:2,
        // background :'red'
    },
    surnames:{
      // flexGrow:4,

    },
    birthY :{
      // background :'red',
      // flexGrow:1,

    },
    birthP :{
      // flexGrow:3,

    },
    action :{
      // background :'red',
      // flexGrow:2,
      display: 'flex',
      justifyContent: 'space-around',

    },

  }));
  export default useStyles;