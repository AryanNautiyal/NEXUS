

// Date 

const d = new Date();           // To get current time

console.log(d);

// Output : 2025-08-11T07:26:23.999Z time according to international time zone

console.log(d.toDateString());      // Output : Mon Aug 11 2025

console.log(d.toString());      // Output : Mon Aug 11 2025 12:58:14 GMT+0530 (India Standard Time)

// toDateString() Gives day, date and month whereas toString gives all this plus time also

console.log(d.toISOString());   

console.log(typeof(d));         // Object

// It's accessing or getting date and time from our system only (from system clock)

// It calculates date from milliseconds also like

const da = new Date(1000);      // takes milliseconds in parameter

console.log(da);

// 1000 milliseconds is 1 second so 1 second from 1970

// So in 1970 our systems were being built for date and time so they set this year only



console.log(d.getDate());       // To get date only    

console.log(d.getDay());        // To get day only    

// in this Sun = 0, Mon = 1, Tue = 2, Wed = 3, Thu = 4, Fri = 5, Sat = 6

console.log(d.getMonth());          // To get month only    

// in this Jan = 0, Feb = 1, Mar = 2, Apr = 3, May = 4, Jun = 5, Jul = 6, Aug = 7, Sep = 8, Oct = 9, Nov = 10, Dec = 11

console.log(d.getFullYear());  

console.log(d.getMilliseconds());  

console.log(d.getMinutes());  



/* 

    Why date is taken in milliseconds ?


            -- Let's say if there's a ticket and 2 people simultaneously tried to buy the same ticket

            -- Then it will go to the person who bought it first so here date comparision won't give answer as both are booking for same date

            -- So values that will be useful here will be milliseconds (has more depth)


*/


console.log(d.getTime());       // This gives answer in milliseconds and it is calculated from 1 Jan 1970


// can do this also by this

const now = Date.now();

console.log(now);  



// One more format to write date

const dd = new Date("2022-10-20");

// when we do this to enter our custom date it's format is YYYY-MM-DD and month is default (1-Jan and 12-Dec)

console.log(dd.getDate());

console.log(dd);


// One more format to write date


const dw = new Date("2022-10-20T10:11:10");      // After T it's 10 baj ke 11 minute 10 seconds (T indicates time) 

console.log(dw);

const date = new Date(2024,4,28);           // Entered in number format here 2024-05-27T18:30:00.000Z       Month is 05 as we entered in number format (in number format 0-Jan 11-Dec)

//  Don't write month as 04 or 06 as it gives error only write number 4

// In this as number format so date also 0-29 or 0-30

console.log(date);


// So format new Date(year, month, date, hour, minute, second, millisecond)

// If we enter only 1 parameter then it is milliseconds so first 2 is compulsory to enter



const ddate = new Date();

ddate.setDate(20);
ddate.setFullYear(1999);
ddate.setMonth(3);      // Takes number based

console.log(ddate);


console.log(ddate.toLocaleDateString());

console.log(ddate.toLocaleTimeString());

console.log(ddate.toLocaleString());

console.log(ddate.toUTCString());


// Date Calculation

const date1 = new Date();

const date2 = new Date("2026-04-21");


console.log(date2-date1);       // Gives answer in milliseconds (difference between dates)

console.log(date2>date1);   


// Countdown timer for olymppics

// Days, hour, minute, second 

const date11 = new Date();

const date22 = new Date("2028-07-14T00:00:00");

const datee = date22 - date11;

const days = Math.floor(datee/(1000*60*60*24));

// millisecond to second divide by 1000 then second to minute divide by 60 then minute to hours divide by 60 then hours to days divide by 24

// Hence we get number of days as datee is in milliseconds

console.log(days);

const hour = Math.floor((datee/(1000*60*60))%24);

// Same above logic removed 24 as need hours and mod 24 to get how many hours left for a day to go out of countdown

const minute = Math.floor((datee/(1000*60))%60);

// Similar logic as above

const second = Math.floor((datee/(1000))%60);

// Similar logic as above

console.log(`Olympic CountDownTimer: Days:${days} Hour:${hour} Minue:${minute} Second:${second}`);

