import {Component} from 'react'
import './index.css'

class ImagesTab extends Component {
  render() {
    const {eachList} = this.props
    const {imageUrl} = eachList
    console.log(imageUrl)
    return (
      <li>
        <img src={imageUrl} />
      </li>
    )
  }
}

export default ImagesTab
