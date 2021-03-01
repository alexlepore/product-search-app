### Fullstack Product Serve Web Application
To preface, I would like to note that this project was written entirely in JavaScript and is seperated by a client and server. React being the main library used on the client side and express being the main library used server side. Throughout my design, I have left notes further explaining how each function and variable is being used. 
### Client
As I explained before, I am using react as my main library to aid in writing the UI. I am also using React-bootstrap for responsivenes. I am also using the axios library to make my post request to the server. 

Opening the project for the first time presents the user with a stock image and a blank title and link section. 

After entering a valid product id, the client sends a request to the node server. Strings will not be accepted and the user will be asked to please try again. Numbers that dont match the id's found in the JSON file will be responded with a 404 status from the server. Status codes along with the payload object can be found in the console.
### Server
I decided to write the server in a way that involved as little of extra files as possible. I was able to fit all the major pieces needed in the single server file. 

The file is seperated into three distict sections. The first is dependency requirements. The second being settings for the middleware. And the third being the route for my API. 

When this route is called upon. Basically what is happening is the array of objects in the JSON file is interated through via a for loop and when the users input from the client is matched with one of the id's found in the JSON file the entire object including all properties found in that index are sent to the client. 

Q/A.

1. My system takes input from the user, then sends a post request accompanied by the user input to the server then sends back a response, if the input matches an id found in the JSON file. 
 
2. My system is dependent on the speed of the for-loop to which I am not entirely sure on its exact speed, but the system should work just as well with a 1 product file as a one thousand product file.

3. Again the amount of users is more so dependent on how quickly nodejs is able to handle load based on it own specifications. 

4. For this project I used stackoverflow for the majority of my questions. Most of my questions were minor things and not the overall arhcitecture of how this project should be written. An example of a minor detail would be how to use a conditional rendering in functional react components. 

5. I Spent about 2-3 days of solid work on this project, but had scattered the work over about 4 days. If I had unlimited time to spend on this project I would focus more on the UI making it look more interesting and appealing. I also had the idea of being able to enter more than one input into the search bar seperated by commas or not. I think being able to look for multple ids at any given time would be useful as opposed to just one.

I was also asked to do this project using get request, but couldn't seem to find an apporpriate way to do that as I was gathering input from the user. So, I would like to explore that more. 

6. If I were to critique my code, I think my comments could use work. I have the feeling I might be brushing over things that are clear to me because I wrote the code.