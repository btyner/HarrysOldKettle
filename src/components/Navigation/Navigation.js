import React from 'react';
import NavItem from './NavItem';

class Navigation extends React.Component {
  render() {
    const navitems = [{
      name: "Home",
      url: "/"
    },{
      name: "The Kettle Story",
      url: "/kettle-story"
    },{
      name: "Menu",
      url: "/menu"
    },{
      name: "Directions & Hours<br/><span>1633 Stitt St. Wabash, IN 46992</span>",
      url: "/directions-hours"
    }];
    const createListItem = navitems.map((item) => {
      return <NavItem name={item.name} url={item.url} />
    });
    return (
      <ul className="mainnav">
        {createListItem}
      </ul>
    )
  }
}

export default Navigation;