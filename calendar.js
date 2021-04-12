$(document).ready(function (){

    var thisMonth = moment().format('YYYY-MM'); //Ensures dates have the correct month and year formatting
    var eventArray = [ //Array holding all events for the calendar
        {
            title: '5+2 Blitz Arena via Lichess',
            date: thisMonth + '-02'
        },
        {
            title: '3+2 Blitz Arena via Lichess',
            date: thisMonth + '-09'
        },
        {
            title: '12+0 Rapid Swiss via Lichess',
            date: thisMonth + '-16'
        },
        {
            title: '1/2+1 Bullet Arena via Lichess',
            date: thisMonth + '-23'
        },
        {
            title: '10+0 Rapid Arena via Lichess',
            date: thisMonth + '-30'
        }
    ]
    //Clndr jquery function found here: https://github.com/kylestetz/CLNDR and found locally at clndr.js
    $('.calendar').clndr({
        events: eventArray,
        showAdjacentMonths: true //Shows the days before / after a month on the calendar
    })
});