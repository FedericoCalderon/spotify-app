import './Details.css';
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toMinutes } from "../../utils/tools"

function Details() {

    const pageId = useHistory().location.pathname.split("/details/")[1];
    const page = Number(pageId.split('-')[0])
    const id = Number(pageId.split('-')[1])
    const position = (page * 10) + id
    const track = useSelector(store => store.songsBySearch)[position]

    return (
        <div className='details' key={`details${track.id}`}>
            <div className="link">
                <Link to="/">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png" alt="" />
                </Link>
                <h3>Details</h3>
            </div>
            <div className="div_container">
                <div className="div_image">
                    <img src={track.album.images[0].url} alt="" />
                </div>
                <div className="div_details">
                    <p>
                        <span className="span_property">Original name:</span>
                        <span className="span_value">{track.name}</span>
                    </p>
                    <p>
                        <span className="span_property">Disc Number:</span>
                        <span className="span_value">{track.disc_number}</span>
                    </p>
                    <p>
                        <span className="span_property">Duration: </span>
                        <span className="span_value">{toMinutes(track.duration_ms)} minutes</span>
                    </p>
                    <div className='div_artists'>
                        <span className="span_property">Artists: </span>
                        <ul data-test="data-ul_value_artists">
                            {
                                track.artists.map((artist, index) =>
                                <li key={`key${index}`} data-type="data-li_value_artist"
                                    id={index}
                                >
                                    {artist.name}
                                </li>)
                            }
                        </ul>
                    </div>
                    <p>
                        <span className="span_property">Popularity: </span>
                        <span className="span_value">{track.popularity}</span>
                    </p>
                    {
                        track.preview_url &&
                        <p>
                            <span className="span_property">Preview: </span>
                            <span className="span_value"><audio controls src={`${track.preview_url}`}></audio></span>
                        </p>
                    }
                    <p>
                        <span className="span_property">Album name: </span>
                        <span className="span_value">{track.album.name}</span>
                    </p>
                    <p>
                        <span className="span_property">Album type: </span>
                        <span className="span_value">{track.album.album_type}</span>
                    </p>
                    <p>
                        <span className="span_property">Album release date: </span>
                        <span className="span_value">{track.album.release_date}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Details;
