import React from 'react'
import vg from "../assets/2.webp";
import GoogleIcon from '@mui/icons-material/Google';
import { Instagram, Reddit, YouTube } from '@mui/icons-material';

const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>TechGeeks</h1>
                    <p>Solution to all your tech problems.</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis voluptatibus accusantium a nulla asperiores nemo assumenda excepturi deserunt atque laudantium eius porro labore illum magni, odio quo officia animi!</p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore natus, ducimus minima optio distinctio non itaque quisquam illum sapiente voluptatibus consequuntur hic dolor provident aperiam deleniti, facere voluptatum temporibus!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, consequuntur. Aperiam consequatur maiores aut! Accusamus aut autem facere? Quasi natus asperiores corporis exercitationem aliquid illo, ipsam neque doloribus soluta ea?
                    </p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                    <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <GoogleIcon />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <Reddit/>
              <p>Reddit</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <YouTube/>
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <Instagram/>
              <p>Instagram</p>
            </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home