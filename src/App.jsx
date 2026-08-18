import { useState } from "react";
import "./App.css";

const plots = [
  ["1000 Sq.Ft.", "₹12.50 Lakh", "Premium Plot"],
  ["1500 Sq.Ft.", "₹18.50 Lakh", "Premium Plot"],
  ["2000 Sq.Ft.", "₹24.00 Lakh", "Large Plot"],
  ["2500 Sq.Ft.", "₹30.00 Lakh", "Luxury Plot"],
];

const amenities = [
  ["🛣️", "Internal Roads", "Well-planned roads inside the project."],
  ["💡", "Street Lights", "Proper lighting for a safe environment."],
  ["🌳", "Green Surroundings", "Peaceful natural surroundings."],
  ["💧", "Water Facility", "Water facility available for the project."],
  ["🔒", "Gated Project", "Secure and planned community."],
  ["📍", "Prime Location", "Close to the dam and important locations."],
];

const gallery = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1501785888041-af3ef2852c3b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const submitForm = (e) => {
    e.preventDefault();
    alert("Thank you! Our Nisarg team will contact you soon.");
    e.currentTarget.reset();
  };

  return (
    <div>
      <header className="navbar">
        <div className="nav-inner">
          <a className="logo" href="#home" onClick={closeMenu}>
            <span className="logo-mark">🌿</span>
            <span><b>NISARG</b><small>Nature Estates</small></span>
          </a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["Home", "About", "Plots", "Amenities", "Gallery", "Location"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow">🌿 PREMIUM PLOTS NEAR NATURE</span>
            <h1>Own a Piece<br /><em>of Nature.</em></h1>
            <p>Premium residential plots surrounded by greenery, peaceful views and the beauty of a nearby dam.</p>
            <div className="hero-actions">
              <a href="#plots" className="btn primary">Explore Plots <span>→</span></a>
              <a href="#contact" className="btn outline">Book Site Visit</a>
            </div>
            <div className="hero-stats">
              <div><b>1000+</b><span>Sq.Ft. Plots</span></div>
              <div><b>100%</b><span>Natural Living</span></div>
              <div><b>Prime</b><span>Location</span></div>
            </div>
          </div>
          <div className="scroll-cue">SCROLL <span>↓</span></div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div className="about-photo">
              <img src={gallery[0]} alt="Nisarg natural surroundings" />
              <div className="photo-card"><span>🌱</span><div><b>Live Close to Nature</b><small>Peaceful & green environment</small></div></div>
            </div>
            <div>
              <span className="section-label">ABOUT NISARG</span>
              <h2>Where Nature<br />Meets <em>Opportunity.</em></h2>
              <p className="lead">Nisarg is a thoughtfully planned plot development created for people who want to own land in a peaceful natural environment.</p>
              <p>Located close to the dam, Nisarg brings together nature, connectivity and long-term investment potential in one attractive destination.</p>
              <div className="check-grid">
                {["Peaceful natural location", "Planned internal roads", "Excellent connectivity", "Ideal for investment"].map(x => (
                  <div key={x}><span>✓</span>{x}</div>
                ))}
              </div>
              <a className="text-link" href="#contact">Know More About Nisarg →</a>
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="container stats-grid">
            <div><b>4+</b><span>Plot Sizes</span></div>
            <div><b>24/7</b><span>Natural Peace</span></div>
            <div><b>6+</b><span>Key Amenities</span></div>
            <div><b>1</b><span>Beautiful Destination</span></div>
          </div>
        </section>

        <section id="plots" className="section soft">
          <div className="container">
            <div className="section-head">
              <div><span className="section-label">AVAILABLE PLOTS</span><h2>Choose Your<br /><em>Perfect Plot.</em></h2></div>
              <p>Select from thoughtfully planned plot sizes suitable for your dream home or future investment.</p>
            </div>
            <div className="plot-grid">
              {plots.map(([size, price, type]) => (
                <article className="plot-card" key={size}>
                  <div className="plot-top"><span>{type}</span><i>🌿</i></div>
                  <h3>{size}</h3>
                  <strong className="price">{price}</strong>
                  <ul><li>✓ Road Access</li><li>✓ Green Surroundings</li><li>✓ Prime Location</li></ul>
                  <a href="#contact">Enquire Now →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-banner">
          <div className="container feature-grid">
            <div>
              <span className="section-label light">WHY NISARG</span>
              <h2>More Than Land.<br /><em>A Lifestyle.</em></h2>
              <p>Imagine waking up surrounded by greenery, enjoying peaceful evenings near the water and owning land for your future.</p>
              <a href="#contact" className="btn light-btn">Plan Your Visit →</a>
            </div>
            <img src={gallery[1]} alt="Nisarg landscape" />
          </div>
        </section>

        <section id="amenities" className="section">
          <div className="container">
            <div className="center-head"><span className="section-label">PROJECT AMENITIES</span><h2>Everything You<br /><em>Need.</em></h2></div>
            <div className="amenity-grid">
              {amenities.map(([icon, title, text]) => (
                <article className="amenity" key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section soft">
          <div className="container">
            <div className="section-head simple"><div><span className="section-label">PROJECT GALLERY</span><h2>Experience <em>Nisarg.</em></h2></div></div>
            <div className="gallery">
              {gallery.map((img, i) => <div className={`gallery-item g${i + 1}`} key={img}><img src={img} alt={`Nisarg view ${i + 1}`} /></div>)}
            </div>
          </div>
        </section>

        <section id="location" className="section">
          <div className="container location-grid">
            <div>
              <span className="section-label">PRIME LOCATION</span>
              <h2>Close to Nature.<br /><em>Connected to Everything.</em></h2>
              <p className="lead">Nisarg is strategically located near the dam, giving you peaceful surroundings while keeping essential destinations within easy reach.</p>
              <div className="location-list">
                <div><span>🌊</span><b>Dam<small>Nearby</small></b></div>
                <div><span>🏙️</span><b>City<small>Easy Connectivity</small></b></div>
                <div><span>🛣️</span><b>Main Road<small>Excellent Access</small></b></div>
              </div>
            </div>
            <div className="map-card">
              <div className="map-placeholder"><span>📍</span><b>NISARG</b><small>Premium Plot Project</small><button>Open Location</button></div>
            </div>
          </div>
        </section>

        <section className="cta">
          <span className="section-label light">YOUR DREAM PLOT IS WAITING</span>
          <h2>Come. See. Feel.<br /><em>Nisarg.</em></h2>
          <p>Schedule a site visit and experience the beauty of the location yourself.</p>
          <a href="#contact" className="btn light-btn">Book a Site Visit →</a>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <span className="section-label">GET IN TOUCH</span>
              <h2>Let's Find<br /><em>Your Plot.</em></h2>
              <p className="lead">Interested in Nisarg? Fill in your details and our team will contact you shortly.</p>
              <div className="contact-details">
                <div><span>📞</span><b>Call Us<small>+91 98765 43210</small></b></div>
                <div><span>💬</span><b>WhatsApp<small>+91 7219516749</small></b></div>
                <div><span>📧</span><b>Email<small>info@nisargplots.com</small></b></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <h3>Book Your Site Visit</h3><p>Fill in your details below.</p>
              <div className="form-row"><input required placeholder="Your Name" /><input required type="tel" placeholder="Mobile Number" /></div>
              <input type="email" placeholder="Email Address" />
              <select defaultValue=""><option value="" disabled>Select Plot Size</option>{plots.map(p => <option key={p[0]}>{p[0]}</option>)}</select>
              <textarea rows="4" placeholder="Your Message" />
              <button className="submit" type="submit">Book Site Visit →</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><div className="logo"><span className="logo-mark">🌿</span><span><b>NISARG</b><small>Nature Estates</small></span></div><p>Premium plots surrounded by nature, designed for your future.</p></div>
          <div><h4>Quick Links</h4><a href="#home">Home</a><a href="#about">About</a><a href="#plots">Plots</a><a href="#gallery">Gallery</a></div>
          <div><h4>Project</h4><a href="#amenities">Amenities</a><a href="#location">Location</a><a href="#contact">Contact</a><a href="#contact">Site Visit</a></div>
          <div><h4>Contact</h4><p>📞 +91 98765 43210</p><p>📧 info@nisargplots.com</p><p>📍 Near Dam, Maharashtra</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Nisarg Nature Estates. All Rights Reserved.</span><span>Designed for Nisarg 🌿</span></div>
      </footer>

      <a className="whatsapp" href="https://wa.me/917219516749" target="_blank" rel="noreferrer">💬 <span>Chat with us</span></a>
    </div>
  );
}

export default App;
