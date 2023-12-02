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
