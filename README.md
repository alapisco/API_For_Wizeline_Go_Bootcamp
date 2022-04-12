# API For Wizeline Go Bootcamp

  

This is an API developed to qualify for the Wizeline Golang Bootcamp.

  

It mas developed using **Node JS** ( v16.14.0 ) and **Express** ( v4.17.3 )

  

&nbsp;

  

The API has two endpoints. Check the "API Definition" section for full details.

  

&nbsp;

&nbsp;

  

## Dependencies

&nbsp;

  
  

All dependencies are included in the package.json files, and need to

be installed before running the application. (Check the "Running The Application" section)

&nbsp;

  

Here is a description of the dependencies used:

  

- **Dotenv**: A zero-dependency module that loads environment variables from a .env file

- **Axios**: A promise based HTTP client for the browser and node.js

- **Express**: A web application framework for Node JS

  
  

&nbsp;

### Development Dependencies

&nbsp;

  

These libraries are not required to run the application, but they are required for other purposes such as facilitating the development of the application or running tests.

  

&nbsp;

- **Nodemon**: Automatically restarts the node application when file changes in the directory are detected.

- **Chai**: An assertion library for NodeJS and browser

- **Mocha**: A testing framework for JavaScript

  
  

&nbsp;

  

## Running The Application

&nbsp;

  

### Requirements

&nbsp;

  

You will need to install **Node JS** ( v16.14.0 ) and **NPM** ( v8.3.1 ). Refer to the official NPM documentation for installation instructions:

  

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

  

&nbsp;

### Installing dependencies

&nbsp;

  

Before running the application we need to install all the dependencies. You can do this with the following command (execute it from the root directory of this application):


&nbsp;

  

    npm install  

&nbsp;

### Starting the application

&nbsp;

  

Execute the following command from the application directory.  The included .env file sets the application
to run in port 3001 , you can change the port by editing this file


&nbsp;

  

    npm start  

&nbsp;

### Execute tests

&nbsp;

  

There is a suite of unit tests under the **test** directory. You can run them with the following
command:


&nbsp;

  

    npm test  

&nbsp;

Example output 

&nbsp;
>     API service is running on port: [3001]
>     
>     
>       Test GET route /api
>         ✔ It should return a hello world message
>     
>       Test GET route /api/activity
>         ✔ It should return a valid activity if no parameters are provided (246ms)
>         ✔ It should return an activity for 4 participants (190ms)
>         ✔ It should return a cooking activity for 3 participants (199ms)
>         ✔ It should return a social activity (205ms)
>         ✔ It should return error if invalid activity type provided (186ms)
>         ✔ It should return error if more than 5 participants requested (182ms)
>         ✔ It should return error if less than 1 participant requested (183ms)
>         ✔ It should return an activity ignorring unsupported paremeters (186ms)
>     
>     
>       9 passing (2s) 



## API Definition

&nbsp;

**GET** ***/api***

Displays *Hello World!*

Sample Query: 
`http://localhost:3000/api`

Response

    {"message":"Hello World!"}

&nbsp;

**GET** ***/api/activity***

Get a random activity for one participant

Sample Query: 
`http://localhost:3000/api/activity`

Response

    {
      "activity": "Shop at support your local farmers market",
      "type": "relaxation",
      "participants": 1,
      "price": 0.2,
      "link": "",
      "key": "8979931",
      "accessibility": 0.1
    }


&nbsp;

**GET** ***/api/activity?type=:type***

Find a random activity with a given type

Sample Query: 
`http://localhost:3001/api/activity?type=social`

Response

    {
      "activity": "Write a thank you letter to an influential person in your life",
      "type": "social",
      "participants": 1,
      "price": 0,
      "link": "",
      "key": "4101229",
      "accessibility": 0.1
    }


&nbsp;

**GET** ***/api/activity?participants=:participants***

Find a random activity with a given number of participants

Sample Query: 
`http://localhost:3001/api/activity?participants=2`

Response

    {
      "activity": "Go swimming with a friend",
      "type": "social",
      "participants": 2,
      "price": 0.1,
      "link": "",
      "key": "1505028",
      "accessibility": 0.1
    }

&nbsp;

&nbsp;
**Note that you can use both supported parameters in the request**

&nbsp;
| **Request Parameters** | Description |
|--|--|
|**participants**|The number of people that this activity could involve [1, n]|
|**type**  |Type of the activity ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"] |

&nbsp;

&nbsp;
| **Response Fields** | Description |
|--|--|
|**accessibility**|A factor describing how possible an event is to do with zero being the most accessible [0.0, 1.0]|
|**price**|A factor describing the cost of the event with zero being free[0, 1]|
|**key**|A unique numeric id [1000000, 9999999]|
|**link**|A link with information about the activity|
