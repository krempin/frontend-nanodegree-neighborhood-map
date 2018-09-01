import React, { Component } from 'react'

class List extends Component {
  render() {

    return (
      <div> 
        <nav id="menu" className="temples-list">
          <ul>
            {this.props.temples.map(t => (
              <li 
                key={t.id} 
                tabIndex="0"
              >
                {t.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}


export default List