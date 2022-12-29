# Easy Crypto Watch Web-Application

# Easy Crypto Watch Web-Application
#### Video Demo: https://youtu.be/OKLvsc8Dm4w
#### Description:

Easy Crypto Watch Web-Application: The cryptocurrency tracking web-application using React along with Redux and Material ui as a frontend and Django Rest framwork as a backend.

The idea is to create a simple cryptocurrency tracking app with user authentication that user can easily create and customize card's name, symbol and amount​then it calculate final value in US Dollar.It's consisted of Home page that link to Log in page and Sign up page and if you are authenticated it will relink you to dashboard of your cryptocurrency card and can customize it.This authentication process working by the use of React Axios library to post and catch information from React to specific path radianting by Django Rest API and then check if it valid or not.

The dashboard's consisted of your created card arranging in grid with the informations (Name of card,symbol of a cryptocurrency,amount you own,market price of that cryptocurrency ,and final value of it)


Some functionalities:
-   you can click to add more card by clicking the bottom button and it will direct to you edit page then you can specify your new card or delete the previously created one.
-   you can customize font and boarder radiaus of the cards by clicking the gear sign top right of the page and it will show what you can adjust.
-   you can log out but clicking log out sign above the gear button to log out.
-   you can close and open the page again without having to loging in agian thanks to Reduc and its Percist state library.
-   You cannot register or login again without logging out first thanks to AuthGuard
-   You cannot access dashboard pages without signinh in first thanks to GuestGuard

Tools and libraries that used by this project:
React: 
-   Redux / Persist
-   Axios
-   Router
-   Sass
-   Formik
-   Yup
-   Mui

Django:
-   django-cors-headers==3.13.0
-   djangorestframework==3.14.0
-   djangorestframework-simplejwt==5.2.2
-   PyJWT==2.6.0
-   virtualenv
