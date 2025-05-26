import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Players from './components/players/Players';
import Tournaments from './components/tournaments/Tournaments';
import Roster from './components/roster/Roster';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Roster />
        <Players />
        <Tournaments />
        <Contact />
        <Footer />
    </>
  )
}

export default App