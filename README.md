# Kyoto Temple Map

![Screenshot](src/img/screenshot.png)

This is the final project for the Udacity Front End Nanodegree: The react-based app provides a map showing popular temples in Kyoto. The purpose of this project is to demonstrate understanding of 

- responsive, accessible HTML and CSS
- handling and passing data from API
- React, Javascript and JSX

### How to install this app

This app requires [Node.js](https://nodejs.org/) to run. If node is installed, download the repository zip and save it to a directory or just use the command line to drive to this directory and clone the repository, install npm and start the development server:

```sh
$ git clone https://github.com/krempin/frontend-nanodegree-temple-map
$ npm install
$ npm start
```

Once started, a browser window will open and the app should be displayed. You can also navigate to [http://localhost:3000](http://localhost:3000/)

### How to use this app

The app displays popular temples in Kyoto in a map and on a list on the left side. You can either click on a marker or on the temple name in the list to open information about the temple or shrine. You can also filter temples via the search input field.

### Requirements for this project

**General**

- [x] Use React
- [x] Google Maps is integrated asynchroniously
- [x] The app can be used on all devices and the styling is responsive
- [x] Data requests that fail are handled gracefully using common fallback techniques (i.e. AJAX error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an API doesn’t load there should be some visible indication on the page that it didn’t load.

**Documentation**

- [x] A README file is included detailing all steps required to successfully run the application.
- [x] Comments are present and effectively explain longer code procedures.
- [x] Provide attribution for the source of additional data. For example, if using Foursquare, indicate somewhere in your UI and in your README that you are using Foursquare data.

**Map functionality**

- [x] The map contains at least 5 location markers
- [x] The sidebar contains a list of these 5 locations
- [x] The sidebar contains an input that filters locations by search input
- [x] If a search will be performed, the markers on the map will also be filtered
- [x] If you click on a marker on the map, an info window will appear 
- [x] The info window contains additional data from a third party service integrated via API
- [x] The current clicked marker / temple on the list will be marked by color or animation
- [ ] If you click on a temple link on the list, the marker will be active, animated and an info window will open

**Accessibility**
- [x] All content-related images include appropriate alternate text that clearly describes the content of the image.
- [x] Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.
- [x] Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

### Resources

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* The Google map was integrated with the [Google Maps React Module](https://www.npmjs.com/package/google-maps-react)