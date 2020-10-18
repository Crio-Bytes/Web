# Integrating Login with Google to your Web application with OAuth

## What is OAuth and why is it used for?

Passwords would be difficult to remember everytime! Every website asks for one, for security issues most of the users will not choose to have the same password for all the websites. This would be annoying for both User and the Developer. Storing a lot of data will not be encouraged by the developers & remembering multiple passwords by the User is also not so easy. So, what would be a better solution? Yes, one word that could come up is *Federated Login*.

<b> So, What is Federated Login? </b>
Federated Login is an Authentication process where user gets authenticated via a serve party application usually without re-entering the credentials. Here, OAuth can be treated as a serve party application.

<b> How will this happen? </b>
When the user hits on a signIn button, a window pops up which will allow user to choose an account to login with! After this, 
*Incremental Authorization* will occur (ie), it will access the request permissions from the user and Signs him in at the same time. So, we can understand that OAuth [Open Authorization] is all about authorization and not <i> Authentication </i>.

Do you think, OAuth shares the password between the identity provider and the web application? No, it really doesn't.
  *OAuth doesn't share passwords between the identity provider and the user instead it shares the Authorization tokens!*

## Implementation...

Let's try here SignIn with Google using OAuth2.0 (ie), we will be having Google as an identity provider -this indirectly means that the user who ever LogsIn to the application successfully will surely have a proper profile at Google [Identity Provider]. 

## Step -1:

Firstly, on the Google developers site : https://console.developers.google.com create a project and get the credentials (ie), OAuth client Id and secret key to integrate it with the web app.

We can mention the domains where this Id can be used while creating it in the credentials tab! (localhost for now!)

> Refer to [this](images/1.jpeg) to know how to add Authorized Javasacript Origin!

![alt text](https://github.com/rishitha24/Web/blob/main/OAuth/images/4.jpeg)

## Step -2: 

We can include the clientId using a meta tag, just by mentioning the content properly!

```
<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"> 
```

[ Change the content part, add your client Id. ]

## Step -3:

Just like anyother onclick functions that can be included for a button, we can simply call a function on data-success to get the basic profile of the user. When the application could successfully authenticate then, it returns us the following params, which can be used at the back to distinguish the users and helps the Developer in not having any invalid profiles!

```
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('Name: ' + profile.getName());
}
```
And just like profile.getName, we can even get other scope values!

And, how do we sign out a user?

```
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
```

## What has happened at the back?

To debug what has happened at the back in your browser, try “googleUser.getAuthResponse().id_token” and see the bearer token sent back from google.com, when there was a request to login.

Google uses the id_token to pass on the data payload in a JWT [JSON Web Token] format. If you aren't familiar with JWT, take a look at jwt.io and paste your tokenId there which will give you the payloads that are present and might give you a better insight!

By default the payloads are set to,https://www.googleapis.com/auth/userinfo.email , https://www.googleapis.com/auth/userinfo.profile , https://www.googleapis.com/auth/plus.me which helps the developer to define the scopes and get the email, Id and profile. Rest params, if required can be added to the scopes and can access the information that is needed if available!

See [this](images/5.jpeg) to know how the output would be, and the id_token was structured! 

## Conclusion

1. It would be a practice to send [ id_token ] to the back instead of profileId. 
2. Because of the payloads we are able to define the scopes and access the data required to authenticate the user.
3. And yes, now we could succesfully allow user to login with serve party [OAuth] and access the data that the developer requires for unique identity of the user! And that's how OAuth helps.

## References

* https://developers.google.com/identity/sign-in/web/sign-in
* https://developers.google.com/gmail/api/auth/about-auth


