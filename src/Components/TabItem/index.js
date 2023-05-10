import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {eachTab, getActiveTab} = this.props
    const {tabId, displayText} = eachTab

    const displayImages = () => {
      getActiveTab(tabId)
    }

    return (
      <li>
        <button className="button" type="button" onClick={displayImages}>
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
