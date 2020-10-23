![](assets/images/project-preview.JPG)
  
# Weather App
This is a weather app website made using HTML, CSS and vanilla JavaScript with the help of an API.
  
## External user's goals:
A website with basic information on weather such as current temperature, high-low temperature and simple weather conditions (cloudy, sunny etc.)

## Site owner's goal:
To provide a simple and minimalist website, containing the basic and necessary information on todays weather.
  
## Wireframe:
As displayed in the wireframe below, the intent was to create a simple layout with the possibility to search for any location in the world and provide simple and understandable information - and at the same time drop any unnecessary functions.
  
![](assets/images/project-wireframe.jpg)  
  
## User stories:  
As a user I want to search for today's weather by using the name of the place that I live. I want to get an indication about the absolute low and high temperatures and be given a simple feedback on what the weather will be like (Cloudy, rainy etc.)

  
## Website structure:
The website is presented in a one page layout, optimalized for mobile but also works very well on tablet, laptop and desktop sizes. The page contains 6 features, they are:
  
### Searchbar
A searchbar for inputting the area one wishes to see current weather conditions for.
  
### Location information
This section displays the area name and country code.

### Current temperature
This section displays the current temperature.
  
### Weather condition
This section displays the current weather condition (Rain, Thunderstorm, Sunny etc.)
  
### Low/High temperature
This sections displays the current day's lowest and highest temperature.
  
## Design
The website was built with a minimalistic approach in mind. Allowing quick and easy input and easy to understand feedback.
  
## Built with
* HTML  
* CSS  
* JavaScript

This website uses an API from Open Weather Map, that makes calls to a restful API and returns the current weather data. This uses a modern fetch approach.
  
The website was coded in Visual Studio Code - https://code.visualstudio.com/
  
## Testing
* http://ami.responsivedesign.is/ was used to check responsiveness on different Apple products.
  
* With the help of friends and family the website has been tested on different computers and mobile phones, including iPhone 12, Sony Xperia Z3 Compact and Huawei P10.
  
* The website has been tested on Chrome, Edge and Firefox on Windows 10 and Chrome and Firefox on Ubuntu (version 20.04).
  
* Tested the searchbox input by searching different locations and observing the feedback receieved.
  
* The HTML and CSS validator at W3 (https://validator.w3.org/) was used when testing the code. JavaScript was validated using JSHint (https://jshint.com/)
  
* 
  
## Deployment
The code is hosted on my own personal GitHub page, the link to the repository is https://github.com/oyvindwagner/weatherapp/
  
To achieve this I created an account on GitHub, created a new repository where the code and files for the project are hosted.

The website is deployed to the internet using GitHub pages, the link to the project is https://oyvindwagner.github.io/weatherapp/
  
To achieve this I went to the "Settings" tab on the repository page, under the section "GitHub Pages" it is possible to publish the contents of the repository to the web.
  
### Local use
The website can be used locally on your computer by downloading the contents of the GitHub repository. This can be achieved by pressing the "Clone or download" button located in the menu above the list of files contained in the repository.
  
* Press the "Clone or download" button.
  
* Select "Download ZIP"
  
* Extract the contents of the compressed file to a location of your choosing, using a program such as WinRar (https://www.rarlab.com/)
  
* Open the index.html file in a Browser such as Chrome (https://www.google.com/intl/en/chrome/)
  
## Sources 
  
### Fonts
This website uses "IBM Plex Sans" retrieved from Google Fonts at https://fonts.google.com/
   
### Images:
All images from https://www.unsplash.com and from the following photographers:  
  
Michał Parzuchowski at https://unsplash.com/@mparzuchowski
  
### Code
Tutorial by Tyler Potts at https://www.youtube.com/channel/UCBBGM84ZOs7z5jpTQAaZ_Hg
  
Open Weather Map API documentation at https://openweathermap.org/guide
  
## Notes
The website does not request the users location when the front page is opened, so the user has to search the location for the area they wish to retrieve weather information from by entering the are in the searchbox. This might be a feature to implement in the future.
  
When validating my JavaScript code through JSHint, it returns several errors related to ES6 syntax, as this is fairly new and might not be supported by older browsers.
  
This website is built for educational purposes only.  
