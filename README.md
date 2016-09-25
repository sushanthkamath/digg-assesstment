Digg Frontend Web Code Test
===============

A coding test for [Digg](https://digg.com) Frontend candidates.


## Welcome!

The assignment is: build a single-page web application for Digg that demonstrates your technical skills as well as your creativity and product-focused thought process. 

Please read this entire documentation as it contains both the requirements for the assignment, as well as some hints to help you out.


## The Basics

Your assignment is to build a mini news-reading application for the web. The goal of this test is to get as much done as you can in **4 hours**. We'll provide the data sources and some files to get you started; the rest is up to you. Once you're done, please submit your code to us by sending us the link to your Github repo containing the your webapp.


## Requirements

* You're building a single-page webapp. There should be no full-page refreshes.
* You must include at least the following two components: **Feed Menu View** and **Feed Content View**. Requirements for these two components are detailed below.
* You must use core HTML, CSS, and JavaScript. Feel free to use any "HTML5" APIs, bleeding edge CSS, and HTML elements that are supported by modern browsers, but you should not use any 3rd-party JavaScript/CSS libraries or frameworks.
* The webapp should render and work properly in all modern browsers.

### Feed Menu View

1. For the mini news-reading application, you’ll present users with a menu of four news feeds to browse. We will limit this app to four feeds; the information about the feeds (urls, titles, etc) is below.
2. The title of the feed should be visible in the menu. The interface for displaying the feed menu is your choice (tile, drawer with list-view, carousel, etc). Bonus points for using an image for each feed selection in the menu.
3. When a feed is selected, the app will display the latest stories for that feed (see the next section).


### Feed Content View

1. When one of the four feeds is selected in the feed menu, the app should display a list of the latest stories from that feed.
2. Please show at least the story title and domain for each story in the story list. 
3. When a user chooses to read a story, by clicking/tapping, the story URL should load in a new window.
4. Contents of these feeds should be fetched Asynchronously.

## Bonus Points

The requirements for this assignment are pretty loose, so any bells-and-whistles that you add to the user interface, visual design, or functionality can earn you bonus points. Be creative!

A small and incomplete list of things we'd find impressive are: 

* Design/interaction: Attractive design/layout; Logical UI; social/sharing features; 
* Code quality: Good organization; re-usability; clear separation of presentation from functionality.
* Data Persistence/updates: Whether the user has read the story; permalinks for Feed Content Views; Offline support, Polling for new stories; Notifications
* Cross-device support: Older browsers; mobile/alternate devices.

Again, these are just ideas. Build what feels right to you.


## Resources

### Files

Included in this repo are some files to help you get started.

* **util.js:** A collection of helper methods, including *util.ajax()*, which supports JSONP. **Note:** this file may have a couple of bugs in it, so feel free to update it accordingly.
* **index.html:** HTML file for the single-page app. When a user loads this file in their browser, the app should "just work."
* **app.js:** Your application logic should live here. This file also contains some sample code for using the util.ajax() helper method. Feel free to edit as you please.
* **app.css:** Your application styles should live here. 


### The Feeds

The four feeds to use in the application are as follows. These feeds are from an experimental data project that we built at Digg. The stories in each feed below represent trending stories from various Twitter accounts: digg employees, editor’s picks, political reporters and people in the design profession/community.
These four feeds support JSONP callbacks. Also, the values of the 'screen_name' and 'sharers' fields for each story are Twitter usernames.

```
title: “Digg”
http://data.digg.com/api/v1/feed/trending/tweets?slug=digg

title: “Editor’s Picks”
http://data.digg.com/api/v1/feed/trending/tweets?slug=david_picks

title: “Politics”
http://data.digg.com/api/v1/feed/trending/tweets?slug=politics

title: “Design”
http://data.digg.com/api/v1/feed/trending/tweets?slug=design
```

