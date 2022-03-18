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
          <div>
            <h1>MembersTable</h1>
            <div className="members-table">
              <div className="member-row">
                <div className="name">
                  <p>Name</p>
                </div>
                <div className="company">
                  <p>Company</p>
                </div>
                <div className="status">
                  <p>Status</p>
                </div>
                <div className="notes">
                  <p>Notes</p>
                </div>
              </div>
              {this.state.members.map((member) => (
                <div key={member.id} className="member-row">
                  <div className="name">
                    <p>{member.name}</p>
                  </div>
                  <div className="company">
                    <p>{member.company}</p>
                  </div>
                  <div className="status">
                    <p>{member.status}</p>
                  </div>
                  <div className="notes">
                    <p>{member.notes}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={this.handleAdd}>Add New Member</button>
          </div>
        )}
      </>
    );
  }
}
