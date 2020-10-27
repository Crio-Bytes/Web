# Introduction  

This will be fun, trust me.

So in this micro-byte, we'll create an actual drumkit webpage and add appropriate audio to our design. At the end of this module, you'll be able to play your very own 'drum-set' directly from our keyboard or using a mouse as you wish. We'll employ basic HTML and CSS and play a lot with JavaScript for this webpage.

Your task is to learn how to implement the frontend design of our webpage using HTML markup through small tasks which may include writing code in place of `TODO` comments, adding necessary CSS to implement a structured layout and finally implementing JavaScript to add the audio output to our webpage. We believe that the best way to learn is by doing!

## Prerequisites

For this microbyte, you should have a basic knowledge of:
- HTML
- CSS
- JavaScript (recommended)

Along with this, we will be using Nodejs for deploying our website to production. So make sure you have it configured for your pc or laptop. You can have a look at the installation instructions [here](https://phoenixnap.com/kb/install-node-js-npm-on-windows). 

> NOTE: Verify whether **Nodejs** has been successfully installed on your device by typing in the following commands inside your terminal: 
> 
```  
> node -v  // It should display the current version of node installed
> npm -v  // It should display the current version of npm installed
```  
## Preview

Here's the live website preview of what we'll be building in this microbyte: [LINK](https://my-drum-kit.web.app/)

## Activities  

> NOTE: Links for relevant resources have been attached below that can be refered to in case you aren't familiar with any concept used. So kindly check those out as well.  

### Activity 0: Setting up our workspace

**We'll begin with a working HTML code editor. So go ahead and fire it up. There are a lot of options to choose from including:**

1. `Codepen`
2. `Notepad ++`
3. `VSCode`
4. `Sublime Text3`

I'll be using Sublime Text3 for this module. Now go ahead and make three seperate files with **.html**, **.css** and **.js** extensions.  


### Activity 1: Start typing in the HTML code inside the code editor  


a. Start your workflow by typing in the basic template used for HTML code. Make sure to link our external CSS filename as well as our external JavaScript source code inside the HTML file.
  
> Don't know where to start? Refer to `src/Activity-1/code1a.html` inside this folder  

### Micro-References
1. [HTML tutorial](https://www.w3schools.com/html/)  


### Activity 2: Implementing the front-end for our webpage  


Our website will prinmarily compose of three sections: 

- **Header section**
- **Body section**
- **Footer section**

a. We'll start by importing `Google Fonts` inside our HTML document. The choice of font-style is solely based on your imagination. Use HTML to build a `header` section with your own experimental classname and add relevant title heading inside it.  

> Facing issues? Refer to `src/Activity-2/code2a.html` in this folder  

b. Write a HTML code that uses `buttons` to represent our various drum-kit accessories, namely tom (x4), snare (x1), kick-bass (x1) and crash (x1). Make sure to group our ***drum-elements*** under a common HTML element for easy manipulation using CSS.  

> Facing issues? Refer to `src/Activity-2/code2b.html` and `src/Activity-2/code2b.html` in this folder  

c. Finally, use HTML to add a `footer` section and assign it your own classname (Hint: Remember how you built the `header` section?.....exactly) . Use the footer to acknowledge yourself inside the webpage.😉  

> Facing issues? Refer to `src/Activity-2/code2b.html` and `src/Activity-2/code2d.html` in this folder  

At the end of this activity, you'll have built the foundational blocks of our webpage solely using HTML.  

### Micro-References
1. [HTML Block Elements](https://www.w3schools.com/html/html_blocks.asp)
2. [CSS Pseudo Classes](https://www.w3schools.com/css/css_pseudo_elements.asp)  


### Activity 3: Adding CSS styling to our HTML document  


In order for our website to be appealing, we havhe to add relevant CSS styling to our HTML source code. Let's go ahead and do that.

a. Add CSS code to reference the title heading inside our `header` section. Use your imagination to add contrasting `text` and `background color` to it keeping a consistent color palette in mind. We'll be using the same color palette throughout our webpage.  

> Need a hint? Navigate to `src/Activity-3/style3a.css` to find out  

b. Next step is to add relevant background images to our `drum buttons`. Use appropriate CSS property to do that.  

> Need a hint? Navigate to `src/Activity-3/style3b.css` to find out  

c. Use CSS to add proper styling to our `footer` section. Remember to apply the same color scheme as used in the first task of this activity.  

> Need a hint? Navigate to `src/Activity-3/style3c.css` to find out  

d. Finally, we'll first align our `drum-buttons` centrally inside our webpage. Once you're done with that, we'll increase the `dimensions` of our drum-kit buttons using CSS referencing. Then go ahead and beautify our drum-kit elements to the best of your ability. Let your imagination run wild.

> Curious what I did? Navigate to `src/Activity-3/style3d.css` to find out  


### Micro-References
1. [CSS Display Property](https://www.w3schools.com/cssref/pr_class_display.asp)  
2. [HTML Color Picker](https://www.w3schools.com/colors/colors_picker.asp)  

At the end of this activity, we'll have built a beautiful frontend UI for our drum-kit webpage.  


### Activity 4: Integrating audio functionality using JavaScript  


We'll use JavaScript to detect mouseclick or keyboard press to trigger our drum-kit elements. 

a. Add JavaScript `event listeners` to our drum-kit buttons which triggers two seperate functions, one for `mouseclick` event and the other for `keyboard press` event respectively. You'll have to inbuilt JavaScript methods to `locate` our drum-kit elements and figure out a way to add event listener property to all the seven drum elements. 

> Need a hint? Head over to `src/Activity-4/jsscript4a.js` for relevant details  

b. We'll now define the first function which will be invoked on detecting a `mouseclick event`. Use `console.log()` to verify whether your webpage detects mouseclick events or not.  

Inside this function, we'll add `two function call statements`.

- First function call statement **invokes** a common function which integrates relevant audio to the drum-kit elements.  

- Second function call statement **invokes** a common function which adds button animation to our drum-kit elements when either event is triggered.

> Need a hint? Head over to `src/Activity-4/jsscript4b.js` for relevant details  

c. Go ahead and define the second function which will be invoked on detecting a `keypress event`. Use `console.log()` to verify whether your webpage detects keypress events or not.  

Inside this function, we'll add `two function call statements`.

- First function call statement **invokes** a common function which integrates relevant audio to the drum-kit elements.  

- Second function call statement **invokes** a common function which adds button animation to our drum-kit elements when either event is triggered.  

> Need a hint? Head over to `src/Activity-4/jsscript4c.js` for relevant details  

d. Go ahead and define the contents of the first common function which will integrate audio to our drum-kit button elements. Figure out a way to add audio to the buttons after an event is triggered.  

> Need a hint? Navigate to `src/Activity-4/jsscript4d.js` for relevant details  

e. Finally, we'll define the contents of our second common function which adds button click animation when invoked. Define a seperate CSS classname inside your CSS file and add appropriate styling to it because we'll add it to our drum-kit buttons on trigger using JavaScript.  

> Need a hint? Head over to `src/Activity-3/style3c.css` for relevant details  

f. Once you're done, figure out a way to add and remove a CSS class to HTML elements solely using JavaScript. Make sure to add a time delay for our animation to be visible. 

> Need a hint? Head over to `src/Activity-4/jsscript4e.css` for relevant details  

### Micro-References
1. [JS DOM EventListeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
2. [JS Methods](https://www.w3schools.com/js/js_object_methods.asp)  
3. [JavaScript DOM Document](https://www.w3schools.com/js/js_htmldom_document.asp)  


### Activity 5: Deploying our webpage to production  


Congratulations on reaching this far. That's no small feat!!  In our final activity, we'll be deploying our webpage live using **Firebase**. 

Before you can set up Firebase Hosting, you need to create a [Firebase project](https://firebase.google.com/docs/web/setup).

a. Move to your existing projects folder. Now create a new folder named "public" and move all your existing source files including the relevant images and audio tracks inside this folder.

> Refer to `img/Activity-5/preview_a.PNG` inside the folder  

b. Move to your existing root directory of your project through the terminal and install `Firebase CLI` using `npm install -g firebase-tools` command. Sign in to firebase from the terminal by using `firebase login` followed by your email and password if prompted.  

> Refer to `img/Activity-5/preview_b.PNG` inside the folder  

c. Initialize your existing folder by typing in `firebase init` followed by choosing recommended commands which are capitalised. Make sure to choose the existing project which was set up beforehand.  

> Refer to `img/Activity-5/preview_c.gif` inside the folder  

d. We'll finally deploy out website live using `firebase deploy`. It should automatically generate the live website URL for you once it's done. And there you go. Done and dusted!!!

At the end of this activity, you have deployed your very own static drum-kit webpage using Firebase. 

### Micro-Challenge

> Complete the MicroByte, deploy your live website and add a link to your firebase site in `src/Activity-5/SHOWCASE.md` in the specified format.


## CONCLUSION  

You just built your very own static drum-kit webpage from scratch and deployed it live through Firebase. Amazing how it works right? You can now go ahead, do further research and find better ways to trigger our drum-kit. 

Kudos to you on completing this MicroByte! I know it might have taken longer than usual, but we believe you learnt a lot by doing! Don't forget to add your creation to the showcase.

## REFERENCES   

1. [W3Schools](https://www.w3schools.com/css/)
2. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
3. [Tutorials Point](https://www.tutorialspoint.com/index.htm)
