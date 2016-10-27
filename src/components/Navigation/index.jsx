import React from 'react';
import { IndexLink, Link } from 'react-router';

class Navigation extends React.Component {
  constructor() {
    super();

    this.navitems = [{
      id: 1,
      name: "The Kettle Story",
      url: "History"
    },{
      id: 2,
      name: "Menu",
      url: "Menu"
    },{
      id: 3,
      name: "Directions & Hours<br/><span>1633 Stitt St. Wabash, IN 46992</span>",
      url: "Directions"
    }];

  }

  render() {
    return (
      <ul className="mainnav">
        <li>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </li>
        {
          this.navitems.map((item, idx) => {
            return <li key={item.id}><Link to={item.url} activeClassName="active" dangerouslySetInnerHTML={{__html: item.name}} /></li>
          })
        }
      </ul>
    )
  }
}

export default Navigation;