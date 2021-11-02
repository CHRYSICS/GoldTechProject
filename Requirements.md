# Project Summary

This project will consist of a database, an admin/API server, either a WordPress plugin or a Chrome Extension, and a ReadMe file with your documentation. You have the choice to create either a WordPress plugin or a Chrome Extension that will send API calls to the admin server. The admin server will interact with the database as well as host a web portal for admins to view data from the database.
## Option 1 – WordPress Plugin

* You will create a WordPress plugin that detects coupon codes from WooCommerce and imports them into the database. 
* The plugin will allow merchants to control which coupons are imported into the database and which of those are active.
* The plugin will also suspend merchants that have been blocked by the admin server.

## Option 2 – Chrome Extension

* The extension will be installed by the user into their Chrome browser.
* The extension will allow the user to upload a text file that contains potential coupon codes.
* When requested by the users, the extension will test each discount code in the list and the best working code will be applied to the discount field on the page.

## Part 2 – Node.js Admin/API Server

* You will build a web-based admin monitoring and API server.
* The admin server will process API calls and manipulate the database as needed.
* You can create a .deb package, python script, bash, NPM, or other scripts that will configure and install the server.
* You get to choose how your admin server is installed.

## Part 3 – Database

* The database will hold all the data for the project.
* You can use any database you want.
* This can be configured and installed by a script during the admin server installation or you can do it separately. You have the choice of how you wish to install and configure it.

## Part 4 – ReadMe

* Submit a ReadMe file with all your documentation and answers to the questions provided.

# Project Specifics
# WordPress Plugin
## Plugin Setup:

* You will be provided WordPress themes that are compatible with WooCommerce to use for development.
* You do not need to customize the themes or products and should use demo content. 
* You may develop on any theme as long as it uses WooCommerce.

# Plugin Functions

* Each merchant should see a list of their coupons that were created in WooCommerce.
* Merchants must have the ability to choose which coupons are imported into the database as well as change the status of each coupon from active to inactive and vice versa.
* All coupons should be created, managed, and deleted by the WooCommerce management system.
* If the admin server blocks a store, it should change all coupons status to inactive, alert the merchant that they have been suspended, and block all usage from this merchant.
* If the admin server unblocks a store all functionality and settings should be restored, and the merchant should be alerted.

# Plugin API Functions: 

The Plugin will connect to the admin server via an API to accomplish the following things:

* When the plugin is installed it should generate a unique store ID which sends the store ID, store name, URL, and date installed to the database.
* Continuously import coupons and sync merchant’s settings with the database.

# Chrome Extension
## Extension Setup:

* The extension will be installed in Chrome using developer mode and can be a packed file or unpacked directory. 

## Extension Functions:

* When the user installs the extension, it should generate a unique ID that represents the user.
* The extension will allow users to upload a text file with potential coupons codes.
* If the user reaches a page with an “apply discount” input and has something in their cart the extension should ask the user if they want to try their list of discount codes.
* If yes, each code will be injected into the “apply coupon” box on the web page and submitted automatically.
* If any of the discount codes work, it should be applied.
* If two or more discount codes work, the code that generates the highest discount should be applied.
* If the user enters a working discount code that is not in the text file, the extension should ask the user if they want to add the discount code to the text file and act accordingly.

## Extension API Functions

* The extension should send the unique ID, store name, URL, successful coupon code, and the date it was used to the database via API.

# Admin/API Server & Database setup

* The server will display the data in the database as well as provide all API functions.
* Use React and Node.js along with a framework of your choosing such as Express.

## Database

* You can use any database you want.
* You can use multiple databases if desired.
* Only the admin server should be able to interact with the database directly.

## API Server Functions

* The server will provide an endpoint for the Chrome Extension or WordPress Plugin to interface with.
* The server will receive CRUD requests and adjust the database accordingly.

## Server Monitoring Dashboard

The admin dashboard should:
### For WordPress Plugin:

* For each store display:
* The unique ID.
* The store name.
* The store URL.
* How many coupons each store has and each coupon's status.
* The first and last date the plugin made contact with the server. 
* Allow admins to block and unblock each connected store.

### For Chrome Extension

* For each user display:
* Their ID.
* Successful coupon codes. 
* The store name.
* The store URL.
* The date the coupon was first used.
* The most recent date the coupon was used.
* How many times the coupon was used.
* Allow admins to search for users by their ID or coupon codes. I.E if I search for a user ID of “e4839” it should bring up that user’s data or if I search for the coupon “freefood” it should bring up all users that used that coupon code.

## Admin Server Config:

Admins should access the server directly and log in to gain access.

* There should be one super admin account and other admins can sign up for accounts.
* The sign-up should require a password and email address (email addresses do not have to be verified).

Optional configuration settings:

* The super admin account should see a list of active admin accounts and can delete any account.
* Each additional standard admin account must be approved by the super admin before they have access to the server.
* Standard admins can’t delete any accounts.
* Admins must be able to change their passwords but not their email.
* The super admin should get notified of any failed user login attempts.

# ReadMe

This is a very important part of the evaluation so be sure to include the necessary documentation for your project. Your ReadMe file should include the following topics as well as anything else you want to add.

* Your overall approach.
* Document the reasons behind some of the choices you made.
* Security implementations and considerations.
* Admin server account(s) info (if needed).
* Any problems you encountered and any flaws in your project.
* Which frameworks you used.
* What still needs to be done if you had more time?
* What database did you use and why?
* Any additional features you implemented.
* Network information.
* What did you struggle with?
* Did you enjoy this project and is it something you would like to continue working on?
* Do you think this project was fair?

# Final deliverables should include:

* ReadMe documentation.
* Your plugin or extension files.
* Your admin server/database files(s)

# Notes

**You might run into a few “gotchas”. If you feel like something was left out or not discussed, you are correct. Do your best!**

* You can learn about setting up a local WordPress development environment from here:
* https://developer.wordpress.org/themes/getting-started/setting-up-a-development-environment/
* You can download WordPress themes for development and view their documentation here: 
* https://goldtechapps.com/downloadable-project-files/
* Your plugin will be tested with other themes as well.
* Each theme's documentation explains how to import demo content and I strongly recommend you do.
* Assume that your plugin will be installed on a clean WordPress core and that each theme has many other plugins. 
* This is an open project, unless specifically stated you are free to make your own assumptions and take any liberties you want. Remember to document your methods and reasoning.
* You may add additional features/servers/databases/software/tools if desired. Make sure you document them.
* For this project, you can assume the admin/API server, WordPress website, and Chrome browsers are in the same network. You may use a fixed IP address and hard code them as needed.
* Complete as much as you can. Don’t worry if you don’t get every point just document what you didn’t get done.
* The admin server will be installed on the latest Ubuntu server version.
* Make sure the admin server has every dependency installed that you need it to.
* This project is purely to demonstrate your skills and will not be used in any other way.
* *It's ok if you did not finish the whole project. Do what you can.*

# Submission

Upload your completed project to your GitHub, and then paste a link to the repository below in the form.