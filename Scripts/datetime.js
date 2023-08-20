var elem = document.querySelector('[data-toggle="datepicker"]');
// Create a new datepicker instance
var datepicker = new Datepicker(elem, {
    // Set the button class to match Bootstrap 5.3
    buttonClass: 'btn',
    // Set the format of the date value
    format: 'dd-mm-yy',
    // Set the autohide option to true
    autohide: true,
    // Other options...
});