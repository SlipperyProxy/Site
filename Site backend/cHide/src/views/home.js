import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Active Online Software Page</title>
        <meta property="og:title" content="Active Online Software Page" />
      </Helmet>
      <section className="home-hero">
        <header className="home-header">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <img src="https://imgur.com/a/MxkdfNe" className="home-logo1" />
                <div className="home-links1">
                  <a
                    href="https://worthoss.xyz/index"
                    className="home-home Link"
                  >
                    Home
                  </a>
                  <a
                    href="https://worthoss.xyz/future"
                    className="home-future Link"
                  >
                    Shibers Future
                  </a>
                  <a
                    href="https://worthoss.xyz/hidden"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-future1 Link"
                  >
                    cHide
                  </a>
                </div>
              </div>
              <div className="home-right">
                <a
                  href="https://github.com/SlipperyProxy/Shiber"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <div className="home-get-started">
                    <span className="home-text03">
                      <span>View Source</span>
                      <br></br>
                    </span>
                  </div>
                </a>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container2">
              <Script
                html={`<script defer>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </header>
        <header className="home-content">
          <h1 className="home-text06">
            <span>cHide</span>
            <br></br>
          </h1>
          <p className="home-text09">
            <span>
              This is where I&apos;ll be posting some hidden commands 
            </span>
            <br></br>
            <span>such as /shibby /freecoin and more in future</span>
            <br></br>
          </p>
          <div className="home-container3"></div>
        </header>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="home-link1"
        >
          <div className="home-get-started1">
            <span className="home-text14">
              <br></br>
              <span>Don&apos;t</span>
              <br></br>
              <br></br>
            </span>
          </div>
        </a>
      </section>
      <section className="home-banners"></section>
      <footer className="home-footer">
        <span className="home-text19">© Ashored - 2022</span>
      </footer>
    </div>
  )
}

export default Home
