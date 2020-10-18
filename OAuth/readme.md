# Integrating Login with Google to your Web application with OAuth

##What is OAuth and why is it used for?

Passwords would be difficult to remember everytime! Every website asks for one, for security issues most of the users will not choose to have the same password for all the websites. This would be annoying for both User and the Developer. Storing a lot of data will not be encouraged by the developers & remembering multiple passwords by the User is also not so easy. That one handy solution to this would be <u> Federated Login </u>

<b> So, What is Federated Login? </b>
Federated Login is an Authentication process where user gets authenticated via a serve party application usually without re-entering the credentials. Here, OAuth can be treated as a serve party application.

<b> How will this happen? </b>
There will be a SignIn button, when the user hits on it a window pops up which will allow user to choose an account to login with! After this, 
<i> Incremental Authorization </i> will occur (ie), it will access the request permissions from the user and Signs him in at the same time. So, we can understand that OAuth [Open Authorization] is all about authorization and not <i> Authentication </i>.

<b><u><i> Note: </i></u></b> OAuth doesn't share passwords between the identity provider and the user instead it shares the Authorization tokens!

##Implementation Steps 

* Configuration
* Initialization
* Rendering a button
* Signing In
* Getting Profile Info
* Signing Out

Let's try here SignIn with Google using OAuth2.0 (ie), we will be having Google as an identity provider which indirectly means that the user who ever LogsIn to the application succesfully will surely have a proper profile at Google. 

##Step -1: Configuration

Firstly, Go to Google developers site : https://console.developers.google.com and create a project.

![alt text](https://github.com/rishitha24/Web/blob/main/OAuth/images/1.jpeg)

Setup the information about your project so that google can show what types of consent the users gives your app to use information from google. In my case it is going to be email address and profile picture.

![alt text](https://github.com/rishitha24/Web/blob/main/OAuth/images/2.jpeg)

Now, go the credentials section and create an OAuth Client ID (It may ask you to configure the consent screen, do that! ).
Here, when the project is deployed you need to add the webapp URL for now I am using localhost. (Rest details can be filled accordingly!)

![alt text](https://github.com/rishitha24/Web/blob/main/OAuth/images/3.jpeg)

Now, the client Id and the secret are created which will authenticate the users to the application!

![alt text](https://github.com/rishitha24/Web/blob/main/OAuth/images/4.jpeg)

##Step -2: Initialization

1. You must include the Google Platform Library on the web page that integrate Google Sign-In. (Add it inside the head tag!)

```
 <script src="https://apis.google.com/js/platform.js?onload=onLoad" async defer></script>

 ```
2. Including the client Id for the application that was created. 

```
<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"> (Add it inside the head tag!)

```

[ Change the content part, add your client Id. ]

##Step -3: Rendering a button

To use the default settings of Google signIn button,

```
<div class="g-signin2" data-onsuccess="onSignIn"></div>

```

##Step -4, 5: SigningIn and Getting user profile data

when the application could succesfully authenticate then, it returns us the following params! Which can be used at the back to distinguish the users and helps us in not having invalid profiles!

```
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); 
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 
}

```

##Step -6: Signing out

1. creating the sign out button

```
<a href="#" onclick="signOut();">Sign out</a>

```

2. Signout function
```
 function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

```

## What has happened at the back?

Google uses the id_token to pass on the data payload in a JWT [JSON Web Token] format. By default the payloads are set to, https://www.googleapis.com/auth/userinfo.email , https://www.googleapis.com/auth/userinfo.profile , https://www.googleapis.com/auth/plus.me which helps me to define the scopes and get the email, Id and profile. Rest, if required can be added to the scopes and get the information that is needed if available!

![alt text](https://github.com/rishitha24/Web/blob/main/OAuth/images/5.jpeg)

It would be a practice to send [ id_token ] to the back instead of profileId. Because of the payloads we are able to define the scopes and access the data required to authenticate the user.
