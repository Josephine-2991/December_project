import { Header } from "../../Components/Header/Header"
import { HeroSection } from "../../Components/HeroSection/HeroSection"
import './Home.css'
export function Home() {

  return (
    <main className='main'>
      <div className="global__wrapper">
        <div className="container">
           <Header />
           <HeroSection />
        </div>
  
      </div>
    </main>
  )
} 