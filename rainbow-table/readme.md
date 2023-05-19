
# Rainbow Table

## Link to the exercise:

https://github.com/Selleo/recruitment-exercises/tree/master/exercises/js_intermediate_stuff/rainbow_table

## TODO:
1. Create a word list from provided "pan_tadeusz.txt" file - it should contain unique words from the book(one for line) ex. "some fancy line of fancy book" ✅

2. Create "rainbow table"(https://en.wikipedia.org/wiki/Rainbow_table) from word list created in the previous task(look at 1. point of your mission), if you are not familiar with rainbow tables don't worry - look at the bottom for Wikipedia link and try to understand the example. Basically, it is used for speed up computations. Rainbow table can be a text file that contains a string and its representation as a hash (hashed by suitable algorithm - in our case MD5(you can use js-md5 package ✅

3. The final step to get Mr. Wylon's password is to create a script that will break it. Implement script that will get the victim's password and uses rainbow table and outputs it as a string representation of password. You can reach this by comparing each hash from the rainbow table with the hash of Mr. Wylon's password. The matching one is the result. ✅



## Run Locally

Clone the project

```bash
  git clone https://github.com/blazej-bryla/blazej-bryla-recruitment-exercises/tree/main/rainbow-table
```

Go to the project directory


```bash
  cd rainbow-table
```

Install dependencies
```
npm install
```

Create list of md5 words:
```
node run rainbow_table.js
```

Search for password:
```
node run break_password.js
```

Check the results.txt file for password
