export const formatDate1 = (dateString: string) => {
    //mmmm dd, 'yy
    var date = new Date(dateString);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    return months[month] + ' ' + day + ', \'' + (year % 100);
}

export const formatDate2 = (dateString: string) => {
    //day, mmmm dd yyyy
    var date = new Date(dateString);

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var day = days[date.getDay()];
    var month = months[date.getMonth()];
    var dateNumber = date.getDate();
    var year = date.getFullYear();

    return day + ', ' + month + ' ' + dateNumber + ' ' + year;
}

export const calculateDates = (option) => {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // January is 0 in JavaScript
    var today = currentDate.getDate();

    var from, to;

    switch (option) {
        case 0:
            from = year + '-' + (month < 10 ? '0' + month : month) + '-01';
            to = year + '-' + (month < 10 ? '0' + month : month) + '-' + today;
            break;
        case 1:
            if (month === 1) {
                year -= 1;
                month = 12;
            } else {
                month -= 1;
            }
            var lastMonthDays = new Date(year, month, 0).getDate(); // Get the number of days in the last month
            from = year + '-' + (month < 10 ? '0' + month : month) + '-01';
            to = year + '-' + (month < 10 ? '0' + month : month) + '-' + lastMonthDays;
            break;
        case 2:
            var lastThreeMonths = [];
            for (var i = 2; i >= 0; i--) {
                var prevMonth = month - i;
                var prevYear = year;
                if (prevMonth <= 0) {
                    prevMonth += 12;
                    prevYear -= 1;
                }
                lastThreeMonths.push(prevYear + '-' + (prevMonth < 10 ? '0' + prevMonth : prevMonth));
            }
            from = lastThreeMonths[0] + '-01';
            to = year + '-' + (month < 10 ? '0' + month : month) + '-' + today;
            break;

        case 3:
            var lastThreeMonths = [];
            for (var i = 5; i >= 0; i--) {
                var prevMonth = month - i;
                var prevYear = year;
                if (prevMonth <= 0) {
                    prevMonth += 12;
                    prevYear -= 1;
                }
                lastThreeMonths.push(prevYear + '-' + (prevMonth < 10 ? '0' + prevMonth : prevMonth));
            }
            from = lastThreeMonths[0] + '-01';
            to = year + '-' + (month < 10 ? '0' + month : month) + '-' + today;
            break;
        case 4:
            from = (year - 1) + '-01-01';
            to = (year - 1) + '-12-31';
            break;
        default:
            // Handle default case
            break;
    }

    return { from: from, to: to };
}


export const formatDate3 = (dateString) => {
    // convert mmm dd, yyyy to yyyy-mm-dd
    var parts = dateString.split(' ');
    var monthStr = parts[0];
    var dayStr = parts[1].replace(',', ''); // Remove comma
    var yearStr = parts[2];

    // Map month names to their numeric representation
    var months = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
        'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    };

    // Get the numeric representation of the month
    var month = months[monthStr];

    var formattedDay = dayStr.length === 1 ? '0' + dayStr : dayStr;

    return yearStr + '-' + month + '-' + formattedDay;
}