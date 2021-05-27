import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Table from "../components/Table";
import API from "../utils/API"

class Generate extends Component {

  state = {
    id: "",
    name: "",
    phone: "",
    email: "",
    // age: ""
  };
  componentDidMount() {
    this.loadEmployee();
  }

  loadEmployee = () => {
    API.getEmployee()
      .then(res =>
        this.setState({
          name: res.data.results.name,
          phone: res.data.results.phone,
          email: res.data.results.email,
          // age: res.data.results.dob.age
        }))
      .catch(err => console.loe(err));
  };
  render() {


    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>

            <h1>Employee Directory</h1>

          </Row>
          <Row>
            <Table
              name={this.state.name}
              phone={this.state.phone}
              email={this.state.email}
            // age={this.state.dob.age}
            />
          </Row>
        </Container>
      </div >
    );
  }

}

export default Generate;
