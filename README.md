# Giphy Gif Search

This program showcases relevant GIFs from [GIPHY](https://developers.giphy.com/docs/sdk/) based on the user's search term. If nothing is provided, the trending GIFs are posted instead. This app uses [giphy-api](https://github.com/austinkelleher/giphy-api) to call the APIs.

![Trending GIFs](recording.gif)

**Directions**

Open [https://glacial-garden-54215.herokuapp.com/](https://glacial-garden-54215.herokuapp.com/), or:

1. Obtain an API key from [GIPHY](https://developers.giphy.com/).
2. Create a `.env` file with the line `GIPHY_API_KEY=<YOUR_API_KEY>`.
3. Install node dependencies: `npm install`
4. Run the server: `node app.js`
5. Enter _localhost:3000_ in the address bar to access the site.
