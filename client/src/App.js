import React,{Component}from 'react';
import { Button,Container,Row,Alert } from 'react-bootstrap';
import { connect } from "react-redux";
import { getNotes,addNote,addANote } from "./actions/index";
import CustomModal from "./CustomModal";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component{
 constructor(props){
   super(props);
   this.state = { show:false, text:"", saving:false, error:"", validation:""}
 }
 componentDidMount(){
   this.props.getNotes();
 }
 handleClose = () => this.setState({show:false})

 handleShow = () => this.setState({show:true,error:"",validation:""})

 handleChange = (e) => this.setState({text:e.target.value,validation:""})

 handleSaveChanges = () => {
   if(this.state.text){
   this.setState({saving:true});
   this.props.addNote({content:this.state.text})
   .then(res=>
    {
     this.props.addANote([res.data]);
     this.setState({saving:false,show:false});
    })
    .catch(err =>
      {
        this.setState({error:"Could not save...Please try again!",show:false});
        setTimeout(()=>this.setState({error:""}),2000);
      })
    }
    else
    {
      this.setState({validation:"Text is required!"});
    }
 }

render(){
  return (
    <Container>
      <Row>
        <Button variant="primary" onClick={this.handleShow} id="text-btn">Click to add a Note</Button>
      </Row>
    <Row>
      <h4>List of Notes..</h4>
      <ul>
      {
        this.props.notes.loading ? 
        "Loading..."
        :
        this.props.notes.data.length > 0 ? 
          this.props.notes.data.map(note=><li key={note._id}>{note.content}</li>)
          :"No notes to display!"
      }
      </ul>
    </Row>
    <Row>
      {this.state.error?
      <Alert variant="danger">{this.state.error}</Alert>
      :
      null}
    </Row>
    <CustomModal 
    validation={this.state.validation} 
    handleClose={this.handleClose} 
    handleShow={this.handleShow} 
    handleChange={this.handleChange} 
    handleSaveChanges={this.handleSaveChanges} 
    show={this.state.show}/>
    </Container>
  );
}
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(
  mapStateToProps,
  { getNotes,addNote,addANote }
)(App);
