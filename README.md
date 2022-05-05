# UFOs

## Overview of Project
The purpose of this analysis is to revise our UFO website to utilize multiple search criteria instead of only one criterion and to ensure the results are listed dynamically anytime a change is made without the use of a button to click.

## Results
The website was designed to capture the attention of people interested in UFO sightings using a static data file from January 2010. The interface is formatted to grab the attention of a person who lands on the webpage. They are immediately greeted with an interesting background color, font selection, NASA image, and a brief article title and paragraph.

![full_website](https://user-images.githubusercontent.com/99286327/167014040-ecf6dbc5-6eb6-42e2-a503-429b3f43cb6a.png)

The user can then perform a search on different UFO sightings that occurred in the first half of January 2010. Users may select from 5 search criteria: date, city, state, country, and shape. Sample text is provided as a placeholder so the user has an example to refer to. See yellow highlight below:

![search_functions](https://user-images.githubusercontent.com/99286327/167014047-8185f705-0173-4987-8fe5-5042d5fece68.png)

If no criteria is selected, the full table of all sightings is shown and is quite lengthy as evidenced by the red arrow indicating the right scroll bar in the photo above. Users can enter anywhere from no criteria up to all 5 criteria in order to narrow their search.

Upon entering search criteria, the table updates dynamically and provides the following pieces of information:
* Date
* City
* State
* Country
* Shape
* Duration
* Comments

As an example of the search functionality, a search for UFO sightings in NY yielded 4 results.

![NY_filter](https://user-images.githubusercontent.com/99286327/167014046-ffc6ffac-491b-4442-80e5-5adb3f341d76.png)

## Summary
### Drawback
There is one drawback of this new design. A user may not know what options they can enter in the search criteria despite showcasing placeholder text as an example. For example, what are the types of shapes a user can choose from? Which cities and states have data? What are the dates options?

### Recommendations
Three recommendations for further development would be:
1. Check if it's possible to offer a drop-down menu instead of a text box for the state, country, and shape input boxes.
2. Check feasibility for a calendar box where a user can select from a list of calendar dates (either in list format or calendar format). See below screenshot of search results for January 15, 2010 yielding zero results.
3. Make the placeholder text lighter or delete placeholder text to avoid any confusion when a user is in the middle of their search. Currently, it's easy to mistake placeholder text with actual entered search criteria.

![date_criteria_recommend](https://user-images.githubusercontent.com/99286327/167014038-a68e385c-af8a-4c69-87e4-a1bd771ada5c.png)



