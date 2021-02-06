import './Cards.css';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOneSong } from '../../redux/actions';
import { paginationTool } from '../../utils/tools';

function Cards() {
    const songs = useSelector((store) => store.songsBySearch);
    const pagesSongs = songs && paginationTool(songs, 10);
    const [pageState, setPageState] = useState(0);

    if (!songs) {
        return (
            <div className='cards'>
                <div className="div_null">
                    <h3>Home</h3>
                    <img src="https://c.wallhere.com/photos/27/cb/1680x1050_px_music_Rock_Bands-836844.jpg!d" alt=""/>
                </div>
            </div>
        )
    } if (!songs.length) {
        return (
            <div className='cards'>
                <div className="div_no_results">
                    <h1>No Results founds</h1>
                </div>
            </div>
        )
    } else return (
        <div data-test="data-cards" className='cards'>
            <div data-test="data-div_cards" className='div_cards'>
                {
                    pagesSongs[pageState].map((song, index) =>
                        <div
                            data-test='data-div_map' className='div_map' 
                            key={song.id}
                            >
                            <Link
                                data-test='data-link'
                                to={`/details/${pageState}-${index}`}
                                >
                                <div className='div_card'>
                                    <p data-test="data-name">
                                        {song.name}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
            <div className="pages">
                {
                    pagesSongs.map((item, index) =>
                        <div key={`pages_map${index}`} className="pages_map">
                            <button onClick={() => { setPageState(index) }} >
                                {index + 1}
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default Cards;
