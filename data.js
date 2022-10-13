const maze = `
...W...WW...W.....W.......W...WW..W..W...W.....W.WW..W.W...W.W..W.W.W...W...W.W.....W.W...W...WWW...
W..W.WWWW.W.WWWW.W...W.W...WW....W.W.....WWW.WW...W...W.W.....W.W...W...WW..W..W.WW.....W.W....W..W.
WW....W.W.WW..W.W.........W...W.....................W..W.W....WW..WW...WWW.WWW.....W.WW........WW...
...............W.....WWW..W...........W...WW...W....W.W.WW......WW....WW..............W.WW.W......W.
W...W..WW.WWW..W.W.........W.WW...WW....W...W...W...WW....W......W.W....WW..W...W.W.W....WW..W...W.W
.W.W...W...W.WWWW..WW.....W...WW...WW..W.W..W......W.........WWW.W..W..W...WWW......W.......WW..W...
W..WWW..WWWW...WW....W.....W.....W...W..W.WWW..WW.....W.........W....WW..WW...W.....W..WW.W.W..W.WW.
.........W........W.....W..W.W..WW...W...W.....W.........W..WW......W..WW...W...W.WW..W...W..W.W.W..
.W..W.W..W..W.W...W.....W..W..W...........W..W....W.....W..W.W...........W...WWW..WW.....WW.........
.....WW.W.W.........W.W...W..W.W..W.......W................W.W.......W........W.W.W.................
...W...WWWW...W....W.......W.W......W.W........WW.............W..W.W........W...WW..WW.W.W...WWW...W
WW.W.WW...........WW.W.W.W..W...WW.W.W.W....W.............W.....W....W.....W.WW.........W...W...W..W
.....W...W.......W...W..W...W.WW.....W....WW.WW.W.WWW..W..W....W.....W....WW......WW.W...W.WW......W
...WW....W...W..W....W.WWWW......W.W..W.W...W....................WW.WW..W...W.W...W.W..WW......W.WWW
.W......W......W.W..W...W.W..WW........W.W...W..W...W.W.W..W.....WWWW..WW.....W....W.WW....WWW..W.W.
W...WWWWWW.WW.....W.W.W...W.......W.............W...W..WW..W....W...W..W.W..WWWW...W...WW..W.W..W...
.......W......W........W.WWW...........W.W...WW..W..WWWW.W..WW.W.WWWW..W....WW..WW...W.WW...W.WWW.W.
.......WW.........W...................W........W..W...W....WW...W.........W..W.....WWW.....WW.WWW...
.WW.......W..W.....WW.W..W.W.W..W..W......W..W........W..WW..W...WWWWW.WW......WW.W...W.W...........
.......W..WW...W..W.....W..W...W.WWW.......W..WWWW......W.W.......W.W.......W.......W..W...W.W...W..
..W..W..W.W.W...W..WW....WW........W...W...W...W........WW.WW....W.W.....W...W......W...WW..W...W...
.W...WWW.WW.W.......W....W.......WW..W........W.W.W.W..WW....WW...W.W..W.WW.........W...W...W.....WW
...W...W..WW.W.W..W.......W.W.W..W...W.W.......W....W.....W.........W.......WWWWW.W...W..WW.W.WWW...
...WW....W.W.W.WWWW.....W.W.....WW.W.WW..W.....WW.W.....W......WW...W..W.W.W..W.WWW........W.W..W...
.W............W.W.W.....WW...WW..W..W.W.W.W.W.W.W..W............W....WWWW.W...W.W.W...W.W.....W.....
..W..W..W.....W......W...W..WW.....WW.WW..W......WW.....W..W............W.W...WW.W.W..W....WWW...W..
..W.....W...WWW.W.......W..W......W.W........WWWWW.W.W.W.........WW..WWWW..WWW...W.....WWW..W...W...
....W..WW...............W.......W.W....W.WW...WW......W....W.W.WWW..WW...W..W....WW.....W..W.W.W....
..W....................W..WW..W...W.W..WWW..W..W...W....WW..W.W..W..W.......WW..W.........W.W....W.W
.WW....W.W.W......W....W.....WWW..W.........W.W.W..W...W..W..W......W..W..W...WW..W.W..WW...W.W..W..
.WW......WW.W.W.....W..W........W.W.WW..W...W.WW...W..W..W...W..W.W.W.......WW.........WW..WW...WWWW
.W..W...W....W.W.WW...W....W........W.W.WWW....WW....W.................W.W....W..W..........W....WW.
...W.W........W.W.............W.....W.....W...WWW..WW.W.....W......W..........W....W..WWW.W..W.WW...
....W..W....W..W.W......W.....W.W....W....WW..WWWW..........W......WW..W.W...W.W..W..W.......W.W....
..WW.W.....W............WW.......W.........WW..........W....W.......W..W..W......WW.W...............
..WW.....W....W...........W.W.....W.WW......WW...W.W..W...W...WW.W.W.W.W..WW....W.W......W......W.WW
...WW...W..W.....WWWW..W......WWW.W......WW.....W.....W...W.W....WWW.W.W.........W..W.W..W......WW.W
....W.............W.......W...W............W..W.W..W..WWW.W.WWWW............WW..W.....W.....WWW..W..
.W.....W...W........W.W....WW...WW.W...W...WW..WW......W..W...WW.W..W......W..WW..............WW....
W.....W.W........WW.W.......W.WWW.WW.W.W.......W.W..W..WW..WW...W...W..W...W.W......W...W..W...WWW..
...W........W...W...WWW..W.........W.....WW.W...W.WW....WW..WWW......W.............W.W.W.....WWW...W
.......W.W.WWW..W..W.WWW.W...W......W.WWW.....W.WW...W..W.......W.W.WWWW.W........W..W....W.......W.
..W...W..W....WWW..WW..WWW......WW...W......WW..W.....WW......WW...WW....WWW..W...W.W.............W.
..W.....W...WW..W.W........WW...W...W...W.W.....W..W..W.......WW....W.....W.............W.....W.W.W.
.....W.......W...W.W.WW...W.W..WW.WW.......W....W.....WW....W..WW....W.........W..WWWW......W..WW...
W...W...W...W..W...W..WW.W...........W.......W...W...W.....W....WW..W.W.W..W..W........W.W.......W..
..W........WW...W..WW.W.WWWW....................W.........W.WW.W.WW....WW..W........WW........W.....
........WW..........W..........WW....WWW....W.W.W.......W..W...W.....WWW..WWWWWW....W.W..W.W.W...W..
....W.W...W.W.W...W.W.WWWWW.W....W..W....W........W........W.......W...W.....W.....W..W...W..W......
..W..W.W...W..W...W.W...W...WWWW.........WW..WW...W....W.W...W.....W.W.W....WW.....W.......W...W....
........W.........W.W...WW.....W.W.W.........W.W........W.......WW...........W.W...W....W...W.WWWW.W
.W.W...WWW...WW....W..W.W..W...WW...WWW.WW.....WW.W.W.W........WW....W.WW....W....W...WW......W...W.
W......W..WW..WWWWW........WW..WW.W...WW.W....W...W.W...W........W.....WW....W.W......W..WWW....W...
.W.WW......W....WW......W.....W.........WW...W...W...W...W...W.....W..W........WWW.W.W..W.W.W.W.....
....W.W....W.W..W....W.WW.W.....W......W....W...WWW.W...W...WW.W.WW....W.....W....W..W....WW...W....
..W......WW.WW..W........WW..W.W.....WW........W....WW...WWW..WWWW............W....W..WW......WWWWW.
.W.W............W..W...WWWW..W...W.W...W.WW.....W..W.W.........WW..W..W.WW....W..W......W....W.W.WW.
WW.....W........W...W.....W.....WW.WW.....W....W..W.W..W......WW.....W......WW..W.W.W.............WW
...W.W...W.WW........W...W.....WW..W.W.W..W.WWWW..WW....W...W.W....W.....WWW...WWW.W...WW..W..W.W...
..W...W.....WW....W.............W.WWW.....W.....WW...W...W.WWW..W....W.WW.......WW.....WW.....W.....
............W...W........W.W......WW...WWW.WWW.W.W..W....W....W....WW.....WW.....W..W.W..W..W.W...W.
...W.W....WW...W....W.....W..W....WWW......W.W......WWW..............WW..W.W.W.........W.W...W.W....
........W...W.W....W.......W.W..WW......W...W..........W..WW.W.................W.....W.........W....
W...W..WW.......W.WW.....W.W.......W...WW.W........W....W.....W..........W..W.....W.WW....W.........
.....W....WW..WW...WW........W.W....W..W.....W..W........WWWW..........W...W.W...W.WW..WW.WW..WW.W..
...W..W....WWWW.........W...........WW...WW.......W.W.....WW.WW.....W......W....WWW.W....W....WW.W.W
W......W......W.W.WW........W.W..W....W......W.W......W..WW...W..W....W...W.W.W.W...W.W....W..W.W...
..WW........W......WW...W.W....W...W..W.WW.........W.W......W..W..WW.......W..W...........WW..W...WW
W..W.....W.....WW...WW...W.WW.W.WW..W....W...W...W...W....W......W..W.......W........W.W..W.W.....WW
W.W..W..W...W..W.W.....W...W..W.WW......W.WW..WW..W..W.....WW...W.....W..W..W..W..W.....WW.W..WW...W
...WW.....W.W......W...WW..WWW.....W..W..W.......W..W....W.WW........WW..W....WW.W...W...W.W..WWW...
.W...W.WW.WW.........W.W..WW.W.W.W...WWW..WWW..W.......W.....W....W.......WW.WW..W....WW........W.W.
..W.....WW..WW....W..W...W.....W.WW.W.W..W.W.WW..W.WWW.....WW...W.WW..W.W........WWW........W.WW....
.W.W..W.WW.W..W......W.....W..W.............W...WW...W..W...W....W..WW......WWWWWW......W..WW.W...WW
.....W........WWWWWW.W.W..WW.W.WW.W...WWW..W..WWWW.W....W...W...W......W.......W.....W....WW..W....W
..W....WWW...WW...W..W....W.WW....W..WW.W..W........W....WW...........W........W.W...............WW.
...WWWW...W..WWW......W....W....W..W.WW.....W..W......W....W..W..W.....W....W.W..WW........W.W...W..
.W.....W....W.W.WWW..W..W...W......WW....W..W.......W........W.W....W.W.......W..WW.W..W....W...W...
.....WW.W.WW...WWWW.WW..W.WW....W...W......W..W.WW.W...W......W.WW.....W.W..W..W.....W.............W
..WW..W............WW....W.........W..W....WWW.W....W.............WW..W.......WW..W......W...W.W...W
....W...W...W.WW....WW..W..W..........W..W....W.W...WW......W.W.WW.W.W...W....WW.W...W.W...W.......W
....W..W.......WW.....W..W..W........W...........WW.W.WWW......W.....WW.W.W..W.WWW....W...WW...WW.WW
..W...WW...W..WW..W.W.W...W........W.....W.....W.W...........W..W.......W..W...W.....W...W......WW..
...WW....WW.....W.W.WW..W..W.....WW..W...WWW...W...W.WW.WW...W.WWW..WWW.....W..WW..WW...W..W......W.
....W....W..WW.W.......W....WW..........W....W.....WW.........WW...W...W............W..W.....W.W..WW
...........W.W....W...WWW...W.W..........W...WW.......WWW.WWW.W....W......W......W.W.....W.W......WW
..W...WW....WWW.......W..W.............WW.W.W....W.W..WWWW.W....W....W........W..W.W...W..WWWW...W.W
........W...W...WW.W..W.WWW...W.W...W.WW.........W....W.W..WW....W...W.W.....WW...W...W...W....W.W.W
W............WW.....W..W..W.....W..W..W.W.......W..WW..W.W....WW...W....WW......W...WW....W.........
.WW.W.....W.WW..W..W....WW..............WW.W.WW.W..W...W.....W...W..W...W..W....W......WWW..W.WW.W..
W..W.........W........W........W...W...W..W...WWW.W.WW.W...WWW.W.W......WW........W...WW.....W..W.WW
....W..W.....W..W.W..W..W..WWWWWWW......WW...W.W...W...W.W...WWWW..W.W.W.W...W..W....W........W....W
.........WW.....W...WW.....WW...W.........W.....WWWW..WW...WW.W.W..W.W.WW...........W.W...W.W..W..WW
...W....WWW.....W.W.W..W........WW....W.W........W...W......W..W.........W.W...WW...WWWW.W..W..W..W.
W.....W......W...W....W......WW..........WW..W.W........W....WW..WW.W.........W..W.....W..W...W..W..
...W.....W.WWW..WW..W....W........WW.WW.....W...WW.....W.WW............WWWW...W...W...WW.W.W...W....
......W.WW..................WW....WW......W....W...WW....W...WW..W....W..W.W.......W.W............W.
WWW..W...W.....WWW..W.WWW.W...W..W......W..W.W.......W.W.............W.WW.WW.W.W.WW.W..............W
WW...W........W..WW...WWW.W.W..........W....W.W.W........W..WW....WW.W....WWWW......WW..W..WW.......
...W..WW..W....WWW...W.WW...W..W......W..W.W..W.W.........W..W..W..W..W.W.......W.W...W.WW.......W..`