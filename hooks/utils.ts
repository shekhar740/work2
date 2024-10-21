export function getFormattedDateInIST(): string {
    // Create a date object for the current date and time
    const now = new Date();
  
    // Define options to extract day, month, and weekday separately
    const dayOptions: Intl.DateTimeFormatOptions = { day: 'numeric', timeZone: 'Asia/Kolkata' };
    const monthOptions: Intl.DateTimeFormatOptions = { month: 'long', timeZone: 'Asia/Kolkata' };
    const weekdayOptions: Intl.DateTimeFormatOptions = { weekday: 'long', timeZone: 'Asia/Kolkata' };
  
    // Create formatters for each part
    const dayFormatter = new Intl.DateTimeFormat('en-IN', dayOptions);
    const monthFormatter = new Intl.DateTimeFormat('en-IN', monthOptions);
    const weekdayFormatter = new Intl.DateTimeFormat('en-IN', weekdayOptions);
  
    // Get the formatted day, month, and weekday
    const day = dayFormatter.format(now);
    const month = monthFormatter.format(now);
    const weekday = weekdayFormatter.format(now);
  
    // Combine them to form the desired output (1 October, Tuesday)
    return `${day} ${month}, ${weekday}`;
  }
  