import style from "./style"
import {Navbar,Hero,Billing,Business,Button,CTA,CardDeal,Clients,FeedBackCard,Footer,GetStarted,Stats,Testimonials} from "./components/index"
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth}`}>
           <Navbar/>
          </div>
      </div>
      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
            Stats
            business
            Billing
            CardDeal
            Testimonials
            Clients
            CTA
            Footer
        </div>
      </div>
    </div>
  
  )
}

export default App