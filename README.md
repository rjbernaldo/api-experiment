# api-experiment

A project to test out new technologies

## Project Specifications

  1. Collect air quality data for Amsterdam from an API http://aqicn.org/json-api/doc/
  
  2. Make a REST API endpoint, which would provide this data in a format suitable to plot the data on a graph. This graph should be able to show data for a day with an hour resolution and for a week with a 24 hour resolution.

  3. Make an init script which would fill the database with dummy data for 1 month

  4. Dockerizing the app is a plus

## Results

## Commands

  1. Start server
  ```
  $ docker-compose up
  ```

  2. Run tests
  ```
  $ docker-compose run api npm test
  ```