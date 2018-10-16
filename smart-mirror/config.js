var config = {
    // Language for the mirror (currently not implemented)
    language : "ko",
    greeting : [], // An array of greetings to randomly choose from
       
	geo_position: {
		latitude: 37.3910472,
		longitude: 126.9190595
	},


    // forcast.io
    forcast : {
        key : "68c7889e4882a1544921fc3168c78f65", // Your forcast.io api key
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    // Calendar (An array of iCals)
    calendar: {
      icals : ["https://calendar.google.com/calendar/ical/tnqls5894%40gmail.com/public/basic.ics"],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    traffic: {
      key : "AkQMjltJXOrQPm_8rQOFr3U-RdEyEVvIMNOSWt8p3usN8ShVjh52JT2SORmGJ4R4", // Bing Maps API Key
      mode : "Transit", // Possibilities: Driving / Transit / Walking
      origin : "Anyang", // Start of your trip. Human readable address.
      destination : "Seoul", // Destination of your trip. Human readable address.
      name : "디지털 시스템 공학과", // Name of your destination ex: "work"
      reload_interval : 5 // Number of minutes the information is refreshed
    },

    youtube: {
      key:"AIzaSyC0S8294H71_tUxkVh4i5WxfMqyXjqc5iU"
    },

    subway: {
      key:"7a6265714d746e713130384b626a7771"
    },

}
