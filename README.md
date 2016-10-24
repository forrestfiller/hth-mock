# A Mock-up of the HTH Platform

This project will grow in complexity (as I learn) until it is mature enough to be re-purposed for the HTH platform, should that be the desired outcome.  

Regardless, this project demonstrates a website built to have dynamic functionality leveraging what I have learned thus far since the past summer 2016. It is built with **Node.js**, the **Express Generator**, **MongoDB**, and (at least initially) an **HTML5 template**. 

Eventually I will incorporate React into this project.

## Completed Thus Far

1. **Basic routing and views set up for:**

    a. index page
        i. when user clicks on a specific entry, new page opens dynamically by the mongo *_id*.

    b. error page
      i. express boilerplate

    c. createentry page

    d. individual entry page

2. **Basic Entry schema Setup in Models Directory**

    a. inserted an 'approved' key to allow for differentiation between labs and approved tools. _(this may need to change to a boolean or something else to help differentiate; schema may need to be changed to sync with existing csv file)_

3. **Included MongoBD**
    a. added in (npm mongoose)

4. **Included a "Convience" JSON Reference in the Url**
    a. included the '&format=json' into route to allow for a refernce to schema.
    (type: _&format=json_ after the specific entry url and the page will render in json!)

5. [*deprecated* **Deployed First Version to Heroku, with M-Labs Integration**]
    a. https://hthmock.herokuapp.com/
    [*deprecated* b. the homepage lists the current "labs" (fake labs). ]
    [*deprecated* c. to create a new lab you have to actually go to: https://hthmock.herokuapp.com/createlab ]

6. **Removed First, and Deployed Second Version to Heroku**
    a. reflect changes made today 
    b. to create an entry: https://hthmock.herokuapp.com/createentry
    c. a specific entry page: https://hthmock.herokuapp.com/entry?id=(mongodb '_id' here)


## To-Dos (Many More...):



1. **Entry Search**
    a. search bar, wire it up
    b. redirect to results
    c. include SDK for twitter to share tool (npm superagent)

2. **Render html5 Template**
    a. remove my in-line styling
 
3. **Pare Down Template**
    a. start using partials
    b. remove other excess boilerplate

4. **Login / Registration**
    a. cookies (npm sessions)
    b. create new entry page only available when logged in
    b. include basic password hashing (npm bcrypt)

5. **Refactoring, Tidy, etc.**
    a. Promises (npm bluebird)

6. **React Inclusion**

7. **GitHub API Incorporation**


