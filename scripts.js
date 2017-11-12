// PSEUDOCODE //
// - user selects year
// - user selects month
// - user selects day
// - user selects time
// - process combined date selections to match dd-mm-yyyy format in data set
// - look up selected date in data set
//   - handle multiple matching dates with poise
// - check if the selected time falls after I went to sleep and before I woke up
//   - if yes, 'I WAS SLEEPING' - Display stats too
//   - if no, 'I WASN'T SLEEPING'
// - invite to try it again!

// Create an object for namespacing the app
const wasISleeping = {};

// Store the original data set
wasISleeping.sleepData = [
  {
    "date": "03-08-2017",
    "sleepTime": "00:23",
    "awakeTime": "07:25",
    "minutesSlept": 422,
    "rating": 3
  },
  {
    "date": "03-06-2017",
    "sleepTime": "00:33",
    "awakeTime": "07:15",
    "minutesSlept": 403,
    "rating": ""
  },
  {
    "date": "03-05-2017",
    "sleepTime": "01:11",
    "awakeTime": "08:37",
    "minutesSlept": 446,
    "rating": 4
  },
  {
    "date": "03-04-2017",
    "sleepTime": "00:49",
    "awakeTime": "09:00",
    "minutesSlept": 492,
    "rating": 4
  },
  {
    "date": "03-03-2017",
    "sleepTime": "00:59",
    "awakeTime": "07:20",
    "minutesSlept": 381,
    "rating": 2
  },
  {
    "date": "03-02-2017",
    "sleepTime": "01:10",
    "awakeTime": "07:20",
    "minutesSlept": 370,
    "rating": 3
  },
  {
    "date": "03-01-2017",
    "sleepTime": "23:47",
    "awakeTime": "07:15",
    "minutesSlept": 449,
    "rating": 4
  },
  {
    "date": "02-28-2017",
    "sleepTime": "23:23",
    "awakeTime": "07:20",
    "minutesSlept": 477,
    "rating": 4
  },
  {
    "date": "02-27-2017",
    "sleepTime": "00:58",
    "awakeTime": "07:16",
    "minutesSlept": 378,
    "rating": 3
  },
  {
    "date": "02-26-2017",
    "sleepTime": "00:54",
    "awakeTime": "08:58",
    "minutesSlept": 484,
    "rating": 5
  },
  {
    "date": "02-25-2017",
    "sleepTime": "00:47",
    "awakeTime": "08:55",
    "minutesSlept": 488,
    "rating": 4
  },
  {
    "date": "02-24-2017",
    "sleepTime": "23:11",
    "awakeTime": "07:16",
    "minutesSlept": 485,
    "rating": 4
  },
  {
    "date": "02-23-2017",
    "sleepTime": "00:03",
    "awakeTime": "07:15",
    "minutesSlept": 432,
    "rating": 4
  },
  {
    "date": "02-22-2017",
    "sleepTime": "23:50",
    "awakeTime": "07:15",
    "minutesSlept": 446,
    "rating": 4
  },
  {
    "date": "02-21-2017",
    "sleepTime": "23:39",
    "awakeTime": "07:19",
    "minutesSlept": 461,
    "rating": 3
  },
  {
    "date": "02-20-2017",
    "sleepTime": "01:56",
    "awakeTime": "08:56",
    "minutesSlept": 421,
    "rating": 2
  },
  {
    "date": "02-19-2017",
    "sleepTime": "01:16",
    "awakeTime": "09:00",
    "minutesSlept": 465,
    "rating": 4
  },
  {
    "date": "02-18-2017",
    "sleepTime": "02:57",
    "awakeTime": "09:01",
    "minutesSlept": 364,
    "rating": 3
  },
  {
    "date": "02-17-2017",
    "sleepTime": "00:33",
    "awakeTime": "07:15",
    "minutesSlept": 403,
    "rating": 3
  },
  {
    "date": "02-16-2017",
    "sleepTime": "00:25",
    "awakeTime": "07:15",
    "minutesSlept": 411,
    "rating": 4
  },
  {
    "date": "02-15-2017",
    "sleepTime": "23:49",
    "awakeTime": "07:15",
    "minutesSlept": 447,
    "rating": 4
  },
  {
    "date": "02-14-2017",
    "sleepTime": "00:01",
    "awakeTime": "07:15",
    "minutesSlept": 434,
    "rating": 4
  },
  {
    "date": "02-13-2017",
    "sleepTime": "00:24",
    "awakeTime": "07:30",
    "minutesSlept": 427,
    "rating": 3
  },
  {
    "date": "02-12-2017",
    "sleepTime": "00:53",
    "awakeTime": "08:58",
    "minutesSlept": 485,
    "rating": 3
  },
  {
    "date": "02-11-2017",
    "sleepTime": "01:15",
    "awakeTime": "08:16",
    "minutesSlept": 422,
    "rating": ""
  },
  {
    "date": "02-10-2017",
    "sleepTime": "23:30",
    "awakeTime": "07:30",
    "minutesSlept": 480,
    "rating": 4
  },
  {
    "date": "02-09-2017",
    "sleepTime": "00:30",
    "awakeTime": "07:42",
    "minutesSlept": 432,
    "rating": 3
  },
  {
    "date": "02-08-2017",
    "sleepTime": "00:51",
    "awakeTime": "07:30",
    "minutesSlept": 399,
    "rating": 3
  },
  {
    "date": "02-07-2017",
    "sleepTime": "01:51",
    "awakeTime": "08:05",
    "minutesSlept": 374,
    "rating": 2
  },
  {
    "date": "02-06-2017",
    "sleepTime": "01:03",
    "awakeTime": "07:31",
    "minutesSlept": 389,
    "rating": 3
  },
  {
    "date": "02-05-2017",
    "sleepTime": "01:19",
    "awakeTime": "09:00",
    "minutesSlept": 461,
    "rating": 3
  },
  {
    "date": "02-04-2017",
    "sleepTime": "23:43",
    "awakeTime": "08:55",
    "minutesSlept": 552,
    "rating": 5
  },
  {
    "date": "02-03-2017",
    "sleepTime": "00:45",
    "awakeTime": "08:46",
    "minutesSlept": 481,
    "rating": 5
  },
  {
    "date": "02-02-2017",
    "sleepTime": "00:50",
    "awakeTime": "07:40",
    "minutesSlept": 411,
    "rating": 4
  },
  {
    "date": "02-01-2017",
    "sleepTime": "00:50",
    "awakeTime": "07:52",
    "minutesSlept": 423,
    "rating": 3
  },
  {
    "date": "01-31-2017",
    "sleepTime": "02:32",
    "awakeTime": "08:10",
    "minutesSlept": 339,
    "rating": ""
  },
  {
    "date": "01-30-2017",
    "sleepTime": "00:25",
    "awakeTime": "08:00",
    "minutesSlept": 456,
    "rating": 4
  },
  {
    "date": "01-29-2017",
    "sleepTime": "01:34",
    "awakeTime": "08:45",
    "minutesSlept": 432,
    "rating": 3
  },
  {
    "date": "01-28-2017",
    "sleepTime": "01:00",
    "awakeTime": "09:00",
    "minutesSlept": 481,
    "rating": 4
  },
  {
    "date": "01-27-2017",
    "sleepTime": "00:38",
    "awakeTime": "07:45",
    "minutesSlept": 427,
    "rating": 4
  },
  {
    "date": "01-26-2017",
    "sleepTime": "00:30",
    "awakeTime": "07:50",
    "minutesSlept": 441,
    "rating": 4
  },
  {
    "date": "01-25-2017",
    "sleepTime": "23:56",
    "awakeTime": "07:31",
    "minutesSlept": 455,
    "rating": 3
  },
  {
    "date": "01-24-2017",
    "sleepTime": "01:25",
    "awakeTime": "07:40",
    "minutesSlept": 376,
    "rating": 2
  },
  {
    "date": "01-23-2017",
    "sleepTime": "00:28",
    "awakeTime": "07:15",
    "minutesSlept": 407,
    "rating": 4
  },
  {
    "date": "01-22-2017",
    "sleepTime": "00:47",
    "awakeTime": "08:59",
    "minutesSlept": 493,
    "rating": 4
  },
  {
    "date": "01-21-2017",
    "sleepTime": "23:55",
    "awakeTime": "08:07",
    "minutesSlept": 493,
    "rating": 4
  },
  {
    "date": "01-20-2017",
    "sleepTime": "23:41",
    "awakeTime": "07:30",
    "minutesSlept": 469,
    "rating": ""
  },
  {
    "date": "01-19-2017",
    "sleepTime": "00:10",
    "awakeTime": "07:30",
    "minutesSlept": 441,
    "rating": 4
  },
  {
    "date": "01-18-2017",
    "sleepTime": "01:14",
    "awakeTime": "07:27",
    "minutesSlept": 373,
    "rating": 2
  },
  {
    "date": "01-17-2017",
    "sleepTime": "00:12",
    "awakeTime": "07:15",
    "minutesSlept": 423,
    "rating": 3
  },
  {
    "date": "01-16-2017",
    "sleepTime": "00:18",
    "awakeTime": "08:00",
    "minutesSlept": 462,
    "rating": 3
  },
  {
    "date": "01-15-2017",
    "sleepTime": "00:58",
    "awakeTime": "08:46",
    "minutesSlept": 468,
    "rating": 3
  },
  {
    "date": "01-14-2017",
    "sleepTime": "01:33",
    "awakeTime": "08:45",
    "minutesSlept": 433,
    "rating": 3
  },
  {
    "date": "01-13-2017",
    "sleepTime": "01:45",
    "awakeTime": "08:10",
    "minutesSlept": 386,
    "rating": 2
  },
  {
    "date": "01-12-2017",
    "sleepTime": "01:32",
    "awakeTime": "08:00",
    "minutesSlept": 389,
    "rating": 2
  },
  {
    "date": "01-11-2017",
    "sleepTime": "01:39",
    "awakeTime": "08:10",
    "minutesSlept": 392,
    "rating": 4
  },
  {
    "date": "01-10-2017",
    "sleepTime": "00:27",
    "awakeTime": "07:15",
    "minutesSlept": 408,
    "rating": 4
  },
  {
    "date": "01-09-2017",
    "sleepTime": "23:45",
    "awakeTime": "08:03",
    "minutesSlept": 498,
    "rating": 4
  },
  {
    "date": "01-08-2017",
    "sleepTime": "01:30",
    "awakeTime": "08:31",
    "minutesSlept": 421,
    "rating": 4
  },
  {
    "date": "01-07-2017",
    "sleepTime": "02:16",
    "awakeTime": "09:15",
    "minutesSlept": 420,
    "rating": 3
  },
  {
    "date": "01-06-2017",
    "sleepTime": "02:03",
    "awakeTime": "08:00",
    "minutesSlept": 358,
    "rating": ""
  },
  {
    "date": "01-05-2017",
    "sleepTime": "00:31",
    "awakeTime": "08:10",
    "minutesSlept": 460,
    "rating": 4
  },
  {
    "date": "01-04-2017",
    "sleepTime": "01:17",
    "awakeTime": "07:25",
    "minutesSlept": 368,
    "rating": 2
  },
  {
    "date": "01-03-2017",
    "sleepTime": "00:02",
    "awakeTime": "07:16",
    "minutesSlept": 434,
    "rating": ""
  },
  {
    "date": "01-02-2017",
    "sleepTime": "23:34",
    "awakeTime": "07:10",
    "minutesSlept": 457,
    "rating": ""
  },
  {
    "date": "01-01-2017",
    "sleepTime": "03:29",
    "awakeTime": "10:04",
    "minutesSlept": 395,
    "rating": 2
  },
  {
    "date": "12-31-2016",
    "sleepTime": "01:00",
    "awakeTime": "09:20",
    "minutesSlept": 500,
    "rating": 3
  },
  {
    "date": "12-30-2016",
    "sleepTime": "01:46",
    "awakeTime": "08:09",
    "minutesSlept": 383,
    "rating": 3
  },
  {
    "date": "12-29-2016",
    "sleepTime": "00:52",
    "awakeTime": "09:11",
    "minutesSlept": 499,
    "rating": ""
  },
  {
    "date": "12-28-2016",
    "sleepTime": "22:51",
    "awakeTime": "08:15",
    "minutesSlept": 565,
    "rating": 4
  },
  {
    "date": "12-27-2016",
    "sleepTime": "00:24",
    "awakeTime": "08:28",
    "minutesSlept": 484,
    "rating": 4
  },
  {
    "date": "12-26-2016",
    "sleepTime": "00:59",
    "awakeTime": "07:45",
    "minutesSlept": 406,
    "rating": 4
  },
  {
    "date": "12-25-2016",
    "sleepTime": "00:20",
    "awakeTime": "07:00",
    "minutesSlept": 401,
    "rating": 3
  },
  {
    "date": "12-24-2016",
    "sleepTime": "01:23",
    "awakeTime": "09:14",
    "minutesSlept": 471,
    "rating": 4
  },
  {
    "date": "12-23-2016",
    "sleepTime": "23:45",
    "awakeTime": "07:14",
    "minutesSlept": 450,
    "rating": 3
  },
  {
    "date": "12-22-2016",
    "sleepTime": "00:31",
    "awakeTime": "07:40",
    "minutesSlept": 430,
    "rating": 4
  },
  {
    "date": "12-21-2016",
    "sleepTime": "02:00",
    "awakeTime": "07:00",
    "minutesSlept": 300,
    "rating": 2
  },
  {
    "date": "12-20-2016",
    "sleepTime": "00:01",
    "awakeTime": "07:43",
    "minutesSlept": 463,
    "rating": ""
  },
  {
    "date": "12-19-2016",
    "sleepTime": "00:35",
    "awakeTime": "07:50",
    "minutesSlept": 435,
    "rating": 3
  },
  {
    "date": "12-18-2016",
    "sleepTime": "01:35",
    "awakeTime": "08:30",
    "minutesSlept": 415,
    "rating": 3
  },
  {
    "date": "12-17-2016",
    "sleepTime": "01:00",
    "awakeTime": "08:47",
    "minutesSlept": 468,
    "rating": 3
  },
  {
    "date": "12-16-2016",
    "sleepTime": "04:48",
    "awakeTime": "07:40",
    "minutesSlept": 173,
    "rating": ""
  },
  {
    "date": "12-15-2016",
    "sleepTime": "00:40",
    "awakeTime": "07:50",
    "minutesSlept": 431,
    "rating": 3
  },
  {
    "date": "12-14-2016",
    "sleepTime": "00:45",
    "awakeTime": "07:00",
    "minutesSlept": 375,
    "rating": 3
  },
  {
    "date": "12-13-2016",
    "sleepTime": "01:02",
    "awakeTime": "08:21",
    "minutesSlept": 440,
    "rating": 4
  },
  {
    "date": "12-12-2016",
    "sleepTime": "23:54",
    "awakeTime": "07:41",
    "minutesSlept": 468,
    "rating": 4
  },
  {
    "date": "12-11-2016",
    "sleepTime": "01:03",
    "awakeTime": "09:00",
    "minutesSlept": 477,
    "rating": 3
  },
  {
    "date": "12-10-2016",
    "sleepTime": "23:39",
    "awakeTime": "07:10",
    "minutesSlept": 451,
    "rating": 3
  },
  {
    "date": "12-09-2016",
    "sleepTime": "23:35",
    "awakeTime": "07:40",
    "minutesSlept": 486,
    "rating": ""
  },
  {
    "date": "12-08-2016",
    "sleepTime": "00:24",
    "awakeTime": "07:45",
    "minutesSlept": 441,
    "rating": ""
  },
  {
    "date": "12-07-2016",
    "sleepTime": "01:21",
    "awakeTime": "07:40",
    "minutesSlept": 380,
    "rating": ""
  },
  {
    "date": "12-06-2016",
    "sleepTime": "01:43",
    "awakeTime": "07:41",
    "minutesSlept": 359,
    "rating": 3
  },
  {
    "date": "12-05-2016",
    "sleepTime": "23:48",
    "awakeTime": "07:05",
    "minutesSlept": 438,
    "rating": 4
  },
  {
    "date": "12-04-2016",
    "sleepTime": "01:38",
    "awakeTime": "10:26",
    "minutesSlept": 529,
    "rating": 4
  },
  {
    "date": "12-03-2016",
    "sleepTime": "01:18",
    "awakeTime": "08:47",
    "minutesSlept": 449,
    "rating": 3
  },
  {
    "date": "12-02-2016",
    "sleepTime": "01:42",
    "awakeTime": "07:50",
    "minutesSlept": 369,
    "rating": 3
  },
  {
    "date": "12-01-2016",
    "sleepTime": "00:15",
    "awakeTime": "07:45",
    "minutesSlept": 451,
    "rating": 3
  },
  {
    "date": "11-30-2016",
    "sleepTime": "00:55",
    "awakeTime": "07:52",
    "minutesSlept": 417,
    "rating": 2
  },
  {
    "date": "11-29-2016",
    "sleepTime": "23:46",
    "awakeTime": "07:30",
    "minutesSlept": 465,
    "rating": 3
  },
  {
    "date": "11-28-2016",
    "sleepTime": "00:57",
    "awakeTime": "07:40",
    "minutesSlept": 404,
    "rating": 2
  },
  {
    "date": "11-27-2016",
    "sleepTime": "00:37",
    "awakeTime": "09:53",
    "minutesSlept": 557,
    "rating": 3
  },
  {
    "date": "11-26-2016",
    "sleepTime": "01:21",
    "awakeTime": "08:16",
    "minutesSlept": 415,
    "rating": 3
  },
  {
    "date": "11-25-2016",
    "sleepTime": "01:14",
    "awakeTime": "07:54",
    "minutesSlept": 401,
    "rating": 3
  },
  {
    "date": "11-24-2016",
    "sleepTime": "00:33",
    "awakeTime": "07:55",
    "minutesSlept": 443,
    "rating": 3
  },
  {
    "date": "11-23-2016",
    "sleepTime": "01:37",
    "awakeTime": "07:51",
    "minutesSlept": 374,
    "rating": 3
  },
  {
    "date": "11-22-2016",
    "sleepTime": "00:10",
    "awakeTime": "07:56",
    "minutesSlept": 467,
    "rating": 3
  },
  {
    "date": "11-21-2016",
    "sleepTime": "01:01",
    "awakeTime": "07:45",
    "minutesSlept": 405,
    "rating": 3
  },
  {
    "date": "11-20-2016",
    "sleepTime": "00:54",
    "awakeTime": "09:20",
    "minutesSlept": 506,
    "rating": 5
  },
  {
    "date": "11-19-2016",
    "sleepTime": "03:05",
    "awakeTime": "10:13",
    "minutesSlept": 429,
    "rating": ""
  },
  {
    "date": "11-18-2016",
    "sleepTime": "01:53",
    "awakeTime": "07:21",
    "minutesSlept": 329,
    "rating": 2
  },
  {
    "date": "11-17-2016",
    "sleepTime": "01:29",
    "awakeTime": "07:55",
    "minutesSlept": 387,
    "rating": 2
  },
  {
    "date": "11-16-2016",
    "sleepTime": "01:49",
    "awakeTime": "07:08",
    "minutesSlept": 319,
    "rating": 3
  },
  {
    "date": "11-15-2016",
    "sleepTime": "02:19",
    "awakeTime": "08:01",
    "minutesSlept": 342,
    "rating": 2
  },
  {
    "date": "11-14-2016",
    "sleepTime": "23:49",
    "awakeTime": "07:30",
    "minutesSlept": 462,
    "rating": 3
  },
  {
    "date": "11-13-2016",
    "sleepTime": "01:37",
    "awakeTime": "08:30",
    "minutesSlept": 414,
    "rating": ""
  },
  {
    "date": "11-12-2016",
    "sleepTime": "01:52",
    "awakeTime": "08:01",
    "minutesSlept": 370,
    "rating": 3
  },
  {
    "date": "11-11-2016",
    "sleepTime": "00:29",
    "awakeTime": "07:30",
    "minutesSlept": 422,
    "rating": 3
  },
  {
    "date": "11-10-2016",
    "sleepTime": "01:30",
    "awakeTime": "07:38",
    "minutesSlept": 368,
    "rating": 3
  },
  {
    "date": "11-09-2016",
    "sleepTime": "01:05",
    "awakeTime": "07:50",
    "minutesSlept": 406,
    "rating": 3
  },
  {
    "date": "11-08-2016",
    "sleepTime": "01:09",
    "awakeTime": "07:50",
    "minutesSlept": 402,
    "rating": 3
  },
  {
    "date": "11-07-2016",
    "sleepTime": "01:03",
    "awakeTime": "07:46",
    "minutesSlept": 403,
    "rating": 3
  },
  {
    "date": "11-06-2016",
    "sleepTime": "01:00",
    "awakeTime": "07:40",
    "minutesSlept": 460,
    "rating": ""
  },
  {
    "date": "11-05-2016",
    "sleepTime": "01:48",
    "awakeTime": "10:05",
    "minutesSlept": 498,
    "rating": 5
  },
  {
    "date": "11-04-2016",
    "sleepTime": "03:01",
    "awakeTime": "07:40",
    "minutesSlept": 280,
    "rating": 2
  },
  {
    "date": "11-03-2016",
    "sleepTime": "00:34",
    "awakeTime": "08:00",
    "minutesSlept": 446,
    "rating": 3
  },
  {
    "date": "11-02-2016",
    "sleepTime": "03:50",
    "awakeTime": "07:36",
    "minutesSlept": 226,
    "rating": 1
  },
  {
    "date": "11-01-2016",
    "sleepTime": "01:23",
    "awakeTime": "07:45",
    "minutesSlept": 383,
    "rating": ""
  },
  {
    "date": "10-31-2016",
    "sleepTime": "01:36",
    "awakeTime": "07:51",
    "minutesSlept": 375,
    "rating": 3
  },
  {
    "date": "10-30-2016",
    "sleepTime": "01:49",
    "awakeTime": "08:37",
    "minutesSlept": 409,
    "rating": 3
  },
  {
    "date": "10-29-2016",
    "sleepTime": "02:27",
    "awakeTime": "08:45",
    "minutesSlept": 378,
    "rating": ""
  },
  {
    "date": "10-28-2016",
    "sleepTime": "01:30",
    "awakeTime": "07:55",
    "minutesSlept": 385,
    "rating": 2
  },
  {
    "date": "10-27-2016",
    "sleepTime": "02:13",
    "awakeTime": "07:53",
    "minutesSlept": 341,
    "rating": 2
  },
  {
    "date": "10-26-2016",
    "sleepTime": "01:46",
    "awakeTime": "07:46",
    "minutesSlept": 360,
    "rating": 3
  },
  {
    "date": "10-25-2016",
    "sleepTime": "00:52",
    "awakeTime": "07:01",
    "minutesSlept": 369,
    "rating": 3
  },
  {
    "date": "10-24-2016",
    "sleepTime": "00:48",
    "awakeTime": "08:01",
    "minutesSlept": 433,
    "rating": 2
  },
  {
    "date": "10-23-2016",
    "sleepTime": "00:45",
    "awakeTime": "08:48",
    "minutesSlept": 484,
    "rating": 3
  },
  {
    "date": "10-22-2016",
    "sleepTime": "00:30",
    "awakeTime": "07:45",
    "minutesSlept": 435,
    "rating": 3
  },
  {
    "date": "10-21-2016",
    "sleepTime": "23:33",
    "awakeTime": "07:45",
    "minutesSlept": 492,
    "rating": 3
  },
  {
    "date": "10-20-2016",
    "sleepTime": "01:46",
    "awakeTime": "07:57",
    "minutesSlept": 371,
    "rating": 3
  },
  {
    "date": "10-19-2016",
    "sleepTime": "01:06",
    "awakeTime": "07:46",
    "minutesSlept": 401,
    "rating": 4
  },
  {
    "date": "10-18-2016",
    "sleepTime": "00:30",
    "awakeTime": "07:30",
    "minutesSlept": 420,
    "rating": 3
  },
  {
    "date": "10-17-2016",
    "sleepTime": "00:07",
    "awakeTime": "07:55",
    "minutesSlept": 469,
    "rating": 4
  },
  {
    "date": "10-16-2016",
    "sleepTime": "00:58",
    "awakeTime": "09:02",
    "minutesSlept": 484,
    "rating": 4
  },
  {
    "date": "10-15-2016",
    "sleepTime": "01:31",
    "awakeTime": "08:45",
    "minutesSlept": 435,
    "rating": 3
  },
  {
    "date": "10-14-2016",
    "sleepTime": "00:26",
    "awakeTime": "08:16",
    "minutesSlept": 470,
    "rating": 4
  },
  {
    "date": "10-13-2016",
    "sleepTime": "00:34",
    "awakeTime": "07:55",
    "minutesSlept": 442,
    "rating": 4
  },
  {
    "date": "10-12-2016",
    "sleepTime": "00:40",
    "awakeTime": "07:50",
    "minutesSlept": 431,
    "rating": 3
  },
  {
    "date": "10-11-2016",
    "sleepTime": "00:46",
    "awakeTime": "07:45",
    "minutesSlept": 420,
    "rating": 3
  },
  {
    "date": "10-10-2016",
    "sleepTime": "00:39",
    "awakeTime": "08:01",
    "minutesSlept": 442,
    "rating": 4
  },
  {
    "date": "10-09-2016",
    "sleepTime": "00:13",
    "awakeTime": "09:20",
    "minutesSlept": 547,
    "rating": 4
  },
  {
    "date": "10-08-2016",
    "sleepTime": "23:25",
    "awakeTime": "07:30",
    "minutesSlept": 486,
    "rating": 3
  },
  {
    "date": "10-07-2016",
    "sleepTime": "00:39",
    "awakeTime": "07:55",
    "minutesSlept": 436,
    "rating": 3
  },
  {
    "date": "10-06-2016",
    "sleepTime": "00:44",
    "awakeTime": "07:07",
    "minutesSlept": 383,
    "rating": 3
  },
  {
    "date": "10-05-2016",
    "sleepTime": "01:38",
    "awakeTime": "07:55",
    "minutesSlept": 378,
    "rating": 3
  },
  {
    "date": "10-04-2016",
    "sleepTime": "01:37",
    "awakeTime": "07:50",
    "minutesSlept": 374,
    "rating": ""
  },
  {
    "date": "10-03-2016",
    "sleepTime": "01:15",
    "awakeTime": "07:31",
    "minutesSlept": 376,
    "rating": ""
  },
  {
    "date": "10-02-2016",
    "sleepTime": "01:08",
    "awakeTime": "08:20",
    "minutesSlept": 432,
    "rating": 3
  },
  {
    "date": "10-01-2016",
    "sleepTime": "01:57",
    "awakeTime": "08:17",
    "minutesSlept": 381,
    "rating": 3
  },
  {
    "date": "09-30-2016",
    "sleepTime": "00:07",
    "awakeTime": "07:27",
    "minutesSlept": 441,
    "rating": 3
  },
  {
    "date": "09-29-2016",
    "sleepTime": "02:12",
    "awakeTime": "07:55",
    "minutesSlept": 344,
    "rating": 1
  },
  {
    "date": "09-28-2016",
    "sleepTime": "00:52",
    "awakeTime": "08:10",
    "minutesSlept": 438,
    "rating": 2
  },
  {
    "date": "09-27-2016",
    "sleepTime": "01:15",
    "awakeTime": "07:05",
    "minutesSlept": 350,
    "rating": 3
  },
  {
    "date": "09-26-2016",
    "sleepTime": "23:59",
    "awakeTime": "07:50",
    "minutesSlept": 472,
    "rating": 3
  },
  {
    "date": "09-25-2016",
    "sleepTime": "00:39",
    "awakeTime": "09:14",
    "minutesSlept": 516,
    "rating": 4
  },
  {
    "date": "09-24-2016",
    "sleepTime": "01:51",
    "awakeTime": "09:36",
    "minutesSlept": 465,
    "rating": 4
  },
  {
    "date": "09-23-2016",
    "sleepTime": "23:38",
    "awakeTime": "07:30",
    "minutesSlept": 473,
    "rating": ""
  },
  {
    "date": "09-22-2016",
    "sleepTime": "01:20",
    "awakeTime": "07:50",
    "minutesSlept": 391,
    "rating": 3
  },
  {
    "date": "09-21-2016",
    "sleepTime": "00:09",
    "awakeTime": "07:57",
    "minutesSlept": 468,
    "rating": 3
  },
  {
    "date": "09-20-2016",
    "sleepTime": "00:48",
    "awakeTime": "08:05",
    "minutesSlept": 438,
    "rating": 3
  },
  {
    "date": "09-19-2016",
    "sleepTime": "23:46",
    "awakeTime": "07:14",
    "minutesSlept": 448,
    "rating": 4
  },
  {
    "date": "09-18-2016",
    "sleepTime": "01:11",
    "awakeTime": "09:19",
    "minutesSlept": 489,
    "rating": 4
  },
  {
    "date": "09-17-2016",
    "sleepTime": "02:16",
    "awakeTime": "09:09",
    "minutesSlept": 413,
    "rating": 4
  },
  {
    "date": "09-16-2016",
    "sleepTime": "01:32",
    "awakeTime": "07:45",
    "minutesSlept": 374,
    "rating": 3
  },
  {
    "date": "09-15-2016",
    "sleepTime": "00:14",
    "awakeTime": "07:50",
    "minutesSlept": 457,
    "rating": 4
  },
  {
    "date": "09-14-2016",
    "sleepTime": "01:15",
    "awakeTime": "08:00",
    "minutesSlept": 406,
    "rating": 3
  },
  {
    "date": "09-13-2016",
    "sleepTime": "00:39",
    "awakeTime": "07:36",
    "minutesSlept": 417,
    "rating": 2
  },
  {
    "date": "09-12-2016",
    "sleepTime": "01:02",
    "awakeTime": "07:45",
    "minutesSlept": 404,
    "rating": ""
  },
  {
    "date": "09-11-2016",
    "sleepTime": "01:39",
    "awakeTime": "09:06",
    "minutesSlept": 447,
    "rating": ""
  },
  {
    "date": "09-10-2016",
    "sleepTime": "01:15",
    "awakeTime": "09:11",
    "minutesSlept": 476,
    "rating": 3
  },
  {
    "date": "09-09-2016",
    "sleepTime": "00:17",
    "awakeTime": "08:00",
    "minutesSlept": 463,
    "rating": 3
  },
  {
    "date": "09-08-2016",
    "sleepTime": "02:05",
    "awakeTime": "07:55",
    "minutesSlept": 351,
    "rating": ""
  },
  {
    "date": "09-07-2016",
    "sleepTime": "23:52",
    "awakeTime": "07:45",
    "minutesSlept": 474,
    "rating": 3
  },
  {
    "date": "09-06-2016",
    "sleepTime": "02:11",
    "awakeTime": "07:50",
    "minutesSlept": 340,
    "rating": ""
  },
  {
    "date": "09-05-2016",
    "sleepTime": "00:17",
    "awakeTime": "07:55",
    "minutesSlept": 458,
    "rating": 3
  },
  {
    "date": "09-04-2016",
    "sleepTime": "00:05",
    "awakeTime": "08:34",
    "minutesSlept": 509,
    "rating": ""
  },
  {
    "date": "09-03-2016",
    "sleepTime": "01:34",
    "awakeTime": "07:09",
    "minutesSlept": 336,
    "rating": ""
  },
  {
    "date": "09-02-2016",
    "sleepTime": "00:02",
    "awakeTime": "07:46",
    "minutesSlept": 465,
    "rating": 3
  },
  {
    "date": "09-01-2016",
    "sleepTime": "01:17",
    "awakeTime": "07:50",
    "minutesSlept": 394,
    "rating": 2
  },
  {
    "date": "08-31-2016",
    "sleepTime": "00:08",
    "awakeTime": "08:00",
    "minutesSlept": 472,
    "rating": 2
  },
  {
    "date": "08-30-2016",
    "sleepTime": "00:59",
    "awakeTime": "07:25",
    "minutesSlept": 387,
    "rating": 2
  },
  {
    "date": "08-29-2016",
    "sleepTime": "23:22",
    "awakeTime": "07:49",
    "minutesSlept": 508,
    "rating": 3
  },
  {
    "date": "08-28-2016",
    "sleepTime": "23:23",
    "awakeTime": "09:23",
    "minutesSlept": 600,
    "rating": 3
  },
  {
    "date": "08-27-2016",
    "sleepTime": "01:34",
    "awakeTime": "06:50",
    "minutesSlept": 316,
    "rating": 4
  },
  {
    "date": "08-26-2016",
    "sleepTime": "02:56",
    "awakeTime": "10:36",
    "minutesSlept": 461,
    "rating": ""
  },
  {
    "date": "08-25-2016",
    "sleepTime": "02:03",
    "awakeTime": "10:50",
    "minutesSlept": 527,
    "rating": 3
  },
  {
    "date": "08-24-2016",
    "sleepTime": "02:14",
    "awakeTime": "09:53",
    "minutesSlept": 460,
    "rating": 3
  },
  {
    "date": "08-23-2016",
    "sleepTime": "02:23",
    "awakeTime": "10:15",
    "minutesSlept": 473,
    "rating": ""
  },
  {
    "date": "08-22-2016",
    "sleepTime": "00:50",
    "awakeTime": "09:23",
    "minutesSlept": 514,
    "rating": 4
  },
  {
    "date": "08-21-2016",
    "sleepTime": "21:01",
    "awakeTime": "03:46",
    "minutesSlept": 405,
    "rating": 2
  },
  {
    "date": "08-20-2016",
    "sleepTime": "00:01",
    "awakeTime": "08:06",
    "minutesSlept": 486,
    "rating": 3
  },
  {
    "date": "08-19-2016",
    "sleepTime": "03:09",
    "awakeTime": "08:06",
    "minutesSlept": 297,
    "rating": 1
  },
  {
    "date": "08-18-2016",
    "sleepTime": "00:06",
    "awakeTime": "07:45",
    "minutesSlept": 459,
    "rating": 4
  },
  {
    "date": "08-17-2016",
    "sleepTime": "00:10",
    "awakeTime": "07:30",
    "minutesSlept": 440,
    "rating": 3
  },
  {
    "date": "08-16-2016",
    "sleepTime": "00:59",
    "awakeTime": "07:35",
    "minutesSlept": 396,
    "rating": 3
  },
  {
    "date": "08-15-2016",
    "sleepTime": "23:36",
    "awakeTime": "07:45",
    "minutesSlept": 489,
    "rating": ""
  },
  {
    "date": "08-14-2016",
    "sleepTime": "02:32",
    "awakeTime": "08:00",
    "minutesSlept": 328,
    "rating": 2
  },
  {
    "date": "08-13-2016",
    "sleepTime": "02:14",
    "awakeTime": "09:15",
    "minutesSlept": 421,
    "rating": ""
  },
  {
    "date": "08-12-2016",
    "sleepTime": "02:10",
    "awakeTime": "07:30",
    "minutesSlept": 321,
    "rating": 3
  },
  {
    "date": "08-11-2016",
    "sleepTime": "01:51",
    "awakeTime": "08:30",
    "minutesSlept": 400,
    "rating": 2
  },
  {
    "date": "08-10-2016",
    "sleepTime": "01:39",
    "awakeTime": "08:05",
    "minutesSlept": 387,
    "rating": 2
  },
  {
    "date": "08-09-2016",
    "sleepTime": "01:33",
    "awakeTime": "07:50",
    "minutesSlept": 377,
    "rating": 1
  },
  {
    "date": "08-08-2016",
    "sleepTime": "23:41",
    "awakeTime": "07:45",
    "minutesSlept": 484,
    "rating": 3
  },
  {
    "date": "08-07-2016",
    "sleepTime": "03:33",
    "awakeTime": "10:03",
    "minutesSlept": 390,
    "rating": 3
  },
  {
    "date": "08-06-2016",
    "sleepTime": "04:58",
    "awakeTime": "10:29",
    "minutesSlept": 332,
    "rating": 3
  },
  {
    "date": "08-05-2016",
    "sleepTime": "01:09",
    "awakeTime": "07:46",
    "minutesSlept": 397,
    "rating": 3
  },
  {
    "date": "08-04-2016",
    "sleepTime": "00:25",
    "awakeTime": "07:35",
    "minutesSlept": 430,
    "rating": 3
  },
  {
    "date": "08-03-2016",
    "sleepTime": "01:59",
    "awakeTime": "07:35",
    "minutesSlept": 336,
    "rating": 2
  },
  {
    "date": "08-02-2016",
    "sleepTime": "01:43",
    "awakeTime": "07:46",
    "minutesSlept": 364,
    "rating": 3
  },
  {
    "date": "08-01-2016",
    "sleepTime": "23:31",
    "awakeTime": "08:00",
    "minutesSlept": 509,
    "rating": 3
  },
  {
    "date": "07-31-2016",
    "sleepTime": "00:54",
    "awakeTime": "10:14",
    "minutesSlept": 560,
    "rating": 5
  },
  {
    "date": "07-30-2016",
    "sleepTime": "02:21",
    "awakeTime": "08:00",
    "minutesSlept": 340,
    "rating": 1
  },
  {
    "date": "07-29-2016",
    "sleepTime": "01:59",
    "awakeTime": "07:10",
    "minutesSlept": 312,
    "rating": 2
  },
  {
    "date": "07-28-2016",
    "sleepTime": "02:53",
    "awakeTime": "07:35",
    "minutesSlept": 282,
    "rating": 3
  },
  {
    "date": "07-27-2016",
    "sleepTime": "00:01",
    "awakeTime": "07:21",
    "minutesSlept": 440,
    "rating": 2
  },
  {
    "date": "07-26-2016",
    "sleepTime": "02:12",
    "awakeTime": "07:55",
    "minutesSlept": 343,
    "rating": 2
  },
  {
    "date": "07-25-2016",
    "sleepTime": "01:22",
    "awakeTime": "07:54",
    "minutesSlept": 392,
    "rating": 3
  },
  {
    "date": "07-24-2016",
    "sleepTime": "01:50",
    "awakeTime": "09:23",
    "minutesSlept": 454,
    "rating": 4
  },
  {
    "date": "07-23-2016",
    "sleepTime": "00:22",
    "awakeTime": "08:55",
    "minutesSlept": 514,
    "rating": 3
  },
  {
    "date": "07-22-2016",
    "sleepTime": "00:44",
    "awakeTime": "07:30",
    "minutesSlept": 406,
    "rating": 3
  },
  {
    "date": "07-21-2016",
    "sleepTime": "01:00",
    "awakeTime": "07:45",
    "minutesSlept": 406,
    "rating": 3
  },
  {
    "date": "07-20-2016",
    "sleepTime": "00:27",
    "awakeTime": "07:20",
    "minutesSlept": 413,
    "rating": 3
  },
  {
    "date": "07-19-2016",
    "sleepTime": "01:02",
    "awakeTime": "07:45",
    "minutesSlept": 404,
    "rating": 3
  },
  {
    "date": "07-18-2016",
    "sleepTime": "00:01",
    "awakeTime": "07:45",
    "minutesSlept": 464,
    "rating": 4
  },
  {
    "date": "07-17-2016",
    "sleepTime": "00:46",
    "awakeTime": "08:58",
    "minutesSlept": 493,
    "rating": 3
  },
  {
    "date": "07-16-2016",
    "sleepTime": "23:47",
    "awakeTime": "08:01",
    "minutesSlept": 494,
    "rating": 3
  },
  {
    "date": "07-15-2016",
    "sleepTime": "01:05",
    "awakeTime": "07:30",
    "minutesSlept": 386,
    "rating": 4
  },
  {
    "date": "07-14-2016",
    "sleepTime": "00:29",
    "awakeTime": "07:45",
    "minutesSlept": 437,
    "rating": 3
  },
  {
    "date": "07-13-2016",
    "sleepTime": "00:45",
    "awakeTime": "07:30",
    "minutesSlept": 405,
    "rating": 2
  },
  {
    "date": "07-12-2016",
    "sleepTime": "23:33",
    "awakeTime": "07:45",
    "minutesSlept": 493,
    "rating": 3
  },
  {
    "date": "07-11-2016",
    "sleepTime": "01:48",
    "awakeTime": "07:55",
    "minutesSlept": 367,
    "rating": 2
  },
  {
    "date": "07-10-2016",
    "sleepTime": "01:59",
    "awakeTime": "09:05",
    "minutesSlept": 426,
    "rating": ""
  },
  {
    "date": "07-09-2016",
    "sleepTime": "02:21",
    "awakeTime": "08:45",
    "minutesSlept": 385,
    "rating": ""
  },
  {
    "date": "07-08-2016",
    "sleepTime": "03:17",
    "awakeTime": "09:35",
    "minutesSlept": 378,
    "rating": 4
  },
  {
    "date": "07-07-2016",
    "sleepTime": "02:07",
    "awakeTime": "08:15",
    "minutesSlept": 368,
    "rating": 3
  },
  {
    "date": "07-06-2016",
    "sleepTime": "00:55",
    "awakeTime": "08:24",
    "minutesSlept": 449,
    "rating": 4
  },
  {
    "date": "07-05-2016",
    "sleepTime": "01:58",
    "awakeTime": "07:45",
    "minutesSlept": 348,
    "rating": 3
  },
  {
    "date": "07-04-2016",
    "sleepTime": "01:46",
    "awakeTime": "08:15",
    "minutesSlept": 390,
    "rating": 3
  },
  {
    "date": "07-03-2016",
    "sleepTime": "02:38",
    "awakeTime": "07:25",
    "minutesSlept": 287,
    "rating": 1
  },
  {
    "date": "07-02-2016",
    "sleepTime": "01:32",
    "awakeTime": "08:00",
    "minutesSlept": 389,
    "rating": 2
  },
  {
    "date": "07-01-2016",
    "sleepTime": "01:03",
    "awakeTime": "07:45",
    "minutesSlept": 402,
    "rating": 3
  },
  {
    "date": "06-30-2016",
    "sleepTime": "02:48",
    "awakeTime": "08:30",
    "minutesSlept": 343,
    "rating": 3
  },
  {
    "date": "06-29-2016",
    "sleepTime": "01:32",
    "awakeTime": "07:42",
    "minutesSlept": 370,
    "rating": 3
  },
  {
    "date": "06-28-2016",
    "sleepTime": "00:41",
    "awakeTime": "07:45",
    "minutesSlept": 424,
    "rating": 4
  },
  {
    "date": "06-27-2016",
    "sleepTime": "22:46",
    "awakeTime": "07:45",
    "minutesSlept": 539,
    "rating": 4
  },
  {
    "date": "06-26-2016",
    "sleepTime": "00:12",
    "awakeTime": "08:30",
    "minutesSlept": 499,
    "rating": 2
  },
  {
    "date": "06-25-2016",
    "sleepTime": "01:03",
    "awakeTime": "05:38",
    "minutesSlept": 275,
    "rating": 3
  },
  {
    "date": "06-24-2016",
    "sleepTime": "00:49",
    "awakeTime": "07:20",
    "minutesSlept": 391,
    "rating": 2
  },
  {
    "date": "06-23-2016",
    "sleepTime": "00:38",
    "awakeTime": "07:45",
    "minutesSlept": 428,
    "rating": 3
  },
  {
    "date": "06-22-2016",
    "sleepTime": "00:09",
    "awakeTime": "07:15",
    "minutesSlept": 426,
    "rating": 3
  },
  {
    "date": "06-21-2016",
    "sleepTime": "00:30",
    "awakeTime": "07:47",
    "minutesSlept": 437,
    "rating": 3
  },
  {
    "date": "06-20-2016",
    "sleepTime": "00:35",
    "awakeTime": "07:55",
    "minutesSlept": 440,
    "rating": 4
  },
  {
    "date": "06-19-2016",
    "sleepTime": "01:34",
    "awakeTime": "09:55",
    "minutesSlept": 501,
    "rating": 4
  },
  {
    "date": "06-18-2016",
    "sleepTime": "02:57",
    "awakeTime": "09:47",
    "minutesSlept": 410,
    "rating": 2
  },
  {
    "date": "06-17-2016",
    "sleepTime": "01:24",
    "awakeTime": "08:35",
    "minutesSlept": 431,
    "rating": 3
  },
  {
    "date": "06-16-2016",
    "sleepTime": "00:34",
    "awakeTime": "07:45",
    "minutesSlept": 431,
    "rating": ""
  },
  {
    "date": "06-15-2016",
    "sleepTime": "00:26",
    "awakeTime": "07:30",
    "minutesSlept": 424,
    "rating": 3
  },
  {
    "date": "06-14-2016",
    "sleepTime": "23:25",
    "awakeTime": "07:45",
    "minutesSlept": 501,
    "rating": 3
  },
  {
    "date": "06-13-2016",
    "sleepTime": "00:02",
    "awakeTime": "07:50",
    "minutesSlept": 469,
    "rating": ""
  },
  {
    "date": "06-12-2016",
    "sleepTime": "02:19",
    "awakeTime": "08:16",
    "minutesSlept": 357,
    "rating": 2
  },
  {
    "date": "06-11-2016",
    "sleepTime": "03:16",
    "awakeTime": "09:01",
    "minutesSlept": 346,
    "rating": 1
  },
  {
    "date": "06-10-2016",
    "sleepTime": "00:52",
    "awakeTime": "07:30",
    "minutesSlept": 399,
    "rating": 4
  },
  {
    "date": "06-09-2016",
    "sleepTime": "00:57",
    "awakeTime": "07:46",
    "minutesSlept": 409,
    "rating": 3
  },
  {
    "date": "06-08-2016",
    "sleepTime": "00:00",
    "awakeTime": "07:30",
    "minutesSlept": 451,
    "rating": 3
  },
  {
    "date": "06-07-2016",
    "sleepTime": "23:04",
    "awakeTime": "07:00",
    "minutesSlept": 477,
    "rating": 3
  },
  {
    "date": "06-06-2016",
    "sleepTime": "23:26",
    "awakeTime": "07:21",
    "minutesSlept": 476,
    "rating": 3
  },
  {
    "date": "06-05-2016",
    "sleepTime": "01:16",
    "awakeTime": "10:13",
    "minutesSlept": 538,
    "rating": 4
  },
  {
    "date": "06-04-2016",
    "sleepTime": "00:57",
    "awakeTime": "09:30",
    "minutesSlept": 513,
    "rating": 3
  },
  {
    "date": "06-02-2016",
    "sleepTime": "01:04",
    "awakeTime": "07:45",
    "minutesSlept": 401,
    "rating": 2
  },
  {
    "date": "06-01-2016",
    "sleepTime": "01:57",
    "awakeTime": "08:00",
    "minutesSlept": 364,
    "rating": 3
  },
  {
    "date": "05-31-2016",
    "sleepTime": "00:47",
    "awakeTime": "07:51",
    "minutesSlept": 424,
    "rating": 3
  },
  {
    "date": "05-30-2016",
    "sleepTime": "00:15",
    "awakeTime": "07:45",
    "minutesSlept": 450,
    "rating": 3
  },
  {
    "date": "05-29-2016",
    "sleepTime": "01:23",
    "awakeTime": "08:01",
    "minutesSlept": 398,
    "rating": 2
  },
  {
    "date": "05-28-2016",
    "sleepTime": "01:16",
    "awakeTime": "08:49",
    "minutesSlept": 453,
    "rating": 3
  },
  {
    "date": "05-26-2016",
    "sleepTime": "01:55",
    "awakeTime": "07:45",
    "minutesSlept": 350,
    "rating": 3
  },
  {
    "date": "05-25-2016",
    "sleepTime": "00:58",
    "awakeTime": "07:50",
    "minutesSlept": 412,
    "rating": 2
  },
  {
    "date": "05-24-2016",
    "sleepTime": "00:04",
    "awakeTime": "07:50",
    "minutesSlept": 466,
    "rating": 3
  },
  {
    "date": "05-23-2016",
    "sleepTime": "01:12",
    "awakeTime": "08:48",
    "minutesSlept": 456,
    "rating": 3
  },
  {
    "date": "05-22-2016",
    "sleepTime": "01:35",
    "awakeTime": "08:45",
    "minutesSlept": 430,
    "rating": 3
  },
  {
    "date": "05-21-2016",
    "sleepTime": "00:33",
    "awakeTime": "09:30",
    "minutesSlept": 538,
    "rating": 3
  },
  {
    "date": "05-20-2016",
    "sleepTime": "00:38",
    "awakeTime": "07:35",
    "minutesSlept": 417,
    "rating": 2
  },
  {
    "date": "05-19-2016",
    "sleepTime": "01:56",
    "awakeTime": "08:15",
    "minutesSlept": 380,
    "rating": 2
  },
  {
    "date": "05-18-2016",
    "sleepTime": "01:10",
    "awakeTime": "08:10",
    "minutesSlept": 421,
    "rating": 3
  },
  {
    "date": "05-17-2016",
    "sleepTime": "01:01",
    "awakeTime": "07:45",
    "minutesSlept": 404,
    "rating": 3
  },
  {
    "date": "05-16-2016",
    "sleepTime": "01:02",
    "awakeTime": "07:45",
    "minutesSlept": 403,
    "rating": 3
  },
  {
    "date": "05-15-2016",
    "sleepTime": "01:05",
    "awakeTime": "09:24",
    "minutesSlept": 499,
    "rating": 4
  },
  {
    "date": "05-14-2016",
    "sleepTime": "01:00",
    "awakeTime": "08:17",
    "minutesSlept": 437,
    "rating": 3
  },
  {
    "date": "05-13-2016",
    "sleepTime": "01:33",
    "awakeTime": "08:23",
    "minutesSlept": 411,
    "rating": 3
  },
  {
    "date": "05-12-2016",
    "sleepTime": "01:13",
    "awakeTime": "08:17",
    "minutesSlept": 424,
    "rating": 3
  },
  {
    "date": "05-11-2016",
    "sleepTime": "00:51",
    "awakeTime": "07:30",
    "minutesSlept": 400,
    "rating": ""
  },
  {
    "date": "05-10-2016",
    "sleepTime": "02:39",
    "awakeTime": "08:26",
    "minutesSlept": 348,
    "rating": 1
  },
  {
    "date": "05-09-2016",
    "sleepTime": "23:57",
    "awakeTime": "07:45",
    "minutesSlept": 468,
    "rating": ""
  },
  {
    "date": "05-08-2016",
    "sleepTime": "01:04",
    "awakeTime": "09:08",
    "minutesSlept": 484,
    "rating": 4
  },
  {
    "date": "05-07-2016",
    "sleepTime": "02:30",
    "awakeTime": "08:30",
    "minutesSlept": 360,
    "rating": ""
  },
  {
    "date": "05-06-2016",
    "sleepTime": "00:45",
    "awakeTime": "08:13",
    "minutesSlept": 449,
    "rating": 4
  },
  {
    "date": "05-05-2016",
    "sleepTime": "00:15",
    "awakeTime": "07:45",
    "minutesSlept": 451,
    "rating": 4
  },
  {
    "date": "05-04-2016",
    "sleepTime": "23:43",
    "awakeTime": "07:45",
    "minutesSlept": 483,
    "rating": ""
  },
  {
    "date": "05-03-2016",
    "sleepTime": "01:19",
    "awakeTime": "07:45",
    "minutesSlept": 386,
    "rating": 3
  },
  {
    "date": "05-02-2016",
    "sleepTime": "00:39",
    "awakeTime": "07:50",
    "minutesSlept": 431,
    "rating": ""
  },
  {
    "date": "05-01-2016",
    "sleepTime": "23:51",
    "awakeTime": "07:40",
    "minutesSlept": 470,
    "rating": ""
  },
  {
    "date": "04-30-2016",
    "sleepTime": "23:35",
    "awakeTime": "07:48",
    "minutesSlept": 493,
    "rating": 4
  },
  {
    "date": "04-29-2016",
    "sleepTime": "01:07",
    "awakeTime": "07:45",
    "minutesSlept": 398,
    "rating": 2
  },
  {
    "date": "04-28-2016",
    "sleepTime": "00:47",
    "awakeTime": "07:45",
    "minutesSlept": 419,
    "rating": 2
  },
  {
    "date": "04-27-2016",
    "sleepTime": "01:02",
    "awakeTime": "07:45",
    "minutesSlept": 403,
    "rating": 3
  },
  {
    "date": "04-26-2016",
    "sleepTime": "00:09",
    "awakeTime": "07:45",
    "minutesSlept": 456,
    "rating": 3
  },
  {
    "date": "04-24-2016",
    "sleepTime": "00:19",
    "awakeTime": "08:15",
    "minutesSlept": 476,
    "rating": ""
  },
  {
    "date": "04-23-2016",
    "sleepTime": "01:35",
    "awakeTime": "09:29",
    "minutesSlept": 474,
    "rating": 3
  },
  {
    "date": "04-22-2016",
    "sleepTime": "02:37",
    "awakeTime": "08:36",
    "minutesSlept": 360,
    "rating": ""
  },
  {
    "date": "04-21-2016",
    "sleepTime": "01:08",
    "awakeTime": "07:50",
    "minutesSlept": 402,
    "rating": 2
  },
  {
    "date": "04-19-2016",
    "sleepTime": "00:40",
    "awakeTime": "07:34",
    "minutesSlept": 414,
    "rating": ""
  },
  {
    "date": "04-18-2016",
    "sleepTime": "23:45",
    "awakeTime": "07:46",
    "minutesSlept": 482,
    "rating": 4
  },
  {
    "date": "04-17-2016",
    "sleepTime": "23:07",
    "awakeTime": "07:50",
    "minutesSlept": 524,
    "rating": 3
  },
  {
    "date": "04-16-2016",
    "sleepTime": "01:08",
    "awakeTime": "07:00",
    "minutesSlept": 352,
    "rating": ""
  },
  {
    "date": "04-15-2016",
    "sleepTime": "01:48",
    "awakeTime": "08:24",
    "minutesSlept": 396,
    "rating": 3
  },
  {
    "date": "04-14-2016",
    "sleepTime": "01:07",
    "awakeTime": "08:09",
    "minutesSlept": 422,
    "rating": 3
  },
  {
    "date": "04-13-2016",
    "sleepTime": "02:41",
    "awakeTime": "09:05",
    "minutesSlept": 385,
    "rating": 2
  },
  {
    "date": "04-12-2016",
    "sleepTime": "00:43",
    "awakeTime": "07:47",
    "minutesSlept": 424,
    "rating": 3
  },
  {
    "date": "04-11-2016",
    "sleepTime": "01:42",
    "awakeTime": "07:45",
    "minutesSlept": 363,
    "rating": 2
  },
  {
    "date": "04-10-2016",
    "sleepTime": "01:09",
    "awakeTime": "08:01",
    "minutesSlept": 413,
    "rating": 2
  },
  {
    "date": "04-09-2016",
    "sleepTime": "02:14",
    "awakeTime": "09:34",
    "minutesSlept": 440,
    "rating": 4
  },
  {
    "date": "04-08-2016",
    "sleepTime": "02:04",
    "awakeTime": "08:17",
    "minutesSlept": 373,
    "rating": 3
  },
  {
    "date": "04-07-2016",
    "sleepTime": "01:00",
    "awakeTime": "08:00",
    "minutesSlept": 420,
    "rating": ""
  },
  {
    "date": "04-06-2016",
    "sleepTime": "01:24",
    "awakeTime": "08:34",
    "minutesSlept": 431,
    "rating": 3
  },
  {
    "date": "04-05-2016",
    "sleepTime": "00:24",
    "awakeTime": "08:00",
    "minutesSlept": 456,
    "rating": 4
  },
  {
    "date": "04-04-2016",
    "sleepTime": "23:02",
    "awakeTime": "07:35",
    "minutesSlept": 514,
    "rating": ""
  },
  {
    "date": "04-03-2016",
    "sleepTime": "23:09",
    "awakeTime": "08:00",
    "minutesSlept": 531,
    "rating": 3
  },
  {
    "date": "04-02-2016",
    "sleepTime": "00:26",
    "awakeTime": "07:00",
    "minutesSlept": 395,
    "rating": 3
  },
  {
    "date": "04-01-2016",
    "sleepTime": "00:54",
    "awakeTime": "07:50",
    "minutesSlept": 417,
    "rating": ""
  },
  {
    "date": "03-31-2016",
    "sleepTime": "01:01",
    "awakeTime": "07:45",
    "minutesSlept": 404,
    "rating": ""
  },
  {
    "date": "03-30-2016",
    "sleepTime": "00:57",
    "awakeTime": "07:45",
    "minutesSlept": 408,
    "rating": 3
  },
  {
    "date": "03-29-2016",
    "sleepTime": "23:55",
    "awakeTime": "07:50",
    "minutesSlept": 475,
    "rating": 4
  },
  {
    "date": "03-28-2016",
    "sleepTime": "23:38",
    "awakeTime": "07:55",
    "minutesSlept": 498,
    "rating": 3
  },
  {
    "date": "03-27-2016",
    "sleepTime": "23:24",
    "awakeTime": "07:53",
    "minutesSlept": 509,
    "rating": 4
  },
  {
    "date": "03-26-2016",
    "sleepTime": "00:00",
    "awakeTime": "08:15",
    "minutesSlept": 495,
    "rating": 4
  },
  {
    "date": "03-25-2016",
    "sleepTime": "00:23",
    "awakeTime": "08:30",
    "minutesSlept": 487,
    "rating": 3
  },
  {
    "date": "03-24-2016",
    "sleepTime": "00:33",
    "awakeTime": "07:50",
    "minutesSlept": 437,
    "rating": ""
  },
  {
    "date": "03-23-2016",
    "sleepTime": "01:10",
    "awakeTime": "07:55",
    "minutesSlept": 406,
    "rating": 4
  },
  {
    "date": "03-22-2016",
    "sleepTime": "00:43",
    "awakeTime": "07:55",
    "minutesSlept": 432,
    "rating": 3
  },
  {
    "date": "03-21-2016",
    "sleepTime": "23:48",
    "awakeTime": "07:55",
    "minutesSlept": 487,
    "rating": 4
  },
  {
    "date": "03-20-2016",
    "sleepTime": "03:00",
    "awakeTime": "09:00",
    "minutesSlept": 360,
    "rating": ""
  },
  {
    "date": "03-19-2016",
    "sleepTime": "05:03",
    "awakeTime": "09:15",
    "minutesSlept": 252,
    "rating": 1
  },
  {
    "date": "03-18-2016",
    "sleepTime": "00:59",
    "awakeTime": "07:50",
    "minutesSlept": 412,
    "rating": ""
  },
  {
    "date": "03-17-2016",
    "sleepTime": "00:48",
    "awakeTime": "07:50",
    "minutesSlept": 422,
    "rating": 3
  },
  {
    "date": "03-16-2016",
    "sleepTime": "00:26",
    "awakeTime": "07:45",
    "minutesSlept": 440,
    "rating": 4
  },
  {
    "date": "03-15-2016",
    "sleepTime": "01:29",
    "awakeTime": "07:55",
    "minutesSlept": 386,
    "rating": 3
  },
  {
    "date": "03-14-2016",
    "sleepTime": "23:54",
    "awakeTime": "07:55",
    "minutesSlept": 481,
    "rating": 1
  },
  {
    "date": "03-13-2016",
    "sleepTime": "01:33",
    "awakeTime": "09:00",
    "minutesSlept": 388,
    "rating": 3
  },
  {
    "date": "03-12-2016",
    "sleepTime": "00:28",
    "awakeTime": "08:32",
    "minutesSlept": 485,
    "rating": ""
  },
  {
    "date": "03-11-2016",
    "sleepTime": "23:59",
    "awakeTime": "08:00",
    "minutesSlept": 481,
    "rating": ""
  },
  {
    "date": "03-10-2016",
    "sleepTime": "00:40",
    "awakeTime": "07:50",
    "minutesSlept": 430,
    "rating": 3
  },
  {
    "date": "03-09-2016",
    "sleepTime": "00:52",
    "awakeTime": "07:50",
    "minutesSlept": 418,
    "rating": 3
  },
  {
    "date": "03-08-2016",
    "sleepTime": "00:26",
    "awakeTime": "07:50",
    "minutesSlept": 445,
    "rating": 3
  },
  {
    "date": "03-07-2016",
    "sleepTime": "23:48",
    "awakeTime": "08:30",
    "minutesSlept": 523,
    "rating": ""
  },
  {
    "date": "03-06-2016",
    "sleepTime": "02:34",
    "awakeTime": "08:35",
    "minutesSlept": 362,
    "rating": ""
  },
  {
    "date": "03-05-2016",
    "sleepTime": "01:39",
    "awakeTime": "10:04",
    "minutesSlept": 505,
    "rating": 4
  },
  {
    "date": "03-04-2016",
    "sleepTime": "01:18",
    "awakeTime": "08:00",
    "minutesSlept": 403,
    "rating": ""
  },
  {
    "date": "03-03-2016",
    "sleepTime": "01:19",
    "awakeTime": "07:55",
    "minutesSlept": 396,
    "rating": 3
  },
  {
    "date": "03-02-2016",
    "sleepTime": "23:46",
    "awakeTime": "07:35",
    "minutesSlept": 469,
    "rating": 3
  },
  {
    "date": "03-01-2016",
    "sleepTime": "00:21",
    "awakeTime": "08:15",
    "minutesSlept": 474,
    "rating": ""
  },
  {
    "date": "02-29-2016",
    "sleepTime": "00:58",
    "awakeTime": "07:50",
    "minutesSlept": 412,
    "rating": 3
  },
  {
    "date": "02-28-2016",
    "sleepTime": "01:01",
    "awakeTime": "08:15",
    "minutesSlept": 434,
    "rating": 3
  },
  {
    "date": "02-27-2016",
    "sleepTime": "02:52",
    "awakeTime": "08:24",
    "minutesSlept": 332,
    "rating": 2
  },
  {
    "date": "02-26-2016",
    "sleepTime": "23:45",
    "awakeTime": "07:34",
    "minutesSlept": 469,
    "rating": 3
  },
  {
    "date": "02-25-2016",
    "sleepTime": "00:28",
    "awakeTime": "07:45",
    "minutesSlept": 437,
    "rating": 3
  },
  {
    "date": "02-24-2016",
    "sleepTime": "00:28",
    "awakeTime": "07:45",
    "minutesSlept": 437,
    "rating": ""
  },
  {
    "date": "02-23-2016",
    "sleepTime": "00:22",
    "awakeTime": "07:55",
    "minutesSlept": 453,
    "rating": 3
  },
  {
    "date": "02-22-2016",
    "sleepTime": "23:55",
    "awakeTime": "07:50",
    "minutesSlept": 475,
    "rating": 3
  },
  {
    "date": "02-21-2016",
    "sleepTime": "02:19",
    "awakeTime": "08:00",
    "minutesSlept": 341,
    "rating": 3
  },
  {
    "date": "02-20-2016",
    "sleepTime": "00:55",
    "awakeTime": "08:30",
    "minutesSlept": 456,
    "rating": ""
  },
  {
    "date": "02-19-2016",
    "sleepTime": "00:31",
    "awakeTime": "07:55",
    "minutesSlept": 444,
    "rating": 3
  },
  {
    "date": "02-18-2016",
    "sleepTime": "00:54",
    "awakeTime": "08:00",
    "minutesSlept": 426,
    "rating": 3
  },
  {
    "date": "02-17-2016",
    "sleepTime": "00:35",
    "awakeTime": "08:04",
    "minutesSlept": 450,
    "rating": 3
  },
  {
    "date": "02-16-2016",
    "sleepTime": "00:11",
    "awakeTime": "08:23",
    "minutesSlept": 493,
    "rating": 3
  },
  {
    "date": "02-15-2016",
    "sleepTime": "00:31",
    "awakeTime": "09:16",
    "minutesSlept": 526,
    "rating": 4
  },
  {
    "date": "02-14-2016",
    "sleepTime": "00:56",
    "awakeTime": "08:03",
    "minutesSlept": 427,
    "rating": 3
  },
  {
    "date": "02-13-2016",
    "sleepTime": "23:26",
    "awakeTime": "08:15",
    "minutesSlept": 529,
    "rating": 4
  },
  {
    "date": "02-12-2016",
    "sleepTime": "01:18",
    "awakeTime": "07:45",
    "minutesSlept": 388,
    "rating": 3
  },
  {
    "date": "02-11-2016",
    "sleepTime": "23:51",
    "awakeTime": "07:43",
    "minutesSlept": 472,
    "rating": 4
  },
  {
    "date": "02-10-2016",
    "sleepTime": "00:26",
    "awakeTime": "07:45",
    "minutesSlept": 439,
    "rating": 3
  },
  {
    "date": "02-09-2016",
    "sleepTime": "23:52",
    "awakeTime": "08:00",
    "minutesSlept": 488,
    "rating": 4
  },
  {
    "date": "02-08-2016",
    "sleepTime": "00:19",
    "awakeTime": "08:05",
    "minutesSlept": 466,
    "rating": 1
  },
  {
    "date": "02-07-2016",
    "sleepTime": "01:24",
    "awakeTime": "09:00",
    "minutesSlept": 456,
    "rating": 3
  },
  {
    "date": "02-06-2016",
    "sleepTime": "01:35",
    "awakeTime": "08:43",
    "minutesSlept": 428,
    "rating": 4
  },
  {
    "date": "02-05-2016",
    "sleepTime": "00:21",
    "awakeTime": "08:20",
    "minutesSlept": 480,
    "rating": 4
  },
  {
    "date": "02-04-2016",
    "sleepTime": "00:27",
    "awakeTime": "07:53",
    "minutesSlept": 446,
    "rating": 3
  },
  {
    "date": "02-03-2016",
    "sleepTime": "00:44",
    "awakeTime": "07:30",
    "minutesSlept": 407,
    "rating": 3
  },
  {
    "date": "02-02-2016",
    "sleepTime": "23:05",
    "awakeTime": "08:08",
    "minutesSlept": 543,
    "rating": 3
  },
  {
    "date": "02-01-2016",
    "sleepTime": "00:11",
    "awakeTime": "07:35",
    "minutesSlept": 444,
    "rating": ""
  },
  {
    "date": "01-31-2016",
    "sleepTime": "03:22",
    "awakeTime": "11:00",
    "minutesSlept": 458,
    "rating": 3
  },
  {
    "date": "01-30-2016",
    "sleepTime": "23:57",
    "awakeTime": "08:17",
    "minutesSlept": 500,
    "rating": 3
  },
  {
    "date": "01-29-2016",
    "sleepTime": "23:44",
    "awakeTime": "07:39",
    "minutesSlept": 475,
    "rating": 3
  },
  {
    "date": "01-28-2016",
    "sleepTime": "00:39",
    "awakeTime": "07:55",
    "minutesSlept": 436,
    "rating": 4
  },
  {
    "date": "01-27-2016",
    "sleepTime": "23:41",
    "awakeTime": "07:45",
    "minutesSlept": 484,
    "rating": 2
  },
  {
    "date": "01-26-2016",
    "sleepTime": "00:21",
    "awakeTime": "07:45",
    "minutesSlept": 444,
    "rating": 3
  },
  {
    "date": "01-25-2016",
    "sleepTime": "01:37",
    "awakeTime": "08:15",
    "minutesSlept": 399,
    "rating": 3
  },
  {
    "date": "01-24-2016",
    "sleepTime": "01:35",
    "awakeTime": "09:00",
    "minutesSlept": 446,
    "rating": ""
  },
  {
    "date": "01-23-2016",
    "sleepTime": "00:28",
    "awakeTime": "08:00",
    "minutesSlept": 452,
    "rating": ""
  },
  {
    "date": "01-22-2016",
    "sleepTime": "00:58",
    "awakeTime": "08:41",
    "minutesSlept": 463,
    "rating": 3
  },
  {
    "date": "01-21-2016",
    "sleepTime": "00:33",
    "awakeTime": "08:00",
    "minutesSlept": 447,
    "rating": 3
  },
  {
    "date": "01-20-2016",
    "sleepTime": "00:44",
    "awakeTime": "08:30",
    "minutesSlept": 466,
    "rating": 3
  },
  {
    "date": "01-19-2016",
    "sleepTime": "00:43",
    "awakeTime": "09:00",
    "minutesSlept": 497,
    "rating": 4
  },
  {
    "date": "01-18-2016",
    "sleepTime": "01:27",
    "awakeTime": "08:10",
    "minutesSlept": 403,
    "rating": 3
  },
  {
    "date": "01-17-2016",
    "sleepTime": "03:35",
    "awakeTime": "08:30",
    "minutesSlept": 296,
    "rating": 2
  },
  {
    "date": "01-16-2016",
    "sleepTime": "01:28",
    "awakeTime": "08:30",
    "minutesSlept": 422,
    "rating": ""
  },
  {
    "date": "01-15-2016",
    "sleepTime": "00:26",
    "awakeTime": "08:30",
    "minutesSlept": 485,
    "rating": 4
  },
  {
    "date": "01-14-2016",
    "sleepTime": "23:51",
    "awakeTime": "08:00",
    "minutesSlept": 489,
    "rating": 4
  },
  {
    "date": "01-13-2016",
    "sleepTime": "00:32",
    "awakeTime": "08:30",
    "minutesSlept": 479,
    "rating": ""
  },
  {
    "date": "01-12-2016",
    "sleepTime": "00:10",
    "awakeTime": "08:15",
    "minutesSlept": 485,
    "rating": 2
  },
  {
    "date": "01-11-2016",
    "sleepTime": "00:07",
    "awakeTime": "08:30",
    "minutesSlept": 503,
    "rating": 3
  },
  {
    "date": "01-10-2016",
    "sleepTime": "01:04",
    "awakeTime": "09:00",
    "minutesSlept": 476,
    "rating": ""
  },
  {
    "date": "01-09-2016",
    "sleepTime": "01:54",
    "awakeTime": "09:10",
    "minutesSlept": 436,
    "rating": 4
  },
  {
    "date": "01-08-2016",
    "sleepTime": "00:07",
    "awakeTime": "08:15",
    "minutesSlept": 489,
    "rating": 3
  },
  {
    "date": "01-07-2016",
    "sleepTime": "01:14",
    "awakeTime": "09:00",
    "minutesSlept": 466,
    "rating": 4
  },
  {
    "date": "01-06-2016",
    "sleepTime": "00:14",
    "awakeTime": "08:00",
    "minutesSlept": 467,
    "rating": 3
  },
  {
    "date": "01-05-2016",
    "sleepTime": "23:50",
    "awakeTime": "08:00",
    "minutesSlept": 490,
    "rating": 4
  },
  {
    "date": "01-04-2016",
    "sleepTime": "00:02",
    "awakeTime": "08:00",
    "minutesSlept": 478,
    "rating": 3
  },
  {
    "date": "01-03-2016",
    "sleepTime": "01:17",
    "awakeTime": "08:10",
    "minutesSlept": 414,
    "rating": 1
  },
  {
    "date": "01-02-2016",
    "sleepTime": "00:28",
    "awakeTime": "09:00",
    "minutesSlept": 512,
    "rating": ""
  },
  {
    "date": "01-01-2016",
    "sleepTime": "04:13",
    "awakeTime": "11:05",
    "minutesSlept": 413,
    "rating": 3
  },
  {
    "date": "12-31-2015",
    "sleepTime": "23:47",
    "awakeTime": "08:00",
    "minutesSlept": 493,
    "rating": 3
  },
  {
    "date": "12-30-2015",
    "sleepTime": "23:29",
    "awakeTime": "08:00",
    "minutesSlept": 511,
    "rating": ""
  },
  {
    "date": "12-29-2015",
    "sleepTime": "00:00",
    "awakeTime": "08:00",
    "minutesSlept": 481,
    "rating": 3
  },
  {
    "date": "12-28-2015",
    "sleepTime": "00:52",
    "awakeTime": "08:42",
    "minutesSlept": 471,
    "rating": 3
  },
  {
    "date": "12-27-2015",
    "sleepTime": "00:41",
    "awakeTime": "08:25",
    "minutesSlept": 465,
    "rating": 3
  },
  {
    "date": "12-26-2015",
    "sleepTime": "23:32",
    "awakeTime": "06:30",
    "minutesSlept": 418,
    "rating": 3
  },
  {
    "date": "12-25-2015",
    "sleepTime": "00:26",
    "awakeTime": "07:30",
    "minutesSlept": 424,
    "rating": 3
  },
  {
    "date": "12-24-2015",
    "sleepTime": "00:11",
    "awakeTime": "08:51",
    "minutesSlept": 520,
    "rating": 5
  },
  {
    "date": "12-23-2015",
    "sleepTime": "22:56",
    "awakeTime": "08:00",
    "minutesSlept": 544,
    "rating": 4
  },
  {
    "date": "12-22-2015",
    "sleepTime": "00:35",
    "awakeTime": "09:00",
    "minutesSlept": 505,
    "rating": 4
  },
  {
    "date": "12-21-2015",
    "sleepTime": "23:46",
    "awakeTime": "08:00",
    "minutesSlept": 494,
    "rating": 2
  },
  {
    "date": "12-20-2015",
    "sleepTime": "02:10",
    "awakeTime": "08:00",
    "minutesSlept": 350,
    "rating": ""
  },
  {
    "date": "12-19-2015",
    "sleepTime": "01:36",
    "awakeTime": "08:00",
    "minutesSlept": 384,
    "rating": 3
  },
  {
    "date": "12-18-2015",
    "sleepTime": "00:11",
    "awakeTime": "08:10",
    "minutesSlept": 479,
    "rating": 3
  },
  {
    "date": "12-17-2015",
    "sleepTime": "00:11",
    "awakeTime": "08:00",
    "minutesSlept": 469,
    "rating": 4
  },
  {
    "date": "12-16-2015",
    "sleepTime": "00:47",
    "awakeTime": "08:00",
    "minutesSlept": 433,
    "rating": 4
  },
  {
    "date": "12-15-2015",
    "sleepTime": "23:55",
    "awakeTime": "08:00",
    "minutesSlept": 485,
    "rating": ""
  },
  {
    "date": "12-14-2015",
    "sleepTime": "00:16",
    "awakeTime": "08:00",
    "minutesSlept": 464,
    "rating": ""
  },
  {
    "date": "12-13-2015",
    "sleepTime": "01:37",
    "awakeTime": "08:57",
    "minutesSlept": 441,
    "rating": 3
  },
  {
    "date": "12-12-2015",
    "sleepTime": "01:17",
    "awakeTime": "08:19",
    "minutesSlept": 422,
    "rating": 3
  },
  {
    "date": "12-11-2015",
    "sleepTime": "00:50",
    "awakeTime": "08:00",
    "minutesSlept": 430,
    "rating": ""
  },
  {
    "date": "12-10-2015",
    "sleepTime": "00:41",
    "awakeTime": "08:10",
    "minutesSlept": 449,
    "rating": 1
  },
  {
    "date": "12-09-2015",
    "sleepTime": "22:30",
    "awakeTime": "07:00",
    "minutesSlept": 510,
    "rating": ""
  },
  {
    "date": "12-08-2015",
    "sleepTime": "00:50",
    "awakeTime": "08:00",
    "minutesSlept": 431,
    "rating": 3
  },
  {
    "date": "12-07-2015",
    "sleepTime": "00:07",
    "awakeTime": "08:00",
    "minutesSlept": 473,
    "rating": 3
  },
  {
    "date": "12-06-2015",
    "sleepTime": "02:20",
    "awakeTime": "08:45",
    "minutesSlept": 385,
    "rating": 3
  },
  {
    "date": "12-05-2015",
    "sleepTime": "02:45",
    "awakeTime": "09:29",
    "minutesSlept": 404,
    "rating": 4
  },
  {
    "date": "12-04-2015",
    "sleepTime": "01:00",
    "awakeTime": "08:00",
    "minutesSlept": 421,
    "rating": 3
  },
  {
    "date": "12-03-2015",
    "sleepTime": "00:00",
    "awakeTime": "08:00",
    "minutesSlept": 480,
    "rating": 3
  },
  {
    "date": "12-02-2015",
    "sleepTime": "01:02",
    "awakeTime": "08:00",
    "minutesSlept": 418,
    "rating": 3
  },
  {
    "date": "12-01-2015",
    "sleepTime": "01:29",
    "awakeTime": "08:30",
    "minutesSlept": 421,
    "rating": 4
  },
  {
    "date": "11-30-2015",
    "sleepTime": "00:16",
    "awakeTime": "08:00",
    "minutesSlept": 464,
    "rating": 3
  },
  {
    "date": "11-29-2015",
    "sleepTime": "02:04",
    "awakeTime": "08:30",
    "minutesSlept": 387,
    "rating": 3
  },
  {
    "date": "11-28-2015",
    "sleepTime": "00:00",
    "awakeTime": "08:00",
    "minutesSlept": 480,
    "rating": 4
  },
  {
    "date": "11-27-2015",
    "sleepTime": "00:52",
    "awakeTime": "08:00",
    "minutesSlept": 428,
    "rating": ""
  },
  {
    "date": "11-26-2015",
    "sleepTime": "00:00",
    "awakeTime": "07:50",
    "minutesSlept": 470,
    "rating": 3
  },
  {
    "date": "11-25-2015",
    "sleepTime": "00:03",
    "awakeTime": "08:02",
    "minutesSlept": 479,
    "rating": 2
  },
  {
    "date": "11-24-2015",
    "sleepTime": "00:02",
    "awakeTime": "08:00",
    "minutesSlept": 479,
    "rating": 2
  },
  {
    "date": "11-23-2015",
    "sleepTime": "23:44",
    "awakeTime": "07:15",
    "minutesSlept": 452,
    "rating": 2
  },
  {
    "date": "11-22-2015",
    "sleepTime": "23:36",
    "awakeTime": "07:30",
    "minutesSlept": 474,
    "rating": ""
  },
  {
    "date": "11-21-2015",
    "sleepTime": "00:46",
    "awakeTime": "08:00",
    "minutesSlept": 434,
    "rating": 3
  },
  {
    "date": "11-20-2015",
    "sleepTime": "00:57",
    "awakeTime": "08:00",
    "minutesSlept": 423,
    "rating": 2
  },
  {
    "date": "11-19-2015",
    "sleepTime": "00:56",
    "awakeTime": "07:31",
    "minutesSlept": 395,
    "rating": ""
  },
  {
    "date": "11-18-2015",
    "sleepTime": "00:15",
    "awakeTime": "07:30",
    "minutesSlept": 435,
    "rating": 3
  },
  {
    "date": "11-17-2015",
    "sleepTime": "00:32",
    "awakeTime": "08:00",
    "minutesSlept": 449,
    "rating": 4
  },
  {
    "date": "11-16-2015",
    "sleepTime": "00:32",
    "awakeTime": "07:45",
    "minutesSlept": 434,
    "rating": ""
  },
  {
    "date": "11-15-2015",
    "sleepTime": "00:30",
    "awakeTime": "08:48",
    "minutesSlept": 498,
    "rating": ""
  },
  {
    "date": "11-14-2015",
    "sleepTime": "01:17",
    "awakeTime": "08:15",
    "minutesSlept": 418,
    "rating": 5
  },
  {
    "date": "11-13-2015",
    "sleepTime": "00:33",
    "awakeTime": "07:45",
    "minutesSlept": 433,
    "rating": 4
  },
  {
    "date": "11-12-2015",
    "sleepTime": "00:27",
    "awakeTime": "08:00",
    "minutesSlept": 453,
    "rating": 4
  },
  {
    "date": "11-11-2015",
    "sleepTime": "00:10",
    "awakeTime": "07:56",
    "minutesSlept": 467,
    "rating": 3
  },
  {
    "date": "11-10-2015",
    "sleepTime": "00:37",
    "awakeTime": "08:00",
    "minutesSlept": 443,
    "rating": 3
  },
  {
    "date": "11-09-2015",
    "sleepTime": "00:00",
    "awakeTime": "07:30",
    "minutesSlept": 450,
    "rating": 3
  },
  {
    "date": "11-08-2015",
    "sleepTime": "00:44",
    "awakeTime": "08:45",
    "minutesSlept": 481,
    "rating": 3
  },
  {
    "date": "11-07-2015",
    "sleepTime": "00:29",
    "awakeTime": "08:19",
    "minutesSlept": 470,
    "rating": 4
  },
  {
    "date": "11-06-2015",
    "sleepTime": "07:40",
    "awakeTime": "09:11",
    "minutesSlept": 91,
    "rating": ""
  },
  {
    "date": "11-06-2015",
    "sleepTime": "06:19",
    "awakeTime": "07:22",
    "minutesSlept": 64,
    "rating": ""
  },
  {
    "date": "11-06-2015",
    "sleepTime": "02:50",
    "awakeTime": "06:00",
    "minutesSlept": 190,
    "rating": ""
  },
  {
    "date": "11-06-2015",
    "sleepTime": "23:15",
    "awakeTime": "02:30",
    "minutesSlept": 195,
    "rating": ""
  },
  {
    "date": "11-05-2015",
    "sleepTime": "00:18",
    "awakeTime": "07:48",
    "minutesSlept": 451,
    "rating": 4
  },
  {
    "date": "11-04-2015",
    "sleepTime": "23:56",
    "awakeTime": "08:00",
    "minutesSlept": 484,
    "rating": 3
  },
  {
    "date": "11-03-2015",
    "sleepTime": "23:47",
    "awakeTime": "07:00",
    "minutesSlept": 433,
    "rating": 4
  },
  {
    "date": "11-02-2015",
    "sleepTime": "23:59",
    "awakeTime": "08:00",
    "minutesSlept": 482,
    "rating": 4
  },
  {
    "date": "11-01-2015",
    "sleepTime": "01:48",
    "awakeTime": "08:00",
    "minutesSlept": 433,
    "rating": 4
  },
  {
    "date": "10-31-2015",
    "sleepTime": "01:00",
    "awakeTime": "08:00",
    "minutesSlept": 420,
    "rating": ""
  },
  {
    "date": "10-30-2015",
    "sleepTime": "00:43",
    "awakeTime": "08:00",
    "minutesSlept": 438,
    "rating": 4
  },
  {
    "date": "10-29-2015",
    "sleepTime": "23:47",
    "awakeTime": "07:35",
    "minutesSlept": 468,
    "rating": 3
  },
  {
    "date": "10-28-2015",
    "sleepTime": "01:20",
    "awakeTime": "08:16",
    "minutesSlept": 416,
    "rating": 3
  },
  {
    "date": "10-27-2015",
    "sleepTime": "00:12",
    "awakeTime": "08:00",
    "minutesSlept": 469,
    "rating": 3
  },
  {
    "date": "10-26-2015",
    "sleepTime": "00:36",
    "awakeTime": "08:00",
    "minutesSlept": 444,
    "rating": 2
  },
  {
    "date": "10-25-2015",
    "sleepTime": "02:33",
    "awakeTime": "10:04",
    "minutesSlept": 452,
    "rating": 3
  },
  {
    "date": "10-24-2015",
    "sleepTime": "23:21",
    "awakeTime": "08:00",
    "minutesSlept": 520,
    "rating": 4
  },
  {
    "date": "10-23-2015",
    "sleepTime": "00:45",
    "awakeTime": "07:30",
    "minutesSlept": 405,
    "rating": 3
  },
  {
    "date": "10-22-2015",
    "sleepTime": "23:38",
    "awakeTime": "08:05",
    "minutesSlept": 507,
    "rating": 3
  },
  {
    "date": "10-21-2015",
    "sleepTime": "00:45",
    "awakeTime": "08:32",
    "minutesSlept": 468,
    "rating": 2
  },
  {
    "date": "10-20-2015",
    "sleepTime": "02:17",
    "awakeTime": "09:04",
    "minutesSlept": 408,
    "rating": 2
  },
  {
    "date": "10-19-2015",
    "sleepTime": "00:30",
    "awakeTime": "08:00",
    "minutesSlept": 450,
    "rating": 3
  },
  {
    "date": "10-18-2015",
    "sleepTime": "00:33",
    "awakeTime": "08:14",
    "minutesSlept": 461,
    "rating": 3
  },
  {
    "date": "10-17-2015",
    "sleepTime": "00:43",
    "awakeTime": "09:30",
    "minutesSlept": 527,
    "rating": 4
  },
  {
    "date": "10-16-2015",
    "sleepTime": "00:26",
    "awakeTime": "08:10",
    "minutesSlept": 464,
    "rating": 3
  },
  {
    "date": "10-15-2015",
    "sleepTime": "23:54",
    "awakeTime": "07:00",
    "minutesSlept": 426,
    "rating": 3
  },
  {
    "date": "10-14-2015",
    "sleepTime": "00:40",
    "awakeTime": "08:10",
    "minutesSlept": 450,
    "rating": ""
  },
  {
    "date": "10-13-2015",
    "sleepTime": "00:01",
    "awakeTime": "08:00",
    "minutesSlept": 479,
    "rating": 3
  },
  {
    "date": "10-12-2015",
    "sleepTime": "00:51",
    "awakeTime": "08:10",
    "minutesSlept": 439,
    "rating": ""
  },
  {
    "date": "10-11-2015",
    "sleepTime": "00:13",
    "awakeTime": "07:42",
    "minutesSlept": 450,
    "rating": ""
  },
  {
    "date": "10-10-2015",
    "sleepTime": "23:58",
    "awakeTime": "07:00",
    "minutesSlept": 422,
    "rating": 2
  },
  {
    "date": "10-09-2015",
    "sleepTime": "00:37",
    "awakeTime": "08:00",
    "minutesSlept": 444,
    "rating": ""
  },
  {
    "date": "10-08-2015",
    "sleepTime": "00:21",
    "awakeTime": "08:00",
    "minutesSlept": 460,
    "rating": 3
  },
  {
    "date": "10-07-2015",
    "sleepTime": "00:10",
    "awakeTime": "08:10",
    "minutesSlept": 480,
    "rating": ""
  },
  {
    "date": "10-06-2015",
    "sleepTime": "00:13",
    "awakeTime": "08:00",
    "minutesSlept": 467,
    "rating": ""
  },
  {
    "date": "10-05-2015",
    "sleepTime": "00:44",
    "awakeTime": "08:00",
    "minutesSlept": 436,
    "rating": ""
  },
  {
    "date": "10-03-2015",
    "sleepTime": "23:54",
    "awakeTime": "07:25",
    "minutesSlept": 451,
    "rating": 3
  },
  {
    "date": "10-02-2015",
    "sleepTime": "00:04",
    "awakeTime": "08:00",
    "minutesSlept": 476,
    "rating": 4
  },
  {
    "date": "10-01-2015",
    "sleepTime": "23:57",
    "awakeTime": "08:00",
    "minutesSlept": 483,
    "rating": 4
  },
  {
    "date": "09-30-2015",
    "sleepTime": "23:58",
    "awakeTime": "08:00",
    "minutesSlept": 482,
    "rating": ""
  },
  {
    "date": "09-29-2015",
    "sleepTime": "00:28",
    "awakeTime": "07:28",
    "minutesSlept": 420,
    "rating": 3
  },
  {
    "date": "09-28-2015",
    "sleepTime": "23:16",
    "awakeTime": "07:28",
    "minutesSlept": 492,
    "rating": 3
  },
  {
    "date": "09-27-2015",
    "sleepTime": "23:53",
    "awakeTime": "08:00",
    "minutesSlept": 488,
    "rating": 3
  },
  {
    "date": "09-26-2015",
    "sleepTime": "00:55",
    "awakeTime": "09:00",
    "minutesSlept": 485,
    "rating": 3
  },
  {
    "date": "09-25-2015",
    "sleepTime": "23:58",
    "awakeTime": "08:10",
    "minutesSlept": 493,
    "rating": 3
  },
  {
    "date": "09-24-2015",
    "sleepTime": "23:59",
    "awakeTime": "08:00",
    "minutesSlept": 482,
    "rating": 3
  },
  {
    "date": "09-23-2015",
    "sleepTime": "00:26",
    "awakeTime": "08:56",
    "minutesSlept": 510,
    "rating": 3
  },
  {
    "date": "09-22-2015",
    "sleepTime": "00:40",
    "awakeTime": "07:37",
    "minutesSlept": 417,
    "rating": 3
  },
  {
    "date": "09-21-2015",
    "sleepTime": "00:31",
    "awakeTime": "07:21",
    "minutesSlept": 410,
    "rating": 3
  },
  {
    "date": "09-20-2015",
    "sleepTime": "01:15",
    "awakeTime": "09:00",
    "minutesSlept": 465,
    "rating": 3
  },
  {
    "date": "09-19-2015",
    "sleepTime": "02:16",
    "awakeTime": "09:30",
    "minutesSlept": 434,
    "rating": 3
  },
  {
    "date": "09-18-2015",
    "sleepTime": "02:39",
    "awakeTime": "09:30",
    "minutesSlept": 411,
    "rating": 3
  },
  {
    "date": "09-17-2015",
    "sleepTime": "23:43",
    "awakeTime": "06:15",
    "minutesSlept": 392,
    "rating": ""
  },
  {
    "date": "09-16-2015",
    "sleepTime": "00:00",
    "awakeTime": "08:00",
    "minutesSlept": 480,
    "rating": 3
  },
  {
    "date": "09-15-2015",
    "sleepTime": "23:56",
    "awakeTime": "08:00",
    "minutesSlept": 485,
    "rating": 4
  },
  {
    "date": "09-14-2015",
    "sleepTime": "00:21",
    "awakeTime": "08:00",
    "minutesSlept": 460,
    "rating": 3
  },
  {
    "date": "09-13-2015",
    "sleepTime": "01:07",
    "awakeTime": "08:30",
    "minutesSlept": 443,
    "rating": ""
  },
  {
    "date": "09-12-2015",
    "sleepTime": "21:57",
    "awakeTime": "05:00",
    "minutesSlept": 424,
    "rating": 2
  },
  {
    "date": "09-11-2015",
    "sleepTime": "00:29",
    "awakeTime": "08:00",
    "minutesSlept": 451,
    "rating": 3
  },
  {
    "date": "09-10-2015",
    "sleepTime": "23:47",
    "awakeTime": "08:00",
    "minutesSlept": 493,
    "rating": 4
  },
  {
    "date": "09-09-2015",
    "sleepTime": "23:11",
    "awakeTime": "08:00",
    "minutesSlept": 530,
    "rating": 4
  },
  {
    "date": "09-08-2015",
    "sleepTime": "22:57",
    "awakeTime": "08:00",
    "minutesSlept": 543,
    "rating": 4
  },
  {
    "date": "09-07-2015",
    "sleepTime": "00:56",
    "awakeTime": "09:00",
    "minutesSlept": 484,
    "rating": 3
  },
  {
    "date": "09-06-2015",
    "sleepTime": "01:04",
    "awakeTime": "08:20",
    "minutesSlept": 437,
    "rating": 3
  },
  {
    "date": "09-05-2015",
    "sleepTime": "00:44",
    "awakeTime": "08:30",
    "minutesSlept": 466,
    "rating": 2
  },
  {
    "date": "09-04-2015",
    "sleepTime": "23:51",
    "awakeTime": "08:00",
    "minutesSlept": 489,
    "rating": 3
  },
  {
    "date": "09-03-2015",
    "sleepTime": "23:14",
    "awakeTime": "08:00",
    "minutesSlept": 526,
    "rating": 4
  },
  {
    "date": "09-02-2015",
    "sleepTime": "23:01",
    "awakeTime": "08:00",
    "minutesSlept": 539,
    "rating": ""
  },
  {
    "date": "09-01-2015",
    "sleepTime": "23:58",
    "awakeTime": "08:15",
    "minutesSlept": 497,
    "rating": ""
  },
  {
    "date": "08-31-2015",
    "sleepTime": "00:52",
    "awakeTime": "09:00",
    "minutesSlept": 488,
    "rating": 4
  },
  {
    "date": "08-30-2015",
    "sleepTime": "00:15",
    "awakeTime": "08:00",
    "minutesSlept": 465,
    "rating": ""
  },
  {
    "date": "08-29-2015",
    "sleepTime": "01:18",
    "awakeTime": "08:30",
    "minutesSlept": 432,
    "rating": ""
  },
  {
    "date": "08-28-2015",
    "sleepTime": "00:35",
    "awakeTime": "08:30",
    "minutesSlept": 476,
    "rating": ""
  },
  {
    "date": "08-27-2015",
    "sleepTime": "00:10",
    "awakeTime": "08:00",
    "minutesSlept": 470,
    "rating": 3
  },
  {
    "date": "08-26-2015",
    "sleepTime": "00:31",
    "awakeTime": "08:00",
    "minutesSlept": 449,
    "rating": 3
  },
  {
    "date": "08-25-2015",
    "sleepTime": "00:13",
    "awakeTime": "08:00",
    "minutesSlept": 468,
    "rating": ""
  },
  {
    "date": "08-24-2015",
    "sleepTime": "00:26",
    "awakeTime": "08:00",
    "minutesSlept": 454,
    "rating": 3
  },
  {
    "date": "08-23-2015",
    "sleepTime": "00:38",
    "awakeTime": "08:00",
    "minutesSlept": 443,
    "rating": 3
  },
  {
    "date": "08-22-2015",
    "sleepTime": "01:27",
    "awakeTime": "09:31",
    "minutesSlept": 484,
    "rating": 3
  },
  {
    "date": "08-21-2015",
    "sleepTime": "00:24",
    "awakeTime": "10:25",
    "minutesSlept": 601,
    "rating": 4
  },
  {
    "date": "08-20-2015",
    "sleepTime": "00:27",
    "awakeTime": "08:02",
    "minutesSlept": 456,
    "rating": 3
  },
  {
    "date": "08-19-2015",
    "sleepTime": "00:15",
    "awakeTime": "08:00",
    "minutesSlept": 465,
    "rating": ""
  },
  {
    "date": "08-18-2015",
    "sleepTime": "01:45",
    "awakeTime": "09:15",
    "minutesSlept": 451,
    "rating": ""
  },
  {
    "date": "08-17-2015",
    "sleepTime": "01:00",
    "awakeTime": "08:00",
    "minutesSlept": 421,
    "rating": ""
  },
  {
    "date": "08-16-2015",
    "sleepTime": "01:41",
    "awakeTime": "09:30",
    "minutesSlept": 470,
    "rating": 3
  },
  {
    "date": "08-15-2015",
    "sleepTime": "03:14",
    "awakeTime": "09:43",
    "minutesSlept": 389,
    "rating": 4
  },
  {
    "date": "08-14-2015",
    "sleepTime": "00:42",
    "awakeTime": "11:00",
    "minutesSlept": 618,
    "rating": ""
  },
  {
    "date": "08-13-2015",
    "sleepTime": "08:28",
    "awakeTime": "10:33",
    "minutesSlept": 125,
    "rating": ""
  },
  {
    "date": "08-13-2015",
    "sleepTime": "01:01",
    "awakeTime": "05:54",
    "minutesSlept": 293,
    "rating": ""
  },
  {
    "date": "08-12-2015",
    "sleepTime": "02:19",
    "awakeTime": "08:00",
    "minutesSlept": 342,
    "rating": 3
  },
  {
    "date": "08-11-2015",
    "sleepTime": "01:29",
    "awakeTime": "08:30",
    "minutesSlept": 421,
    "rating": ""
  },
  {
    "date": "08-10-2015",
    "sleepTime": "02:31",
    "awakeTime": "09:15",
    "minutesSlept": 405,
    "rating": 3
  },
  {
    "date": "08-09-2015",
    "sleepTime": "00:37",
    "awakeTime": "08:00",
    "minutesSlept": 443,
    "rating": ""
  },
  {
    "date": "08-08-2015",
    "sleepTime": "02:59",
    "awakeTime": "10:00",
    "minutesSlept": 421,
    "rating": ""
  },
  {
    "date": "08-07-2015",
    "sleepTime": "00:59",
    "awakeTime": "08:00",
    "minutesSlept": 422,
    "rating": ""
  },
  {
    "date": "08-06-2015",
    "sleepTime": "00:04",
    "awakeTime": "08:00",
    "minutesSlept": 477,
    "rating": 2
  },
  {
    "date": "08-05-2015",
    "sleepTime": "00:24",
    "awakeTime": "08:00",
    "minutesSlept": 456,
    "rating": 4
  },
  {
    "date": "08-04-2015",
    "sleepTime": "00:18",
    "awakeTime": "08:15",
    "minutesSlept": 477,
    "rating": 2
  },
  {
    "date": "08-03-2015",
    "sleepTime": "01:37",
    "awakeTime": "09:00",
    "minutesSlept": 443,
    "rating": 3
  },
  {
    "date": "08-02-2015",
    "sleepTime": "01:15",
    "awakeTime": "08:30",
    "minutesSlept": 435,
    "rating": 4
  },
  {
    "date": "08-01-2015",
    "sleepTime": "00:11",
    "awakeTime": "08:30",
    "minutesSlept": 499,
    "rating": 4
  },
  {
    "date": "07-31-2015",
    "sleepTime": "01:06",
    "awakeTime": "08:30",
    "minutesSlept": 445,
    "rating": ""
  },
  {
    "date": "07-30-2015",
    "sleepTime": "00:20",
    "awakeTime": "08:00",
    "minutesSlept": 460,
    "rating": 3
  },
  {
    "date": "07-29-2015",
    "sleepTime": "00:14",
    "awakeTime": "08:25",
    "minutesSlept": 492,
    "rating": ""
  },
  {
    "date": "07-28-2015",
    "sleepTime": "00:32",
    "awakeTime": "08:15",
    "minutesSlept": 463,
    "rating": 3
  },
  {
    "date": "07-28-2015",
    "sleepTime": "00:32",
    "awakeTime": "00:32",
    "minutesSlept": 1,
    "rating": ""
  },
  {
    "date": "07-27-2015",
    "sleepTime": "23:37",
    "awakeTime": "10:00",
    "minutesSlept": 623,
    "rating": 3
  },
  {
    "date": "07-26-2015",
    "sleepTime": "03:43",
    "awakeTime": "11:00",
    "minutesSlept": 437,
    "rating": 3
  },
  {
    "date": "07-25-2015",
    "sleepTime": "01:57",
    "awakeTime": "09:00",
    "minutesSlept": 423,
    "rating": 1
  },
  {
    "date": "07-24-2015",
    "sleepTime": "00:35",
    "awakeTime": "08:00",
    "minutesSlept": 446,
    "rating": ""
  },
  {
    "date": "07-23-2015",
    "sleepTime": "02:19",
    "awakeTime": "10:10",
    "minutesSlept": 471,
    "rating": ""
  },
  {
    "date": "07-22-2015",
    "sleepTime": "01:11",
    "awakeTime": "09:15",
    "minutesSlept": 485,
    "rating": ""
  },
  {
    "date": "07-21-2015",
    "sleepTime": "00:29",
    "awakeTime": "08:20",
    "minutesSlept": 471,
    "rating": ""
  },
  {
    "date": "07-20-2015",
    "sleepTime": "01:46",
    "awakeTime": "09:10",
    "minutesSlept": 444,
    "rating": ""
  },
  {
    "date": "07-19-2015",
    "sleepTime": "01:40",
    "awakeTime": "09:00",
    "minutesSlept": 440,
    "rating": 3
  },
  {
    "date": "07-18-2015",
    "sleepTime": "00:28",
    "awakeTime": "08:00",
    "minutesSlept": 452,
    "rating": ""
  },
  {
    "date": "07-17-2015",
    "sleepTime": "23:52",
    "awakeTime": "08:20",
    "minutesSlept": 508,
    "rating": 4
  },
  {
    "date": "07-16-2015",
    "sleepTime": "00:23",
    "awakeTime": "07:45",
    "minutesSlept": 442,
    "rating": 4
  },
  {
    "date": "07-15-2015",
    "sleepTime": "00:24",
    "awakeTime": "08:09",
    "minutesSlept": 465,
    "rating": 4
  },
  {
    "date": "07-14-2015",
    "sleepTime": "01:14",
    "awakeTime": "07:30",
    "minutesSlept": 376,
    "rating": ""
  },
  {
    "date": "07-13-2015",
    "sleepTime": "02:12",
    "awakeTime": "09:00",
    "minutesSlept": 408,
    "rating": ""
  },
  {
    "date": "07-12-2015",
    "sleepTime": "02:12",
    "awakeTime": "09:00",
    "minutesSlept": 409,
    "rating": ""
  },
  {
    "date": "07-11-2015",
    "sleepTime": "00:28",
    "awakeTime": "08:00",
    "minutesSlept": 452,
    "rating": 4
  },
  {
    "date": "07-10-2015",
    "sleepTime": "00:07",
    "awakeTime": "08:30",
    "minutesSlept": 503,
    "rating": ""
  },
  {
    "date": "07-09-2015",
    "sleepTime": "01:03",
    "awakeTime": "08:11",
    "minutesSlept": 429,
    "rating": 3
  },
  {
    "date": "07-08-2015",
    "sleepTime": "00:19",
    "awakeTime": "08:05",
    "minutesSlept": 467,
    "rating": ""
  },
  {
    "date": "07-07-2015",
    "sleepTime": "01:10",
    "awakeTime": "08:15",
    "minutesSlept": 425,
    "rating": ""
  },
  {
    "date": "07-06-2015",
    "sleepTime": "01:07",
    "awakeTime": "08:33",
    "minutesSlept": 447,
    "rating": 2
  },
  {
    "date": "07-05-2015",
    "sleepTime": "00:43",
    "awakeTime": "08:10",
    "minutesSlept": 447,
    "rating": 4
  },
  {
    "date": "07-04-2015",
    "sleepTime": "02:53",
    "awakeTime": "10:48",
    "minutesSlept": 476,
    "rating": 4
  },
  {
    "date": "07-03-2015",
    "sleepTime": "01:43",
    "awakeTime": "09:10",
    "minutesSlept": 448,
    "rating": ""
  },
  {
    "date": "07-02-2015",
    "sleepTime": "00:51",
    "awakeTime": "08:25",
    "minutesSlept": 455,
    "rating": ""
  },
  {
    "date": "07-01-2015",
    "sleepTime": "01:23",
    "awakeTime": "08:25",
    "minutesSlept": 423,
    "rating": ""
  },
  {
    "date": "06-30-2015",
    "sleepTime": "01:30",
    "awakeTime": "09:30",
    "minutesSlept": 480,
    "rating": ""
  },
  {
    "date": "06-29-2015",
    "sleepTime": "01:55",
    "awakeTime": "09:00",
    "minutesSlept": 425,
    "rating": 3
  },
  {
    "date": "06-28-2015",
    "sleepTime": "01:18",
    "awakeTime": "09:16",
    "minutesSlept": 479,
    "rating": 2
  },
  {
    "date": "06-27-2015",
    "sleepTime": "01:09",
    "awakeTime": "09:45",
    "minutesSlept": 516,
    "rating": ""
  },
  {
    "date": "06-26-2015",
    "sleepTime": "02:03",
    "awakeTime": "08:45",
    "minutesSlept": 403,
    "rating": ""
  },
  {
    "date": "06-25-2015",
    "sleepTime": "00:36",
    "awakeTime": "08:20",
    "minutesSlept": 464,
    "rating": 3
  },
  {
    "date": "06-24-2015",
    "sleepTime": "01:32",
    "awakeTime": "09:55",
    "minutesSlept": 504,
    "rating": 2
  },
  {
    "date": "06-23-2015",
    "sleepTime": "01:24",
    "awakeTime": "08:40",
    "minutesSlept": 436,
    "rating": ""
  },
  {
    "date": "06-22-2015",
    "sleepTime": "01:38",
    "awakeTime": "08:52",
    "minutesSlept": 435,
    "rating": ""
  },
  {
    "date": "06-21-2015",
    "sleepTime": "03:54",
    "awakeTime": "10:17",
    "minutesSlept": 384,
    "rating": 3
  },
  {
    "date": "06-20-2015",
    "sleepTime": "00:35",
    "awakeTime": "07:50",
    "minutesSlept": 435,
    "rating": ""
  },
  {
    "date": "06-19-2015",
    "sleepTime": "01:39",
    "awakeTime": "08:00",
    "minutesSlept": 381,
    "rating": 2
  },
  {
    "date": "06-18-2015",
    "sleepTime": "00:35",
    "awakeTime": "08:45",
    "minutesSlept": 490,
    "rating": 3
  },
  {
    "date": "06-17-2015",
    "sleepTime": "00:48",
    "awakeTime": "08:35",
    "minutesSlept": 468,
    "rating": 3
  },
  {
    "date": "06-16-2015",
    "sleepTime": "01:48",
    "awakeTime": "09:00",
    "minutesSlept": 432,
    "rating": ""
  },
  {
    "date": "06-15-2015",
    "sleepTime": "00:28",
    "awakeTime": "08:10",
    "minutesSlept": 462,
    "rating": 3
  },
  {
    "date": "06-14-2015",
    "sleepTime": "02:55",
    "awakeTime": "08:30",
    "minutesSlept": 335,
    "rating": 3
  },
  {
    "date": "06-13-2015",
    "sleepTime": "01:37",
    "awakeTime": "08:30",
    "minutesSlept": 413,
    "rating": 3
  },
  {
    "date": "06-12-2015",
    "sleepTime": "00:25",
    "awakeTime": "08:00",
    "minutesSlept": 455,
    "rating": 3
  },
  {
    "date": "06-11-2015",
    "sleepTime": "01:10",
    "awakeTime": "09:15",
    "minutesSlept": 485,
    "rating": 4
  },
  {
    "date": "06-10-2015",
    "sleepTime": "01:16",
    "awakeTime": "08:15",
    "minutesSlept": 419,
    "rating": ""
  },
  {
    "date": "06-09-2015",
    "sleepTime": "01:12",
    "awakeTime": "09:20",
    "minutesSlept": 488,
    "rating": ""
  },
  {
    "date": "06-08-2015",
    "sleepTime": "00:46",
    "awakeTime": "08:30",
    "minutesSlept": 464,
    "rating": ""
  },
  {
    "date": "06-07-2015",
    "sleepTime": "01:45",
    "awakeTime": "09:21",
    "minutesSlept": 457,
    "rating": 3
  },
  {
    "date": "06-06-2015",
    "sleepTime": "01:27",
    "awakeTime": "09:45",
    "minutesSlept": 499,
    "rating": 2
  },
  {
    "date": "06-05-2015",
    "sleepTime": "01:56",
    "awakeTime": "09:56",
    "minutesSlept": 481,
    "rating": 3
  },
  {
    "date": "06-04-2015",
    "sleepTime": "00:49",
    "awakeTime": "07:15",
    "minutesSlept": 387,
    "rating": ""
  },
  {
    "date": "06-03-2015",
    "sleepTime": "02:07",
    "awakeTime": "08:10",
    "minutesSlept": 363,
    "rating": 3
  },
  {
    "date": "06-02-2015",
    "sleepTime": "03:48",
    "awakeTime": "10:35",
    "minutesSlept": 408,
    "rating": ""
  },
  {
    "date": "06-01-2015",
    "sleepTime": "01:36",
    "awakeTime": "08:20",
    "minutesSlept": 404,
    "rating": 3
  },
  {
    "date": "05-31-2015",
    "sleepTime": "01:41",
    "awakeTime": "07:40",
    "minutesSlept": 359,
    "rating": ""
  },
  {
    "date": "05-30-2015",
    "sleepTime": "01:29",
    "awakeTime": "08:21",
    "minutesSlept": 413,
    "rating": 2
  },
  {
    "date": "05-29-2015",
    "sleepTime": "00:59",
    "awakeTime": "08:00",
    "minutesSlept": 421,
    "rating": ""
  },
  {
    "date": "05-28-2015",
    "sleepTime": "01:42",
    "awakeTime": "08:30",
    "minutesSlept": 409,
    "rating": 3
  },
  {
    "date": "05-27-2015",
    "sleepTime": "00:59",
    "awakeTime": "08:19",
    "minutesSlept": 441,
    "rating": ""
  },
  {
    "date": "05-26-2015",
    "sleepTime": "00:34",
    "awakeTime": "08:40",
    "minutesSlept": 486,
    "rating": 2
  },
  {
    "date": "05-25-2015",
    "sleepTime": "01:40",
    "awakeTime": "08:30",
    "minutesSlept": 411,
    "rating": 2
  },
  {
    "date": "05-24-2015",
    "sleepTime": "01:29",
    "awakeTime": "09:35",
    "minutesSlept": 486,
    "rating": 3
  },
  {
    "date": "05-23-2015",
    "sleepTime": "01:16",
    "awakeTime": "09:42",
    "minutesSlept": 506,
    "rating": 3
  },
  {
    "date": "05-22-2015",
    "sleepTime": "03:48",
    "awakeTime": "10:01",
    "minutesSlept": 374,
    "rating": 3
  },
  {
    "date": "05-20-2015",
    "sleepTime": "01:32",
    "awakeTime": "09:05",
    "minutesSlept": 453,
    "rating": 3
  },
  {
    "date": "05-19-2015",
    "sleepTime": "00:48",
    "awakeTime": "09:10",
    "minutesSlept": 502,
    "rating": 3
  },
  {
    "date": "05-18-2015",
    "sleepTime": "01:38",
    "awakeTime": "09:25",
    "minutesSlept": 468,
    "rating": 3
  },
  {
    "date": "05-17-2015",
    "sleepTime": "01:14",
    "awakeTime": "08:27",
    "minutesSlept": 433,
    "rating": 3
  },
  {
    "date": "05-16-2015",
    "sleepTime": "02:01",
    "awakeTime": "08:00",
    "minutesSlept": 359,
    "rating": 2
  },
  {
    "date": "05-15-2015",
    "sleepTime": "01:10",
    "awakeTime": "09:09",
    "minutesSlept": 479,
    "rating": 3
  },
  {
    "date": "05-14-2015",
    "sleepTime": "02:20",
    "awakeTime": "09:40",
    "minutesSlept": 440,
    "rating": 3
  },
  {
    "date": "05-13-2015",
    "sleepTime": "00:34",
    "awakeTime": "07:55",
    "minutesSlept": 441,
    "rating": 2
  },
  {
    "date": "05-12-2015",
    "sleepTime": "00:39",
    "awakeTime": "07:10",
    "minutesSlept": 391,
    "rating": 3
  },
  {
    "date": "05-11-2015",
    "sleepTime": "00:26",
    "awakeTime": "07:50",
    "minutesSlept": 444,
    "rating": ""
  },
  {
    "date": "05-10-2015",
    "sleepTime": "02:17",
    "awakeTime": "08:50",
    "minutesSlept": 393,
    "rating": ""
  },
  {
    "date": "05-09-2015",
    "sleepTime": "01:42",
    "awakeTime": "08:30",
    "minutesSlept": 408,
    "rating": ""
  },
  {
    "date": "05-08-2015",
    "sleepTime": "02:04",
    "awakeTime": "09:00",
    "minutesSlept": 417,
    "rating": 3
  },
  {
    "date": "05-07-2015",
    "sleepTime": "00:49",
    "awakeTime": "08:15",
    "minutesSlept": 446,
    "rating": ""
  },
  {
    "date": "05-06-2015",
    "sleepTime": "00:43",
    "awakeTime": "08:30",
    "minutesSlept": 468,
    "rating": 4
  },
  {
    "date": "05-05-2015",
    "sleepTime": "23:44",
    "awakeTime": "07:50",
    "minutesSlept": 486,
    "rating": 3
  },
  {
    "date": "05-04-2015",
    "sleepTime": "00:06",
    "awakeTime": "08:13",
    "minutesSlept": 487,
    "rating": 3
  },
  {
    "date": "05-03-2015",
    "sleepTime": "01:30",
    "awakeTime": "09:15",
    "minutesSlept": 466,
    "rating": 2
  },
  {
    "date": "05-02-2015",
    "sleepTime": "00:57",
    "awakeTime": "08:00",
    "minutesSlept": 424,
    "rating": 4
  },
  {
    "date": "05-01-2015",
    "sleepTime": "00:22",
    "awakeTime": "08:20",
    "minutesSlept": 478,
    "rating": 2
  },
  {
    "date": "04-30-2015",
    "sleepTime": "05:28",
    "awakeTime": "09:00",
    "minutesSlept": 212,
    "rating": ""
  },
  {
    "date": "04-30-2015",
    "sleepTime": "00:11",
    "awakeTime": "04:51",
    "minutesSlept": 280,
    "rating": 2
  },
  {
    "date": "04-29-2015",
    "sleepTime": "00:24",
    "awakeTime": "07:30",
    "minutesSlept": 427,
    "rating": 2
  },
  {
    "date": "04-28-2015",
    "sleepTime": "01:13",
    "awakeTime": "09:00",
    "minutesSlept": 468,
    "rating": 3
  },
  {
    "date": "04-27-2015",
    "sleepTime": "00:54",
    "awakeTime": "09:30",
    "minutesSlept": 516,
    "rating": 2
  },
  {
    "date": "04-26-2015",
    "sleepTime": "01:12",
    "awakeTime": "09:30",
    "minutesSlept": 498,
    "rating": 4
  },
  {
    "date": "04-25-2015",
    "sleepTime": "01:50",
    "awakeTime": "09:25",
    "minutesSlept": 455,
    "rating": 3
  },
  {
    "date": "04-24-2015",
    "sleepTime": "02:34",
    "awakeTime": "11:00",
    "minutesSlept": 507,
    "rating": 4
  },
  {
    "date": "04-23-2015",
    "sleepTime": "00:27",
    "awakeTime": "07:25",
    "minutesSlept": 418,
    "rating": 3
  },
  {
    "date": "04-22-2015",
    "sleepTime": "01:32",
    "awakeTime": "08:50",
    "minutesSlept": 439,
    "rating": 3
  },
  {
    "date": "04-21-2015",
    "sleepTime": "01:51",
    "awakeTime": "08:55",
    "minutesSlept": 424,
    "rating": 4
  },
  {
    "date": "04-20-2015",
    "sleepTime": "01:30",
    "awakeTime": "08:55",
    "minutesSlept": 445,
    "rating": 2
  },
  {
    "date": "04-19-2015",
    "sleepTime": "01:10",
    "awakeTime": "09:45",
    "minutesSlept": 516,
    "rating": 4
  },
  {
    "date": "04-18-2015",
    "sleepTime": "03:20",
    "awakeTime": "10:58",
    "minutesSlept": 459,
    "rating": 3
  },
  {
    "date": "04-17-2015",
    "sleepTime": "00:13",
    "awakeTime": "07:15",
    "minutesSlept": 422,
    "rating": 2
  },
  {
    "date": "04-16-2015",
    "sleepTime": "00:54",
    "awakeTime": "08:42",
    "minutesSlept": 469,
    "rating": ""
  },
  {
    "date": "04-15-2015",
    "sleepTime": "01:24",
    "awakeTime": "08:30",
    "minutesSlept": 426,
    "rating": ""
  },
  {
    "date": "04-14-2015",
    "sleepTime": "01:14",
    "awakeTime": "08:00",
    "minutesSlept": 406,
    "rating": ""
  },
  {
    "date": "04-13-2015",
    "sleepTime": "02:02",
    "awakeTime": "08:00",
    "minutesSlept": 358,
    "rating": 3
  },
  {
    "date": "04-12-2015",
    "sleepTime": "03:56",
    "awakeTime": "10:43",
    "minutesSlept": 408,
    "rating": 3
  },
  {
    "date": "04-11-2015",
    "sleepTime": "01:42",
    "awakeTime": "09:37",
    "minutesSlept": 475,
    "rating": 4
  },
  {
    "date": "04-10-2015",
    "sleepTime": "01:43",
    "awakeTime": "09:55",
    "minutesSlept": 492,
    "rating": 4
  },
  {
    "date": "04-09-2015",
    "sleepTime": "00:50",
    "awakeTime": "08:20",
    "minutesSlept": 451,
    "rating": 3
  },
  {
    "date": "04-08-2015",
    "sleepTime": "01:36",
    "awakeTime": "07:45",
    "minutesSlept": 369,
    "rating": 2
  },
  {
    "date": "04-07-2015",
    "sleepTime": "00:55",
    "awakeTime": "08:10",
    "minutesSlept": 435,
    "rating": ""
  },
  {
    "date": "04-06-2015",
    "sleepTime": "00:47",
    "awakeTime": "09:20",
    "minutesSlept": 514,
    "rating": 3
  },
  {
    "date": "04-05-2015",
    "sleepTime": "02:21",
    "awakeTime": "09:00",
    "minutesSlept": 399,
    "rating": ""
  },
  {
    "date": "04-04-2015",
    "sleepTime": "02:55",
    "awakeTime": "10:26",
    "minutesSlept": 451,
    "rating": 4
  },
  {
    "date": "04-03-2015",
    "sleepTime": "01:55",
    "awakeTime": "08:30",
    "minutesSlept": 396,
    "rating": ""
  },
  {
    "date": "04-02-2015",
    "sleepTime": "00:02",
    "awakeTime": "08:30",
    "minutesSlept": 508,
    "rating": ""
  },
  {
    "date": "04-01-2015",
    "sleepTime": "01:43",
    "awakeTime": "09:40",
    "minutesSlept": 478,
    "rating": ""
  },
  {
    "date": "03-31-2015",
    "sleepTime": "01:00",
    "awakeTime": "07:50",
    "minutesSlept": 410,
    "rating": 1
  },
  {
    "date": "03-30-2015",
    "sleepTime": "01:43",
    "awakeTime": "09:18",
    "minutesSlept": 455,
    "rating": 3
  },
  {
    "date": "03-29-2015",
    "sleepTime": "01:12",
    "awakeTime": "10:00",
    "minutesSlept": 528,
    "rating": 4
  },
  {
    "date": "03-28-2015",
    "sleepTime": "00:48",
    "awakeTime": "10:07",
    "minutesSlept": 559,
    "rating": 4
  },
  {
    "date": "03-27-2015",
    "sleepTime": "01:53",
    "awakeTime": "09:25",
    "minutesSlept": 452,
    "rating": 4
  },
  {
    "date": "03-26-2015",
    "sleepTime": "23:17",
    "awakeTime": "09:10",
    "minutesSlept": 593,
    "rating": 4
  },
  {
    "date": "03-25-2015",
    "sleepTime": "01:29",
    "awakeTime": "06:00",
    "minutesSlept": 271,
    "rating": 2
  },
  {
    "date": "03-24-2015",
    "sleepTime": "23:48",
    "awakeTime": "09:00",
    "minutesSlept": 553,
    "rating": ""
  },
  {
    "date": "03-23-2015",
    "sleepTime": "00:30",
    "awakeTime": "08:55",
    "minutesSlept": 505,
    "rating": 3
  },
  {
    "date": "03-22-2015",
    "sleepTime": "00:31",
    "awakeTime": "09:00",
    "minutesSlept": 509,
    "rating": 4
  },
  {
    "date": "03-21-2015",
    "sleepTime": "00:39",
    "awakeTime": "07:50",
    "minutesSlept": 431,
    "rating": 3
  },
  {
    "date": "03-20-2015",
    "sleepTime": "23:06",
    "awakeTime": "06:00",
    "minutesSlept": 414,
    "rating": 3
  },
  {
    "date": "03-19-2015",
    "sleepTime": "01:59",
    "awakeTime": "09:30",
    "minutesSlept": 452,
    "rating": ""
  },
  {
    "date": "03-18-2015",
    "sleepTime": "00:15",
    "awakeTime": "08:15",
    "minutesSlept": 480,
    "rating": 3
  },
  {
    "date": "03-17-2015",
    "sleepTime": "00:40",
    "awakeTime": "08:30",
    "minutesSlept": 470,
    "rating": 3
  },
  {
    "date": "03-15-2015",
    "sleepTime": "01:57",
    "awakeTime": "10:28",
    "minutesSlept": 511,
    "rating": 4
  },
  {
    "date": "03-14-2015",
    "sleepTime": "02:41",
    "awakeTime": "10:11",
    "minutesSlept": 450,
    "rating": 4
  },
  {
    "date": "03-13-2015",
    "sleepTime": "22:35",
    "awakeTime": "07:45",
    "minutesSlept": 550,
    "rating": ""
  },
  {
    "date": "03-12-2015",
    "sleepTime": "23:48",
    "awakeTime": "07:30",
    "minutesSlept": 463,
    "rating": 4
  },
  {
    "date": "03-11-2015",
    "sleepTime": "23:31",
    "awakeTime": "06:00",
    "minutesSlept": 389,
    "rating": ""
  },
  {
    "date": "03-10-2015",
    "sleepTime": "00:06",
    "awakeTime": "06:00",
    "minutesSlept": 355,
    "rating": 3
  },
  {
    "date": "03-09-2015",
    "sleepTime": "23:40",
    "awakeTime": "08:25",
    "minutesSlept": 525,
    "rating": 3
  },
  {
    "date": "03-08-2015",
    "sleepTime": "23:35",
    "awakeTime": "11:27",
    "minutesSlept": 653,
    "rating": 3
  },
  {
    "date": "03-07-2015",
    "sleepTime": "01:34",
    "awakeTime": "08:40",
    "minutesSlept": 426,
    "rating": 4
  },
  {
    "date": "03-06-2015",
    "sleepTime": "23:59",
    "awakeTime": "08:56",
    "minutesSlept": 538,
    "rating": 4
  },
  {
    "date": "03-05-2015",
    "sleepTime": "22:21",
    "awakeTime": "06:10",
    "minutesSlept": 470,
    "rating": 2
  },
  {
    "date": "03-04-2015",
    "sleepTime": "00:19",
    "awakeTime": "05:06",
    "minutesSlept": 287,
    "rating": 2
  },
  {
    "date": "03-03-2015",
    "sleepTime": "02:44",
    "awakeTime": "08:50",
    "minutesSlept": 366,
    "rating": 3
  },
  {
    "date": "03-02-2015",
    "sleepTime": "00:32",
    "awakeTime": "07:30",
    "minutesSlept": 418,
    "rating": 3
  },
  {
    "date": "03-01-2015",
    "sleepTime": "02:46",
    "awakeTime": "11:43",
    "minutesSlept": 537,
    "rating": 3
  },
  {
    "date": "02-28-2015",
    "sleepTime": "00:54",
    "awakeTime": "10:01",
    "minutesSlept": 547,
    "rating": 4
  },
  {
    "date": "02-27-2015",
    "sleepTime": "01:39",
    "awakeTime": "08:50",
    "minutesSlept": 432,
    "rating": 3
  },
  {
    "date": "02-26-2015",
    "sleepTime": "00:37",
    "awakeTime": "07:30",
    "minutesSlept": 413,
    "rating": 3
  },
  {
    "date": "02-25-2015",
    "sleepTime": "00:15",
    "awakeTime": "08:45",
    "minutesSlept": 510,
    "rating": ""
  },
  {
    "date": "02-24-2015",
    "sleepTime": "03:15",
    "awakeTime": "07:25",
    "minutesSlept": 250,
    "rating": 2
  },
  {
    "date": "02-23-2015",
    "sleepTime": "01:07",
    "awakeTime": "07:45",
    "minutesSlept": 398,
    "rating": 2
  },
  {
    "date": "02-22-2015",
    "sleepTime": "00:08",
    "awakeTime": "08:00",
    "minutesSlept": 473,
    "rating": 3
  },
  {
    "date": "02-21-2015",
    "sleepTime": "00:15",
    "awakeTime": "08:15",
    "minutesSlept": 480,
    "rating": 2
  },
  {
    "date": "02-20-2015",
    "sleepTime": "01:59",
    "awakeTime": "09:00",
    "minutesSlept": 421,
    "rating": 3
  },
  {
    "date": "02-19-2015",
    "sleepTime": "01:19",
    "awakeTime": "08:45",
    "minutesSlept": 446,
    "rating": 3
  },
  {
    "date": "02-18-2015",
    "sleepTime": "00:43",
    "awakeTime": "08:46",
    "minutesSlept": 483,
    "rating": 2
  },
  {
    "date": "02-17-2015",
    "sleepTime": "00:36",
    "awakeTime": "07:40",
    "minutesSlept": 424,
    "rating": 3
  },
  {
    "date": "02-16-2015",
    "sleepTime": "00:16",
    "awakeTime": "08:30",
    "minutesSlept": 495,
    "rating": 3
  },
  {
    "date": "02-15-2015",
    "sleepTime": "00:41",
    "awakeTime": "08:00",
    "minutesSlept": 439,
    "rating": 4
  },
  {
    "date": "02-14-2015",
    "sleepTime": "00:47",
    "awakeTime": "09:42",
    "minutesSlept": 535,
    "rating": 4
  },
  {
    "date": "02-13-2015",
    "sleepTime": "00:02",
    "awakeTime": "08:43",
    "minutesSlept": 522,
    "rating": 3
  },
  {
    "date": "02-12-2015",
    "sleepTime": "01:27",
    "awakeTime": "06:50",
    "minutesSlept": 323,
    "rating": 2
  },
  {
    "date": "02-11-2015",
    "sleepTime": "01:00",
    "awakeTime": "09:00",
    "minutesSlept": 480,
    "rating": 3
  },
  {
    "date": "02-10-2015",
    "sleepTime": "01:21",
    "awakeTime": "08:02",
    "minutesSlept": 401,
    "rating": 1
  },
  {
    "date": "02-09-2015",
    "sleepTime": "01:35",
    "awakeTime": "08:00",
    "minutesSlept": 385,
    "rating": 3
  },
  {
    "date": "02-08-2015",
    "sleepTime": "01:57",
    "awakeTime": "09:30",
    "minutesSlept": 453,
    "rating": 3
  },
  {
    "date": "02-07-2015",
    "sleepTime": "02:00",
    "awakeTime": "10:12",
    "minutesSlept": 493,
    "rating": 4
  },
  {
    "date": "02-06-2015",
    "sleepTime": "01:27",
    "awakeTime": "08:16",
    "minutesSlept": 410,
    "rating": 3
  },
  {
    "date": "02-05-2015",
    "sleepTime": "00:45",
    "awakeTime": "09:00",
    "minutesSlept": 495,
    "rating": 4
  },
  {
    "date": "02-04-2015",
    "sleepTime": "01:01",
    "awakeTime": "09:23",
    "minutesSlept": 502,
    "rating": 4
  },
  {
    "date": "02-03-2015",
    "sleepTime": "00:25",
    "awakeTime": "07:00",
    "minutesSlept": 395,
    "rating": 4
  },
  {
    "date": "02-02-2015",
    "sleepTime": "01:28",
    "awakeTime": "08:13",
    "minutesSlept": 405,
    "rating": 3
  },
  {
    "date": "02-01-2015",
    "sleepTime": "01:14",
    "awakeTime": "08:40",
    "minutesSlept": 447,
    "rating": ""
  },
  {
    "date": "01-31-2015",
    "sleepTime": "02:32",
    "awakeTime": "10:00",
    "minutesSlept": 448,
    "rating": ""
  },
  {
    "date": "01-30-2015",
    "sleepTime": "01:08",
    "awakeTime": "07:38",
    "minutesSlept": 391,
    "rating": 3
  },
  {
    "date": "01-29-2015",
    "sleepTime": "01:13",
    "awakeTime": "08:08",
    "minutesSlept": 416,
    "rating": 3
  },
  {
    "date": "01-28-2015",
    "sleepTime": "01:08",
    "awakeTime": "08:40",
    "minutesSlept": 452,
    "rating": 3
  },
  {
    "date": "01-27-2015",
    "sleepTime": "01:45",
    "awakeTime": "07:55",
    "minutesSlept": 370,
    "rating": 2
  },
  {
    "date": "01-26-2015",
    "sleepTime": "00:37",
    "awakeTime": "08:39",
    "minutesSlept": 483,
    "rating": 3
  },
  {
    "date": "01-25-2015",
    "sleepTime": "04:36",
    "awakeTime": "00:02",
    "minutesSlept": 447,
    "rating": 3
  },
  {
    "date": "01-24-2015",
    "sleepTime": "00:38",
    "awakeTime": "08:00",
    "minutesSlept": 443,
    "rating": 4
  },
  {
    "date": "01-23-2015",
    "sleepTime": "01:13",
    "awakeTime": "08:51",
    "minutesSlept": 458,
    "rating": 4
  },
  {
    "date": "01-22-2015",
    "sleepTime": "00:18",
    "awakeTime": "08:30",
    "minutesSlept": 492,
    "rating": 4
  },
  {
    "date": "01-21-2015",
    "sleepTime": "00:30",
    "awakeTime": "07:54",
    "minutesSlept": 444,
    "rating": 4
  },
  {
    "date": "01-20-2015",
    "sleepTime": "00:52",
    "awakeTime": "07:00",
    "minutesSlept": 369,
    "rating": 4
  },
  {
    "date": "01-19-2015",
    "sleepTime": "01:12",
    "awakeTime": "08:35",
    "minutesSlept": 443,
    "rating": 3
  },
  {
    "date": "01-18-2015",
    "sleepTime": "00:28",
    "awakeTime": "10:06",
    "minutesSlept": 578,
    "rating": 4
  },
  {
    "date": "01-17-2015",
    "sleepTime": "02:05",
    "awakeTime": "09:56",
    "minutesSlept": 471,
    "rating": 4
  },
  {
    "date": "01-16-2015",
    "sleepTime": "00:46",
    "awakeTime": "07:51",
    "minutesSlept": 425,
    "rating": 4
  },
  {
    "date": "01-15-2015",
    "sleepTime": "01:02",
    "awakeTime": "08:33",
    "minutesSlept": 452,
    "rating": 3
  },
  {
    "date": "01-14-2015",
    "sleepTime": "01:19",
    "awakeTime": "08:09",
    "minutesSlept": 410,
    "rating": 3
  },
  {
    "date": "01-13-2015",
    "sleepTime": "01:28",
    "awakeTime": "07:00",
    "minutesSlept": 333,
    "rating": 3
  },
  {
    "date": "01-12-2015",
    "sleepTime": "00:26",
    "awakeTime": "07:00",
    "minutesSlept": 394,
    "rating": ""
  },
  {
    "date": "01-11-2015",
    "sleepTime": "02:40",
    "awakeTime": "10:20",
    "minutesSlept": 460,
    "rating": 4
  },
  {
    "date": "01-10-2015",
    "sleepTime": "02:51",
    "awakeTime": "10:36",
    "minutesSlept": 465,
    "rating": 3
  },
  {
    "date": "01-09-2015",
    "sleepTime": "01:28",
    "awakeTime": "08:30",
    "minutesSlept": 423,
    "rating": 2
  },
  {
    "date": "01-08-2015",
    "sleepTime": "23:29",
    "awakeTime": "07:15",
    "minutesSlept": 466,
    "rating": 4
  },
  {
    "date": "01-07-2015",
    "sleepTime": "00:28",
    "awakeTime": "08:17",
    "minutesSlept": 469,
    "rating": 2
  },
  {
    "date": "01-06-2015",
    "sleepTime": "00:51",
    "awakeTime": "07:55",
    "minutesSlept": 424,
    "rating": ""
  },
  {
    "date": "01-05-2015",
    "sleepTime": "00:55",
    "awakeTime": "08:40",
    "minutesSlept": 466,
    "rating": ""
  },
  {
    "date": "01-04-2015",
    "sleepTime": "00:07",
    "awakeTime": "10:55",
    "minutesSlept": 648,
    "rating": 3
  },
  {
    "date": "01-03-2015",
    "sleepTime": "01:27",
    "awakeTime": "09:30",
    "minutesSlept": 483,
    "rating": 3
  },
  {
    "date": "01-02-2015",
    "sleepTime": "00:52",
    "awakeTime": "10:00",
    "minutesSlept": 549,
    "rating": ""
  },
  {
    "date": "01-01-2015",
    "sleepTime": "03:10",
    "awakeTime": "11:00",
    "minutesSlept": 471,
    "rating": 3
  },
  {
    "date": "12-31-2014",
    "sleepTime": "01:32",
    "awakeTime": "09:36",
    "minutesSlept": 484,
    "rating": 4
  },
  {
    "date": "12-30-2014",
    "sleepTime": "01:22",
    "awakeTime": "08:40",
    "minutesSlept": 439,
    "rating": 4
  },
  {
    "date": "12-29-2014",
    "sleepTime": "01:30",
    "awakeTime": "09:30",
    "minutesSlept": 480,
    "rating": ""
  },
  {
    "date": "12-28-2014",
    "sleepTime": "03:41",
    "awakeTime": "11:00",
    "minutesSlept": 439,
    "rating": 3
  },
  {
    "date": "12-27-2014",
    "sleepTime": "02:03",
    "awakeTime": "10:25",
    "minutesSlept": 502,
    "rating": ""
  },
  {
    "date": "12-26-2014",
    "sleepTime": "01:19",
    "awakeTime": "09:40",
    "minutesSlept": 501,
    "rating": 3
  },
  {
    "date": "12-25-2014",
    "sleepTime": "01:25",
    "awakeTime": "08:58",
    "minutesSlept": 454,
    "rating": 3
  },
  {
    "date": "12-24-2014",
    "sleepTime": "02:03",
    "awakeTime": "10:35",
    "minutesSlept": 513,
    "rating": 4
  },
  {
    "date": "12-23-2014",
    "sleepTime": "01:32",
    "awakeTime": "09:15",
    "minutesSlept": 464,
    "rating": ""
  },
  {
    "date": "12-22-2014",
    "sleepTime": "02:07",
    "awakeTime": "10:06",
    "minutesSlept": 480,
    "rating": 3
  },
  {
    "date": "12-21-2014",
    "sleepTime": "01:17",
    "awakeTime": "09:45",
    "minutesSlept": 508,
    "rating": ""
  },
  {
    "date": "12-20-2014",
    "sleepTime": "01:39",
    "awakeTime": "10:40",
    "minutesSlept": 541,
    "rating": 3
  },
  {
    "date": "12-19-2014",
    "sleepTime": "01:12",
    "awakeTime": "08:29",
    "minutesSlept": 437,
    "rating": 3
  },
  {
    "date": "12-18-2014",
    "sleepTime": "00:36",
    "awakeTime": "08:25",
    "minutesSlept": 470,
    "rating": ""
  },
  {
    "date": "12-17-2014",
    "sleepTime": "03:18",
    "awakeTime": "11:58",
    "minutesSlept": 521,
    "rating": ""
  },
  {
    "date": "12-16-2014",
    "sleepTime": "00:43",
    "awakeTime": "07:40",
    "minutesSlept": 417,
    "rating": 2
  },
  {
    "date": "12-15-2014",
    "sleepTime": "01:32",
    "awakeTime": "10:00",
    "minutesSlept": 508,
    "rating": 3
  },
  {
    "date": "12-14-2014",
    "sleepTime": "02:39",
    "awakeTime": "11:18",
    "minutesSlept": 520,
    "rating": 4
  },
  {
    "date": "12-13-2014",
    "sleepTime": "01:48",
    "awakeTime": "10:30",
    "minutesSlept": 522,
    "rating": 4
  },
  {
    "date": "12-12-2014",
    "sleepTime": "02:47",
    "awakeTime": "09:53",
    "minutesSlept": 426,
    "rating": 3
  },
  {
    "date": "12-11-2014",
    "sleepTime": "02:00",
    "awakeTime": "09:30",
    "minutesSlept": 450,
    "rating": 3
  },
  {
    "date": "12-10-2014",
    "sleepTime": "00:36",
    "awakeTime": "07:30",
    "minutesSlept": 414,
    "rating": 3
  },
  {
    "date": "12-09-2014",
    "sleepTime": "01:28",
    "awakeTime": "09:15",
    "minutesSlept": 468,
    "rating": 2
  },
  {
    "date": "12-08-2014",
    "sleepTime": "01:31",
    "awakeTime": "08:50",
    "minutesSlept": 440,
    "rating": ""
  },
  {
    "date": "12-07-2014",
    "sleepTime": "02:03",
    "awakeTime": "10:27",
    "minutesSlept": 505,
    "rating": ""
  },
  {
    "date": "12-06-2014",
    "sleepTime": "01:16",
    "awakeTime": "07:00",
    "minutesSlept": 344,
    "rating": 3
  },
  {
    "date": "12-05-2014",
    "sleepTime": "01:46",
    "awakeTime": "07:51",
    "minutesSlept": 366,
    "rating": ""
  },
  {
    "date": "12-04-2014",
    "sleepTime": "01:31",
    "awakeTime": "08:55",
    "minutesSlept": 444,
    "rating": ""
  },
  {
    "date": "12-03-2014",
    "sleepTime": "23:47",
    "awakeTime": "10:22",
    "minutesSlept": 636,
    "rating": ""
  },
  {
    "date": "12-02-2014",
    "sleepTime": "01:45",
    "awakeTime": "09:30",
    "minutesSlept": 466,
    "rating": 3
  },
  {
    "date": "12-01-2014",
    "sleepTime": "01:07",
    "awakeTime": "08:10",
    "minutesSlept": 423,
    "rating": 2
  },
  {
    "date": "11-30-2014",
    "sleepTime": "02:43",
    "awakeTime": "11:05",
    "minutesSlept": 503,
    "rating": 4
  },
  {
    "date": "11-29-2014",
    "sleepTime": "02:17",
    "awakeTime": "00:44",
    "minutesSlept": 627,
    "rating": 4
  },
  {
    "date": "11-28-2014",
    "sleepTime": "01:08",
    "awakeTime": "08:16",
    "minutesSlept": 428,
    "rating": 3
  },
  {
    "date": "11-27-2014",
    "sleepTime": "02:06",
    "awakeTime": "09:30",
    "minutesSlept": 444,
    "rating": 3
  },
  {
    "date": "11-26-2014",
    "sleepTime": "00:31",
    "awakeTime": "08:07",
    "minutesSlept": 456,
    "rating": ""
  },
  {
    "date": "11-25-2014",
    "sleepTime": "00:47",
    "awakeTime": "09:40",
    "minutesSlept": 534,
    "rating": 2
  },
  {
    "date": "11-24-2014",
    "sleepTime": "00:38",
    "awakeTime": "09:15",
    "minutesSlept": 517,
    "rating": 3
  },
  {
    "date": "11-23-2014",
    "sleepTime": "01:04",
    "awakeTime": "08:39",
    "minutesSlept": 456,
    "rating": 3
  },
  {
    "date": "11-22-2014",
    "sleepTime": "02:08",
    "awakeTime": "11:08",
    "minutesSlept": 540,
    "rating": 4
  },
  {
    "date": "11-21-2014",
    "sleepTime": "01:44",
    "awakeTime": "10:30",
    "minutesSlept": 526,
    "rating": 3
  },
  {
    "date": "11-20-2014",
    "sleepTime": "03:09",
    "awakeTime": "09:43",
    "minutesSlept": 394,
    "rating": ""
  },
  {
    "date": "11-19-2014",
    "sleepTime": "01:51",
    "awakeTime": "09:00",
    "minutesSlept": 429,
    "rating": 3
  },
  {
    "date": "11-18-2014",
    "sleepTime": "01:47",
    "awakeTime": "07:30",
    "minutesSlept": 343,
    "rating": ""
  },
  {
    "date": "11-17-2014",
    "sleepTime": "04:15",
    "awakeTime": "07:30",
    "minutesSlept": 195,
    "rating": ""
  },
  {
    "date": "11-17-2014",
    "sleepTime": "00:55",
    "awakeTime": "04:00",
    "minutesSlept": 185,
    "rating": ""
  },
  {
    "date": "11-16-2014",
    "sleepTime": "01:26",
    "awakeTime": "09:45",
    "minutesSlept": 499,
    "rating": ""
  },
  {
    "date": "11-15-2014",
    "sleepTime": "00:34",
    "awakeTime": "08:45",
    "minutesSlept": 491,
    "rating": 3
  },
  {
    "date": "11-14-2014",
    "sleepTime": "06:57",
    "awakeTime": "09:10",
    "minutesSlept": 133,
    "rating": ""
  },
  {
    "date": "11-14-2014",
    "sleepTime": "00:28",
    "awakeTime": "06:42",
    "minutesSlept": 375,
    "rating": 2
  },
  {
    "date": "11-13-2014",
    "sleepTime": "00:41",
    "awakeTime": "08:40",
    "minutesSlept": 479,
    "rating": 3
  },
  {
    "date": "11-12-2014",
    "sleepTime": "01:40",
    "awakeTime": "10:19",
    "minutesSlept": 519,
    "rating": 4
  },
  {
    "date": "11-11-2014",
    "sleepTime": "08:15",
    "awakeTime": "08:21",
    "minutesSlept": 6,
    "rating": ""
  },
  {
    "date": "11-11-2014",
    "sleepTime": "01:19",
    "awakeTime": "08:00",
    "minutesSlept": 401,
    "rating": 2
  },
  {
    "date": "11-10-2014",
    "sleepTime": "01:01",
    "awakeTime": "08:15",
    "minutesSlept": 434,
    "rating": 4
  },
  {
    "date": "11-09-2014",
    "sleepTime": "02:18",
    "awakeTime": "10:54",
    "minutesSlept": 516,
    "rating": 4
  },
  {
    "date": "11-08-2014",
    "sleepTime": "01:36",
    "awakeTime": "09:59",
    "minutesSlept": 504,
    "rating": 4
  },
  {
    "date": "11-07-2014",
    "sleepTime": "01:08",
    "awakeTime": "09:10",
    "minutesSlept": 482,
    "rating": 3
  },
  {
    "date": "11-06-2014",
    "sleepTime": "23:23",
    "awakeTime": "08:00",
    "minutesSlept": 517,
    "rating": 4
  },
  {
    "date": "11-05-2014",
    "sleepTime": "01:10",
    "awakeTime": "08:40",
    "minutesSlept": 450,
    "rating": 4
  },
  {
    "date": "11-04-2014",
    "sleepTime": "00:50",
    "awakeTime": "09:20",
    "minutesSlept": 510,
    "rating": ""
  },
  {
    "date": "11-03-2014",
    "sleepTime": "01:57",
    "awakeTime": "07:45",
    "minutesSlept": 348,
    "rating": 4
  },
  {
    "date": "11-02-2014",
    "sleepTime": "01:31",
    "awakeTime": "09:40",
    "minutesSlept": 489,
    "rating": 4
  },
  {
    "date": "11-01-2014",
    "sleepTime": "03:11",
    "awakeTime": "06:45",
    "minutesSlept": 214,
    "rating": 3
  },
  {
    "date": "10-31-2014",
    "sleepTime": "23:21",
    "awakeTime": "06:00",
    "minutesSlept": 400,
    "rating": 3
  },
  {
    "date": "10-30-2014",
    "sleepTime": "23:48",
    "awakeTime": "08:06",
    "minutesSlept": 498,
    "rating": 3
  },
  {
    "date": "10-29-2014",
    "sleepTime": "02:07",
    "awakeTime": "09:15",
    "minutesSlept": 428,
    "rating": 2
  },
  {
    "date": "10-28-2014",
    "sleepTime": "01:32",
    "awakeTime": "09:55",
    "minutesSlept": 504,
    "rating": 3
  },
  {
    "date": "10-27-2014",
    "sleepTime": "02:30",
    "awakeTime": "10:15",
    "minutesSlept": 465,
    "rating": 4
  },
  {
    "date": "10-26-2014",
    "sleepTime": "02:35",
    "awakeTime": "11:00",
    "minutesSlept": 505,
    "rating": 4
  },
  {
    "date": "10-25-2014",
    "sleepTime": "01:44",
    "awakeTime": "09:00",
    "minutesSlept": 436,
    "rating": 2
  },
  {
    "date": "10-24-2014",
    "sleepTime": "02:58",
    "awakeTime": "11:10",
    "minutesSlept": 492,
    "rating": 3
  },
  {
    "date": "10-23-2014",
    "sleepTime": "02:10",
    "awakeTime": "09:50",
    "minutesSlept": 460,
    "rating": ""
  },
  {
    "date": "10-22-2014",
    "sleepTime": "09:30",
    "awakeTime": "10:25",
    "minutesSlept": 55,
    "rating": ""
  },
  {
    "date": "10-22-2014",
    "sleepTime": "01:52",
    "awakeTime": "09:00",
    "minutesSlept": 428,
    "rating": ""
  },
  {
    "date": "10-21-2014",
    "sleepTime": "01:03",
    "awakeTime": "09:30",
    "minutesSlept": 507,
    "rating": 4
  },
  {
    "date": "10-20-2014",
    "sleepTime": "03:20",
    "awakeTime": "08:00",
    "minutesSlept": 280,
    "rating": 1
  },
  {
    "date": "10-19-2014",
    "sleepTime": "02:32",
    "awakeTime": "10:55",
    "minutesSlept": 504,
    "rating": 3
  },
  {
    "date": "10-18-2014",
    "sleepTime": "03:32",
    "awakeTime": "11:23",
    "minutesSlept": 472,
    "rating": 3
  },
  {
    "date": "10-17-2014",
    "sleepTime": "01:11",
    "awakeTime": "08:45",
    "minutesSlept": 454,
    "rating": 3
  },
  {
    "date": "10-16-2014",
    "sleepTime": "00:28",
    "awakeTime": "08:00",
    "minutesSlept": 452,
    "rating": 3
  },
  {
    "date": "10-15-2014",
    "sleepTime": "01:23",
    "awakeTime": "09:05",
    "minutesSlept": 463,
    "rating": 4
  },
  {
    "date": "10-14-2014",
    "sleepTime": "00:31",
    "awakeTime": "08:45",
    "minutesSlept": 494,
    "rating": 3
  },
  {
    "date": "10-13-2014",
    "sleepTime": "02:51",
    "awakeTime": "09:42",
    "minutesSlept": 411,
    "rating": 3
  },
  {
    "date": "10-12-2014",
    "sleepTime": "02:39",
    "awakeTime": "10:00",
    "minutesSlept": 442,
    "rating": 4
  },
  {
    "date": "10-11-2014",
    "sleepTime": "01:47",
    "awakeTime": "10:00",
    "minutesSlept": 493,
    "rating": 4
  },
  {
    "date": "10-10-2014",
    "sleepTime": "01:47",
    "awakeTime": "08:15",
    "minutesSlept": 388,
    "rating": ""
  },
  {
    "date": "10-09-2014",
    "sleepTime": "00:24",
    "awakeTime": "08:00",
    "minutesSlept": 456,
    "rating": 3
  },
  {
    "date": "10-08-2014",
    "sleepTime": "01:13",
    "awakeTime": "09:10",
    "minutesSlept": 477,
    "rating": 3
  },
  {
    "date": "10-07-2014",
    "sleepTime": "01:49",
    "awakeTime": "10:00",
    "minutesSlept": 491,
    "rating": ""
  },
  {
    "date": "10-06-2014",
    "sleepTime": "01:45",
    "awakeTime": "07:35",
    "minutesSlept": 351,
    "rating": ""
  },
  {
    "date": "10-05-2014",
    "sleepTime": "07:46",
    "awakeTime": "10:45",
    "minutesSlept": 180,
    "rating": 3
  },
  {
    "date": "10-05-2014",
    "sleepTime": "03:07",
    "awakeTime": "07:26",
    "minutesSlept": 259,
    "rating": 3
  },
  {
    "date": "10-04-2014",
    "sleepTime": "01:11",
    "awakeTime": "10:40",
    "minutesSlept": 569,
    "rating": 4
  },
  {
    "date": "10-03-2014",
    "sleepTime": "01:09",
    "awakeTime": "09:30",
    "minutesSlept": 502,
    "rating": 4
  },
  {
    "date": "10-02-2014",
    "sleepTime": "00:31",
    "awakeTime": "10:00",
    "minutesSlept": 569,
    "rating": 4
  },
  {
    "date": "10-01-2014",
    "sleepTime": "08:22",
    "awakeTime": "11:15",
    "minutesSlept": 173,
    "rating": 4
  },
  {
    "date": "10-01-2014",
    "sleepTime": "02:18",
    "awakeTime": "08:07",
    "minutesSlept": 349,
    "rating": 3
  },
  {
    "date": "09-30-2014",
    "sleepTime": "09:39",
    "awakeTime": "10:00",
    "minutesSlept": 22,
    "rating": 4
  },
  {
    "date": "09-30-2014",
    "sleepTime": "00:49",
    "awakeTime": "08:50",
    "minutesSlept": 482,
    "rating": 4
  },
  {
    "date": "09-29-2014",
    "sleepTime": "01:50",
    "awakeTime": "08:55",
    "minutesSlept": 425,
    "rating": 3
  },
  {
    "date": "09-28-2014",
    "sleepTime": "03:12",
    "awakeTime": "09:50",
    "minutesSlept": 398,
    "rating": 2
  },
  {
    "date": "09-27-2014",
    "sleepTime": "01:05",
    "awakeTime": "07:15",
    "minutesSlept": 370,
    "rating": ""
  },
  {
    "date": "09-26-2014",
    "sleepTime": "23:12",
    "awakeTime": "23:58",
    "minutesSlept": 47,
    "rating": ""
  },
  {
    "date": "09-26-2014",
    "sleepTime": "01:39",
    "awakeTime": "08:55",
    "minutesSlept": 436,
    "rating": 3
  },
  {
    "date": "09-25-2014",
    "sleepTime": "01:13",
    "awakeTime": "09:40",
    "minutesSlept": 507,
    "rating": 3
  },
  {
    "date": "09-24-2014",
    "sleepTime": "00:21",
    "awakeTime": "08:40",
    "minutesSlept": 499,
    "rating": ""
  },
  {
    "date": "09-23-2014",
    "sleepTime": "00:36",
    "awakeTime": "09:01",
    "minutesSlept": 505,
    "rating": 4
  },
  {
    "date": "09-22-2014",
    "sleepTime": "23:54",
    "awakeTime": "07:30",
    "minutesSlept": 456,
    "rating": 3
  },
  {
    "date": "09-21-2014",
    "sleepTime": "02:27",
    "awakeTime": "08:50",
    "minutesSlept": 383,
    "rating": 3
  },
  {
    "date": "09-20-2014",
    "sleepTime": "01:37",
    "awakeTime": "08:00",
    "minutesSlept": 384,
    "rating": 3
  },
  {
    "date": "09-19-2014",
    "sleepTime": "08:30",
    "awakeTime": "11:30",
    "minutesSlept": 180,
    "rating": 2
  },
  {
    "date": "09-19-2014",
    "sleepTime": "03:52",
    "awakeTime": "08:00",
    "minutesSlept": 248,
    "rating": 3
  },
  {
    "date": "09-18-2014",
    "sleepTime": "00:57",
    "awakeTime": "09:30",
    "minutesSlept": 513,
    "rating": 3
  },
  {
    "date": "09-17-2014",
    "sleepTime": "07:44",
    "awakeTime": "09:40",
    "minutesSlept": 116,
    "rating": ""
  },
  {
    "date": "09-17-2014",
    "sleepTime": "01:03",
    "awakeTime": "07:29",
    "minutesSlept": 386,
    "rating": ""
  },
  {
    "date": "09-16-2014",
    "sleepTime": "02:03",
    "awakeTime": "10:24",
    "minutesSlept": 502,
    "rating": ""
  },
  {
    "date": "09-15-2014",
    "sleepTime": "01:38",
    "awakeTime": "08:00",
    "minutesSlept": 382,
    "rating": 4
  },
  {
    "date": "09-14-2014",
    "sleepTime": "01:20",
    "awakeTime": "10:02",
    "minutesSlept": 522,
    "rating": 4
  },
  {
    "date": "09-13-2014",
    "sleepTime": "09:30",
    "awakeTime": "09:38",
    "minutesSlept": 8,
    "rating": ""
  },
  {
    "date": "09-13-2014",
    "sleepTime": "01:11",
    "awakeTime": "09:30",
    "minutesSlept": 500,
    "rating": ""
  },
  {
    "date": "09-12-2014",
    "sleepTime": "00:30",
    "awakeTime": "09:05",
    "minutesSlept": 516,
    "rating": 3
  },
  {
    "date": "09-11-2014",
    "sleepTime": "01:30",
    "awakeTime": "08:44",
    "minutesSlept": 434,
    "rating": 3
  },
  {
    "date": "09-10-2014",
    "sleepTime": "00:42",
    "awakeTime": "09:24",
    "minutesSlept": 523,
    "rating": 3
  },
  {
    "date": "09-09-2014",
    "sleepTime": "00:34",
    "awakeTime": "09:20",
    "minutesSlept": 526,
    "rating": ""
  },
  {
    "date": "09-08-2014",
    "sleepTime": "07:15",
    "awakeTime": "07:20",
    "minutesSlept": 5,
    "rating": ""
  },
  {
    "date": "09-08-2014",
    "sleepTime": "01:04",
    "awakeTime": "07:15",
    "minutesSlept": 372,
    "rating": ""
  },
  {
    "date": "09-07-2014",
    "sleepTime": "01:05",
    "awakeTime": "10:02",
    "minutesSlept": 537,
    "rating": 4
  },
  {
    "date": "09-06-2014",
    "sleepTime": "01:50",
    "awakeTime": "11:00",
    "minutesSlept": 550,
    "rating": 3
  },
  {
    "date": "09-05-2014",
    "sleepTime": "23:54",
    "awakeTime": "07:10",
    "minutesSlept": 437,
    "rating": 2
  },
  {
    "date": "09-04-2014",
    "sleepTime": "00:55",
    "awakeTime": "09:15",
    "minutesSlept": 500,
    "rating": ""
  },
  {
    "date": "09-03-2014",
    "sleepTime": "07:30",
    "awakeTime": "07:35",
    "minutesSlept": 5,
    "rating": ""
  },
  {
    "date": "09-03-2014",
    "sleepTime": "23:46",
    "awakeTime": "07:30",
    "minutesSlept": 465,
    "rating": ""
  },
  {
    "date": "09-02-2014",
    "sleepTime": "00:17",
    "awakeTime": "08:20",
    "minutesSlept": 484,
    "rating": ""
  },
  {
    "date": "09-01-2014",
    "sleepTime": "01:04",
    "awakeTime": "09:30",
    "minutesSlept": 506,
    "rating": 4
  },
  {
    "date": "08-31-2014",
    "sleepTime": "00:42",
    "awakeTime": "09:15",
    "minutesSlept": 514,
    "rating": ""
  },
  {
    "date": "08-30-2014",
    "sleepTime": "02:00",
    "awakeTime": "10:00",
    "minutesSlept": 480,
    "rating": ""
  },
  {
    "date": "08-29-2014",
    "sleepTime": "02:02",
    "awakeTime": "09:30",
    "minutesSlept": 448,
    "rating": ""
  },
  {
    "date": "08-28-2014",
    "sleepTime": "00:34",
    "awakeTime": "07:00",
    "minutesSlept": 386,
    "rating": ""
  },
  {
    "date": "08-27-2014",
    "sleepTime": "01:38",
    "awakeTime": "10:15",
    "minutesSlept": 518,
    "rating": ""
  },
  {
    "date": "08-26-2014",
    "sleepTime": "00:58",
    "awakeTime": "09:30",
    "minutesSlept": 512,
    "rating": ""
  },
  {
    "date": "08-25-2014",
    "sleepTime": "01:02",
    "awakeTime": "11:24",
    "minutesSlept": 622,
    "rating": ""
  },
  {
    "date": "08-24-2014",
    "sleepTime": "00:45",
    "awakeTime": "08:00",
    "minutesSlept": 435,
    "rating": ""
  },
  {
    "date": "08-23-2014",
    "sleepTime": "00:00",
    "awakeTime": "07:30",
    "minutesSlept": 450,
    "rating": ""
  },
  {
    "date": "08-22-2014",
    "sleepTime": "03:39",
    "awakeTime": "08:00",
    "minutesSlept": 262,
    "rating": ""
  },
  {
    "date": "08-21-2014",
    "sleepTime": "00:59",
    "awakeTime": "09:30",
    "minutesSlept": 511,
    "rating": ""
  },
  {
    "date": "08-20-2014",
    "sleepTime": "03:05",
    "awakeTime": "10:27",
    "minutesSlept": 442,
    "rating": ""
  },
  {
    "date": "08-19-2014",
    "sleepTime": "02:10",
    "awakeTime": "09:23",
    "minutesSlept": 434,
    "rating": ""
  },
  {
    "date": "08-18-2014",
    "sleepTime": "02:43",
    "awakeTime": "11:01",
    "minutesSlept": 498,
    "rating": ""
  },
  {
    "date": "08-17-2014",
    "sleepTime": "03:21",
    "awakeTime": "11:56",
    "minutesSlept": 515,
    "rating": 4
  },
  {
    "date": "08-16-2014",
    "sleepTime": "02:17",
    "awakeTime": "10:08",
    "minutesSlept": 471,
    "rating": ""
  },
  {
    "date": "08-15-2014",
    "sleepTime": "03:16",
    "awakeTime": "10:32",
    "minutesSlept": 437,
    "rating": 4
  },
  {
    "date": "08-14-2014",
    "sleepTime": "00:50",
    "awakeTime": "09:30",
    "minutesSlept": 521,
    "rating": 4
  },
  {
    "date": "08-13-2014",
    "sleepTime": "00:41",
    "awakeTime": "08:00",
    "minutesSlept": 439,
    "rating": ""
  },
  {
    "date": "08-12-2014",
    "sleepTime": "00:32",
    "awakeTime": "08:20",
    "minutesSlept": 468,
    "rating": 3
  },
  {
    "date": "08-11-2014",
    "sleepTime": "00:50",
    "awakeTime": "08:31",
    "minutesSlept": 462,
    "rating": 4
  },
  {
    "date": "08-10-2014",
    "sleepTime": "02:46",
    "awakeTime": "10:00",
    "minutesSlept": 435,
    "rating": ""
  },
  {
    "date": "08-09-2014",
    "sleepTime": "00:23",
    "awakeTime": "08:04",
    "minutesSlept": 462,
    "rating": ""
  },
  {
    "date": "08-08-2014",
    "sleepTime": "01:20",
    "awakeTime": "08:20",
    "minutesSlept": 420,
    "rating": ""
  },
  {
    "date": "08-07-2014",
    "sleepTime": "00:19",
    "awakeTime": "08:05",
    "minutesSlept": 466,
    "rating": ""
  },
  {
    "date": "08-06-2014",
    "sleepTime": "00:02",
    "awakeTime": "07:58",
    "minutesSlept": 476,
    "rating": ""
  },
  {
    "date": "08-05-2014",
    "sleepTime": "23:52",
    "awakeTime": "07:11",
    "minutesSlept": 439,
    "rating": ""
  },
  {
    "date": "08-04-2014",
    "sleepTime": "23:00",
    "awakeTime": "07:50",
    "minutesSlept": 530,
    "rating": 4
  },
  {
    "date": "08-03-2014",
    "sleepTime": "01:58",
    "awakeTime": "10:35",
    "minutesSlept": 518,
    "rating": ""
  },
  {
    "date": "08-02-2014",
    "sleepTime": "00:58",
    "awakeTime": "08:26",
    "minutesSlept": 449,
    "rating": ""
  },
  {
    "date": "08-01-2014",
    "sleepTime": "01:08",
    "awakeTime": "08:16",
    "minutesSlept": 428,
    "rating": ""
  },
  {
    "date": "07-31-2014",
    "sleepTime": "00:14",
    "awakeTime": "08:13",
    "minutesSlept": 479,
    "rating": ""
  },
  {
    "date": "07-30-2014",
    "sleepTime": "01:10",
    "awakeTime": "08:15",
    "minutesSlept": 426,
    "rating": ""
  },
  {
    "date": "07-29-2014",
    "sleepTime": "00:34",
    "awakeTime": "09:00",
    "minutesSlept": 506,
    "rating": ""
  },
  {
    "date": "07-28-2014",
    "sleepTime": "07:17",
    "awakeTime": "07:27",
    "minutesSlept": 11,
    "rating": ""
  },
  {
    "date": "07-28-2014",
    "sleepTime": "00:08",
    "awakeTime": "07:15",
    "minutesSlept": 427,
    "rating": ""
  },
  {
    "date": "07-27-2014",
    "sleepTime": "02:16",
    "awakeTime": "11:00",
    "minutesSlept": 524,
    "rating": ""
  },
  {
    "date": "07-26-2014",
    "sleepTime": "01:44",
    "awakeTime": "10:05",
    "minutesSlept": 502,
    "rating": ""
  },
  {
    "date": "07-25-2014",
    "sleepTime": "00:43",
    "awakeTime": "10:30",
    "minutesSlept": 587,
    "rating": ""
  },
  {
    "date": "07-24-2014",
    "sleepTime": "03:09",
    "awakeTime": "09:10",
    "minutesSlept": 362,
    "rating": ""
  },
  {
    "date": "07-23-2014",
    "sleepTime": "01:08",
    "awakeTime": "09:05",
    "minutesSlept": 477,
    "rating": ""
  },
  {
    "date": "07-22-2014",
    "sleepTime": "00:57",
    "awakeTime": "09:20",
    "minutesSlept": 503,
    "rating": ""
  },
  {
    "date": "07-21-2014",
    "sleepTime": "00:15",
    "awakeTime": "09:15",
    "minutesSlept": 540,
    "rating": ""
  },
  {
    "date": "07-20-2014",
    "sleepTime": "02:15",
    "awakeTime": "08:54",
    "minutesSlept": 399,
    "rating": ""
  },
  {
    "date": "07-19-2014",
    "sleepTime": "09:28",
    "awakeTime": "10:45",
    "minutesSlept": 77,
    "rating": ""
  },
  {
    "date": "07-19-2014",
    "sleepTime": "02:08",
    "awakeTime": "09:28",
    "minutesSlept": 440,
    "rating": ""
  },
  {
    "date": "07-18-2014",
    "sleepTime": "02:07",
    "awakeTime": "08:05",
    "minutesSlept": 359,
    "rating": ""
  },
  {
    "date": "07-17-2014",
    "sleepTime": "07:46",
    "awakeTime": "09:45",
    "minutesSlept": 120,
    "rating": ""
  },
  {
    "date": "07-17-2014",
    "sleepTime": "01:26",
    "awakeTime": "07:44",
    "minutesSlept": 379,
    "rating": ""
  },
  {
    "date": "07-16-2014",
    "sleepTime": "01:35",
    "awakeTime": "09:16",
    "minutesSlept": 461,
    "rating": ""
  },
  {
    "date": "07-15-2014",
    "sleepTime": "23:26",
    "awakeTime": "06:40",
    "minutesSlept": 434,
    "rating": ""
  },
  {
    "date": "07-14-2014",
    "sleepTime": "01:49",
    "awakeTime": "09:55",
    "minutesSlept": 486,
    "rating": ""
  },
  {
    "date": "07-13-2014",
    "sleepTime": "04:18",
    "awakeTime": "11:34",
    "minutesSlept": 436,
    "rating": ""
  },
  {
    "date": "07-12-2014",
    "sleepTime": "01:53",
    "awakeTime": "08:52",
    "minutesSlept": 420,
    "rating": ""
  },
  {
    "date": "07-11-2014",
    "sleepTime": "01:19",
    "awakeTime": "08:29",
    "minutesSlept": 431,
    "rating": ""
  },
  {
    "date": "07-10-2014",
    "sleepTime": "00:54",
    "awakeTime": "08:00",
    "minutesSlept": 427,
    "rating": ""
  },
  {
    "date": "07-09-2014",
    "sleepTime": "00:15",
    "awakeTime": "07:03",
    "minutesSlept": 408,
    "rating": ""
  },
  {
    "date": "07-08-2014",
    "sleepTime": "01:16",
    "awakeTime": "08:10",
    "minutesSlept": 414,
    "rating": ""
  },
  {
    "date": "07-07-2014",
    "sleepTime": "01:45",
    "awakeTime": "08:10",
    "minutesSlept": 385,
    "rating": ""
  },
  {
    "date": "07-06-2014",
    "sleepTime": "01:21",
    "awakeTime": "10:00",
    "minutesSlept": 519,
    "rating": ""
  },
  {
    "date": "07-05-2014",
    "sleepTime": "00:15",
    "awakeTime": "08:03",
    "minutesSlept": 468,
    "rating": ""
  },
  {
    "date": "07-04-2014",
    "sleepTime": "00:43",
    "awakeTime": "07:05",
    "minutesSlept": 382,
    "rating": ""
  },
  {
    "date": "07-03-2014",
    "sleepTime": "23:59",
    "awakeTime": "06:50",
    "minutesSlept": 411,
    "rating": ""
  },
  {
    "date": "07-02-2014",
    "sleepTime": "00:31",
    "awakeTime": "07:05",
    "minutesSlept": 395,
    "rating": ""
  },
  {
    "date": "07-01-2014",
    "sleepTime": "23:33",
    "awakeTime": "07:05",
    "minutesSlept": 452,
    "rating": ""
  },
  {
    "date": "06-30-2014",
    "sleepTime": "23:17",
    "awakeTime": "08:20",
    "minutesSlept": 543,
    "rating": ""
  },
  {
    "date": "06-29-2014",
    "sleepTime": "01:21",
    "awakeTime": "09:20",
    "minutesSlept": 480,
    "rating": ""
  },
  {
    "date": "06-28-2014",
    "sleepTime": "23:38",
    "awakeTime": "06:45",
    "minutesSlept": 427,
    "rating": ""
  },
  {
    "date": "06-27-2014",
    "sleepTime": "02:11",
    "awakeTime": "09:05",
    "minutesSlept": 414,
    "rating": ""
  },
  {
    "date": "06-26-2014",
    "sleepTime": "23:48",
    "awakeTime": "06:27",
    "minutesSlept": 399,
    "rating": ""
  },
  {
    "date": "06-25-2014",
    "sleepTime": "07:10",
    "awakeTime": "07:32",
    "minutesSlept": 22,
    "rating": ""
  },
  {
    "date": "06-25-2014",
    "sleepTime": "23:28",
    "awakeTime": "07:02",
    "minutesSlept": 454,
    "rating": ""
  },
  {
    "date": "06-24-2014",
    "sleepTime": "23:15",
    "awakeTime": "06:25",
    "minutesSlept": 430,
    "rating": 2
  },
  {
    "date": "06-23-2014",
    "sleepTime": "22:36",
    "awakeTime": "06:30",
    "minutesSlept": 475,
    "rating": ""
  },
  {
    "date": "06-22-2014",
    "sleepTime": "10:16",
    "awakeTime": "10:38",
    "minutesSlept": 23,
    "rating": ""
  },
  {
    "date": "06-22-2014",
    "sleepTime": "05:17",
    "awakeTime": "10:15",
    "minutesSlept": 298,
    "rating": ""
  },
  {
    "date": "06-21-2014",
    "sleepTime": "01:21",
    "awakeTime": "09:46",
    "minutesSlept": 506,
    "rating": 3
  },
  {
    "date": "06-20-2014",
    "sleepTime": "00:24",
    "awakeTime": "06:31",
    "minutesSlept": 367,
    "rating": ""
  },
  {
    "date": "06-19-2014",
    "sleepTime": "01:09",
    "awakeTime": "07:00",
    "minutesSlept": 351,
    "rating": 3
  },
  {
    "date": "06-18-2014",
    "sleepTime": "00:10",
    "awakeTime": "05:45",
    "minutesSlept": 335,
    "rating": 1
  },
  {
    "date": "06-17-2014",
    "sleepTime": "23:46",
    "awakeTime": "05:45",
    "minutesSlept": 359,
    "rating": 3
  },
  {
    "date": "06-16-2014",
    "sleepTime": "23:13",
    "awakeTime": "07:25",
    "minutesSlept": 492,
    "rating": 4
  },
  {
    "date": "06-15-2014",
    "sleepTime": "02:10",
    "awakeTime": "07:34",
    "minutesSlept": 325,
    "rating": ""
  },
  {
    "date": "06-14-2014",
    "sleepTime": "04:00",
    "awakeTime": "00:00",
    "minutesSlept": 480,
    "rating": 3
  },
  {
    "date": "06-13-2014",
    "sleepTime": "02:00",
    "awakeTime": "05:45",
    "minutesSlept": 225,
    "rating": 1
  },
  {
    "date": "06-12-2014",
    "sleepTime": "00:05",
    "awakeTime": "08:05",
    "minutesSlept": 480,
    "rating": 3
  },
  {
    "date": "06-11-2014",
    "sleepTime": "00:40",
    "awakeTime": "06:35",
    "minutesSlept": 355,
    "rating": 3
  },
  {
    "date": "06-10-2014",
    "sleepTime": "23:32",
    "awakeTime": "07:24",
    "minutesSlept": 472,
    "rating": ""
  },
  {
    "date": "06-09-2014",
    "sleepTime": "02:32",
    "awakeTime": "09:08",
    "minutesSlept": 396,
    "rating": ""
  },
  {
    "date": "06-08-2014",
    "sleepTime": "01:00",
    "awakeTime": "10:00",
    "minutesSlept": 540,
    "rating": 4
  },
  {
    "date": "06-07-2014",
    "sleepTime": "03:55",
    "awakeTime": "10:30",
    "minutesSlept": 395,
    "rating": ""
  },
  {
    "date": "06-06-2014",
    "sleepTime": "01:58",
    "awakeTime": "08:07",
    "minutesSlept": 369,
    "rating": ""
  },
  {
    "date": "06-05-2014",
    "sleepTime": "00:02",
    "awakeTime": "07:05",
    "minutesSlept": 423,
    "rating": ""
  },
  {
    "date": "06-04-2014",
    "sleepTime": "01:22",
    "awakeTime": "08:15",
    "minutesSlept": 413,
    "rating": 3
  },
  {
    "date": "06-03-2014",
    "sleepTime": "01:32",
    "awakeTime": "08:10",
    "minutesSlept": 398,
    "rating": ""
  },
  {
    "date": "06-02-2014",
    "sleepTime": "00:04",
    "awakeTime": "07:40",
    "minutesSlept": 456,
    "rating": 4
  },
  {
    "date": "06-01-2014",
    "sleepTime": "01:00",
    "awakeTime": "10:42",
    "minutesSlept": 582,
    "rating": 5
  },
  {
    "date": "05-31-2014",
    "sleepTime": "00:30",
    "awakeTime": "07:00",
    "minutesSlept": 391,
    "rating": 3
  },
  {
    "date": "05-30-2014",
    "sleepTime": "01:13",
    "awakeTime": "08:00",
    "minutesSlept": 407,
    "rating": 3
  },
  {
    "date": "05-29-2014",
    "sleepTime": "01:57",
    "awakeTime": "09:55",
    "minutesSlept": 478,
    "rating": ""
  },
  {
    "date": "05-28-2014",
    "sleepTime": "01:24",
    "awakeTime": "08:20",
    "minutesSlept": 416,
    "rating": 3
  },
  {
    "date": "05-27-2014",
    "sleepTime": "23:30",
    "awakeTime": "07:43",
    "minutesSlept": 494,
    "rating": 4
  },
  {
    "date": "05-26-2014",
    "sleepTime": "00:02",
    "awakeTime": "07:55",
    "minutesSlept": 473,
    "rating": 4
  },
  {
    "date": "05-25-2014",
    "sleepTime": "04:27",
    "awakeTime": "11:55",
    "minutesSlept": 448,
    "rating": ""
  },
  {
    "date": "05-24-2014",
    "sleepTime": "01:58",
    "awakeTime": "09:10",
    "minutesSlept": 432,
    "rating": 3
  },
  {
    "date": "05-23-2014",
    "sleepTime": "00:24",
    "awakeTime": "08:35",
    "minutesSlept": 491,
    "rating": 4
  },
  {
    "date": "05-22-2014",
    "sleepTime": "09:03",
    "awakeTime": "10:00",
    "minutesSlept": 57,
    "rating": ""
  },
  {
    "date": "05-22-2014",
    "sleepTime": "08:30",
    "awakeTime": "08:41",
    "minutesSlept": 12,
    "rating": ""
  },
  {
    "date": "05-22-2014",
    "sleepTime": "00:19",
    "awakeTime": "08:24",
    "minutesSlept": 485,
    "rating": 4
  },
  {
    "date": "05-21-2014",
    "sleepTime": "00:08",
    "awakeTime": "07:30",
    "minutesSlept": 442,
    "rating": 4
  },
  {
    "date": "05-20-2014",
    "sleepTime": "15:57",
    "awakeTime": "17:00",
    "minutesSlept": 63,
    "rating": ""
  },
  {
    "date": "05-20-2014",
    "sleepTime": "15:57",
    "awakeTime": "15:57",
    "minutesSlept": 1,
    "rating": ""
  },
  {
    "date": "05-20-2014",
    "sleepTime": "22:59",
    "awakeTime": "06:10",
    "minutesSlept": 432,
    "rating": 3
  },
  {
    "date": "05-19-2014",
    "sleepTime": "01:03",
    "awakeTime": "09:19",
    "minutesSlept": 496,
    "rating": 3
  },
  {
    "date": "05-18-2014",
    "sleepTime": "04:03",
    "awakeTime": "11:00",
    "minutesSlept": 417,
    "rating": ""
  },
  {
    "date": "05-17-2014",
    "sleepTime": "00:41",
    "awakeTime": "08:49",
    "minutesSlept": 488,
    "rating": ""
  },
  {
    "date": "05-15-2014",
    "sleepTime": "22:25",
    "awakeTime": "06:32",
    "minutesSlept": 487,
    "rating": 3
  },
  {
    "date": "05-14-2014",
    "sleepTime": "23:49",
    "awakeTime": "06:20",
    "minutesSlept": 391,
    "rating": ""
  },
  {
    "date": "05-13-2014",
    "sleepTime": "00:12",
    "awakeTime": "07:06",
    "minutesSlept": 415,
    "rating": 3
  },
  {
    "date": "05-12-2014",
    "sleepTime": "22:30",
    "awakeTime": "09:08",
    "minutesSlept": 639,
    "rating": 4
  },
  {
    "date": "05-11-2014",
    "sleepTime": "00:00",
    "awakeTime": "06:00",
    "minutesSlept": 360,
    "rating": ""
  },
  {
    "date": "05-10-2014",
    "sleepTime": "06:51",
    "awakeTime": "09:35",
    "minutesSlept": 164,
    "rating": 4
  },
  {
    "date": "05-10-2014",
    "sleepTime": "02:55",
    "awakeTime": "06:50",
    "minutesSlept": 236,
    "rating": 2
  },
  {
    "date": "05-09-2014",
    "sleepTime": "23:31",
    "awakeTime": "05:00",
    "minutesSlept": 329,
    "rating": 3
  },
  {
    "date": "05-08-2014",
    "sleepTime": "00:10",
    "awakeTime": "07:20",
    "minutesSlept": 430,
    "rating": ""
  },
  {
    "date": "05-07-2014",
    "sleepTime": "00:08",
    "awakeTime": "06:10",
    "minutesSlept": 363,
    "rating": 4
  },
  {
    "date": "05-06-2014",
    "sleepTime": "02:25",
    "awakeTime": "08:50",
    "minutesSlept": 385,
    "rating": 3
  },
  {
    "date": "05-05-2014",
    "sleepTime": "23:45",
    "awakeTime": "07:57",
    "minutesSlept": 493,
    "rating": 4
  },
  {
    "date": "05-04-2014",
    "sleepTime": "00:33",
    "awakeTime": "09:05",
    "minutesSlept": 512,
    "rating": 3
  },
  {
    "date": "05-03-2014",
    "sleepTime": "02:00",
    "awakeTime": "08:00",
    "minutesSlept": 360,
    "rating": ""
  },
  {
    "date": "05-02-2014",
    "sleepTime": "23:59",
    "awakeTime": "06:00",
    "minutesSlept": 362,
    "rating": 3
  },
  {
    "date": "05-01-2014",
    "sleepTime": "00:19",
    "awakeTime": "08:00",
    "minutesSlept": 462,
    "rating": 3
  },
  {
    "date": "04-30-2014",
    "sleepTime": "00:51",
    "awakeTime": "08:01",
    "minutesSlept": 430,
    "rating": 4
  },
  {
    "date": "04-29-2014",
    "sleepTime": "00:18",
    "awakeTime": "06:05",
    "minutesSlept": 347,
    "rating": 4
  },
  {
    "date": "04-28-2014",
    "sleepTime": "23:30",
    "awakeTime": "07:30",
    "minutesSlept": 480,
    "rating": ""
  },
  {
    "date": "04-27-2014",
    "sleepTime": "00:31",
    "awakeTime": "08:21",
    "minutesSlept": 470,
    "rating": 3
  },
  {
    "date": "04-26-2014",
    "sleepTime": "00:00",
    "awakeTime": "06:20",
    "minutesSlept": 380,
    "rating": 3
  },
  {
    "date": "04-25-2014",
    "sleepTime": "00:42",
    "awakeTime": "09:34",
    "minutesSlept": 532,
    "rating": 4
  },
  {
    "date": "04-24-2014",
    "sleepTime": "01:45",
    "awakeTime": "11:15",
    "minutesSlept": 570,
    "rating": 4
  },
  {
    "date": "04-23-2014",
    "sleepTime": "00:00",
    "awakeTime": "06:20",
    "minutesSlept": 381,
    "rating": 3
  },
  {
    "date": "04-22-2014",
    "sleepTime": "00:27",
    "awakeTime": "06:20",
    "minutesSlept": 353,
    "rating": ""
  },
  {
    "date": "04-21-2014",
    "sleepTime": "00:34",
    "awakeTime": "08:59",
    "minutesSlept": 506,
    "rating": 4
  },
  {
    "date": "04-20-2014",
    "sleepTime": "02:24",
    "awakeTime": "09:39",
    "minutesSlept": 436,
    "rating": 4
  },
  {
    "date": "04-19-2014",
    "sleepTime": "01:10",
    "awakeTime": "07:50",
    "minutesSlept": 400,
    "rating": 3
  },
  {
    "date": "04-18-2014",
    "sleepTime": "01:34",
    "awakeTime": "08:23",
    "minutesSlept": 410,
    "rating": 4
  },
  {
    "date": "04-17-2014",
    "sleepTime": "00:56",
    "awakeTime": "09:45",
    "minutesSlept": 529,
    "rating": 4
  },
  {
    "date": "04-16-2014",
    "sleepTime": "01:01",
    "awakeTime": "07:15",
    "minutesSlept": 375,
    "rating": 3
  },
  {
    "date": "04-15-2014",
    "sleepTime": "00:09",
    "awakeTime": "07:35",
    "minutesSlept": 446,
    "rating": 3
  },
  {
    "date": "04-14-2014",
    "sleepTime": "00:24",
    "awakeTime": "07:25",
    "minutesSlept": 421,
    "rating": 3
  },
  {
    "date": "04-13-2014",
    "sleepTime": "01:25",
    "awakeTime": "09:40",
    "minutesSlept": 495,
    "rating": 4
  },
  {
    "date": "04-12-2014",
    "sleepTime": "00:39",
    "awakeTime": "07:30",
    "minutesSlept": 411,
    "rating": 3
  },
  {
    "date": "04-11-2014",
    "sleepTime": "01:26",
    "awakeTime": "06:15",
    "minutesSlept": 289,
    "rating": 2
  },
  {
    "date": "04-10-2014",
    "sleepTime": "23:53",
    "awakeTime": "07:25",
    "minutesSlept": 452,
    "rating": 4
  },
  {
    "date": "04-09-2014",
    "sleepTime": "01:13",
    "awakeTime": "07:35",
    "minutesSlept": 383,
    "rating": 3
  },
  {
    "date": "04-08-2014",
    "sleepTime": "07:01",
    "awakeTime": "07:05",
    "minutesSlept": 5,
    "rating": ""
  },
  {
    "date": "04-08-2014",
    "sleepTime": "00:42",
    "awakeTime": "07:00",
    "minutesSlept": 378,
    "rating": 3
  },
  {
    "date": "04-07-2014",
    "sleepTime": "01:25",
    "awakeTime": "07:05",
    "minutesSlept": 340,
    "rating": 2
  },
  {
    "date": "04-06-2014",
    "sleepTime": "02:47",
    "awakeTime": "09:30",
    "minutesSlept": 403,
    "rating": 3
  },
  {
    "date": "04-05-2014",
    "sleepTime": "01:15",
    "awakeTime": "09:15",
    "minutesSlept": 480,
    "rating": 3
  },
  {
    "date": "04-04-2014",
    "sleepTime": "15:19",
    "awakeTime": "17:20",
    "minutesSlept": 122,
    "rating": 4
  },
  {
    "date": "04-04-2014",
    "sleepTime": "08:44",
    "awakeTime": "08:48",
    "minutesSlept": 4,
    "rating": ""
  },
  {
    "date": "04-04-2014",
    "sleepTime": "08:43",
    "awakeTime": "08:43",
    "minutesSlept": 1,
    "rating": ""
  },
  {
    "date": "04-04-2014",
    "sleepTime": "08:42",
    "awakeTime": "08:43",
    "minutesSlept": 1,
    "rating": ""
  },
  {
    "date": "04-04-2014",
    "sleepTime": "03:13",
    "awakeTime": "08:42",
    "minutesSlept": 329,
    "rating": 2
  },
  {
    "date": "04-03-2014",
    "sleepTime": "03:04",
    "awakeTime": "10:00",
    "minutesSlept": 416,
    "rating": 4
  },
  {
    "date": "04-02-2014",
    "sleepTime": "09:14",
    "awakeTime": "09:30",
    "minutesSlept": 17,
    "rating": ""
  },
  {
    "date": "04-02-2014",
    "sleepTime": "01:36",
    "awakeTime": "09:10",
    "minutesSlept": 454,
    "rating": 3
  },
  {
    "date": "04-01-2014",
    "sleepTime": "10:12",
    "awakeTime": "10:35",
    "minutesSlept": 23,
    "rating": 4
  },
  {
    "date": "04-01-2014",
    "sleepTime": "09:29",
    "awakeTime": "10:10",
    "minutesSlept": 41,
    "rating": 4
  },
  {
    "date": "04-01-2014",
    "sleepTime": "01:55",
    "awakeTime": "09:00",
    "minutesSlept": 425,
    "rating": 3
  },
  {
    "date": "03-31-2014",
    "sleepTime": "00:58",
    "awakeTime": "09:20",
    "minutesSlept": 502,
    "rating": 3
  },
  {
    "date": "03-30-2014",
    "sleepTime": "02:23",
    "awakeTime": "10:30",
    "minutesSlept": 487,
    "rating": 5
  },
  {
    "date": "03-29-2014",
    "sleepTime": "03:46",
    "awakeTime": "10:37",
    "minutesSlept": 411,
    "rating": 4
  },
  {
    "date": "03-28-2014",
    "sleepTime": "03:37",
    "awakeTime": "11:44",
    "minutesSlept": 487,
    "rating": 4
  },
  {
    "date": "03-27-2014",
    "sleepTime": "02:03",
    "awakeTime": "10:07",
    "minutesSlept": 485,
    "rating": 4
  },
  {
    "date": "03-26-2014",
    "sleepTime": "03:17",
    "awakeTime": "10:59",
    "minutesSlept": 463,
    "rating": 5
  },
  {
    "date": "03-25-2014",
    "sleepTime": "02:27",
    "awakeTime": "09:55",
    "minutesSlept": 448,
    "rating": 3
  },
  {
    "date": "03-24-2014",
    "sleepTime": "00:55",
    "awakeTime": "07:55",
    "minutesSlept": 421,
    "rating": 4
  },
  {
    "date": "03-23-2014",
    "sleepTime": "01:36",
    "awakeTime": "10:11",
    "minutesSlept": 515,
    "rating": 4
  },
  {
    "date": "03-22-2014",
    "sleepTime": "23:55",
    "awakeTime": "08:00",
    "minutesSlept": 486,
    "rating": 3
  },
  {
    "date": "03-21-2014",
    "sleepTime": "03:11",
    "awakeTime": "07:49",
    "minutesSlept": 279,
    "rating": 2
  },
  {
    "date": "03-20-2014",
    "sleepTime": "01:58",
    "awakeTime": "10:31",
    "minutesSlept": 513,
    "rating": 4
  },
  {
    "date": "03-19-2014",
    "sleepTime": "23:31",
    "awakeTime": "07:33",
    "minutesSlept": 482,
    "rating": 1
  },
  {
    "date": "03-18-2014",
    "sleepTime": "00:34",
    "awakeTime": "09:43",
    "minutesSlept": 549,
    "rating": 4
  },
  {
    "date": "03-17-2014",
    "sleepTime": "00:12",
    "awakeTime": "07:59",
    "minutesSlept": 468,
    "rating": 4
  },
  {
    "date": "03-16-2014",
    "sleepTime": "01:36",
    "awakeTime": "10:07",
    "minutesSlept": 512,
    "rating": 4
  },
  {
    "date": "03-15-2014",
    "sleepTime": "01:58",
    "awakeTime": "10:08",
    "minutesSlept": 490,
    "rating": 4
  },
  {
    "date": "03-14-2014",
    "sleepTime": "01:31",
    "awakeTime": "07:32",
    "minutesSlept": 361,
    "rating": 3
  },
  {
    "date": "03-13-2014",
    "sleepTime": "02:15",
    "awakeTime": "10:00",
    "minutesSlept": 465,
    "rating": 4
  },
  {
    "date": "03-12-2014",
    "sleepTime": "00:40",
    "awakeTime": "08:46",
    "minutesSlept": 486,
    "rating": 3
  },
  {
    "date": "03-11-2014",
    "sleepTime": "01:49",
    "awakeTime": "08:35",
    "minutesSlept": 407,
    "rating": 3
  },
  {
    "date": "03-10-2014",
    "sleepTime": "03:24",
    "awakeTime": "08:35",
    "minutesSlept": 312,
    "rating": 3
  },
  {
    "date": "03-09-2014",
    "sleepTime": "01:09",
    "awakeTime": "08:33",
    "minutesSlept": 384,
    "rating": 2
  },
  {
    "date": "03-08-2014",
    "sleepTime": "02:08",
    "awakeTime": "09:20",
    "minutesSlept": 432,
    "rating": 4
  },
  {
    "date": "03-07-2014",
    "sleepTime": "01:35",
    "awakeTime": "07:42",
    "minutesSlept": 368,
    "rating": 3
  },
  {
    "date": "03-06-2014",
    "sleepTime": "01:50",
    "awakeTime": "08:46",
    "minutesSlept": 416,
    "rating": 4
  },
  {
    "date": "03-05-2014",
    "sleepTime": "00:36",
    "awakeTime": "08:32",
    "minutesSlept": 476,
    "rating": 4
  },
  {
    "date": "03-04-2014",
    "sleepTime": "00:00",
    "awakeTime": "08:29",
    "minutesSlept": 509,
    "rating": 4
  },
  {
    "date": "03-03-2014",
    "sleepTime": "00:44",
    "awakeTime": "08:34",
    "minutesSlept": 470,
    "rating": 3
  },
  {
    "date": "03-02-2014",
    "sleepTime": "01:39",
    "awakeTime": "08:42",
    "minutesSlept": 423,
    "rating": 3
  },
  {
    "date": "03-01-2014",
    "sleepTime": "01:37",
    "awakeTime": "09:31",
    "minutesSlept": 475,
    "rating": 4
  },
  {
    "date": "02-28-2014",
    "sleepTime": "02:23",
    "awakeTime": "07:48",
    "minutesSlept": 325,
    "rating": 1
  },
  {
    "date": "02-27-2014",
    "sleepTime": "02:06",
    "awakeTime": "08:56",
    "minutesSlept": 410,
    "rating": 2
  },
  {
    "date": "02-26-2014",
    "sleepTime": "01:55",
    "awakeTime": "09:31",
    "minutesSlept": 457,
    "rating": 3
  },
  {
    "date": "02-25-2014",
    "sleepTime": "01:34",
    "awakeTime": "08:43",
    "minutesSlept": 429,
    "rating": 4
  },
  {
    "date": "02-24-2014",
    "sleepTime": "00:25",
    "awakeTime": "09:19",
    "minutesSlept": 534,
    "rating": 4
  },
  {
    "date": "02-23-2014",
    "sleepTime": "23:25",
    "awakeTime": "07:17",
    "minutesSlept": 472,
    "rating": 4
  },
  {
    "date": "02-22-2014",
    "sleepTime": "00:31",
    "awakeTime": "13:46",
    "minutesSlept": 75,
    "rating": ""
  },
  {
    "date": "02-22-2014",
    "sleepTime": "00:25",
    "awakeTime": "00:31",
    "minutesSlept": 6,
    "rating": ""
  },
  {
    "date": "02-22-2014",
    "sleepTime": "06:47",
    "awakeTime": "07:00",
    "minutesSlept": 14,
    "rating": ""
  },
  {
    "date": "02-22-2014",
    "sleepTime": "01:41",
    "awakeTime": "06:46",
    "minutesSlept": 305,
    "rating": ""
  },
  {
    "date": "02-21-2014",
    "sleepTime": "03:36",
    "awakeTime": "10:01",
    "minutesSlept": 385,
    "rating": 4
  },
  {
    "date": "02-20-2014",
    "sleepTime": "03:15",
    "awakeTime": "11:03",
    "minutesSlept": 468,
    "rating": 3
  },
  {
    "date": "02-19-2014",
    "sleepTime": "01:54",
    "awakeTime": "09:08",
    "minutesSlept": 434,
    "rating": 4
  },
  {
    "date": "02-18-2014",
    "sleepTime": "01:30",
    "awakeTime": "09:45",
    "minutesSlept": 495,
    "rating": ""
  },
  {
    "date": "02-17-2014",
    "sleepTime": "00:56",
    "awakeTime": "07:45",
    "minutesSlept": 409,
    "rating": ""
  },
  {
    "date": "02-16-2014",
    "sleepTime": "01:53",
    "awakeTime": "09:24",
    "minutesSlept": 452,
    "rating": ""
  },
  {
    "date": "02-15-2014",
    "sleepTime": "00:36",
    "awakeTime": "05:30",
    "minutesSlept": 294,
    "rating": ""
  },
  {
    "date": "02-14-2014",
    "sleepTime": "09:37",
    "awakeTime": "10:26",
    "minutesSlept": 49,
    "rating": ""
  },
  {
    "date": "02-14-2014",
    "sleepTime": "09:13",
    "awakeTime": "09:36",
    "minutesSlept": 24,
    "rating": ""
  },
  {
    "date": "02-14-2014",
    "sleepTime": "02:44",
    "awakeTime": "09:09",
    "minutesSlept": 386,
    "rating": ""
  },
  {
    "date": "02-13-2014",
    "sleepTime": "02:53",
    "awakeTime": "08:52",
    "minutesSlept": 359,
    "rating": 3
  },
  {
    "date": "02-12-2014",
    "sleepTime": "01:51",
    "awakeTime": "09:09",
    "minutesSlept": 438,
    "rating": 4
  },
  {
    "date": "02-11-2014",
    "sleepTime": "04:45",
    "awakeTime": "10:01",
    "minutesSlept": 316,
    "rating": ""
  },
  {
    "date": "02-10-2014",
    "sleepTime": "09:37",
    "awakeTime": "10:00",
    "minutesSlept": 24,
    "rating": ""
  },
  {
    "date": "02-10-2014",
    "sleepTime": "07:18",
    "awakeTime": "09:30",
    "minutesSlept": 132,
    "rating": ""
  },
  {
    "date": "02-10-2014",
    "sleepTime": "01:54",
    "awakeTime": "07:16",
    "minutesSlept": 322,
    "rating": ""
  }
]

wasISleeping.createDate = function(yearX, monthX, dayX, timeX) {
  // Convert date and time strings into numbers
  // timeX must be formatted as 'hh:mm' in 24 hour time, e.g. '12:34'
  const month = parseInt(monthX, 10);
  const day = parseInt(dayX, 10);
  const year = parseInt(yearX, 10);
  const hour = parseInt(timeX.substr(0, 2), 10); // Get characters 0 and 1 from string in format '12:34'
  const minute = parseInt(timeX.substr(3, 2), 10); // Get characters 3 and 4 from string in format '12:34'

  // Create a new Date object
  const date = new Date(year, month, day, hour, minute);
  return date;
}

wasISleeping.events = function() {
  // When the year is chosen, populate the months that have data
  $('#year-selector').on('change', function() {
    // Get the year
    const workingYear = $('#year-selector').val();

    // Set up an array to store the available months
    const monthsInYear = [];

    // Collect the months from all sleep starts and sleep ends in the year
    wasISleeping.dataSet.forEach((entry) => {

      // Store month of sleep start
      if (entry.sleepStart.getFullYear() == workingYear) {
      const entryMonth = entry.sleepStart.getMonth();
        if (monthsInYear.includes(entryMonth) === false) {
          monthsInYear.push(entryMonth);
        }
      }

      // Store month of sleep end
      if (entry.sleepEnd.getFullYear() == workingYear) {
        const entryMonth = entry.sleepEnd.getMonth();
        if (monthsInYear.includes(entryMonth) === false) {
          monthsInYear.push(entryMonth);
        }
      }

    });

    // Sort array of month numbers ascending
    monthsInYear.sort((a, b) => (a - b));

    // Empty the month selector
    $('#month-selector').empty();
    $('#month-selector').append($('<option>')
      .text('Select a month')
      .val('')
    );

    // Build the option markup
    monthsInYear.forEach((monthNumber) => {
      const monthOptionMarkup = $('<option>')
        .text(wasISleeping.monthNames[monthNumber])
        .val(monthNumber);
      $('#month-selector').append(monthOptionMarkup);
    });
  }); // #year-selector on change listener ends

  // When the month is chosen, populate the days that have data
  $('#month-selector').on('change', function() {
    // Get the year
    const workingYear = $('#year-selector').val();

    // Get the month
    const workingMonth = $('#month-selector').val();

    // Set up an array to store the available days
    const daysInMonth = [];
    
    // Collect the days from all sleep starts and sleep ends in the month
    wasISleeping.dataSet.forEach((entry) => {

      // Store month of sleep start
      if (entry.sleepStart.getMonth() == workingMonth && entry.sleepStart.getFullYear() == workingYear) {
      const entryDay = entry.sleepStart.getDate();
        if (daysInMonth.includes(entryDay) === false) {
          daysInMonth.push(entryDay);
        }
      }

      // Store month of sleep end
      if (entry.sleepEnd.getMonth() == workingMonth && entry.sleepEnd.getFullYear() == workingYear) {
        const entryDay = entry.sleepEnd.getDate();
        if (daysInMonth.includes(entryDay) === false) {
          daysInMonth.push(entryDay);
        }
      }

    });

    // Sort array of month numbers ascending
    daysInMonth.sort((a, b) => (a - b));

    // Empty the month selector
    $('#day-selector').empty();
    $('#day-selector').append($('<option>')
      .text('Select a day')
      .val('')
    );
    
    // Build the option markup
    daysInMonth.forEach((dayNumber) => {
      const dayOptionMarkup = $('<option>')
        .text(dayNumber)
        .val(dayNumber);
      $('#day-selector').append(dayOptionMarkup);
    });

  }); // #month-selector on change listener ends

  // When the day is changed, reset the time
  $('#day-selector').on('change', function() {
    $('#time-selector').val('');
  });

  // When the time is changed, warn if it's out of range
  $('#time-selector').on('change', function() {
    // Get the year
    const workingYear = $('#year-selector').val();
    
    // Get the month
    const workingMonth = $('#month-selector').val();

    // Get the day
    const workingDay = $('#day-selector').val();

    // Get the time
    const workingTime = $('#time-selector').val();

    // Create a date
    const workingDate = wasISleeping.createDate(workingYear, workingMonth, workingDay, workingTime);

    // Compare with earliest and latest dates from data
    if (workingDate.getTime() < wasISleeping.dataRange.earliestDate.getTime()) {
      alert('Oops - I hadn\'t yet started sleep tracking. Try a later time.');
      $('#time-selector').val('');
    } else if (workingDate.getTime() > wasISleeping.dataRange.latestDate.getTime()) {
      alert('Oops - I stopped sleep tracking by then. Try an earlier time.');
      $('#time-selector').val('');
    }
  });

  // On form submit, store the user's selections
  $('#date-form').on('submit', function(event) {
    event.preventDefault();

    // Simulate a click to advance screen to the results section
    $('a.submit-scroll-trigger').trigger('click');

    // Create an object to store user date selections
    const dateSelections = {};
    dateSelections.year = $('#year-selector').val();
    dateSelections.month = $('#month-selector').val();
    dateSelections.day = $('#day-selector').val();
    dateSelections.time = $('#time-selector').val();
    
    const selectedDate = wasISleeping.createDate(dateSelections.year, dateSelections.month, dateSelections.day, dateSelections.time);

    // Compare milliseconds since January 1, 1970, 00:00:00 UTC for each date, since directly comparing Date objects is unreliable. More here: https://docs.microsoft.com/en-us/scripting/javascript/calculating-dates-and-times-javascript#comparing-dates

    // Collect entries where selected time falls within range of sleep start and sleep end (in an array)
    const matchingTimes = wasISleeping.dataSet.filter((entry) => {
      return selectedDate.getTime() >= entry.sleepStart.getTime() && selectedDate.getTime() <= entry.sleepEnd.getTime();
    });

    // Create results markup to inject into page
    // let resultsMarkup = '';

    // Check if there were any matches and display the results markup
    if (matchingTimes.length > 0) {
      // h1 - was sleeping
      // p for I slept for x hours something minutes, from start time to end time
      // p ...and i rated it like this!

      const heading = $('<h2>');
      const stats = $('<p>');
      const rating = $('<p>');
      const hours = Math.floor(matchingTimes[0].minutesSlept / 60);
      const minutes = matchingTimes[0].minutesSlept % 60;
      const startTime = matchingTimes[0].sleepStart.getHours() + ':' + matchingTimes[0].sleepStart.getMinutes();
      const endTime = matchingTimes[0].sleepEnd.getHours() + ':' + matchingTimes[0].sleepEnd.getMinutes();
      const entryRating = matchingTimes[0].rating;

      heading.html('I <span class="success-accent">was</span> sleeping!');
      stats.html(`I slept for <span class="success-accent">${hours} hours, ${minutes} minutes</span> from ${startTime} to ${endTime}. `);
      rating.html(`I rated my sleep quality <span class="success-accent">${entryRating} out of 4</span>.`);

      // Put results on the page
      $('.results').empty();
      $('.results').append(heading);
      $('.results').append(stats);
      // If the rating has a value ('no value' is actually an empty string)
      if (entryRating > 0) {
        $('.results').append(rating);
      }

    } else {
      // h1 - wasn't sleeping
      // p I was probably x
      // p The next time I slept was... x

      const heading = $('<h2>');
      const message = $('<p>');
      const tryAgain = $('<p>');

      heading.html('I was <span class="failure-accent">wide awake</span>.');
      message.html('I probably <span class="failure-accent">drank a lot of coffee</span>.');
      tryAgain.html('Try another time!');

      // Put results on the page
      $('.results').empty();
      $('.results').append(heading);
      $('.results').append(message);
      $('.results').append(tryAgain);

    }

    // Display button to try it again
    const reloadForm = $('<form>').addClass('reload-form');
    const reloadButton = $('<input>').attr('type', 'submit').val('Try it again');
    reloadForm.append(reloadButton);
    
    $('.results').append(reloadForm);
    $('.reload-form').delay(1500).fadeTo(800, 1);
  });
}

wasISleeping.findDataRange = function() {
  // Create an array of sleep start times (as number)
  // Find the smallest number
  // Create an array of sleep end times (as number)
  // Find the biggest number

  const startTimes = wasISleeping.dataSet.map(entry => {
    return entry.sleepStart.getTime();
  });

  const endTimes = wasISleeping.dataSet.map(entry => {
    return entry.sleepEnd.getTime();
  }); 

  const dataRange = {};
  dataRange.earliestDate = new Date(Math.min(...startTimes));
  dataRange.latestDate = new Date(Math.max(...endTimes));

  return dataRange;
}

wasISleeping.smoothScroll = function() {
  $('a.scroll-button').smoothScroll({
    speed: 500
  });
}

wasISleeping.transformData = function () {
  // For each object in sleep data array:
  // Split the date string into year, month, day
  // Split the time string into hour, minute
  // Create a Date object for the sleep start time
  // If the sleep time is between 20:00 and 23:59, correct the date to be 1 day prior
  // (e.g. A sleep start of 23:35 and 00:35 both appear in the entry for January 1. 00:35 falls on January 1st, but 23:35 actually falls on December 31.)
  // Create a Date object for the sleep end time
  // Store the sleep start/end Date objects, sleep duration, and sleep rating as properties on an object within a new array

  const transformed = wasISleeping.sleepData.map((entryObject) => {
    // Split the date string into an array
    const dateAsArray = entryObject.date.split('-');

    // Store the values needed for Date creation
    const month = dateAsArray[0] - 1; // Adjust month since JavaScript months are zero-based
    const day = dateAsArray[1];
    const year = dateAsArray[2];
    const time = entryObject.sleepTime;

    // Create a Date object for sleep start time
    const sleepStartDate = wasISleeping.createDate(year, month, day, time);

    // If sleep started after 8pm and before midnight, adjust to one day earlier than specified in data set
    // Compensates for weirdness in how data set handles early bed times
    if (sleepStartDate.getHours() > 20) {
      sleepStartDate.setDate(sleepStartDate.getDate() - 1);
    }

    // Create a Date object for sleep end time
    const sleepEndDate = new Date(sleepStartDate.getTime() + entryObject.minutesSlept * 60 * 1000);

    // Create an object and store our new values
    const sleepEntry = {};
    sleepEntry.sleepStart = sleepStartDate;
    sleepEntry.sleepEnd = sleepEndDate;
    sleepEntry.minutesSlept = entryObject.minutesSlept;
    sleepEntry.rating = entryObject.rating;

    // Return the object to the map method's array
    return sleepEntry;
  });
  // Return the transformed data set array
  return transformed;
}

function init() {
  // Transform a copy of the sleep data into a useable format
  wasISleeping.dataSet = wasISleeping.transformData();

  // Find the range of times in the data set
  wasISleeping.dataRange = wasISleeping.findDataRange();

  // Set up month names
  wasISleeping.monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  // Listen for events
  wasISleeping.events();

  // Set up smooth scrolling
  wasISleeping.smoothScroll();
}

// Runs when the document is ready
$(function() {
  init();
});