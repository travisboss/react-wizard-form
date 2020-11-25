import React, { Component } from 'react'

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }


  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      setp: step + 1
    })
  }

  // Proceed to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      setp: step - 1
    })
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  } 

  render() {
    const { step } = this.state
    const { firstName, lastName, email, occupation, city, bio } = this.state
    const values = { firstName, lastName, email, occupation, city, bio }

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep ={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return <h1>FormPersonalDetail</h1>
      case 3:
        return <h1>Confirm</h1>
      case 3:
        return <h1>Success</h1>
    }

    return (
      <div>
        
      </div>
    )
  }
}

export default UserForm
