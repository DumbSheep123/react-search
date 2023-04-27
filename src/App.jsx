import './App.css'

function Opt(props) {
  return (
    <>
      <option value={props.value1}>{props.station1}</option>
      <option value={props.value2}>{props.station2}</option>
      <option value={props.value3}>{props.station3}</option>
      <option value={props.value4}>{props.station4}</option>
      <option value={props.value5}>{props.station5}</option>
      <option value={props.value6}>{props.station6}</option>
      <option value={props.value7}>{props.station7}</option>
      <option value={props.value8}>{props.station8}</option>
      <option value={props.value9}>{props.station9}</option>
      <option value={props.value10}>{props.station10}</option>
    </>
  );
}

function Opt8(props) {
  return (
    <>
      <option value={props.value1}>{props.station1}</option>
      <option value={props.value2}>{props.station2}</option>
      <option value={props.value3}>{props.station3}</option>
      <option value={props.value4}>{props.station4}</option>
      <option value={props.value5}>{props.station5}</option>
      <option value={props.value6}>{props.station6}</option>
      <option value={props.value7}>{props.station7}</option>
      <option value={props.value8}>{props.station8}</option>
    </>
  );
}

function Opt7(props) {
  return (
    <>
      <option value={props.value1}>{props.station1}</option>
      <option value={props.value2}>{props.station2}</option>
      <option value={props.value3}>{props.station3}</option>
      <option value={props.value4}>{props.station4}</option>
      <option value={props.value5}>{props.station5}</option>
      <option value={props.value6}>{props.station6}</option>
      <option value={props.value7}>{props.station7}</option>
      <option value={props.value8}>{props.station8}</option>
      <option value={props.value9}>{props.station9}</option>
    </>
  );
}

export default function Menu() {
  return (
    <form>
      <label for="dropdown">Select a station:</label>
      <select htmlFor="dropdown" required>
        <option value="" disabled hidden selected></option>
        <optgroup label="Popular Stations">
          <Opt value1="87" station1="Union Station" value2="38" station2="Gallery Pl-Chinatown" value3="56" station3="Metro Center" value4="72" station4="Rosslyn" value5="25" station5="Dupont Circle" value6="50" station6="L'Enfant Plaza" value7="65" station7="Pentagon" value8="73" station8="Shady Grove" value9="71" station9="Ronald Reagan Washington National Airport" value10="92" station10="Washington Dulles International Airport" />
        </optgroup>
        {/*popular options above^*/}
        <optgroup label="All Stations">
          <Opt value1="1" station1="Addison Road-Seat Pleasant" value2="2" station2="Anacostia" value3="3" station3="Archives-Navy Memorial-Penn Quarter" value4="4" station4="Arlington Cemetery" value5="5" station5="Ashburn" value6="6" station6="Ballston-MU" value7="7" station7="Benning Road" value8="8" station8="Bethesda" value9="9" station9="Braddock Road" value10="10" station10="Branch Ave" />
          <Opt value1="11" station1="Brookland-CUA" value2="12" station2="Capitol Heights" value3="13" station3="Capitol South" value4="14" station4="Cheverly" value5="15" station5="Clarendon" value6="16" station6="Cleveland Park" value7="17" station7="College Park-U of Md" value8="18" station8="Columbia Heights" value9="19" station9="Congress Heights" value10="20" station10="Court House" />
          <Opt value1="21" station1="Crystal City" value2="22" station2="Deanwood" value3="23" station3="Downtown Largo" value4="24" station4="Dunn Loring-Merrifield" value5="25" station5="Dupont Circle" value6="26" station6="East Falls Church" value7="27" station7="Eastern Market" value8="28" station8="Eisenhower Avenue" value9="29" station9="Farragut North" value10="30" station10="Farragut West" />
          <Opt value1="31" station1="Federal Center SW" value2="32" station2="Federal Triangle" value3="33" station3="Foggy Bottom-GWU" value4="34" station4="Forest Glen" value5="35" station5="Font Totten" value6="36" station6="Franconia-Springfield" value7="37" station7="Friendship Heights" value8="38" station8="Gallery Pl-Chinatowm" value9="39" station9="Georgia Ave-Petworth" value10="40" station10="Glenmont" />
          <Opt value1="41" station1="Greenbelt" value2="42" station2="Greensboro" value3="43" station3="Grosvenor-Strathmore" value4="44" station4="Herndon" value5="45" station5="Huntington" value6="46" station6="Hyattsville Crossing" value7="47" station7="Innovation Center" value8="48" station8="Judiciary Square" value9="49" station9="King St-Old Town" value10="50" station10="L'Enfant Plaza" />
          <Opt value1="51" station1="Landover" value2="52" station2="Loudoun Gateway" value3="53" station3="McLean" value4="54" station4="McPherson Square" value5="55" station5="Medical Center" value6="56" station6="Metro Center" value7="57" station7="Minnesota Ave" value8="58" station8="Morgan Boulevard" value9="59" station9="Mt Vernon Sq 7th St-Convention Center" value10="60" station10="Navy Yard-Ballpark" />
          <Opt value1="61" station1="Naylor Road" value2="62" station2="New Corrollton" value3="63" station3="NoMa-Gallaudet U" value4="64" station4="North Bethesda" value5="65" station5="Pentagon" value6="66" station6="Pentagon City" value7="67" station7="Potomac Ave" value8="68" station8="Reston Town Center" value9="69" station9="Rhode Island Ave-Brentwood" value10="70" station10="Rockville" />
          <Opt7 value1="71" station1="Ronald Reagan Washington National Airport" value2="72" station2="Rosslyn" value3="73" station3="Shady Grove" value4="74" station4="Shaw-Howard U" value5="75" station5="Silver Spring" value6="77" station6="Smithsonian" value7="78" station7="Southern Avenue" value8="79" station8="Spring Hill" value9="80" station9="Stadium-Armory" />
          <Opt value1="81" station1="Suitland" value2="82" station2="Takoma" value3="83" station3="Tenleytown-AU" value4="84" station4="Twinbrook" value5="85" station5="Tysons" value6="86" station6="U Street/African-Amer Civil War Memorial/Cardozo" value7="87" station7="Union Station" value8="88" station8="Van Dorn Street" value9="89" station9="Van Ness-UDC" value10="90" station10="Vienna/Fairfax-GMU" />
          <Opt8 value1="91" station1="Virginia Square-GMU" value2="92" station2="Washington Dulles International Airport" value3="93" station3="Waterfront" value4="94" station4="West Falls Church-VT/UVA" value5="95" station5="West Hyattsville" value6="96" station6="Wheaton" value7="97" station7="Wiehle-Reston East" value8="98" station8="Woodley Park-Zoo/Adams Morgan" />
        </optgroup>
      </select>
      <input type="submit" value="Go >" />
    </form>
  );
}