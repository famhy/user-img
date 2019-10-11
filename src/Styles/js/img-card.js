import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
    minWidth: 275,
    //   blockSize: '10%',
    // width :'25%',
        margin: '5px',
    },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    // title: {
    //   fontSize: 14,
    // },
    // pos: {
    //   marginBottom: 12,
    // },
    content :{
        backgroundImage : props=>`url(${props.src})`,
        height : '220px;',
        width: 'inherit',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    footer :{
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
    }
  });
  export default  useStyles;