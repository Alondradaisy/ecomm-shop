import { Box } from "@mui/system";
import React from "react";
import { connect, useSelector } from "react-redux";
import { EMPTY_BAG } from "../App";

class ItemCount extends React.Component {
  handleEmptyBag = () => {
    console.log("Bag should be empty");
    this.props.EMPTY_BAG();
  };

  render() {
    const { shoppingBag } = this.props;
    return (
      <Box>
        <div>ItemCount: {shoppingBag.length}</div>
        <button onClick={() => this.handleEmptyBag()}>Empty bag</button>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingBag: state.shoppingBag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyBag: () => dispatch({ type: EMPTY_BAG }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCount);
