# How To Create A Registration Form in HTML From Scratch#

## Step 1: Choose a HTML editor
To create HTML code, you’ll need an HTML editor. There are dozens on the market and many are free to download.
Popular editors include:

* Codepen
* Notepad ++
* Kompozer
* Sublime Text
* NetBeans
* CoffeeCup

Phase 6 HTML Editor
All of these editors have large interfaces that enable you to manually enter the code. 
## Step 2: Create a new file with .HTML extension
The next step is to tell your operating system that you intend to create a new HTML file. Do this by creating a new file and then saving it with the .html extension. It’s easy: just type the file name (whatever you choose), and then follow it with .html. For example: [myfile.html]. 
  ## Step 3: Type <html> into the editor
This command tells the editor that you intend to create HTML code, and it will automatically generate the following code for you.

```
<!DOCTYPE html>
<html>
<head>          
      <title></title>
</head>
<body> 
    
</body>
</html>

```


## Step 4: Fill in the fields and create the form
Once you’ve reached this stage, the next step is to start filling in fields outlined by the above template and create the form.
Type:
```

<!DOCTYPE html>
<html>
  <head>
     <h1> Company Registration Form</h1>
  </head>  
<body>
<form>	
     <table>		
           <tr>			
               <td>				
                   Email Address:			
               </td>			
                <td>				 <br />
                   <input type=”text” email=””>			
                </td>		
           </tr>
            <tr>
                 <td>				
                   Password:			
                 </td>			
                 <td>				
                  <input type=”Password” name=””>			
                 </td>		
           </tr>	
     </table>
</form> 
</body>
</html>
```

Here's what this basic code will produce:





The command “tr” tells the code to arrange the following statements into a row. The “td” code stands for “table data” and tells the program that the what you type next is the data you want to have in your registration form.
You’ll notice that each time you want to create a new field in your table, you have to type the command “tr” and then close the command with “/tr.” You can add as many fields to your form as you like.
Here, we’ve just added two for simplicity, but there’s nothing stopping you from adding additional fields such as telephone numbers, reasons for getting in contact, name of the user’s favourite dog, etc.
You’ll also notice that we’ve been very specific about the input type. When the user types in their email address, the text will appear on their screen, just as it would in a regular word processing document or a search bar. But in the second field we specified the input type as “password” which instructs the program to conceal it and show each character as a little dot. 
## Step 5: Add placeholders
A placeholder is text inside your form's fields that prompts users to respond to each field in a particular way.  Here's how you can easily add prompt texts to your HTML registration form:
```


<!DOCTYPE html>
<html>
<head>
<h1> Company Registration Form</h1>
</head>
<body>
<form>
	<table>
		<tr>
			<td>
				Email Address:
			</td>

			<td>
				<input type=”mail”  placeholder=”Email” name=””>
			</td>
		</tr>
<tr>
<td>
				Password:
			</td>

			<td>
				<input type=”Password” placeholder=”Password” name=””>
			</td>
		</tr>
	</table>
</form> 
</body>
</html>
```

Typing in this new code will produce a form like this:


You can also create additional options for customers to select their age or gender using a similar structure to that given above.
To create a field for gender, insert the following values to your code (right above the last </table> tag):
```

<input type="checkbox" name="Male" value="Male"> Male<br>
  <input type="checkbox" name="Female" value="Female"> Female<br>
```

This will turn into checkboxes, one for male and one for female. Here's how your form should look now:

## How to make your HTML form look better 
If you're looking to create a very basic form, one way to improve the look of your HTML form is by using CSS. CSS allows you to customise several aspects of the HTML code to make it look better. 

### Fonts and text
HTML uses a standard font, but CSS allows you to change it to a range of different styles. It’s worth pointing out that the exact style you end up with is usually down to the browser. Firefox, for instance, will churn out different fonts from Safari.
The trick with font styles is to choose styles that fit the aesthetic of the rest of your website. Some widgets, like “form,” do not automatically use the same font and style as the rest of the browser, meaning that your form could wind up with inconsistent text.
There's a variety of font and colour elements you can change using CSS. Here's a helpful list.
Here, we've added some CSS to specify the font type ("family"), size, weight and colour.
```


table {
	font-family : Helvetica;
	font-size : 100%;
  font-weight: bold;
}
 h1 {
   color: #ea503f;
   font-family: Arial;
 }

```

 Here's how your form should look now:

