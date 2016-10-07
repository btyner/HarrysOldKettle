import React from 'react';
import './navigation.css';

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
          this.navitems.map((item, idx) => {
            return <li key={item.id}><a href={item.url} className={ idx === 0 && "active"} dangerouslySetInnerHTML={{__html: item.name}} /></li>
          })
        }
      </ul>
    )
  }
}

export default Navigation;