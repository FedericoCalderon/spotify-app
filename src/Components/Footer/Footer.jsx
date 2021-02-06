import './Footer.css';
import { useSelector } from 'react-redux';
function Footer() {

    const songs = useSelector(store => store.songsBySearch);
    const view = !songs || !songs.length ? {position: 'fixed'} : {position: 'relative'};
    return (
        <div className='footer' style={view}>
            <span>© Copyright </span>
            <span id="name"> Federico Calderón</span>
            <span> All Rights Reserved</span>
        </div>
    )
}

export default Footer;
