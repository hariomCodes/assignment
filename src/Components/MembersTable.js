import React, { Component } from "react";
import Modal_add_new from "./Modal_add_new";

export default class MembersTable extends Component {
  constructor(props) {
    super();
    this.state = {
      members: [
        {
          name: "Hari Om Tiwari",
          company: "Pepcoding",
          status: "Active",
          notes: "Intern",
          id: 1,
        },
      ],

      name: null,
      company: null,
      status: null,
      notes: null,
      id: null,

      currentId: 1,
      addNew: false,
    };
  }
  handleAdd = () => {
    this.setState({
      addNew: true,
    });
  };
  handleSubmit = () => {
    const { name, company, status, notes } = this.state;
    this.setState({
      members: [
        ...this.state.members,
        { name, company, status, notes, id: this.state.currentId + 1 },
      ],

      name: null,
      company: null,
      status: null,
      notes: null,
      id: null,

      currentId: this.state.currentId + 1,
      addNew: false,
    });
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCancel = () => {
    this.setState({
      addNew: false,
    });
  };
  render() {
    const { addNew } = this.state;
    return (
      <>
        {addNew ? (
          <Modal_add_new
            onChange={this.handleChange}
            onClick={this.handleSubmit}
            onCancel={this.handleCancel}
          />
        ) : (
          <table>
            <thead>
              <tr>
                <th className="heading">
                  <h1>Team Members</h1>
                  <button onClick={this.handleAdd}>Add New</button>
                </th>
              </tr>
              <tr className="member-row">
                <th className="name">
                  <p>Name</p>
                </th>
                <th className="company">
                  <p>Company</p>
                </th>
                <th className="status">
                  <p>Status</p>
                </th>
                <th className="notes">
                  <p>Notes</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {this.state.members.map((member) => (
                <tr key={member.id} className="member-row">
                  <td className="name">
                    <input type='checkbox'onClick={this.handleChecked}/>
                    <p>{member.name}</p>
                  </td>
                  <td className="company">
                    <p>{member.company}</p>
                  </td>
                  <td className="status">
                    <p>{member.status}</p>
                  </td>
                  <td className="notes">
                    <p>{member.notes}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}
