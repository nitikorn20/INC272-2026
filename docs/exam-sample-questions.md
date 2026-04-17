# Exam Sample Questions

This page provides sample questions to help students prepare for the Week 04 paper-based individual exam.

These questions reflect the style and difficulty of the actual exam. The actual exam will not be identical to these samples.

Review the [Exam Blueprint](./exam-blueprint.md) for topic weights and scope guidance.

* * *

## HTML Basics

**Question 1**

Look at the following code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

a) What does `<!DOCTYPE html>` tell the browser?  
b) What is the purpose of the `<head>` section?  
c) What will `<h1>Welcome</h1>` look like when displayed in the browser?

---

**Question 2**

Look at the following code:

```html
<ul>
  <li>Sensor A</li>
  <li>Sensor B</li>
  <li>Sensor C</li>
</ul>
```

a) What type of list does this produce?  
b) What tag would you use instead to produce a numbered list?

---

**Question 3**

The following HTML contains a mistake. Identify the mistake and write the corrected version.

```html
<p>Status: <strong>Active<strong></p>
```

---

**Question 4**

What is the difference between using an `id` attribute and a `class` attribute on an HTML element? Give one reason to use each.

* * *

## CSS Basics

**Question 5**

Look at the following CSS:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

a) What does this rule do?  
b) What is `h1` called in this rule?

---

**Question 6**

Look at the following HTML and CSS:

```html
<p id="status">Connected</p>
<p class="label">Channel 1</p>
```

```css
#status {
  color: green;
}

.label {
  font-weight: bold;
}
```

a) What color will the word "Connected" appear?  
b) What visual effect will the class `.label` apply to "Channel 1"?  
c) What character is used to select by `id`? What character is used to select by `class`?

---

**Question 7**

The following CSS is not applying the expected style. Identify the mistake:

```css
.button {
  background-color: red
  color: white;
}
```

---

**Question 8**

What is the difference between internal CSS (using a `<style>` tag) and external CSS (using a separate `.css` file)? When would you prefer to use an external file?

* * *

## JavaScript Basics

**Question 9**

Look at the following code:

```javascript
let count = 0;

function increment() {
  count = count + 1;
  console.log(count);
}

increment();
increment();
increment();
```

a) What will be printed to the console after all three calls to `increment()`?  
b) What keyword is used to declare the variable `count`?

---

**Question 10**

Look at the following code:

```javascript
let value = 75;

if (value > 80) {
  console.log("High");
} else if (value > 50) {
  console.log("Medium");
} else {
  console.log("Low");
}
```

What will be printed to the console? Explain why.

---

**Question 11**

Look at the following function:

```javascript
function add(a, b) {
  return a + b;
}

let result = add(3, 7);
console.log(result);
```

a) What value does `result` hold?  
b) What does the `return` keyword do?

---

**Question 12**

The following code contains a mistake. Identify it and write the corrected version:

```javascript
let name = "Sensor";
console.log("Name: " + Name);
```

---

**Question 13**

Look at the following code:

```javascript
let items = ["LED", "Switch", "ADC", "PWM"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
```

a) How many times will the loop run?  
b) What will the last line printed to the console be?

* * *

## DOM and Events

**Question 14**

Look at the following HTML and JavaScript:

```html
<button id="toggleBtn">Toggle LED</button>
<p id="status">OFF</p>
```

```javascript
let ledOn = false;

document.getElementById("toggleBtn").addEventListener("click", function () {
  ledOn = !ledOn;
  if (ledOn) {
    document.getElementById("status").textContent = "ON";
  } else {
    document.getElementById("status").textContent = "OFF";
  }
});
```

a) What happens when the user clicks the button the first time?  
b) What happens when the user clicks the button a second time?  
c) What does `document.getElementById("status")` return?

---

**Question 15**

Look at the following code:

```javascript
document.getElementById("valueDisplay").textContent = "512";
```

Describe in plain words what this line does.

---

**Question 16**

The following code is supposed to change the background color of a `<div id="led1">` element to green when a button is clicked. The code does not work. Identify the mistake:

```html
<div id="led1"></div>
<button id="onBtn">Turn On</button>
```

```javascript
document.getElementById("onBtn").addEventListener("click", function () {
  document.getElementById("led").style.backgroundColor = "green";
});
```

---

**Question 17**

What is the purpose of `addEventListener` in JavaScript? Why is it used instead of writing code that runs immediately when the page loads?

* * *

## Simulator-Related Understanding

**Question 18**

In the course simulator, a web application sends the following command:

```
led,2,1
```

a) What does this command do?  
b) What response would you expect the simulator to send back?

---

**Question 19**

A student writes a web application that polls the ADC channel 0 every second using a `setInterval` call and displays the returned value on screen.

a) What command does the browser send to the simulator to read ADC channel 0?  
b) What does a typical response from the simulator look like?  
c) Why does the displayed value change over time even though the student has not changed any settings?

* * *

## Answer Key Notes

This section is for instructor use. Do not distribute with student copies.

| Question | Key Points |
|----------|------------|
| Q1 | DOCTYPE declares HTML5; head holds metadata; h1 renders as a large heading |
| Q2 | `<ul>` is unordered; `<ol>` is ordered/numbered |
| Q3 | Closing tag missing slash: `</strong>` |
| Q4 | id is unique per page; class can be reused across multiple elements |
| Q5 | Rule sets h1 color to blue and font size to 24px; h1 is the selector |
| Q6 | Green; bold; `#` for id, `.` for class |
| Q7 | Missing semicolon after `background-color: red` |
| Q8 | Internal is inside the HTML file; external is a separate file reusable across pages |
| Q9 | Prints 1, 2, 3; `let` |
| Q10 | Prints "Medium"; value 75 is not greater than 80 but is greater than 50 |
| Q11 | result = 10; return sends a value back to the caller |
| Q12 | `Name` should be `name` (case-sensitive variable) |
| Q13 | Runs 4 times; last line printed is "PWM" |
| Q14 | Status shows "ON"; status shows "OFF"; returns the DOM element with id "status" |
| Q15 | Sets the text content of the element with id "valueDisplay" to the string "512" |
| Q16 | `getElementById("led")` should be `getElementById("led1")` |
| Q17 | addEventListener attaches a function to run only when an event occurs; immediate code runs before the user interacts |
| Q18 | Turns on LED 2 (set to 1); response is `ok: led,2,1` |
| Q19 | Sends `adc,0`; response is `ok: adc,0,<value>`; the simulator generates continuously changing values using a sine motion model |
