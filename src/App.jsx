import './App.css'

function Opt(props) {
    return (
      <>
      <option value={ props.value1 }>{ props.station1 }</option>
      <option value={ props.value2 }>{ props.station2 }</option>
      <option value={ props.value3 }>{ props.station3 }</option>
      <option value={ props.value4 }>{ props.station4 }</option>
      <option value={ props.value5 }>{ props.station5 }</option>
      <option value={ props.value6 }>{ props.station6 }</option>
      <option value={ props.value7 }>{ props.station7 }</option>
      <option value={ props.value8 }>{ props.station8 }</option>
      <option value={ props.value9 }>{ props.station9 }</option>
      <option value={ props.value10 }>{ props.station10 }</option>
      </>
    );
}

export default function Menu(){
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
      </optgroup>
      </select>
      <input type="submit" value="Go >" />
    </form>
  );
}