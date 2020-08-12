import React, { Component } from 'react';
import './budget.css';

export default class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      telephone: '',
      email: '',
      brandAndModel: '',
      letter: '',
      year: '',
      displacement: '',
      failure: '',
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

  onBrandChange(event) {
    this.setState({ brandAndModel: event.target.value });
  }

  onLetterChange(event) {
    this.setState({ letter: event.target.value });
  }

  onYearChange(event) {
    this.setState({ year: event.target.value });
  }

  onDisplacementChange(event) {
    this.setState({ displacement: event.target.value });
  }

  onFailureChange(event) {
    this.setState({ failure: event.target.value });
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
        <h1 style={{ color: '#172dba' }}>Presupuesto</h1>
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
          <div style={{ padding: '12px', background: '#e6e6e6' }}>
            <div className="row">
              <div className=" col-sm-6">
                <div className="form-group">
                  <label htmlFor="Marcaymodelo" style={{ color: '#172dba' }}>
                    <b>Marca y modelo del vehículo</b>
                  </label>
                  <input
                    className="form-control"
                    required
                    name="Marcaymodelo"
                    type="text"
                    value={this.state.brandAndModel}
                    onChange={this.onBrandChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="letrasdelmotor" style={{ color: '#172dba' }}>
                    <b>Letras del Motor</b>
                  </label>
                  <input
                    className="form-control"
                    name="letrasdelmotor"
                    type="text"
                    value={this.state.letter}
                    onChange={this.onLetterChange.bind(this)}
                  />
                </div>
              </div>
              <div className=" col-sm-6">
                <div className="form-group">
                  <label htmlFor="year" style={{ color: '#172dba' }}>
                    <b>Año</b>
                  </label>
                  <input
                    className="form-control"
                    name="year"
                    type="text"
                    value={this.state.year}
                    onChange={this.onYearChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="displacement" style={{ color: '#172dba' }}>
                    <b>Cilindrada</b>
                  </label>
                  <input
                    className="form-control"
                    name="displacement"
                    type="text"
                    value={this.state.displacement}
                    onChange={this.onDisplacementChange.bind(this)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" col-sm-12">
                <div className="form-group">
                  <label htmlFor="failure" style={{ color: '#172dba' }}>
                    <b>Avería o trabajo a presupuestar</b>
                  </label>
                  <textarea
                    className="form-control"
                    name="failure"
                    type="text"
                    value={this.state.failure}
                    onChange={this.onFailureChange.bind(this)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
