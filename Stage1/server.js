const http = require("http");
const url = require("url");
const querystring = require("querystring");

// a new Date object that represent the current date and time
const currentDate = new Date();
// Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
const currentDayOfWeek = currentDate.getUTCDay();

// Convert the numeric day of the week to its corresponding name
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayByname = daysOfWeek[currentDayOfWeek];
// Formatting the UTC time as "2023-08-21T15:04:05Z"
const utcTimeFormatted = currentDate.toISOString();

// creating a server instance
const Server = http.createServer((req, res) => {
  // parsing the request URL
  const parsedUrl = url.parse(req.url);
  // Extract the query parameters as an object
  const parsedQuery = querystring.parse(parsedUrl.query);
  const method = req.method;
  // accessing the query parameters and using them
  const slackName = parsedQuery.slack_name;
  const track = parsedQuery.track;

  // json response
  const response = {
    slack_name: slackName,
    current_day: currentDayByname,
    utc_time: utcTimeFormatted,
    track: track,
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  };
  res.write(JSON.stringify(response));
  res.end();
  console.log(slackName, track);
});

Server.listen(3000, () => {
  console.log("port is listening to port 3000");
});
