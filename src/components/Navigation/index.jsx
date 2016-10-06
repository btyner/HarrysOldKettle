import React from 'react';

class Navigation extends React.Component {
  constructor() {
    super();

    this.navitems = [{
      id: 1,
      name: "Home",
      url: "/"
    },{
      id: 2,
      name: "The Kettle Story",
      url: "/kettle-story"
    },{
      id: 3,
      name: "Menu",
      url: "/menu"
    },{
      id: 4,
      name: "Directions & Hours<br/><span>1633 Stitt St. Wabash, IN 46992</span>",
      url: "/directions-hours"
    }];

  }

  render() {
    return (
      <ul className="mainnav">
        {
          this.navitems.map((item) => {
            return <NavItem key={item.id} name={item.name} url={item.url} />
          })
        }
      </ul>
    )
  }
}

class NavItem extends React.Component {
  render() {
    return (
      <li><a href={this.props.url} dangerouslySetInnerHTML={{__html: this.props.name}} /></li>
    )
  }
}

export default Navigation;