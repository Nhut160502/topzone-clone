// export const countD = () => {
//   const second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//     day = hour * 24

//   const countDown = new Date('2023-12-19T23:59').getTime()

//   //   console.log(countDown)

//   const x = setInterval(function () {
//     const now = new Date().getTime()
//     const distance = countDown - now

//     // document.getElementById('days').innerText = Math.floor(distance / day)
//     if (Math.floor((distance % day) / hour) < 10)
//       document.getElementById('hours').innerText = '0' + Math.floor((distance % day) / hour)
//     else document.getElementById('hours').innerText = Math.floor((distance % day) / hour)

//     if (Math.floor((distance % hour) / minute) < 10)
//       document.getElementById('minutes').innerText = '0' + Math.floor((distance % hour) / minute)
//     else document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute)

//     if (Math.floor((distance % minute) / second) < 10)
//       document.getElementById('seconds').innerText = '0' + Math.floor((distance % minute) / second)
//     else document.getElementById('seconds').innerText = Math.floor((distance % minute) / second)

//     //do something later when date is reached
//     if (distance < 0) {
//       clearInterval(x)
//     }
//     //seconds
//   }, 0)
// }

export const getTime = (time) => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24

  const distance = new Date().getTime() - new Date(time).getTime()

  const year = new Date().getFullYear() - new Date(time).getFullYear()
  const newdDay = Math.floor(distance / day)
  const week = Math.floor(newdDay / 7)
  const newHour = Math.floor((distance % day) / hour)
  const newMinute = Math.floor((distance % hour) / minute)

  console.log(week)

  if (year > 0) {
    return (
      new Date(time).getDate() +
      '/' +
      (new Date(time).getMonth() + 1) +
      '/' +
      new Date(time).getFullYear()
    )
  } else {
    if (week === 0) {
      if (newdDay > 0) {
        return newdDay + ' ngày trước'
      } else {
        if (newHour > 0) {
          return newHour + ' giờ trước'
        } else {
          return newMinute + ' phút trước'
        }
      }
    } else if (week === 1) {
      return Math.floor(newdDay / 7) + ' tuần trước'
    } else {
      return new Date(time).getDate() + '/' + (new Date(time).getMonth() + 1)
    }
  }
}
