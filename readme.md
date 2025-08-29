
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer 1 => 

getElementById is a data fetching method, by which if a tag or an element is given an unique ID, then this can select that specific tag or element. Then the innerText, value etc can be fetched from that element. Also can add various Events to that specific element.

getElementByClassName is also a data fetching method, but in this way, more than one data can be fetched. Because when some tag or elements are given a class Name, then all the tags and elements are named that class can be accessed by getElementsByClassName. And it gives the data in a HTMLcollection, then I can loop through all the data specifically. Also can fetch data and add events

querySelector is also a data fetching method. But is gives first child of that specific element. Can write basic css within ' '.

querySelectorAll is like querySelector, but it gives all the child of that specific element.

2. How do you **create and insert a new element into the DOM**?

Answer 2 =>
 new element can be created using:
 const newElement = document.createElement('div');  //this creates a new div element and puts it in newElement variable

 then the innerText or innerHTML can be added: newElement.innerHTML = `<li>hello world</li>`;

 then can be inserted to an element by fetching that element by id: document.gtElementById('parent-div').appendchild(newElement);
3. What is **Event Bubbling** and how does it work?

 Answer 3 =>

 Event Bubbling a characteristics of Event, when an element is clicked in html file, then it targets that element, but also it targets the parent of that element, then again the parent of that element .
 
 It works like when an element is clicked or an event happens, it targets that element, then it checks if that element has parent, then targets that, then again checks the parent, then again targets that. It goes upwards, until the html file itself. This is a bubbling nature like a bubble underwater floats to the top of surface.
4. What is **Event Delegation** in JavaScript? Why is it useful?

 Answer 4 =>

 event delegate is a use case of event bubble.As bubble goes upwards targeting the element's parents. By using event delegate, it can target the parents and add event listener to it. Because we get every specific element by id, then if we give class name to some child of a parent, then by event.target and looping them, we can get every child and by using parentNode, we can access the child parent.

 This is useful when accessing the parent by giving event to the child and adding element to the parent.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

 Answer 5 =>

 preventDefault() is function that stops the default behavior of a button, as button behaves all the buttons as submit or reload page, then it's not useful while saving some specific data or act in a certain way. This function stops that and make it act as a button only to the specific event.

stopPropagation() is function that stops the event bubbling to where it needs to. As event bubbling happens naturally, it goes through every parent of a specific element, it goes to html file. To stop the propagation or the upwards targeting this function is used. If this function is applied to a specific element, bubbling won't happen after that element.

---


 
 # Let's Code and Achieve your Dream 🎯
