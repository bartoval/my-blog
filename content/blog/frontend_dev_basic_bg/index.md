---
title: 'Front End developer - Basic Know-out'
path: blog/fundamentals-front-end-dev
tags: [javascript, html, css]
cover: ./preview.png
date: '2019-01-19'
---

Nowadays, Front-end development is more intricate than in the past. Fortunately, the fundamentals are the usual ones, and we are also experiencing technological stability regarding the front-end.
What I want to share is my personal opinion deriving from my practical experience and readings during these years.

## You must be able to build something that exists.

We don't want to reinvent the wheel but trying to develop something that already exists improves your sense of best practice and improve your criticism especially in balancing solutions. Don't be dependent on the latest fancy framework but try implementing:

- A layout and interactions of typical web applications, such as Netflix.
- widgets like a date picker, carousel, e-commerce cart, list of books.
- Function like throttling, debounce or deep object cloning.

Try to figure out what libraries is doing under the hood.

## JavaScript

**You need to know JavaScript**. At least, the following are topics within JavaScript you should know well:

- Composition and high order functions.
- Handling asynchronous calls using callbacks, promises, await and async.
- Communicating sequential processes (CSP) channels and generators.
- Event delegation and bubbling.
- Apply closures.
- Concepts like Hoisting, function expressions & declarations.
- Binding a specifically call, bind, apply and lexical this.
- Object prototypes, constructors and mixins.
- When to use function declarations and expressions.

## DOM

How to manipilate and traverse the DOM is important.

- Selecting or finding nodes using document.querySelector or other selectors.
- Manipulation: add, remove, copy, and create nodes in the DOM tree. You should know operations such as how to change the text content of a node and toggle, remove or add a CSS classname.
- Traversal up and down: Node.parentNode, Node.firstChild, Node.lastChild and Node.childNodes.
- Traversal left and right: Node.previousSibling and Node.nextSibling.
- Performance and touching the DOM can be expensive when you have many nodes, you should at least know about document fragments and node caching.

## CSS

At lest, you should know how to layout elements on a page, how to target elements using child or direct descendant selectors and when to use classes vs IDs.

- Responsive design: changing an elements dimensions based on the browser width size.
- Adaptive design: changing an elements dimensions based on specific break points.
- How to calculate a selector specificity and how the cascade affects attributes.
- Appropriate namespacing and naming of classnames.
- Knowing which HTML tags that best represent the content you are displaying and associated attributes should be back of the hand knowledge.

## Web Performance

Understand Performance is the key of User experience and probably one of the most critical topics.

- Critical rendering path.
- Lazy loading and bundle splitting.
- When to prefetch and preload resources.
- Differences between the browser layout, compositing, and painting.
- Reduce browser reflows and when to promote an element to the GPU.
- Service workers.
- Image optimizations.
- General implications of HTTP/2 and server-push.

## System Design

This area is usually high-level (i.e. build a shopping checkout service).
Below are areas to think about:

- Rendering: client-side (CSR), server-side (SSR) and universal rendering.
- State management such as choosing between unidirectional data flow or two-way data binding.
- Async flow: your components may need to communicate in real-time with the server.
- Separation of concerns: Model-View-Controller (MVC), Model-View-ViewModel (MVVM) and Model-View-Presenter (MVP) patterns
- Will your design use the same implementation for the web, mobile web, and hybrid apps or will they be separate implementations?
- Your design should consider how assets are built with dependencies (code splitting), tested (unit and integration tests) and deployed. You should also think about how you will send assets through a CDN or inline them to reduce network latency

## Data Structures & Algorithms

Single page apps are more common now and understanding things like memory management helps.
For example, if you were asked to build a client-side spell checker, knowing common data structures and algorithms is going to make your life a lot easier.
Having a basic understanding of Big-O time complexities and common runtimes such as O(N) and O(N Log N) won't hurt you.

## General Web Knowledge

There are some paradigms that we use in our development process:

HTTP requests and GET and POST along with associated headers such as Cache-Control, ETag, Status Codes, and Transfer-Encoding.
Security and when to use JSONP, CORs, and iFrame policies.
