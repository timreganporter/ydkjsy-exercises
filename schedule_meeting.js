const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  var [ , meetingStartHour, meetingStartMinutes ] = 
      startTime.match(/^(\d{1,2}):(\d{2})$/) || [];

  durationMinutes = Number(durationMinutes);

  if (
    typeof meetingStartHour == "string" &&
    typeof meetingStartMinutes == "string"
  ) {
    let durationHours = Math.floor(durationMinutes/60);
    durationMinutes = durationMinutes % 60;
    let meetingEndHour = Number(meetingStartHour) + durationHours;
    let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes;

    if (meetingEndMinutes >= 60) {
      meetingEndHour = meetingEndHour + 1;
      meetingEndMinutes -= 60;
    }

    // for string comparisons
    let meetingStart = meetingStartHour.toString().padStart(2,"0") + ":" + meetingStartMinutes.toString().padStart(2,"0");
    let meetingEnd = meetingEndHour.toString().padStart(2,"0") + ":" + meetingEndMinutes.toString().padStart(2,"0");
    // let meetingEnd = `${meetingEndHour.padStart(2,"0")}:${meetingEndMintues.padStart(2,"0")}`;

    return (
      meetingStart >= dayStart &&
      meetingEnd <= dayEnd
    );
  }
  return false;
}

console.log(scheduleMeeting("7:00", 15));    // flase
console.log(scheduleMeeting("07:15", 30));    // flase
console.log(scheduleMeeting("7:30", 30));    // true
console.log(scheduleMeeting("11:30", 60));    // true
console.log(scheduleMeeting("17:00", 45));    // true
console.log(scheduleMeeting("17:30", 30));    // flase
console.log(scheduleMeeting("18:00", 15));    // flase

