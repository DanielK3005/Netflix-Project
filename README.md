# Netflix Demo Website

Technologies used in this project: 
* ReactJS
* Redux
* Firebase Authentication and Database
* Stripe Checkout
* TMDB Api
* Webhooks

Link to the site: https://netflix-clone-37761.web.app/

## Website Functounality

* Sign in and sign up with user information saved in the Firebase database.
* Movies and series trailers/teasers from YouTube play when clicking the relevant cards.
* A profile screen displays your package with Stripe checkout payment integration, allowing you to upgrade or downgrade your package by purchasing the desired plan.

## Instructions and images

Notes:
* In the header, only "Home," "Movies," and "TV Shows" link to related pages; the other items are for display purposes only.
* All footer links direct to the corresponding pages on the official Netflix site.
       
### 1. Home Page Screen:
![image](https://github.com/user-attachments/assets/2259c3ef-ec27-4db2-9664-79742e42191c)

You can view this page only when you are signed out or visiting the site for the first time. When you are logged in, the home page redirects to the Movies page.

### 2. Sign Up Screen:
![image](https://github.com/user-attachments/assets/6d476567-7730-4987-8b0c-72a9ea8cd940)


### 3. Sign In Screen:
![image](https://github.com/user-attachments/assets/50b87a9f-b939-4aa0-bf2b-6874721be96e)


### 4. Movies Screen:
You can view this page only when you are logged in. When you are logged out, the Movies page redirects to the Login page.

![image](https://github.com/user-attachments/assets/7871832a-ff56-4503-80e0-555d0dafde41)

![image](https://github.com/user-attachments/assets/c6697766-a39c-4d3c-b58b-8e637f948318)

When you select a movie by clicking on it, a YouTube movie trailer appears beneath it:
![image](https://github.com/user-attachments/assets/2cab2843-cb83-4196-a7f9-d13b4405ed46)


### 5. Series Screen:
You can view this page only when you are logged in. When you are logged out, the Series page redirects to the Login page.

![image](https://github.com/user-attachments/assets/64238347-1441-47b3-8aa0-29b026e7f83f)

![image](https://github.com/user-attachments/assets/1ae54c59-41e3-449e-9e6c-7469b10c8ef8)

When you select a movie by clicking on it, a YouTube series trailer appears beneath it:
![image](https://github.com/user-attachments/assets/c0599421-de4f-46f1-873c-a72b65038b27)


### 6. Profile Screen:
![image](https://github.com/user-attachments/assets/4f96f0c3-a22d-473c-867a-811711df0bce)

You can upgrade or downgrade your plan and sign out from your account. 
The "Subscribe" button redirects you to the Stripe payment page.

### 7. Payment Screen:
![image](https://github.com/user-attachments/assets/72f8cb69-7340-49bc-827f-abf55995d448)

You can purchase any plan using a test card that works with Stripe without actually paying. 

Use the test card number: 
4242 4242 4242 4242

The other details can be anything you choose.