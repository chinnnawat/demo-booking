import Image from "next/image";
import Background from "./components/backgroung";
import BoxDetail from "./components/boxDetail";
import Destinations from "./components/destinations";
import RecommentHome from "./components/recomment_homePage";
import FlightActPromo from "./components/flight-act_promo";
import Promotion from "./components/accom_promotion";


export default function Home() {
  return (
    <main>
      <div>
        <section>
          <div>
            <div className="h-[500px]">
              <Background />
              <BoxDetail />
            </div>
          </div>
        </section>
        <div className="lg:mx-24 xl:mx-80">
          <Destinations />
          <FlightActPromo />
          <Promotion />
          <RecommentHome />
        </div>
      </div>
    </main>
  );
}
