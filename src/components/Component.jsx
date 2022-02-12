import React from "react";
import { TOTAL_SCREENS } from "../utilities/commonUtils";

function Component() {
  const MapAllScreen = () => {
      return(
        TOTAL_SCREENS.map((screen) => {
            console.log(screen);
            return((screen.component)?<screen.component screenName={screen.screen_name}key={screen.screen_name}id={screen.screen_name}/>:<div key={screen.screen_name}></div>) 
          })
      )
  }
  return <div className="portfolio-body"><MapAllScreen/></div>
}

export default Component;
