import Gig from "./components/Gig";
import "./App.css";
import makersLogo from "./assets/Makers-Logo.png";
import partyQuackie from "./assets/party-quackie.png";
import wavingQuackie from "./assets/waving-quackie.png";
import GigList from "./components/GigList";

function App() {
  return (
    <>
    <div className="container">
      {/* <Gig 
        src = {wavingQuackie}
        alt = "black duck waving with the Makers M logo on its chest"
        band_name="The Ducks are Back"
        description="Come see a Ducking good show!"
        time_date="17:30, 20 July 2025"
        location="Royal Albert Hall"
        />
      <Gig 
        src={partyQuackie}
        alt = "black duck with a party hat surrounded by confetti with the Makers M logo on its chest"
        band_name="A Quacking Party"
        description="Come shake those tail feathers until the quack of dawn"
        time_date="19:00, 4 August 2024"
        location="National Theatre"
        /> */}
        <GigList></GigList>
      </div>
    </>
  );
}

export default App;
