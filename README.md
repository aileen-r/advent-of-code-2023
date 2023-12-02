# Advent of Code 2023

Python was fun last year but the amount of learning I had to do for each challenge (all FIVE that I managed) was too prohibative a hurdle for me.

I'll definitely go back to Python one year, but this year I want to challenge myself to...actually solve the challenges. So I'm working with JavaScript, my old faithful.

I remember running into problems in 2021 when using JS for Advent of Code and thinking "this would be a lot easier to solve with Python matrices".

Since then, I feel like I have upskilled quite a lot when it comes to processing data and data structures in JavaScript, thanks to the problems I work on at Dayshape. If I run into the same hurdles and have to do, like, matrix multiplication (that's what I hit in 2021 iirc), I'll just find an npm package.

Truly, I just want to actually complete this this year. Here we go...

## Day 01

I forgot how much of Advent of Code is setting up a project how you like. Damn carriage returns and trying to figure out if synchronous file reading is okay...

Some simple regex. The complexity comes in part 2 with finding and replacing letter spellings with digits, i.e. "eight" becomes "8".

The challenge is with overlapping characters in a string like "eightwothree". Should this become "823" or "83"? Since we're only interested in the first and last digits, we would ultimately end up with 83 in both cases. That's the problem with the examples given. They don't show an example like "eightwo", which would end up as either 82 or 88, depending on how the find and replace should work. I am assuming find and replace runs from string start to end and by replacing "eight" with "8", the character "t" has been used up and therefore "eightwo" becomes 88.

So I got the answer wrong. I've either made a coding error, of my assumption was incorrect and "eightwothree" should be interpreted as "823". I'll adjust for the latter and see what I get.

As I started looking into how to do this, I found I'd need lookahead or lookbehind regex ([this blog entry](js find and replace with lookahead regex) was helpful). This felt like a lot of effort so I stopped by the subreddit to confirm I was on the right track. I was. Damn, this is savage for day 1.

## Day 02

This was much easier for me because there weren't any edge case "gotchas" with the puzzle input compared to the test input.

Most of the work in this one is taking a string input and transforming it into well-structured data. Once my data was structured how I wanted it (an array of "games", each of which contains an array of "draws", and a "draw" contains an object with the count of each block colour), doing the necessary calculation methodically was simple.

On another note, I'm always a bit embarassed by the lines of code I commit for these problems. The internet is full of leet code types with single-line solutions, while I'm declaring so many functions and variables. I do prefer my approach for readability as well as creating smaller units for testing, but I still can't quite shake that impostor syndrome-adjacent feeling.

It's worth noting that while I'll avoid the obvious performance sins, I'm not optimising for speed until the challenge requires it.
