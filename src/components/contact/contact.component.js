import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      telephone: '',
      email: '',
      message: '',
    };
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onTelephoneChange(event) {
    this.setState({ telephone: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    // fetch('http://localhost:3002/send', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response.status === 'success') {
    //       alert('Message Sent.');
    //       this.resetForm();
    //     } else if (response.status === 'fail') {
    //       alert('Message failed to send.');
    //     }
    //   });
  }

  render() {
    return (
      <div className="">
        <h1 style={{ color: '#172dba' }}>Formulario de Contacto</h1>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name" style={{ color: '#172dba' }}>
              <b>Nombre</b>
            </label>
            <input
              type="text"
              required
              minLength="3"
              maxLength="50"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone" style={{ color: '#172dba' }}>
              <b>Teléfono</b>
            </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.telephone}
              onChange={this.onTelephoneChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" style={{ color: '#172dba' }}>
              <b>Correo electrónico</b>
            </label>
            <input
              type="email"
              required
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{ color: '#172dba' }}>
              <b>Mensaje</b>
            </label>
            <textarea
              className="form-control"
              required
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
