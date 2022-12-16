# Javascript Frontend Developer Test

This test is intended for prospective Javascript Developers focusing on Full Stack side to join PT Lussa Teknologi Global. You need to do this test first before joining our team. Happy Coding and Good Luck!

## How To

- Fork this repositories into your own
- Your time spent to solve this problem are counted as your coding speed performance, faster you complete the test, then bigger the score
- You can write your solution using this tools https://playcode.io/new/ or you can use installed NodeJS on your local machine instead
- Follow the rules and answer the Tests below
- Email your result (forked repository URL) to **[web.jobs@lussa.net](mailto:web.jobs@lussa.net)** and **[jidni@lussa.net](mailto:jidni@lussa.net)** with following email subject `JSFS - [Full Name] - [WA Contact]`. Example : `JSFS - Lussa Alien - 0811 234 5678`

## How To Execute The Program

- if use vs code, you can open the folder where you saved the program file
- Open Integrated Terminal
- On Terminal you can type : node (file_name).js
- enter

- if not use vs code like notepad, you must install node js, and then open node terminal
- On Node Terminal you can type : node (file_name).js
- enter

## Test 1

This test is a general coding test to check your algorithm skill

### Rules

- Write your solutions in test1 directory (create a new folder named `test1`)
- Solution files should be using this formats `<problem_number>.js`
- Write Readme (Markdown) for how to execute your code
- **No library allowed outside Javascript or ES Standard Package/Library**

### Problems

1. Given a limited range of size `n` where array contains elements between `1` to `n-1` with one element repeating, find the duplicate number in it.

   **(5 points)**

   examples:

   ```javascript
   [1,2,3,4,4]
   the duplicate element is 4
   ```

   ```javascript
   [1,2,3,4,2]
   the duplicate element is 2
   ```

1. Given an array containing only `0`'s, `1`'s and `2`'s. sort the array in linear time and using constant space

   **(6 points)**

   examples:

   ```javascript
   [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0][(0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2)];
   ```

1. Given an array of integers find all distinct combinations of given length where repetition of elements is allowed

   **(6 points)**

   examples:

   ```javascript
   [1, 2, 3][([1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3])];
   ```

1. Given an array of integers, find maximum product (multiplication) subarray. In other words, find sub-array that has maximum product of its elements

   **(10 points)**

   examples:

   ```javascript
   [-6,4,-5,8,-10,0,8]
   the maximum product sub-array is [4,-5,8,-10] having product 1600
   ```

## Test 2

This test is a coding test to check your full stack development skill

### Rules

- Write your solutions in test2 directory (create a new folder named `test2`)

### Problems

#### General

- You can choose between two methods : monolithic (frontend and backend in one apps) for example using SSR Next or Nuxt or separated (frontend and backend are independent and running on their own environment)
- Use your own directory structure/project layout or use the Standard Layout (Recommended)
- For both side, write proper documentation and readme for your code, example : how to install, how to run, how to consume, etc
- More Complex your Apps, bigger score you get
- More Readable your code, bigger score you get
- Code commenting is gold, we appreciate that a lot, but not too much
- If you can provide your benchmarking result or something that can prove your system (API and Frontend) performances, you got a plus
- If you can dockerize your system, you got a plus

#### Backend Side

- Create an API Service using Javascript (any Server Framework like Express are allowed, feel free to use your comfortable tools)
- You are free to make the app you want to make. Example : Movie API, Weather API, Postal Code API, etc
- You are free to choose between REST API or GraphQL (please don't use old tech like SOAP, XML, or anything, it didn't help us)
- The API service that you created must be able to be consumed at least by Postman or Altair (if you are using GraphQL) and by your frontend side

#### Frontend Side

- Create a frontend site that consume API from your created backend above
- You can use any javascript frontend framework such as Vue, React, or Angular. But in some condition, we prefer to choose. Please contact your employer to get what framework you must use
- You can use any framework or library that support the frontend framework such as SweetAlert, Editext, or anything. Unleash your creativity

## Questions?

Contact your employer for any question assistance
