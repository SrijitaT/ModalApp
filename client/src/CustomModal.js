import React, { Component } from 'react';
import { Button,Modal,FormControl } from 'react-bootstrap';
class CustomModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter text</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl as="textarea" aria-label="Enter text here" onChange={this.props.handleChange}/>
                        <p id="validation-err">{this.props.validation}</p>
                    </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.props.handleSaveChanges}>
                    {this.props.saving ? "Saving.." : "Save Changes"}
                </Button>
            </Modal.Footer>
            </Modal>
            </div>
        );
    }
}

export default CustomModal;