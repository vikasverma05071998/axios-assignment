import React from "react";
import axios from "axios";
import "./axios.css";

export default class Servarcall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      custName: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        this.setState({ dataList: Response.data });
        console.log(Response.data, "hgfygfy");
      })
      .catch((err) => {
        console.log("Somthing is wrong");
      });
  }

  changeHandler = (evt) => {
    this.setState({
      custName: evt.target.value
    });
  };

  clickHandler = () => {
    var len = this.state.dataList.length + 1;

  
    if (this.state.custName !== "") {
      this.setState(
        {
          dataList: [
            ...this.state.dataList,
            { id: len, name: this.state.custName }
          ],
          custName: ""
        },
        () => {
          axios
            .post(
              "https://jsonplaceholder.typicode.com/users",
              this.state.dataList[len - 1]
            )
            .then((Response) => {
              console.log(Response.data);
            })
            .catch((err) => {
              console.log("Somthing is wrong in backend");
            });
        }
      );
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="title">Digikull School</h1>
          <h3>Hello Users</h3>
        </div>
        <div className="inputwala">
          <input
            type="text"
            placeholder="Add customer name"
            value={this.state.custName}
            onChange={this.changeHandler}
          ></input>
          <button onClick={this.clickHandler}>Add</button>
        </div>
        <div className="uldiv">
          <ul>
            {this.state.dataList.map((item, ind) => {
              return <li key={ind}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
