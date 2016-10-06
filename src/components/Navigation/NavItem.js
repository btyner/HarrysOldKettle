import React from 'react';

class NavItem extends React.Component {
  render() {
    return (
      <li><a href={this.props.url} dangerouslySetInnerHTML={{__html: this.props.name}} /></li>
    )
  }
}

export default NavItem;