import React, { Component } from 'react'

class List extends Component {
  onTempleSelection(t) {
    this.props.hideOffCanvas()
    this.props.setActiveTemple(t)
  }

  render() {
    const resultNumber = this.props.temples.length

    return (
      <div>
        <span className="search-results">
          {`${resultNumber} Ergebnis${resultNumber>1?'se':''}`}
        </span>

        <nav id="menu" className="temples-list">
          <ul>
            {this.props.temples.map(t => (
              <li
                key={t.id}
                tabIndex="0"
                className={t.active ? 'act' : ''}
                onClick={() => this.onTempleSelection(t)}
              >
                {t.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default List