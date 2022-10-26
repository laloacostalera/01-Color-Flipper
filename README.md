#javascript
#DOM 

The objective of the app is to generate a random hex color.

If you think about it a hex color is a compound of an # and 6 digits.
//we define a variable with numbers from 0 to 9 and letters from A to F -components of a hex color.
In order to fetch objects from the html we recur to Document methods such as

<code>
document.getElementById("btn");
document.querySelector(".color");
</code>

and we store the values into variables btn and color.

Then into btn we add an eventListener.
When a click occurs a for loop is 
triggered and a random number generated.

With that number stored into hexColor we modify the text that we see in the page and also the background color.
