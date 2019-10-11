import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "../Styles/js/img-card";

export default function ImgCard(props) {
  const classes = useStyles(props);
console.log(props.src,props.title)
  return (
    <section className='col-3'> 
      <Card  className={classes.card}>
        <CardContent className={classes.content}>
          {/* <img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599"/> */}
        </CardContent>
        <CardActions className={classes.footer}>
          <p>{props.title}</p>
          <section>
            <VisibilityIcon />
            <DeleteIcon />
          </section>
        </CardActions>
      </Card>
    </section>
  );
}
