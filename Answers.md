# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project.


Checkoff Question 1.1
Explain in your own words what ReactDOM.render is doing.
RenderDOM.render is kind of a description of the content that is displayed on the screen. We have rendered the cart to the root component, then the root shows the content from the Cart class.

Checkoff Question 1.2
What are some of the advantages and cons to using Semantic UI? (or any UI library for that matter)
Pros: The elements offer a huge amount of customization, far beyond a framework like bootstrap.
Cons: Once you wanna do something that is not mentioned in the doc - prepare to spend an hour, then give up and implement a custom "workaround".

Checkoff Question 1.3
In your own words, explain why we need to wrap addToCart with another function.
Since we need to pass in an argument `addToCart` but we can't pass it in directly when assigning it to the `onClick` property, the solution is to wrap `addToCart` in a function whose only purpose is to call `addToCart`.

Checkoff Question 1.4
the reason why it allowed us to only write the Product component once inside the Cart's render function is because that we can get pass

Checkoff 2.0: 
Give an example of a component we haven't built or talked about in class that would require state. Why does it need state?
The Product component here would focus on getting a list of products and then iterate through each of the products and render each Product Component.


Question 2.1
How do we accomplish parent-to-child communication in React? What about child-to-parent? Why can't they be the same?
The callback function should work. 
props are data that are passed from a parent to its children and are made available through this.props on the child component. 
Child-to-parent is to have the parent pass a function to the child through props. 

Checkoff 2.2: How might we go about adding and removing items from the cart given the structure of our state?
we can use the removeItem( ) to remove the named key entirely remove all keys and values from the session storage.  We can change the attributes in our state.
