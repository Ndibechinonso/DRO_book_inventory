The app runs on ReactJs(Typescript) and Redux(reduxjs?toolkit) and SCSS.
 The app fetches a list of books on first load, scrolling down the page makes a useFetch call that loads subsewuent pages till it gets to apge with no content. 
 The user can also select a category from the select option and search by typing a value in the search input nd clicking the ubmit button. 
 I considered making a search on the input keyup but then api only supports exact matching of values(searching for character name "walde" doesn't return results for "walder"). You can also fetch all reults by submitting an empty input value.
