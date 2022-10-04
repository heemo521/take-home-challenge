import React from 'react'

import classes from './CityNavigator.module.css'

export default function CityNavigator() {
  const cities = ['new york', 'miami', 'los angeles', 'near me']
  // (Bonus points if you can instead dynamically generate the list of cities by using the events data)

  //The POSH explore page uses the query parameters stored in the URL to properly ask for & display the right list of events:
  //https://posh.vip/explore?c=popular&t=week&p=1&city=
  return (
    <div>
      <div className={classes.confetti}>Layover for the confetti</div>
      <div className={classes.city_ctn}>
        <div className={classes.city_prompt}>Where are you looking for experiences?</div>
        {cities.map((city, i) => (
          <div className={classes.city_city} key={i}>
            {city}
          </div>
        ))}
      </div>
    </div>
  )
}
