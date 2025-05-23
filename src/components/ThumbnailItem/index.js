// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, activeThumnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThubnil = () => {
    activeThumnailId(id)
  }

  const thumnailClassName = isActive ? `thumbnail active` : `thumbnail`

  return (
    <li className="list-items">
      <button type="button" onClick={onClickThubnil} className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
