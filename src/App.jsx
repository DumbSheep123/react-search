import './App.css'

function Opt(props) {
  return (
    <>
      <option value={props.value}>{props.station}</option>
    </>
  );
}

export default function Menu() {
  return (
    <form>
      <label htmlFor="dropdown">Select a station:</label>
      <select id="dropdown" required>
        <option value="" disabled hidden selected></option>
        <optgroup label="Popular Stations">
          <Opt value="87" station="Union Station" />
          <Opt value="38" station="Gallery Pl-Chinatown" />
          <Opt value="56" station="Metro Center" />
          <Opt value="72" station="Rosslyn" />
          <Opt value="25" station="Dupont Circle" />
          <Opt value="50" station="L'Enfant Plaza" />
          <Opt value="65" station="Pentagon" />
          <Opt value="73" station="Shady Grove" />
          <Opt value="71" station="Ronald Reagan Washington National Airport" />
          <Opt value="92" station="Washington Dulles International Airport" />
        </optgroup>
        {/* popular options above */}
        <optgroup label="All Stations">
          <Opt value="1" station="Addison Road-Seat Pleasant" />
          <Opt value="2" station="Anacostia" />
          <Opt value="3" station="Archives-Navy Memorial-Penn Quarter" />
          <Opt value="4" station="Arlington Cemetery" />
          <Opt value="5" station="Ashburn" />
          <Opt value="6" station="Ballston-MU" />
          <Opt value="7" station="Benning Road" />
          <Opt value="8" station="Bethesda" />
          <Opt value="9" station="Braddock Road" />
          <Opt value="10" station="Branch Ave" />
          <Opt value="11" station="Brookland-CUA" />
          <Opt value="12" station="Capitol Heights" />
          <Opt value="13" station="Capitol South" />
          <Opt value="14" station="Cheverly" />
          <Opt value="15" station="Clarendon" />
          <Opt value="16" station="Cleveland Park" />
          <Opt value="17" station="College Park-U of Md" />
          <Opt value="18" station="Columbia Heights" />
          <Opt value="19" station="Congress Heights" />
          <Opt value="20" station="Court House" />
          <Opt value="21" station="Crystal City" />
          <Opt value="22" station="Deanwood" />
          <Opt value="23" station="Downtown Largo" />
          <Opt value="24" station="Dunn Loring-Merrifield" />
          <Opt value="25" station="Dupont Circle" />
          <Opt value="26" station="East Falls Church" />
          <Opt value="27" station="Eastern Market" />
          <Opt value="28" station="Eisenhower Avenue" />
          <Opt value="29" station="Farragut North" />
          <Opt value="30" station="Farragut West" />
          <Opt value="31" station="Federal Center SW" />
          <Opt value="32" station="Federal Triangle" />
          <Opt value="33" station="Foggy Bottom-GWU" />
          <Opt value="34" station="Forest Glen" />
          <Opt value="35" station="Fort Totten" />
          <Opt value="36" station="Franconia-Springfield" />
          <Opt value="37" station="Friendship Heights" />
          <Opt value="38" station="Gallery Pl-Chinatown" />
          <Opt value="39" station="Georgia Ave-Petworth" />
          <Opt value="40" station="Glenmont" />
          <Opt value="41" station="Greenbelt" />
          <Opt value="42" station="Greensboro" />
          <Opt value="43" station="Grosvenor-Strathmore" />
          <Opt value="44" station="Herndon" />
          <Opt value="45" station="Huntington" />
          <Opt value="46" station="Hyattsville Crossing" />
          <Opt value="47" station="Innovation Center" />
          <Opt value="48" station="Judiciary Square" />
          <Opt value="49" station="King St-Old Town" />
          <Opt value="50" station="L'Enfant Plaza" />
          <Opt value="51" station="Landover" />
          <Opt value="52" station="Loudoun Gateway" />
          <Opt value="53" station="McLean" />
          <Opt value="54" station="McPherson Square" />
          <Opt value="55" station="Medical Center" />
          <Opt value="56" station="Metro Center" />
          <Opt value="57" station="Minnesota Ave" />
          <Opt value="58" station="Morgan Boulevard" />
          <Opt value="59" station="Mt Vernon Sq 7th St-Convention Center" />
          <Opt value="60" station="Navy Yard-Ballpark" />
          <Opt value="61" station="Naylor Road" />
          <Opt value="62" station="New Carrollton" />
          <Opt value="63" station="NoMa-Gallaudet U" />
          <Opt value="64" station="North Bethesda" />
          <Opt value="65" station="Pentagon" />
          <Opt value="66" station="Pentagon City" />
          <Opt value="67" station="Potomac Ave" />
          <Opt value="68" station="Reston Town Center" />
          <Opt value="69" station="Rhode Island Ave-Brentwood" />
          <Opt value="70" station="Rockville" />
          <Opt value="71" station="Ronald Reagan Washington National Airport" />
          <Opt value="72" station="Rosslyn" />
          <Opt value="73" station="Shady Grove" />
          <Opt value="74" station="Shaw-Howard U" />
          <Opt value="75" station="Silver Spring" />
          <Opt value="77" station="Smithsonian" />
          <Opt value="78" station="Southern Avenue" />
          <Opt value="79" station="Spring Hill" />
          <Opt value="80" station="Stadium-Armory" />
          <Opt value="81" station="Suitland" />
          <Opt value="82" station="Takoma" />
          <Opt value="83" station="Tenleytown-AU" />
          <Opt value="84" station="Twinbrook" />
          <Opt value="85" station="Tysons" />
          <Opt value="86" station="U Street/African-Amer Civil War Memorial/Cardozo" />
          <Opt value="87" station="Union Station" />
          <Opt value="88" station="Van Dorn Street" />
          <Opt value="89" station="Van Ness-UDC" />
          <Opt value="90" station="Vienna/Fairfax-GMU" />
          <Opt value="91" station="Virginia Square-GMU" />
          <Opt value="92" station="Washington Dulles International Airport" />
          <Opt value="93" station="Waterfront" />
          <Opt value="94" station="West Falls Church-VT/UVA" />
          <Opt value="95" station="West Hyattsville" />
          <Opt value="96" station="Wheaton" />
          <Opt value="97" station="Wiehle-Reston East" />
          <Opt value="98" station="Woodley Park-Zoo/Adams Morgan" />
        </optgroup>
      </select>
    </form>
  );
}
