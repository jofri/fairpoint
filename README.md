

![FairPoint - logo](https://i.ibb.co/t4rSWGB/brain2.png)


# FairPoint - Get all sides of the story


-  **Your go-to news app** - Instant access to the latest news by category

-  **Analyze your news habits** - Sign up for free to access analytics about what newspapers and political opinions you read (UK focus)

-  **A colourful way to track your bias** - Your app changes color based on the news-articles you visit, allowing you to track what political stance you're exposed to



Live: https://fairpointnews.com

<br/>

![FairPoint News IOS](https://i.ibb.co/rffv4sr/fairpoint-ios-all-small1.png)


## Getting started

This is a project ready for deployment to Heroku. After cloning the project, run **npm install** in the **root folder** as well as the **client folder**.

Create a .env file in your **root folder** and enter your desired credentials:



    PORT = 4000
    MONGO_DB = mongodb://localhost:27017/front_pages_db
    CLIENT_ID = YOUR_GOOGLE_AUTH_CLIENT_ID
    CLIENT_SECRET = YOUR_GOOGLE_AUTH_CLIENT_SECRET
    COOKIE_KEY = YOUR_COOKIE_KEY
    AUTH_PATH = http://localhost:3000/auth/google/callback

Start your backend (localhost:4000) in **root folder**:

    node server.js

Start your frontend (localhost:3000) in **client folder**:



    npm run start


Open [http://localhost:3000](http://localhost:3000/) in your browser to access the app.


</br>

## Tech stack


![FairPoint tech stack](https://i.ibb.co/TrZSzf4/fairnews-stack-small.png)


Node.js, Express, MongoDB, Puppeteer, Heroku, React, Google Auth, Material-UI, Chart.js


</br>

## Contributors

| [<img src="https://avatars0.githubusercontent.com/u/62963670?s=460&u=9582d59a15347500ba8b3efea4e2f53e0de9c07d&v=4" width="100px;"/><br /><sub><b>Oliver Bowen</b></sub>](https://www.linkedin.com/in/oliverbowen/)<br  />  | [<img src="https://avatars3.githubusercontent.com/u/34419390?s=460&u=ff60c2a18f97a8b98e807e4d36e39e56377f4670&v=4" width="100px;"/><br /><sub><b>Joanna Kang</b></sub>](https://www.linkedin.com/in/sooyeon-kang-244599112/)<br  />  | [<img src="https://avatars1.githubusercontent.com/u/17622438?s=460&u=6d972a510e427effc6c79d5e0686724585342ac2&v=4" width="100px;"/><br /><sub><b>Johan Friedner</b></sub>](https://www.linkedin.com/in/johanfriedner/)<br  />  | [<img src="https://avatars0.githubusercontent.com/u/58035488?s=460&u=8214dffedea9e121cc596cf3d43844957a62c34c&v=4" width="100px;"/><br /><sub><b>Edward Chan</b></sub>](https://www.linkedin.com/in/eklchan/)<br  /> |
| :-: | :-: | :-: | :-: |

</br>

## Looking to the future

- Improve loading speed

- Add in-site video content

- Increase aggregator capabilities

- Expand functionality beyond UK News