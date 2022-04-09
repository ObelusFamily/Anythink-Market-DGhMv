import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const [shouldDisplaySearch, setShouldDisplaySearch] = React.useState(false);
  const handleSearchChange = e => {
    //? remove spaces
    props.setSearchText(e.target.value);
  };
  
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img width="100%" src={logo} alt="banner" />
        <h2>
          <span>
            A place to <span id="get-part" onClick={() => setShouldDisplaySearch(true)}>get </span>
          </span>
          {shouldDisplaySearch && (
            <input id="search-box" type="text" placeholder="Search" onChange={handleSearchChange} />
          )}
          <span>the cool stuff.</span>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
