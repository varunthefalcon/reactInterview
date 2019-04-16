import React, { Component, Fragment } from "react";
// import Header from './components/header';
// import Footer from './components/footer';
import JSONdata from "./mockJSON.json";
import mapIcon from "./assets/images/icon_map@2x.png";
import footerLunch from "./assets/images/tab_lunch@2x.png";
import footerInternet from "./assets/images/tab_internets@2x.png";
import backButton from "./assets/images/ic_webBack@2x.png";
import GoogleMap from "google-map-react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class App extends Component {
  constructor(props) {
    super(props);
    console.clear();
    // console.log(JSONdata.res)
    this.state = {
      restaurantLists: JSONdata.restaurants,
      loadRestaurant: null
    };
    this.loadRestaurant = this.loadRestaurant.bind(this);
    this.clearRestaurant = this.clearRestaurant.bind(this);
  }

  loadRestaurant(e, item) {
    console.log(item);
    this.setState({ loadRestaurant: item });
  }
  clearRestaurant() {
    this.setState({ loadRestaurant: null })
  }
  render() {
    console.log(this.state);
    const { restaurantLists } = this.state;
    return (
      <Fragment>
        <header>
          <div className="row">
            <div className="column column_1">
              <img style={{visibility : this.state.loadRestaurant ? 'visible' : 'hidden' }} src={backButton} onClick={this.clearRestaurant} className="pointer header_ma" alt="Map_Image" />
              {/* && (
              )} */}
            </div>
            <div className="column">
              <h1 onClick={this.clearRestaurant} className="header_title pointer fontBold">Lunch Tyme</h1>
            </div>
            <div className="column column_2">
              <img src={mapIcon} className="header_map" alt="Map_Image" />
            </div>
          </div>
          {/* //   <div className="pointer">
          //   <img onClick={() => this.setState({loadRestaurant : null})} src={backButton} className="header_map" alt="header_map" />
          // </div> */}
          {/* <h1 className="header_title fontBold">Lunch Tyme</h1>
          <div className="pull-right">
            <img src={mapIcon} className="header_map" alt="header_map" />
          </div> */}
        </header>
        {this.state.loadRestaurant ? (
                <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
            <DetailRestaurent key={5} restaurant={this.state.loadRestaurant} />
            </ReactCSSTransitionGroup>
        ) : (
          <Fragment>
            {restaurantLists.map((item, index) => {
              const { name, backgroundImageURL, category } = item;
              return (
                <Fragment key={index}>
                  <div
                    onClick={e => this.loadRestaurant(e, item)}
                    className="pointer list_items"
                    style={{ backgroundImage: `url(${backgroundImageURL})` }}
                  >
                    <div className="list_itemBlock">
                      <p className="item_title fontBold"> {name} </p>
                      <p className="item_category fontRegular"> {category} </p>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </Fragment>
        )}
        {/* {!this.state.loadRestaurant &&  */}
        <footer>
          <div className="footer_tab">
            <div className="footer_tab_item">
              <img className="pointer" src={footerLunch} alt="tab_lunch" />
              <p className="fontRegular">
                <span className="pointer">lunch</span>
              </p>
            </div>
            <div className="footer_tab_item">
              <img
                className="pointer"
                src={footerInternet}
                alt="tab_internets"
              />
              <p className="fontRegular footer_tab_item_internets">
                {" "}
                <span className="pointer">internets</span>
              </p>
            </div>
          </div>
        </footer>
        {/* } */}
      </Fragment>
    );
  }
}

export default App;

const DetailRestaurent = props => {
  console.log(props);
  let {
    name = "N/A ",
    category = "N/A ",
    location = {},
    contact = {}
  } = props.restaurant;
  let { formattedAddress = [], lat, lng } = location;
  let { formattedPhone = "N/A ", twitter = null } = contact || {};
  console.error(lat, lng)
  return (
    <Fragment>
      <div className="details_map" style={{ width: "100%", height: "180px" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyCKh9bn3qJU-WtWdb5r7XIVh-z5aW_zHFE" }}
          center={[lat, lng]}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}

          zoom={9}
        />
      </div>
      <div className="list_items_bg_color ">
        <div className="res_details_ribbon">
          <p className=" fontBold"> {name} </p>
          <p className=" fontRegular"> {category} </p>
        </div>
      </div>
      <div className="">
        <p className="item_title_1 fontRegular">
          {formattedAddress[0]}
          <br />
          {formattedAddress[1]}
        </p>
        <p className="item_title_1 fontRegular">{formattedPhone || "N/A"}</p>
        <p className="item_title_1 fontRegular">
          {" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://twitter.com/${twitter}`}
          >
            @{twitter || "N/A "}
          </a>
        </p>
      </div>
    </Fragment>
  );
};
