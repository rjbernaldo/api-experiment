# `API Experiment`

API prototype to test out new technologies

## Project Specifications

  1. Collect air quality data for Amsterdam from an API http://aqicn.org/json-api/doc/
  
  2. Make a REST API endpoint, which would provide this data in a format suitable to plot the data on a graph. This graph should be able to show data for a day with an hour resolution and for a week with a 24 hour resolution.

  3. Make an init script which would fill the database with dummy data for 1 month

  4. Dockerizing the app is a plus

## Usage

  1. Generate seed data
  ```
  $ docker-compose run api npm run seed
  
    DB populated with 1000 entries
  ```

  2. Start database & server
  ```
  $ docker-compose up
  ```
  
  3. Get all data
  ```
  $ curl 'localhost:3000/aqis'
  
    {
      "aqis": [
        ...
      ]
    }
  ```
    
  4. Get data aggregated by day (hourly resolution)
  ```
  $ curl 'localhost:3000/aqis?timeframe=day'
  
    {
      "aqis": [
        {
          "_id": {
            "hour": 2
          }, 
          "averageAqi": 35,
          "count":3
        },
        ...
      ]
    }
  ```
  
  5. Get data aggregated by week (daily resolution)
  ```
  $ curl 'localhost:3000/aqis?timeframe=week'
  
    {
      "aqis": [
        {
          "_id": {
            "day": 22,
            "month": 4
          }, 
          "averageAqi": 40.70,
          "count":3
        },
        ...
      ]
    }
  ```

## Tests

  1. Tests are run via `docker-compose run api npm test`
  
![alt tag](https://raw.githubusercontent.com/rjbernaldo/api-experiment/master/screenshot.png)
