import React from 'react'

import classes from './Explore.module.css'

export default function Explore() {
  const cities = ['new york', 'miami', 'los angeles', 'near me']
  // (Bonus points if you can instead dynamically generate the list of cities by using the events data)

  //The POSH explore page uses the query parameters stored in the URL to properly ask for & display the right list of events:
  //https://posh.vip/explore?c=popular&t=week&p=1&city=
  return (
    <div className={classes.explore_ctn}>
      {cities.map((city, i) => (
        <p className={classes.city} key={i}>
          {city}
        </p>
      ))}
    </div>
  )
}
