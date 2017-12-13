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

import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import sleepData from './modules/data';
import monthList from './modules/months';

// Create an object for namespacing the app
const wasISleeping = {};

// Store the original data set
wasISleeping.sleepData = sleepData;

// Set up month names
wasISleeping.monthNames = monthList;

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

wasISleeping.displayInstructions = function() {
  const firstYear = wasISleeping.dataRange.earliestDate.getFullYear();
  const lastYear = wasISleeping.dataRange.latestDate.getFullYear();
  const numberOfSleeps = wasISleeping.dataSet.length;
  $('.first-year').text(firstYear);
  $('.last-year').text(lastYear);
  $('.number-of-sleeps').text(numberOfSleeps);
  $('.instructions').fadeTo(500, 1);
}

wasISleeping.events = function() {
  // LISTEN FOR CHANGE IN VALUE OF YEAR SELECTOR
  // When the year is chosen, populate the months that have data & update progress bar
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

    // Write selected year in the progress bar, and display the progress bar
    $('.user-progress').text(workingYear);
    $('.progress-bar').slideDown();
  }); // #year-selector on change listener ends

  // LISTEN FOR CHANGE IN VALUE OF MONTH SELECTOR
  // When the month is chosen, populate the days that have data & update the progress bar
  $('#month-selector').on('change', function() {
    // Get the year
    const workingYear = $('#year-selector').val();

    // Get the month
    const workingMonth = $('#month-selector').val();

    // Set up an array to store the available days
    const daysInMonth = [];
    
    // Collect the days from all sleep starts and sleep ends in the month
    wasISleeping.dataSet.forEach((entry) => {
      // Store day of sleep start
      if (entry.sleepStart.getMonth() == workingMonth && entry.sleepStart.getFullYear() == workingYear) {
      const entryDay = entry.sleepStart.getDate();
        if (daysInMonth.includes(entryDay) === false) {
          daysInMonth.push(entryDay);
        }
      }
      // Store day of sleep end
      if (entry.sleepEnd.getMonth() == workingMonth && entry.sleepEnd.getFullYear() == workingYear) {
        const entryDay = entry.sleepEnd.getDate();
        if (daysInMonth.includes(entryDay) === false) {
          daysInMonth.push(entryDay);
        }
      }
    });

    // Sort array of days ascending
    daysInMonth.sort((a, b) => (a - b));

    // Empty the day selector
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

    // Update the progress bar
    $('.user-progress').text(wasISleeping.monthNames[workingMonth] + ' ' + workingYear);
  }); // #month-selector on change listener ends

  // LISTEN FOR CHANGE IN VALUE OF DAY SELECTOR
  // When the day is changed, reset the time & update the progress bar
  $('#day-selector').on('change', function() {
    $('#time-selector').val('');

    // Get the year
    const workingYear = $('#year-selector').val();
    
    // Get the month
    const workingMonth = $('#month-selector').val();

    // Get the day
    const workingDay = $('#day-selector').val();

    // Update the progress bar
    $('.user-progress').text(wasISleeping.monthNames[workingMonth] + ' ' + workingDay + ', ' + workingYear);
  });

  // LISTEN FOR CHANGE IN VALUE OF TIME SELECTOR
  // When the time is changed, warn if it's out of range & update progress bar
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
      $('.warning').html('<p>Oops - I hadn\'t yet started sleep tracking. Try a later time.</p>');
      $('#time-selector').val('');
    } else if (workingDate.getTime() > wasISleeping.dataRange.latestDate.getTime()) {
      $('.warning').html('<p>Oops - I stopped sleep tracking by then. Try an earlier time.</p>');
      $('#time-selector').val('');
    }

    // Update the progress bar
    $('.user-progress').text(wasISleeping.monthNames[workingMonth] + ' ' + workingDay + ', ' + workingYear + ' at ' + workingTime);
  });

  // LISTEN FOR FORM SUBMIT (DATE FORM)
  // On form submit, store the user's selections
  $('#date-form').on('submit', function(event) {
    event.preventDefault();

    // Create an object and store user date selections
    const dateSelections = {};
    dateSelections.year = $('#year-selector').val();
    dateSelections.month = $('#month-selector').val();
    dateSelections.day = $('#day-selector').val();
    dateSelections.time = $('#time-selector').val();

    // Only look for matches if all of the selections are filled out
    if (dateSelections.year.length === 0 || dateSelections.month.length === 0 || dateSelections.day.length === 0 || dateSelections.time.length === 0) {
      // Throw a warning and don't proceed
      $('.warning').html(`<p>Oops - Scroll up to complete your selections!</p>`);
    } else {
      // It's all good - Run the program

      // Clear any warnings
      $('.warning').empty();

      // Simulate a click to advance screen to the results section
      $('a.submit-scroll-trigger').trigger('click');

      // Create a Date object with the selections
      const selectedDate = wasISleeping.createDate(dateSelections.year, dateSelections.month, dateSelections.day, dateSelections.time);
  
      // Compare milliseconds since January 1, 1970, 00:00:00 UTC for each date, since directly comparing Date objects is unreliable. More here: https://docs.microsoft.com/en-us/scripting/javascript/calculating-dates-and-times-javascript#comparing-dates
  
      // Collect entries where selected time falls within range of sleep start and sleep end (in an array)
      const matchingTimes = wasISleeping.dataSet.filter((entry) => {
        return selectedDate.getTime() >= entry.sleepStart.getTime() && selectedDate.getTime() <= entry.sleepEnd.getTime();
      });
  
      // Check if there were any matches and display the results markup
      if (matchingTimes.length > 0) {
        const heading = $('<h2>');
        const stats = $('<p>');
        const rating = $('<p>');
        const hours = Math.floor(matchingTimes[0].minutesSlept / 60);
        const minutes = matchingTimes[0].minutesSlept % 60;
        const startTime = matchingTimes[0].sleepStartString;
        const endTime = matchingTimes[0].sleepEndString;
        const entryRating = matchingTimes[0].rating;
  
        heading.html('I was <span class="success-accent">sleeping</span>!');
        stats.html(`I slept for <span class="success-accent">${hours} hours, ${minutes} minutes</span> from ${startTime} to ${endTime}. `);
        rating.html(`When I woke up, I rated my sleep quality <span class="success-accent">${entryRating} out of 4</span>.`);
  
        // Put results on the page
        $('.results').empty();
        $('.results').append(heading);
        $('.results').append(stats);
        // If the rating has a value ('no value' is actually an empty string)
        if (entryRating > 0) {
          $('.results').append(rating);
        }  
      } else {
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

      // Expand the results section to fill the screen
      $('#results-section').addClass('fullscreen-section');
  
      // Display button to try it again
      const reloadForm = $('<form>').addClass('reload-form');
      const reloadButton = $('<input>').addClass('reload-button').attr('type', 'submit').val('Try it again');
      reloadForm.append(reloadButton);
      
      $('.results').append(reloadForm);
      $('.reload-form').delay(1000).fadeTo(800, 1);
    }
    
  }); // end of on form submit event listener
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
    sleepEntry.sleepStartString = entryObject.sleepTime;
    sleepEntry.sleepEndString = entryObject.awakeTime;
    sleepEntry.minutesSlept = entryObject.minutesSlept;
    sleepEntry.rating = entryObject.rating;

    // Return the object to the map method's array
    return sleepEntry;
  });
  // Return the transformed data set array
  return transformed;
}

function loadParticles() {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', '../assets/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });
}

function init() {
  // Transform a copy of the sleep data into a useable format
  wasISleeping.dataSet = wasISleeping.transformData();

  // Find the range of times in the data set
  wasISleeping.dataRange = wasISleeping.findDataRange();

  // Output instructions
  wasISleeping.displayInstructions();

  // Set up smooth scrolling
  wasISleeping.smoothScroll();

  // Listen for events
  wasISleeping.events();

  // Load particles
  loadParticles();
}

// Runs when the document is ready
$(function() {
  init();
});