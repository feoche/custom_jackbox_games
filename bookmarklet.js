javascript:(function()%7Bfunction%20getJSON(url%2C%20callback)%20%7Bconst%20xhr%20%3D%20new%20XMLHttpRequest()%3Bxhr.open(%22get%22%2C%20url%2C%20true)%3Bxhr.responseType%20%3D%20%22json%22%3Bxhr.onload%20%3D%20()%20%3D%3E%20%7Bconst%20status%20%3D%20xhr.status%3Bif%20(status%20%3D%3D%20200)%20%7Bcallback(null%2C%20xhr.response)%3B%7D%20else%20%7Bcallback(status)%3B%7D%7D%3Bxhr.send()%3B%7D%3Blet%20game%20%3D%20%24('.page')%5B0%5D.className.match('drawful')%20%3F%20%60drawful2%60%3A%20%60quiplash2%60%3Blet%20lang%20%3D%20%22fr%22%20%7C%7C%20%22en%22%3Blet%20trad%20%3D%20%5B%5D%3BgetJSON(%60https%3A%2F%2Fraw.githubusercontent.com%2Ffeoche%2Fcustom_jackbox_games%2Fmaster%2F%24%7Bgame%7D%2F%24%7Blang%7D.json%60%2C%20(err%2C%20data)%20%3D%3E%20%7Bif%20(err%20!%3D%20null)%20%7Bconsole.error(%60Something%20went%20wrong%3A%20%24%7Berr%7D%60)%3B%7D%20else%20%7Btrad%20%3D%20data%3Bfunction%20loop()%20%7Bif%20(document.getElementById(%60ugc-add-input%60).style.display%20%3D%3D%3D%20%22none%22)%20return%3BsetTimeout(()%20%3D%3E%20%7Bdocument.getElementById(%60ugc-add-input%60).value%20%3D%20trad%5BMath.floor(Math.random()%20*%20trad.length)%5D%3Bdocument.getElementById(%60ugc-add-button%60).click()%3Bloop()%3B%7D%2C%2010)%3B%7D%3Bloop()%3B%7D%7D)%7D)()
