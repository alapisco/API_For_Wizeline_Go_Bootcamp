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
`http://localhost:3000/api`

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
|**participants**|The number of people that this activity could involve [0, n]|
|**type**  |Type of the activity ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"] |

&nbsp;

&nbsp;
| **Response Fields** | Description |
|--|--|
|**accessibility**|A factor describing how possible an event is to do with zero being the most accessible [0.0, 1.0]|
|**price**|A factor describing the cost of the event with zero being free[0, 1]|
|**key**|A unique numeric id [1000000, 9999999]|
|**link**|A link with information about the activity|
