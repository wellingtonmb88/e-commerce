import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "@material-ui/core";

const styles = {
  list: { margin: "10px 50px 10px 50px" }
};

class ProductList extends Component {
  generateListItem = item => {
    const { onItemClick } = this.props;
    return (
      <div key={item.id}>
        <ListItem
          divider={true}
        >
          <ListItemText primary={item.title} />
          <ListItemText primary={item.price} />
          <ListItemText primary={item.description} />
        </ListItem>
      </div>
    );
  };

  render() {
    const { items } = this.props;
    return (
      <List component="nav" style={styles.list}>
        {items.map(this.generateListItem)}
      </List>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ProductList;
