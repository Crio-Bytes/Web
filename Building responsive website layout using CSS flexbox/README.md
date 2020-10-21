# Introduction  

CSS Flexible Box Layout, commonly known as CSS Flexbox, is a CSS3 web layout model. The flex layout allows responsive elements within a container to be automatically arranged depending upon screen size.  

In this micro-byte, we'll create a fully responsive webpage design layout consisting of multiple sections. We'll employ CSS flexbox properties to aid in our website styling and learn a lot of things along the way.  

Your task is to learn how to implement the skeleton of the website using HTML markup through small tasks which may include writing code in place of `TODO` comments, adding necessary CSS to implement a structured layout and using media queries to build a responsive design. We believe that you learn by doing!

## Prerequisites

It's preferable to have working introductory knowledge on HTML markup and CSS styling. You'll need a working HTML code editor and a web browser(Chrome, Safari, etc) for this awesome activity. 

## Activities  


### Activity 0: Choose a HTML editor and create two new files with .html and .css extensions

**We'll begin with a working HTML code editor. So go ahead and fire it up. There are a lot of options to choose from including:**

1. `Codepen`
2. `Notepad ++`
3. `VSCode`
4. `Sublime Text3`
5. `NetBeans`

I'll be using Sublime Text3 for this module. Now go ahead and create two new files and save them with the `.html` and `.css` extensions.  


### Activity 1: Start typing in the HTML code inside the code editor

Start your workflow by typing in this basic HTML skeleton code in the `.html` file. So go ahead and type in the following:  

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css"/>
  <title></title>
</head>

<body>

</body>
</html>
```  

### Activity 2: Adding relevant HTML code to build the basic foundation of our website

Our fictitious website will comprise of 4 major components, namely:  

- **Header section**
- **Navbar with nav-links**
- **Body section**
- **Footer section**

### Tasks    

> a. Let's start by adding a **header** section using HTML markup and assigning an experimental classname to it. Add a ***title heading*** and a ***small paragraph*** in it as well to emphasize on content.
>
> b. Now create a ***horizontal navigation bar***. Done?..... So now go ahead and insert ***three to four anchor tags*** inside it and assign names to them as per your choice.  
>
> c. Let's start working with the actual body content of our website.  
>
> We'll create our first body sectional content using any block element of your choice and assign it an experimental classname (here, I've used classname as **left**). We'll also add a ***subheading*** and an ***image representation*** with necessary ***paragraph-based description*** below it. 
>
> d. Next we'll create our second sectional content (try thinking along the lines of block elements) and assign it a random classname to it (here, I've used classname as **right**). Now we'll assign the exact same contents to this body section as well. Finally, go ahead and enclose both the sectional contents (from subtasks ***c*** and ***d***) within a common HTML element and assign it a non-ambiguous classname as well (here, I've used **parent** as the classname).
> 
> e. Finally, let's build a **footer** section. So, what will you use for this? (P.S.- Think how you built the **header** section). Assign it an identifiable classname (here, I've used **footer** as classname) and add a small description inside the footer section.  


**Refer to `Activity-2` under `REFERENCES` section near the bottom for relevant code.**

### Micro-References
1. [HTML Block Elements](https://www.w3schools.com/html/html_blocks.asp)
2. [CSS Pseudo Classes](https://www.w3schools.com/css/css_pseudo_elements.asp)  


### Activity 3: Adding CSS styling to the header section and navbar

We'll add CSS now to add a stylised appeal to our website.  

### Tasks    

> a. Let's start off by referencing the header section using it's assigned classname inside our CSS source file. We'll add a definitive ***padding*** and ***background color*** to the header section and assign contrasting ***text colors*** to the subheading and paragraph inside it. We'll also ***align the text*** centrally inside the header section.

<details>
<summary> Need a hint? Expand to know more</summary>  
  
```
padding: 60px;  
background-color: #1abc9c;  
color: #fff;  
text-align: center;
```  
</details>

> b. Now we'll first align the anchor tags next to each other using CSS flexbox. Could you do it? Now apply a definitive padding and text-color to the anchor tags to add a pop effect to the tags.  
> 
> c. Finally add a hover effect to the anchor tags using pre-defined CSS **pseudo-classes**.   


**Refer to `Activity-3` under `REFERENCES` section near the bottom for relevant code.**  

### Micro-References
1. [CSS Flex Property](https://www.w3schools.com/css/css3_flexbox.asp)  


### Activity 4: Adding CSS styling to the body section  

### Tasks    

> a. Now we'll ***align*** the two block sections enclosed inside the common block section (from Activity-2) adjacent to each other. You'll need a basic CSS property to do so.
> 
> b. Now we'll assign different ***widths*** to the children block tags (preferably 3:7 width ratio) respectively. Once you're done with that, we'll assign different ***background colours*** to both the elements and add consistent ***padding*** to them.  
> 
> c. At this stage, we need to assign a definitive ***padding*** to our images (represented using block tags as well) plus add consistent ***background-color*** to it. So go ahead and add some padding and background-color to the **images** based on your imagination.  
>  

**Facing issues? Refer to `Activity-4` under `REFERENCES` section near the bottom for relevant code.**

### Micro-References
1. [CSS Display Property](https://www.w3schools.com/css/css_display_visibility.asp)
2. [CSS Padding](https://www.w3schools.com/css/css_padding.asp)  


### Activity 5: Adding CSS styling to the footer section and using media query to create responsive design  

We've almost reached the end of this Crio-byte. That's no small feat!!!

### Tasks  

> a. So now we'll add ***padding*** to the footer section as well as a ***consistent background-color*** to it. I leave it entirely upto your imagination. If you're unable to add styling or facing some other issues, just look below: 
> 
> - Finally we'll add a ***media query*** to aid in responsive design on a smaller viewport. Don't know what a media query is? No worries. We've attached a link in the `References` section explaining all about it.  
> 
> So now we have create a media query that triggers on all devices below 768 pixels.  

<details>
  <summary>Need a hint? Expand to know more </summary>
  
  ```
  @media all and (max-width: 768px){  
  
  }
  ```  
  
</details>

> b. We want our flex-items to align ***vertically*** on a smaller viewport for enhanced readability. So go ahead and apply the necessary styling to the navbar and parent block tag. 

<details>
  <summary>Need a hint? Expand to know more </summary>
  
  ```
  @media all and (max-width: 768px){  
    .parent, .navbar{  
      flex-direction: column;  
    }  
  }  
  ```  
  
</details>

**Your final result should look something like this:**  

<p align="center"><img src="images/Activity-5/Preview.gif"/></p>

> You can also refer to `images/Activity-5/output/PNG` as well to view your final responsive web design.  

## CONCLUSION  

Congratulations on reaching this stage. I'm sure you've learnt a lot from this microbyte. You should now have understood the basics of CSS flexbox and how handy it is when it comes to aligning items inside a webpage and making responsive webpage designs. Go ahead, flaunt your design, or even better, build a working website out of it.🎉🎉

## REFERENCES  

1. **Activity-2 tasks**:  
> a. Refer to `src/Activity-2/activity2a.html` for relevant code.  
> b. Refer to `src/Activity-2/activity2b.html` for relevant code.  
> c. Refer to `src/Activity-2/activity2c1.html` for relevant code.  
> d. Refer to `src/Activity-2/activity2c2.html` for relevant code.  
> e. Refer to `src/Activity-2/activity2d.html` for relevant code.  

2. **Activity-3 tasks**:  
> a. Refer to `src/Activity-3/style3a.css` for code reference.  
> b. Refer to `src/Activity-3/style3b.css` for code reference.  
> c. Refer to `src/Activity-3/style3c.css` for code reference.  

3. **Activity-4 tasks**:  
> a. Refer to `src/Activity-4/style4a.css` for relevant details.
> b. Refer to `src/Activity-4/style4b.css` for relevant details.
> c. Refer to `src/Activity-4/style4c.css` for relevant details.

4. **Activity-5 tasks**:  
> a. Refer to `src/Activity-5/style5a.css` for details.  

5. [W3Schools](https://www.w3schools.com/css/)
6. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
7. [Tutorials Point](https://www.tutorialspoint.com/index.htm)

