import React, { Component } from 'react'

export default class Modal_add_new extends Component {
  render() {
    return (
      <form>
        <label htmlFor='name'>Name </label>
        <input name='name' id='name' type="text" onChange={this.props.onChange} />

        <label htmlFor='company'>Company </label>
        <input name='company' id='company' type="text"  onChange={this.props.onChange} />

        <label htmlFor='status'>Status </label>
        <input name='status' id='status' type="text"  onChange={this.props.onChange} />

        <label htmlFor='notes'>Notes </label>
        <input name='notes' id='notes' type="text"  onChange={this.props.onChange} />

        <button onClick={this.props.onClick}>Submit</button>
        <button onClick={this.props.onCancel}>Cancel</button>
      </form>

    )
  }
}
