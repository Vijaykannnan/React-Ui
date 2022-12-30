import * as React from 'react';
import bg4 from '../../img/bb3.webp'
import bg5 from '../../img/bg5.webp'
import './footer.css'

export default function Footer() {
    return (
        <div className='footer-content'>
            <div className='footer-details'>
                <div className='personal-details'>
                    <h1>LOGO</h1>
                    <p>This home provides entertianing spaces with a kitchen opening...</p>
                    <p><i className='fa fa-location'></i> A-32,Albany,Newyork.</p>
                    <p><i className='fa fa-phone'></i> +91 1234567890</p>
                    <p><i className='fa fa-envelope'></i> Contact@gmail.com</p>
                </div>
                <div className='tag-details'>
                    <h1>Tag</h1>
                    <p>Blog</p>
                    <p>Details</p>
                    <p>video</p>
                </div>
                <div className='about-details'>
                    <h1>About</h1>
                    <p>About Us</p>
                    <p>Listing</p>
                    <p>property</p>
                </div>
            </div>

            <div className='map-blog'>
                <div className='location-map'>
                    <h1>Our Location</h1>
                    <div className='iframe'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016687.2577265943!2d73.89377147851533!3d10.536367327858324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1670836736931!5m2!1sen!2sin" width="461" height="240" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
                <div className='top-blog'>
                    <h1>Our Latest Blog</h1>
                    <div className='top-blog-details'>
                        <img src={ bg4 } alt="" />
                        <div className='top-blog-details-info'>
                            <h5>Top News</h5>
                            <p>Apartment or Flat an individual unit in a multiple-unit building  calssified and connected to residence</p>
                        </div>
                    </div>
                    <div className='top-blog-details'>
                        <img src={ bg5 } alt="" />
                        <div className='top-blog-details-info'>
                            <h5>Latest News</h5>
                            <p>Residences can be calssified and connected to residences  an individual unit in a multiple-unit</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="atlast-copyright">
                <div className="footer-socilal-icons">
                    <ul>
                        <li><a href='/'><i className='fab fa-facebook'></i></a></li>
                        <li><a href='/'><i className='fab fa-twitter'></i></a></li>
                        <li><a href='/'><i className='fab fa-instagram'></i></a></li>
                        <li><a href='/'><i className='fab fa-google'></i></a></li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>Copyright 2022 by vk ❤️</p>
                </div>
            </div>
        </div >

    )
}

