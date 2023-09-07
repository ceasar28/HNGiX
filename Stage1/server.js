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

const utcTimeFormatted = currentDate.toISOString("yyyy-MM-ddTHH:mm:ssZ");
// Extracting the part of the string needed (excluding milliseconds)
const formattedUTC = utcTimeFormatted.substring(0, 19) + "Z";

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
    utc_time: formattedUTC,
    track: track,
    github_file_url:
      "https://github.com/ceasar28/HNGiX/blob/main/Stage1/server.js",
    github_repo_url: "https://github.com/ceasar28/HNGiX/tree/main/Stage1",
    status_code: 200,
  };

  // hadnling cors
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
    "Content-Type": "application/json",
  };

  if (
    req.url === "/api" ||
    req.url === `/api?slack_name=${slackName}&track=${track}`
  ) {
    res.writeHead(200, headers);
    res.write(JSON.stringify(response));
    return res.end();
  }

  res.writeHead(400, headers);
  res.write(" Sorry Content not found");
  return res.end();
});

Server.listen(3000, () => {
  console.log("port is listening to port 3000");
});
