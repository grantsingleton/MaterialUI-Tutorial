import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase'

const useStyles = makeStyles(theme => ({
  root: {
     width: 200,
     padding: 20,
  },
}));


class InputField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      favFood: '',
      comments: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)

    var firestore = firebase.firestore()
    this.docRef = firestore.collection("samples").doc("food")
    this.commentDocRef = firestore.collection("comments").doc("jan16")
  }

  componentDidMount() {
    // fetch the current favorite food
    this.docRef.get().then(function(doc) {
      if(doc && doc.exists) {
        const data = doc.data()
        // update the state
        this.setState({favFood: data.favoriteFood})
      }
    }.bind(this))

    this.docRef.onSnapshot(function(doc) {
      if(doc && doc.exists) {
        const data = doc.data()
        // update the state
        this.setState({favFood: data.favoriteFood})
      }
    }.bind(this))


    this.commentDocRef.get().then(function(doc) {
      if(doc && doc.exists) {
        const data = doc.data()
        // update the state
        this.setState({comments: data.conversation})
      }
    }.bind(this))
  }

  submit() {
    this.setState({favFood: this.state.value})
    this.docRef.set({
      favoriteFood: this.state.value
    }).then(function() {
      console.log("Saved!")
    }).catch(function(error) {
      console.log("Got an error: ", error)
    })

  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
      return (
      <div>
        <h1>Favorite food: {this.state.favFood}</h1>
        <TextField id="outlined-basic" label="Favorite Food" variant="outlined" onChange={this.handleChange}/>
        <Button variant="contained" color="primary" onClick={this.submit}>
        Submit
        </Button> 
        {this.state.comments.map( comment => 
          <h3>{comment}</h3>
        )}
      </div>
      );
  }
}
export default InputField
