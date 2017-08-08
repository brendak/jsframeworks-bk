
# Which One?

This Javascript frameworks dashboard is used to compare client-side JS frameworks (React, Angular, Ember, and Vue) and their development activity. JSON data is supplied by each framework's public API from Github. The dashboard uses AngularJS, VanillaJS, Bootstrap, HTML and CSS.

## Getting Started

To get this project up and running on your local machine, simply open up the index.html file in your browser. No bower or npm installs needed for this lean project.

## How To Use

Index.html:

Here is the html for our dashboard - through a table, it allows users to view each framework's total Stars, Forks, and Open Issues counts, filter for a specific framework, sort the categories through from lowest to highest depending on what , and compare each framework in detail.

We want to see Stars to measure user interest, Forks for levels of collaboration and usage, and Open Issues to ensure we're not going to use an overly cumbersome framework. Note that a more popular framework is likely to have more open issues.

The JS handler in index.html's header is to prevent exceeding our Github API rate limit - it sends a callback parameter for our GET calls.

Controller.js:

Here lies our controller for our view - we use $q.all to make multiple $http.get requests to the four APIs needed for this dashboard. We then pass the data through $scope.

App.js

This initializes our app and allows us to register the module in controller.js.

Script.js

Here we have the javascript functions to handle a couple of our dashboard features.

css/styles.css:

Our simple styles.

## Authors

* **Brenda Kaing**
