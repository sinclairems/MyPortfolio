import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Project";
import profileImage from "./assets/profilemoji.jpg" 

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profileImage} alt="Your Name" className="profile-image" />
      <p>
        Hi! I&apos;m ErinMS. I&apos;m learning to code in the UTA coding
        bootcamp. Coming soon, there will be more projects to see, so stay
        tuned!
      </p>
    </section>
  );
}

function Project() {
  return (
    <section>
      <h2>Projects</h2>
      <p>Check out my projects!</p>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/portfolio"
          element={<Portfolio/>}
        />{" "}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
