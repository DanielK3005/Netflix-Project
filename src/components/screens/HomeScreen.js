import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import "../styles/HomeScreen.css"
import Footer from '../Footer';

function HomeScreen(props) {
    const navigate = useNavigate();

    const handelLogginStatus = () => {
        if (props.isLoggedIn === true) {
            navigate("/Movies")
            window.location.reload();
        }
    }
    useEffect(() => handelLogginStatus(), [props.isLoggedIn])


    return (
        <div className='homescreen'>
            <Header isLoggedIn={props.isLoggedIn} />
            <div class="homescreen__container">
                <img src="https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224740-3441109.png" class="homescreen__image" />
                <div class="homescreen__maintext">
                    <h1>Unlimited movies, TV shows, and more</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                </div>
            </div>
            <Footer className='homescreen__footer'/>
        </div>
    )
}

export default HomeScreen
