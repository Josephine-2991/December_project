import "./PageBanner.css";
import time from "../../assets/icon/time.svg";
import location from "../../assets/icon/location.svg";
import unitedstates from "../../assets/icon/usa_image.png";
import arrow from "../../assets/icon/arrow-down.svg";
import facebook from "../../assets/icon/facebook.svg";
import twitter from "../../assets/icon/twitter.svg";
import instagram from "../../assets/icon/popicon.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import dividers from "../../assets/icon/dividers.svg";
import ruler from "../../assets/icon/ruler.svg";
import "../../index.css";

export function PageBanner({ timetext, locationtext }) {

    const textStyle={
        color: "var(--primary-text-color)",
        fontSize: "14px",
        fontFamily: "Sora, sans-serif",
        fontWeight: "400",
  
    }
    
  return (
    <section className="page-banner">
      <div className="page__banner_child">
      <div className="banner-content-left">
        <div className="location-info">
          <img id='time-icon' src={time} alt="Clock icon"/> 
          <p style={textStyle}>{timetext}</p>
        </div>

        <div className="location-info">
          <img id='location-icon' src={location} alt="Clock icon"/>
          <p style={textStyle}>{locationtext}</p>
        </div>
      </div>
      <div>
   </div>

   <div className="banner-content-right">
        <div className="united-states">
            <img id="flag-icon"  src={unitedstates} alt="A round U.S.A flower shape"/>
            <p>English</p>
            <img src={arrow} alt="Arrow-down"/>
        </div>


        <div className="follow-us-text">
        
        <ul className="banner_socials">
            <li>
                <img src={dividers} alt="Vertical divider"/>
            </li>
            <li >
                <img src={facebook} alt="facebook icon" />
            </li>

            <li >
                <img src={twitter} alt="facebook icon" />
            </li>

            <li >
                <img src={instagram} alt="facebook icon" />
            </li>

            <li >
                <img src={linkedin} alt="facebook icon" />
            </li>
        </ul>
        </div>
        
        <div className="vertical-ruler">
        
        </div>
    </div>
   </div>
    </section>
  );
}