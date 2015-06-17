#ATM / Branch Locator#
============
*Lauren Kroner 2015*

Node.js/Express application that uses Google Maps API to help find ATM/Branch information when given a speciic location.

##To Run##
============

**Reqiurements**: Node, Command Line

In command line:

1. Clone to local from: git@github.com:Lkroner/ATMBranchLocator.git
2. *Npm install* in root folder.
3. *Node app.js* in root folder.
4. Navigate to http://localhost:3000 in **Safari** browser, to avoid Cross-Domain error.

##MVP##
============

1. Create a browser or native-app based application to serve as a basic ATM/branch locator. (X)
2. Map page:
    - Query the JPMC location service. (OPEN)
	- Passed coordinates should be obtained from the browser's geo-location API (current actual location). (X - Implemented but not used.)
	- Results should be presented as markers (pins) on an interactive Google map. (X)
	- Clicking a marker should navigate the user to the details page. (X)
3. Details page:
	- Display name and full set of details for a selected ATM or branch. (X)

##STRETCH GOALS/TODOS##
============

1. Implement Cross-Origin
2. Deploy

##Resource##
============

* http://stackoverflow.com/questions/14061644/jquery-ajax-post-request-with-node-js-and-express
* https://developers.google.com/maps/documentation/javascript/tutorial
* http://www.d-mueller.de/blog/cross-domain-ajax-guide/
* https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/
* https://github.com/jovaneyck/CrossDomainRequestsInJavascript

##If I would have more time##
============

- Add icons and styling to map and markers.
- Close out info windows onclick.
- Responsive page.

##Retrospective##
============

*Cross-Domain Request*

I learned a quite a bit from this error and spiked on a bunch of different methods to try and circumvent it, even though I was not able to get around it in the time period given.


*Methods explored:*

- Server-Side Proxy: This was the most promising method as this technique does not require you to alter any existing server-side code. It does require having a server-side proxy server that resides in the same domain as the Javascript code running in the browser. I've left this method commented out so you can see how I set this up.
- JSONP: This method worked but I got an error JSON back from your endpoint, so I'm guessing you've found a way to block this method.
- CORS: Without access to the server I would be hitting, could not implement.
