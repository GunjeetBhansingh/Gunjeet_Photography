import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Portfolio from "./components/Portfolio"


function App() {
    return (
        <div className="bg-black">
            <Navigation />
            <Hero />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
