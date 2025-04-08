export const formatDateTime = (timestamp: string): string => {
  const now = new Date()
  let date = now
  if (timestamp) date = new Date(timestamp)
  const months = date.getMonth()
  const days = date.getDate()
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  const MM = months + 1 < 10 ? `0${months + 1}` : months + 1
  const DD = days < 10 ? `0${days}` : days
  const YYYY = date.getFullYear()
  // const AMPM = hours < 12 ? 'AM' : 'PM';
  // const HH = hours > 12 ? hours - 12 : hours;
  // const MinMin = (minutes < 10) ? `0${minutes}` : minutes;
  // const SS = (seconds < 10) ? `0${seconds}` : seconds;

  return `${MM}/${DD}/${YYYY}`
}

export const formatDatePretty = (timestamp: string): string => {
  const date = new Date(timestamp)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  // Add ordinal suffix
  const suffix = ['th', 'st', 'nd', 'rd']
  const v = day % 100
  const ordinal = suffix[(v - 20) % 10] || suffix[v] || suffix[0]

  return `${month} ${day}${ordinal}, ${year}`
}

export const formatDateFull = (timestamp: string): string => {
  const date = new Date(timestamp)
  const months = [
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
    'December',
  ]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  // Add ordinal suffix
  const suffix = ['th', 'st', 'nd', 'rd']
  const v = day % 100
  const ordinal = suffix[(v - 20) % 10] || suffix[v] || suffix[0]

  return `${month} ${day}${ordinal}, ${year}`
}
