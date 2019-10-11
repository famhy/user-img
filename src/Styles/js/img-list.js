import { fade,makeStyles } from '@material-ui/core/styles';

const  useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      // margin: '5% 10%',
      background : '#fff'
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

      border: '1px solid #cfd8dc',
      borderRadius : '5px',

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
    AddInputRoot :{
        color: 'inherit',

        border: '1px solid #cfd8dc',
        borderRadius : '5px',
    },
    AddIcon :{
     color :'#607d8b',
     margin:'0 5px',
    },
    imgList:{
        marginTop:'10px',
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap',
    }

  }));
  export default useStyles;