![Find My Car Application](http://i.imgur.com/aeRlfqs.png)]

## Find-My-Car-Client URL

- Live app: [Find-My-Car-Client](https://jkjellan.github.io/find-my-car-client/)

## Find-My-Car-API Repo
[find-my-car-api](https://github.com/jkjellan/find-my-car-api)

## Overview
This is my Capstone Project for General Assembly Cohort WDI-LM01.

- Start Date: June 5th 2017
- End Date:  June 9th 2017

## The Idea
I live in a densely populate neighborhood with a lot of competition for parking. So my car is usually parked anywhere within a quarter mile of my apartment. I often lose track of where I last parked. This application aims to solve that problem.

## Development Process
I spent a lot of time prior to starting just reading the Google Maps API documentation. I wasn't sure if the API would allow me to do everything I needed to in order to execute on my idea. Turns out that the Google Maps API is amazing, providing the developer with a robust and flexibile toolkit. It felt a lot like working with a game development engine (i.e. Unity).

After getting familiar with the Maps API library, I researched how to best include the library in my project. I game across an npm package called 'google-maps', which simply wraps the library's functions so that you can include the functionality with 'require'. Next I started working through the examples provided in the Google Maps API documentation. When I found functionality I wanted to implement, I got it up and running with speghetti code, and then worked to separate different pieces into their own modules.

## Wireframes:
- I made a sketch to start:  [mobile](http://i.imgur.com/ubkRHlP.jpg)

## User Stories
Implemented:
- As a user, when the application first loads, I want to see a map centered on my current location, with a marker representing my current location.
- As a user, if I'm not signed in, I want to be prompted to sign in to save a parking location.
- As a user, upon signing in, I want to see a marker representing my current parking location, if there is one.
- As a user, when I tap the current location user icon, I want a car icon to appear at that location and save to the database.
- As a user, when I save a parking location, I want information about that parking location to appear on the screen, and I want the ability to add a note to the parking location.
- As a user, when I click on a parking location icon, I want the option to edit the note attached to the parking spot.
- As a user, I want the ability to reposition my current location marker by dragging it, so that I can assure accuracy when saving a parking location.

Not implemented...yet:
- As a user, I want to be able to center the map on either my current location, or my current parking location.
- As a user, I want to know the current distance between my current location and my car (and potentially visualize a route between current location and parking location).
- As a user, when I click on my parking location icon, I want the option to edit the note attached to the parking spot.

## Unsolved Problems
I would really like to implement more robust geo-location functionality. For example, I want to add a control to re-center the map on the user's current location, or to re-center the map on the user's current parking location. Currently, I only retrieve geo-location once, when the user signs-in.

I would also like to implement directions from user's current location to where they parked.

## Technologies Used
- Bootstrap
- Google Maps API (via google-maps npm package)
- jQuery
- Rails
- Webpack
- Grunt
- imgur.com

## Installation

1. Install with 'npm install'.
2. Start with 'grunt serve'.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
