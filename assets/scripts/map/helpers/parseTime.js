'use strict'

const date = function (dateTime) {
  const monthHash = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }

  const dayHash = {
    '01': '1st',
    '02': '2nd',
    '03': '3rd',
    '04': '4th',
    '05': '5th',
    '06': '6th',
    '07': '7th',
    '08': '8th',
    '09': '9th',
    '10': '10th',
    '11': '11th',
    '12': '12th',
    '13': '13th',
    '14': '14th',
    '15': '15th',
    '16': '16th',
    '17': '17th',
    '18': '18th',
    '19': '19th',
    '20': '20th',
    '21': '21st',
    '22': '22nd',
    '23': '23rd',
    '24': '24th',
    '25': '25th',
    '26': '26th',
    '27': '27th',
    '28': '28th',
    '29': '29th',
    '30': '30th',
    '31': '31st'
  }

  const month = monthHash[dateTime.split('').slice(5, 7).join('')]
  const day = dayHash[dateTime.split('').slice(8, 10).join('')]
  const year = dateTime.split('').slice(0, 4).join('')
  const date = month + ' ' + day + ', ' + year
  // // console.log(date)
  return date
}

const time = function (dateTime) {
  const hourHash = {
    '00': {hour: '8', amPm: 'pm'},
    '01': {hour: '9', amPm: 'pm'},
    '02': {hour: '10', amPm: 'pm'},
    '03': {hour: '11', amPm: 'pm'},
    '04': {hour: '12', amPm: 'am'},
    '05': {hour: '1', amPm: 'am'},
    '06': {hour: '2', amPm: 'am'},
    '07': {hour: '3', amPm: 'am'},
    '08': {hour: '4', amPm: 'am'},
    '09': {hour: '5', amPm: 'am'},
    '10': {hour: '6', amPm: 'am'},
    '11': {hour: '7', amPm: 'am'},
    '12': {hour: '8', amPm: 'am'},
    '13': {hour: '9', amPm: 'am'},
    '14': {hour: '10', amPm: 'am'},
    '15': {hour: '11', amPm: 'am'},
    '16': {hour: '12', amPm: 'pm'},
    '17': {hour: '1', amPm: 'pm'},
    '18': {hour: '2', amPm: 'pm'},
    '19': {hour: '3', amPm: 'pm'},
    '20': {hour: '4', amPm: 'pm'},
    '21': {hour: '5', amPm: 'pm'},
    '22': {hour: '6', amPm: 'pm'},
    '23': {hour: '7', amPm: 'pm'}
  }

  const hour = hourHash[dateTime.split('').slice(11, 13).join('')]['hour']
  // const adjHour = (parseInt(hour) - 4).toString()
  const amPm = hourHash[dateTime.split('').slice(11, 13).join('')]['amPm']
  const min = dateTime.split('').slice(14, 16).join('')
  const time = hour + ':' + min + amPm
  // // console.log(time)
  return time
}

module.exports = {
  date,
  time
}
