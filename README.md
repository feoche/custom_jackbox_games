### Purpose
Extra custom "Make Your Own" questions for [Quiplash2](https://store.steampowered.com/app/434170/The_Jackbox_Party_Pack_3/)

### Current Support
- [x] French (fr_FR) - [Quiplash XL](https://www.trueachievements.com/a208499/quiplash-xl-back-talk-achievement), [Cards Against Humanity](http://s3.amazonaws.com/cah/CAH_FrenchByCluchier.pdf)
- [x] English (en_US) - [Quiplash XL](https://www.trueachievements.com/a208499/quiplash-xl-back-talk-achievement)  
...

### Bookmarklet
You'll find below the bookmarklet to inject these questions in Quiplash 2

1. Create a "Make Your Own" room in Quiplash 2
2. Go to jackbox.tv on your browser, log in using a nickname and the display room code
3. Create a new episode, add a title to it
4. Add this bookmarklet to your bookmarks, then click on it  
  `javascript:(function()%7Bfunction getJSON(url%2C callback) %7Bconst xhr %3D new XMLHttpRequest()%3Bxhr.open("get"%2C url%2C true)%3Bxhr.responseType %3D "json"%3Bxhr.onload %3D () %3D> %7Bconst status %3D xhr.status%3Bif (status %3D%3D 200) %7Bcallback(null%2C xhr.response)%3B%7D else %7Bcallback(status)%3B%7D%7D%3Bxhr.send()%3B%7D%3Blet game %3D %24('.page')%5B0%5D.className.match('drawful') %3F %60drawful2%60%3A %60quiplash2%60%3Blet lang %3D "fr" %7C%7C "en"%3Blet trad %3D %5B%5D%3BgetJSON(%60https%3A%2F%2Fraw.githubusercontent.com%2Ffeoche%2Fcustom_jackbox_games%2Fmaster%2F%24%7Bgame%7D%2F%24%7Blang%7D.json%60%2C (err%2C data) %3D> %7Bif (err !%3D null) %7Bconsole.error(%60Something went wrong%3A %24%7Berr%7D%60)%3B%7D else %7Btrad %3D data%3Bfunction loop() %7Bif (document.getElementById(%60ugc-add-input%60).style.display %3D%3D%3D "none") return%3BsetTimeout(() %3D> %7Bdocument.getElementById(%60ugc-add-input%60).value %3D trad%5BMath.floor(Math.random() * trad.length)%5D%3Bdocument.getElementById(%60ugc-add-button%60).click()%3Bloop()%3B%7D%2C 10)%3B%7D%3Bloop()%3B%7D%7D)%7D)()`
5. Profit !

(Developed by Jackbox Games, Inc. Game and Software ©2016 Jackbox Games, Inc. All rights reserved.)
