import './location.css';
import mapPointer from '../../images/locationMap.svg';

export default function Location(props) {
  return (
    <div className="location">
      <img className="location--pic" src={props.details.imageUrl} alt={props.details.title} />
      <div className="location--info">
        <div className="location--google">
          <img src={mapPointer} alt="map pointer" />
          <span className="location--country">{props.details.location.toUpperCase()}</span>
          <a className="location-google-link" href={props.details.googleMapsUrl} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
        <div className="location--name">{props.details.title}</div>
        <div className="location--duration">{props.details.startDate} - {props.details.endDate}</div>
        <div className="location--description">{props.details.description}</div>
      </div>
    </div>
  )
}
