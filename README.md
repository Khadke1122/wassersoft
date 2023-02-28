# **Wassersoft Assignment** 
 (- Projects shows the World wide Earning, Sales & Purchase -)

## **Technology stack used:**
== >  React-Js

## **Technology libraries used**
== > React BootStrap,  &nbsp; React BootStrap-Icons, &nbsp;  react-apexcharts,   &nbsp; react-dom, react-icons,  react-router, react-scripts &nbsp; react-simple-maps &nbsp;  "recharts, &nbsp; node-SASS&nbsp;

I used scss => because it contain more extra feature than css like nesting, variables, etc. as  the SCSS language quicker and easier as compared to that of writing the standard language of CSS.




# **Steps to run/build the project**
**Home page**

![Image Link](https://khadke1122.github.io/1st-repository/photo/Screenshot%202023-02-27%20125252.png)

**OverView**

![Image Link](https://khadke1122.github.io/1st-repository/photo/2023-02-27.png)

**Dashboard & Analytics**

![Image Link](https://khadke1122.github.io/1st-repository/photo/Screenshot%202023-02-27%20152800.png)

1> &nbsp;First create the react app in Waserstof folder by npm start to start React-App.

2> &nbsp;After installation there are so many folder,package & files are SHOWING in VS-CODE.

3> &nbsp;I make Components folder inside the src-folder and make

 * Main jsx-file for making the project) => (Home, &nbsp; Dashboard,  &nbsp; OverView,  &nbsp; Analytices )

 * other jsx-file that is connect with main file => (Navbar,&nbsp;WorldMap, &nbsp;Barchart,&nbsp; LineChart,&nbsp; DesignFaster,&nbsp;BubGraph,&nbsp; etc.. )

 4> App.js is the Parent file in the react folder structure that imports all the required components.

 5> The routing structure of the Main Nav-Bar is written in the App.js file.


that Contain { Statics - OverView - Dashboard - Analytics  (contain also logo, inputbox, icons)  }

 6>&nbsp; The Static page / Home page  contain further staps =>

 * &nbsp; WorldMap.js: I have used react-simple-map library for fetching the world map along with co-ordinates.

 * &nbsp; Then I created the home page. In the home page we have the sidebar that contain all User information.
  that contain - Total Earning, Sales, Purchase.

 * &nbsp;  Create BarChart at footer

 7> OverView components contains the Line chart which gives the information about the purchase, sales & Earning 
 8> After that make Dashboard that contain- * Designfaster.js file 
       file contain => (Total earning, Rearch, presentation,Logo )
      * BubGraph.js file contain => (information about research & money taken by sector => Finance, Design, Investment, etc.).

 9> After that Analytics contain same part as shown in OverView.    



# **A vercel or any other public hosted link (IMP)**
* We should install map in react (npm install --react-simple-maps) => https://www.npmjs.com/package/react-simple-maps
 
* After that We can take this api for fetching World map on our browser => https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript



# **A public Video link (5-10 min) explaining demo of the project**
* 
http://sc.com.ly/show/3b21f946-85c9-4bfa-aeed-be7918240791

* 



# **A paragraph explaining that help you to create project (IMP)**

 * The javascript engine finds the index.html file initially and then redirects it to the index.js file which again finds the App.js/App.jsx file where all the related logic related to all the components are written here(Also the components are imported here)

 * The App.js file has the routing component structure of the main Nav-Bar from where we can route to any components on the click 
 
 * The WorldMap.js file contains react-simple-map library and the required place along with the co-ordinates are fetched and displayed on the browser. We can add the required co-ordinates . I have fetcehd the required co-ordinates using the link: => https://www.latlong.net/

 * The Line chart which gives the information about the purchase, sales & Earning
 that I take from APEX-CHART 1st WE have to install that library i.e - npm install react-apexcharts apexchart. 
 and the take graph from => https://apexcharts.com/docs/chart-types/line-chart/
  
* Also install npm install --react-simple-maps => https://www.npmjs.com/package/react-simple-maps

* For routing we have to install react router dom => https://www.npmjs.com/package/react-router-dom

* Google fonts => https://fonts.google.com/
 

* Also install react-bootstrap for using fonts and style => https://react-bootstrap.netlify.app/getting-started/introduction/


&nbsp;
&nbsp;
&nbsp;

**Thank you**


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
