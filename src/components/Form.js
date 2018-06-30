import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            What went well:
            <textarea
              class="field"
              name=""
              id=""
              cols="30"
              rows="5"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <textarea class="field" name="" id="" cols="30" rows="5" />
            <textarea class="field" name="" id="" cols="30" rows="5" />
          </label>
          <Button class="add-button" bsStyle="success" type="submit" block>
            Add
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
