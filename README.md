
# GoldTech Interview Assessment Project

## Project Setup:
Must have mongodb installed [(here)](https://docs.mongodb.com/manual/installation/) and node before starting

Install node modules:
>cd api; npm install
>cd dashboard; npm start

Start mongodb server
>mongod

Start Server API and Dashboard
>cd api; npm start
>cd dashboard; npm start

To upload chrome extension, navigate to [chrome://extensions/](chrome://extensions/) and toggle on developer mode
> load uppacked -> "Clippings" folder -> submit

## Overall Approach:
Given that there were elements of this project that would require new knowledge for me, 
I broke up the different aspects of the project by separation of concerns. Within each 
aspect (API, dashboard, google extension, database), I initialized the project and decided
to use project templates to get each on off the ground and going. I built with one task at hand,
aiming to update each component in the full-stack chain (from backend to frontend).

I originally wanted to stick to technologies I was familiar with due to the time element,
which included implementing a relational database (via mysql).  Unfortunately, this proved
difficult due to the fact that coupons themselves are not unique but there could exists duplicates,
since each user may have the same coupon (but use it differently).

Therfore I switched to mongodb, since this would be preferable to the natural storing of user data.
In this, I was able to easily create documents for each user, and updated the coupons stored in that
user document. Since this was the first time not using a relational database, it took a good amount
of time familiarizing myself with it.

I also decided to go with creating a google chrome extension, as I was familar with the general use 
of these. This was to reduce the additional learning curve of learning wordpress and the use of plugins.

As time got short, I knew I would not finish many of the tasks of the projects. So I aimed to work on only
core functionalities and unfortunately not implement any form of admin validation (for admin database setup). 

Problems encountered were many (choice in initial database, comfortability with React lifecycle, ect).

## TODO
* Set up and implement admin database, routing, and login handling
* Dashboard - correctly filter users by id or code (react lifecycle issue)
* Extension - Scan webpage for apply discount (routing is ready when finished)

## Frameworks and Databases
* Backend - Express.js (initialized with express-generator)
* Frontend - React (initialized with create-react-app)
* Database - Mongodb

## Final thoughts on Interview Project
Honestly I struggled with most of this project and it became apparent that I still needed to develop these
skills further in order to apply them.  Although I struggled, I still plan to continue since there are 
so many worthy elements of full-stack development that this project covers.  I did enjoy the challenge
of the project and feel that it is an adequate project to help Goldtech find an excellent candidate and 
for interviewees like myself, it is a valuable experience.