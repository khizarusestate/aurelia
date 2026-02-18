import Header from './Components/Header'
import Home from './Components/Home'
import Rooms from './Components/Rooms'
import Dining from './Components/Dining'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main className="relative overflow-x-hidden bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.24),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_45%)],overflow-hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-950/70 to-slate-950 overflow-hidden" />
        <Home />
        <Rooms />
        <Dining />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
