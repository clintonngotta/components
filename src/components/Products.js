import React, { Component } from "react";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
    };
  }

  clearState = () => {
    console.log(this.state.products);
    this.setState({
      ...this.state,
      products: [],
    });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Products</h1>
        <button onClick={() => this.clearState()}>clear state</button>
      </React.Fragment>
    );
  }
}
export default Products;
