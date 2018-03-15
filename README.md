## Star Wars Code Challenge

> This single page application uses HTML, CSS, Vanilla Javascript, and jQuery (primarily for AJAX calls, but also for DOM manipulation) to query the OMDB database and display search results on the page. 

> Once a user clicks on a title, an additional API call is made to gather additional data for the selected film.

> A user can then add a movie to his/her favorites and view those favorites by selecting the button. 

### Back-end Notes

- Fixed initial code for functionality.
- Added comments for server routes.
- Setup port variable to handle Heroku deployment. 

### Front-end Notes

- Create separate index.js file for separation of concerns.
- Wrap code in $(document).ready function to avoid global variables
- Import jQuery for event listeners and AJAX calls