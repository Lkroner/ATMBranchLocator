#ATM / Branch Locator#
*Lauren Kroner 2015*
============

Node.js/Express application that uses the Google Geocoder and Maps API to help find ATM/Branch information given a speciic location/

##MVP##
============

1. Create a browser or native-app based application to serve as a basic ATM/branch locator.
2. Map page:
    - Query the JPMC location service.
	- Passed coordinates should be obtained from the browser's geo-location API (current actual location).
	- Results should be presented as markers (pins) on an interactive Google map.
	- Clicking a marker should navigate the user to the details page.
3. Details page:
	- Display name and full set of details for a selected ATM or branch.
	- The API response is mostly self-explanatory, but you can ignore any data that doesn't make sense (like languages).

##Retrospective##
============

