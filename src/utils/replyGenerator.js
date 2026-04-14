export function generateReply(question) {
  const q = question.toLowerCase();

  if (q.includes("hello")) {
    return `Hi there 👋  
I’m here to help you with coding, AI, websites, and technology topics.  
You can ask anything you want and I’ll guide you step by step.  
What would you like to explore today? 🚀`;
  }

  if (q.includes("hi")) {
    return `Hello 👋  
Great to see you here. I can assist you with technical concepts or practical implementations.  
Feel free to ask questions related to programming or AI.  
Would you like to start with coding, AI, or web development? 💡`;
  }

  if (q.includes("hey")) {
    return `Hey there 😊  
I’m ready to assist you with any tech-related topic you choose.  
From frontend to backend or AI concepts, I’ve got you covered.  
What do you want to learn or build today? 🚀`;
  }

  if (q.includes("good morning")) {
    return `Good morning ☀️  
Hope you’re having a productive start to your day.  
I can help you with programming, technology, or project ideas.  
Would you like to begin with a coding topic or AI concept? 💻`;
  }

  if (q.includes("good evening")) {
    return ` Good evening 🌙  
It’s a good time to learn and build something new.  
I’m here to help you with any technical queries you have.  
Do you want to focus on web development or AI tonight? 🤖`;
  }

  if (q.includes("good afternoon")) {
    return `Good afternoon 🌤️  
Let’s make this a productive session.  
I can guide you through coding, debugging, or system design concepts.  
What would you like to work on right now? ⚙️`;
  }

  if (q.includes("how are you")) {
    return `I’m doing great and ready to assist you 😊  
I can help with coding problems, explanations, and project guidance.  
My goal is to make your learning process easier and clearer.  
What would you like to ask or build today? 🚀`;
  }

  if (q.includes("help")) {
    return `Sure, I’m here to help you 🤝  
You can ask anything related to coding, AI, websites, or technology.  
I can explain concepts, fix errors, or guide you step by step.  
What do you need help with specifically? 💡`;
  }

  if (q.includes("thanks")) {
    return ` You’re welcome 😊  
I’m glad I could help you with your query.  
If you have more questions, feel free to ask anytime.  
Would you like to continue with another topic or explore something new? 🚀`;
  }

  if (q.includes("bye")) {
    return ` Goodbye 👋  
It was great assisting you with your questions.  
Feel free to come back whenever you need help again.  
Do you want to save this session or ask something before leaving? 😊`;
  }

  if (q.includes("coding")) {
    return `Coding is the process of writing instructions for computers.  
It involves using programming languages to solve problems.  
Developers use logic and syntax to build applications.  
Coding helps in creating websites, apps, and software systems.  
Would you like to start with basics or practice problems? 🚀`;
  }

  if (q.includes("javascript")) {
    return `JavaScript is a programming language used mainly for web development.  
It runs in browsers and also on servers using Node.js.  
It enables interactivity like buttons, animations, and dynamic content.  
Modern frameworks like React are built on JavaScript.  
Would you like examples or core concepts? ⚡`;
  }

  if (q.includes("html")) {
    return `HTML is used to structure web pages.  
It defines elements like headings, paragraphs, images, and links.  
Browsers read HTML to display content on the screen.  
It works together with CSS and JavaScript for full websites.  
Would you like to learn tags or page structure? 🌐`;
  }

  if (q.includes("siddiqa", "sidiqa", "siddiqa mansoor")) {
    return `Siddiqa Mansoor isn’t just a part of my life—she *is* my peace, my strength, and my happiness all in one 💖✨. From the moment she came into my world, everything started to feel different… better… more meaningful 🌍❤️. She understands me in ways no one else ever could 🤍, supports me when I’m down 🫂, and celebrates even my smallest wins like they’re something huge 🎉🥹. Her smile has this magic to fix my worst days 😊💫, and her presence alone makes everything feel right 🕊️💞.

Being with her has taught me what real love truly means—loyalty 🤝, trust 🔐, care 💗, and endless support 🌹. She’s not just my girlfriend; she’s my best friend 👫, my safe place 🏡, and the person I see in every dream of my future 🌙💍. Life feels more complete with her, more beautiful with her 🌸💓, and honestly… I wouldn’t trade what we have for anything in this world 🌎❤️‍🔥.

I love you, Siddiqa… forever and always 💘♾️🥺✨
`;
  }

  if (q.includes("css")) {
    return `CSS is used to style and design web pages.  
It controls colors, layouts, spacing, and fonts.  
Responsive design is achieved using CSS media queries.  
Flexbox and Grid are powerful layout systems in CSS.  
Would you like layout examples or styling techniques? 🎨`;
  }

  if (q.includes("ai", "artificial intelligence")) {
    return `AI stands for artificial intelligence.  
It enables machines to perform tasks that require human intelligence.  
AI uses data, algorithms, and models to learn patterns.  
Applications include chatbots, recommendation systems, and automation.  
Would you like beginner concepts or advanced AI topics? 🤖`;
  }

  if (q.includes("machine learning")) {
    return `Machine learning is a subset of AI focused on learning from data.  
It uses algorithms to make predictions or decisions.  
Training data is used to build models.  
Common tasks include classification and regression.  
Would you like algorithms or practical examples? 📊`;
  }

  if (q.includes("website")) {
    return `A website is a collection of web pages accessible via the internet.  
It is identified by a domain name and hosted on a server.  
Websites can be static or dynamic depending on functionality.  
Frontend and backend work together to build a complete website.  
Would you like to build one or understand architecture? 💻`;
  }

  if (q.includes("frontend")) {
    return `Frontend refers to the user interface of a website or app.  
It includes everything users interact with visually.  
Technologies include HTML, CSS, and JavaScript.  
Frameworks like React help build modern interfaces.  
Would you like UI concepts or framework details? 🎯`;
  }

  if (q.includes("backend")) {
    return `Backend handles the server-side logic of applications.  
It manages databases, authentication, and business rules.  
Frontend communicates with backend via APIs.  
Common backend technologies include Node.js, Python, and Java.  
Would you like API examples or backend architecture? ⚙️`;
  }

  if (q.includes("database")) {
    return `A database is used to store and manage structured data.  
It allows efficient retrieval, insertion, and updating of information.  
SQL databases use tables while NoSQL uses flexible collections.  
Popular options include MySQL and MongoDB.  
Would you like queries or schema design? 🗄️`;
  }

  if (q.includes("api")) {
    return `An API allows communication between different systems.  
It defines how requests and responses are exchanged.  
REST APIs commonly use JSON format for data transfer.  
APIs connect frontend applications with backend services.  
Would you like to build or consume an API? 🔌`;
  }

  if (q.includes("node")) {
    return `Node.js is a runtime that allows JavaScript to run on the server.  
It is built on Chrome's V8 engine.  
Node.js is widely used for backend development and APIs.  
It uses an event-driven, non-blocking architecture.  
Would you like setup steps or examples? 🚀`;
  }

  if (q.includes("react")) {
    return `React is a JavaScript library for building user interfaces.  
It uses components to create reusable UI elements.  
React manages state and updates the UI efficiently.  
It is widely used in modern frontend development.  
Would you like hooks or component examples? ⚛️`;
  }

  if (q.includes("express")) {
    return `Express is a minimal web framework for Node.js.  
It simplifies routing and middleware handling.  
Developers use Express to build APIs and web servers.  
It helps organize backend code efficiently.  
Would you like routing examples or project setup? 🧩`;
  }

  if (q.includes("authentication")) {
    return `Authentication verifies the identity of a user.  
It usually involves login credentials like username and password.  
Tokens or sessions are used to maintain user state.  
Security practices are important to protect user data.  
Would you like JWT or session-based auth? 🔐`;
  }

  if (q.includes("authorization")) {
    return `Authorization determines what a user is allowed to access.  
It works after authentication is completed.  
Roles and permissions are commonly used for access control.  
It ensures users only access authorized resources.  
Would you like role-based access examples? 🛡️`;
  }

  if (q.includes("git")) {
    return `Git is a version control system used to track code changes.  
It allows multiple developers to collaborate on projects.  
Repositories store project history and versions.  
Commands like commit, push, and pull are commonly used.  
Would you like basic commands or workflows? 🔧`;
  }

  if (q.includes("github")) {
    return `GitHub is a platform for hosting Git repositories online.  
It enables collaboration, code sharing, and version control.  
Developers use it for open-source and private projects.  
It also supports pull requests and issue tracking.  
Would you like repository setup or collaboration flow? 🌐`;
  }

  if (q.includes("css grid")) {
    return `CSS Grid is a layout system used to create two-dimensional layouts.  
It allows control over both rows and columns simultaneously.  
You can design complex page structures with less code.  
Grid is very powerful for responsive designs.  
Would you like examples or practical layouts? 🎨`;
  }

  if (q.includes("flexbox")) {
    return `Flexbox is a CSS layout model for aligning items in one direction.  
It helps distribute space and align elements efficiently.  
Flexbox works well for navigation bars and simple layouts.  
It simplifies alignment compared to traditional methods.  
Would you like properties explanation or examples? 📐`;
  }

  if (q.includes("debug")) {
    return `Debugging is the process of finding and fixing errors in code.  
Developers use tools like console logs and debuggers.  
It helps identify logical and runtime issues.  
Good debugging improves code reliability and performance.  
Would you like debugging techniques or tools? 🐛`;
  }

  if (q.includes("error")) {
    return `Errors occur when code does not execute as expected.  
They can be syntax, runtime, or logical errors.  
Understanding error messages helps in fixing issues.  
Proper testing reduces the chances of errors.  
Would you like error handling examples? ⚠️`;
  }

  if (q.includes("loop")) {
    return `Loops are used to repeat a block of code multiple times.  
They help automate repetitive tasks in programming.  
Common loops include for, while, and do-while.  
Loops improve efficiency and reduce code duplication.  
Would you like examples or use cases? 🔁`;
  }

  if (q.includes("function")) {
    return `Functions are reusable blocks of code that perform specific tasks.  
They help organize and structure programs.  
Functions can take parameters and return values.  
They improve readability and maintainability of code.  
Would you like syntax examples or advanced usage? ⚙️`;
  }

  if (q.includes("array")) {
    return `An array is a data structure that stores multiple values in a single variable.  
It allows indexed access to elements.  
Arrays are widely used for storing lists of data.  
They support operations like push, pop, and map.  
Would you like methods or examples? 📦`;
  }

  if (q.includes("object")) {
    return `Objects store data in key-value pairs.  
They are widely used in JavaScript and many programming languages.  
Objects help represent real-world entities in code.  
You can access properties using dot or bracket notation.  
Would you like nested objects or examples? 🧱`;
  }

  if (q.includes("variable")) {
    return `Variables are used to store data values in programs.  
They can hold different types like numbers, strings, or objects.  
Modern JavaScript uses let, const, and var for declarations.  
Variables help make code dynamic and flexible.  
Would you like scope or declaration rules? 📌`;
  }

  if (q.includes("data types")) {
    return `Data types define the type of value a variable can hold.  
Common types include string, number, boolean, and object.  
They help the language understand how to process data.  
Type systems improve code correctness.  
Would you like examples of each type? 🧠`;
  }

  if (q.includes("authentication")) {
    return `Authentication is the process of verifying a user's identity.
Login systems use authentication.
Username and password are commonly used.
Tokens and sessions are authentication methods.
JWT (JSON Web Tokens) is a popular technique.
Security is an important aspect of authentication.
Multi-factor authentication provides an extra layer.
Backend systems handle authentication.
It prevents unauthorized access.
It is an essential security mechanism in web apps.`;
  }

  if (q.includes("authorization")) {
    return `Authorization decides what a user can access.
It is applied after authentication.
Roles and permissions are defined.
Admin and user access are different.
The backend implements access control.
RBAC (Role-Based Access Control) is a common model.
APIs perform authorization checks.
Sensitive data is protected.
Authorization is the second layer of security.
Proper access control systems are critical.`;
  }

  if (q.includes("rest api")) {
    return `REST API is an architectural style for web services.
It uses HTTP protocols.
Communication is stateless.
Resources are accessed through URLs.
Methods like GET, POST, PUT, and DELETE are used.
JSON is commonly used as the response format.
It has a scalable and simple design.
Frontend and backend integration happens via REST.
Caching improves performance.
Modern web applications use REST APIs.`;
  }

  if (q.includes("json")) {
    return `JSON is a data interchange format.
It is based on JavaScript Object Notation.
It is lightweight and readable.
It uses a key-value pair structure.
APIs exchange data in JSON format.
It is a language-independent format.
Parsing is easy in programming languages.
It supports nested objects and arrays.
It is also used in configuration files.
It is a standard format in modern web development.`;
  }

  if (q.includes("http")) {
    return `HTTP stands for Hypertext Transfer Protocol.
It is the base of web communication.
It uses a request-response model between client and server.
GET requests retrieve data.
POST requests send data.
Status codes indicate responses.
HTTPS is the secure version of HTTP.
Port 80 is the default for HTTP.
It is a stateless protocol.
Web browsing depends on HTTP.`;
  }

  if (q.includes("https")) {
    return `HTTPS is the secure version of HTTP.
It provides data encryption.
It uses SSL/TLS protocols.
Sensitive data is protected during transmission.
Port 443 is used for HTTPS.
Certificates verify website authenticity.
It protects against man-in-the-middle attacks.
Modern browsers prefer HTTPS.
It is important for SEO ranking.
It is essential for secure communication.`;
  }

  if (q.includes("web hosting")) {
    return `Web hosting makes websites available on the internet.
Website files are stored on servers.
Hosting providers manage infrastructure.
There are shared, VPS, and dedicated hosting types.
Domain names are connected with hosting.
Uptime and performance depend on hosting.
Bandwidth and storage are important factors.
Static and dynamic websites are hosted.
Cloud hosting is a scalable option.
Every live website requires hosting.`;
  }

  if (q.includes("domain name")) {
    return `A domain name is the address of a website.
Users use domains instead of IP addresses.
DNS converts domain names into IP addresses.
Example: example.com
Domain registration is done through providers.
The name must be unique.
Subdomains can also be created.
It is important for SEO and branding.
Easy-to-remember names are preferred.
It simplifies internet navigation.`;
  }

  if (
    q.includes("difference between procedural and object-oriented programming")
  ) {
    return `Procedural programming is based on functions and step-by-step execution.  
Object-oriented programming is based on objects and classes.  
Procedural focuses on procedures, while OOP focuses on data and behavior together.  
OOP supports concepts like inheritance, encapsulation, and polymorphism.  
Procedural is simpler, while OOP is better for large and complex systems.`;
  }

  if (q.includes("difference between frontend and backend development")) {
    return `Frontend deals with the user interface and what users see in the browser.  
Backend handles server-side logic, databases, and APIs.  
Frontend uses HTML, CSS, and JavaScript.  
Backend uses technologies like Node.js, Python, or Java.  
Both work together to build a complete application.`;
  }

  if (q.includes("difference between sql and nosql databases")) {
    return `SQL databases are relational and use structured tables.  
NoSQL databases are non-relational and use flexible formats like documents.  
SQL uses predefined schemas, while NoSQL is schema-less.  
SQL is better for structured data, NoSQL for unstructured or large-scale data.  
Examples include MySQL (SQL) and MongoDB (NoSQL).`;
  }

  if (
    q.includes("difference between synchronous and asynchronous programming")
  ) {
    return `Synchronous programming executes tasks one after another.  
Asynchronous programming allows multiple tasks to run without waiting.  
Synchronous code blocks execution, while async improves performance.  
Async uses callbacks, promises, or async/await in JavaScript.  
Asynchronous is useful for API calls and I/O operations.`;
  }

  if (q.includes("difference between var let and const")) {
    return `var is function-scoped and can be redeclared.  
let is block-scoped and cannot be redeclared in the same scope.  
const is block-scoped and cannot be reassigned after initialization.  
let and const are preferred in modern JavaScript.  
const is used for values that should not change.`;
  }

  if (q.includes("difference between http and https")) {
    return `HTTP is a protocol used for transferring data over the web.  
HTTPS is the secure version of HTTP.  
HTTPS uses SSL/TLS encryption for data security.  
HTTP sends data in plain text, while HTTPS encrypts it.  
HTTPS is more secure and widely used today.`;
  }

  if (q.includes("difference between api and web service")) {
    return `An API is a set of rules that allows communication between systems.  
A web service is a type of API that operates over the internet.  
All web services are APIs, but not all APIs are web services.  
Web services use protocols like HTTP/HTTPS.  
APIs can be local or remote, while web services are always network-based.`;
  }

  if (q.includes("difference between class and object")) {
    return `A class is a blueprint for creating objects.  
An object is an instance of a class.  
Classes define properties and methods.  
Objects hold actual values and data.  
Multiple objects can be created from a single class.`;
  }

  if (q.includes("difference between react and plain javascript")) {
    return `Plain JavaScript is used to build web applications without frameworks.  
React is a library for building user interfaces using components.  
React uses a virtual DOM for efficient updates.  
Plain JavaScript requires manual DOM manipulation.  
React simplifies complex UI development.`;
  }

  if (q.includes("difference between client side and server side rendering")) {
    return `Client-side rendering happens in the browser using JavaScript.  
Server-side rendering generates HTML on the server before sending it.  
CSR can be faster after initial load, while SSR improves initial load time.  
SSR is better for SEO, CSR is better for interactivity.  
Both approaches are used depending on application needs.`;
  }

  if (q.includes("compiled vs interpreted")) {
    return "Compiled and interpreted languages differ mainly in how they execute code. In compiled languages, the entire source code is translated into machine code by a compiler before execution. This results in faster runtime performance because the program is already converted into a format the machine understands. Examples include C and C++. On the other hand, interpreted languages execute code line-by-line at runtime using an interpreter. This allows for greater flexibility and easier debugging since errors are encountered during execution. Examples include Python and JavaScript. Compiled languages generally produce optimized and faster executables but require a build step, while interpreted languages skip the compilation step and run directly, making development quicker but sometimes slower in execution. Some modern languages use a hybrid approach, such as Java, which compiles code into bytecode that runs on a virtual machine. In summary, compiled languages prioritize performance, while interpreted languages prioritize flexibility and ease of use.";
  }

  if (q.includes("variables") && q.includes("memory")) {
    return "Variables are symbolic names used to store data in a program. When a variable is declared, the system allocates a portion of memory (RAM) to store its value. The exact way memory is handled depends on the programming language and its runtime environment. In low-level languages like C, developers have more control over memory allocation, whereas high-level languages like JavaScript manage memory automatically through garbage collection. Each variable typically has a memory address, and the variable name acts as a reference to that location. Depending on the type of data (primitive or complex), variables may store values directly or references to objects stored elsewhere in memory. For example, primitive values like numbers and booleans are stored directly, while objects and arrays are stored by reference. Memory management is important because inefficient usage can lead to memory leaks or performance issues. Variables also have scope, meaning they are only accessible within certain parts of the code, such as global scope, function scope, or block scope. Proper understanding of variables and memory helps developers write efficient and optimized programs.";
  }

  if (q.includes("function") && q.includes("why")) {
    return "A function is a reusable block of code designed to perform a specific task. Functions are fundamental in programming because they help break down complex problems into smaller, manageable pieces. By encapsulating logic inside a function, developers can avoid repeating code, which improves maintainability and readability. Functions can accept inputs known as parameters and may return outputs after processing. For example, a function might take two numbers as input and return their sum. Functions also support abstraction, meaning users of the function do not need to understand its internal implementation to use it. In addition, functions enable modular programming, where different parts of a program are organized into separate units. This makes debugging easier because issues can be isolated within specific functions. In modern programming, functions can also be first-class citizens, meaning they can be passed as arguments, returned from other functions, and assigned to variables. This is especially common in JavaScript and functional programming paradigms. Overall, functions improve code reuse, organization, scalability, and clarity.";
  }

  if (q.includes("pass by value") || q.includes("pass by reference")) {
    return "Pass by value and pass by reference describe how data is passed into functions. In pass by value, a copy of the variable's value is passed to the function. This means any changes made inside the function do not affect the original variable. This approach is commonly used with primitive data types like numbers and booleans. In contrast, pass by reference passes the memory reference of the variable, meaning the function works directly with the original data. Any modifications made inside the function will affect the original variable. This is commonly used with objects, arrays, and complex data structures. In JavaScript, technically all arguments are passed by value, but when dealing with objects, the value being passed is a reference, which can create behavior similar to pass by reference. Understanding this distinction is important to avoid unintended side effects in programs. Developers must carefully choose how data is handled to maintain data integrity and prevent bugs caused by unexpected mutations.";
  }

  if (q.includes("loops")) {
    return "Loops are control structures used to execute a block of code repeatedly until a certain condition is met. They are essential for automating repetitive tasks and iterating over collections like arrays or lists. Common types of loops include for loops, while loops, and do-while loops. A for loop is typically used when the number of iterations is known in advance. A while loop continues execution as long as a specified condition remains true, making it suitable for situations where the number of iterations is uncertain. A do-while loop is similar to a while loop but guarantees that the code runs at least once before the condition is checked. Loops can also be nested to handle multi-dimensional data structures. Proper use of loops helps reduce code duplication and improves efficiency. However, developers must be careful to avoid infinite loops, which occur when the termination condition is never met. Loops are widely used in data processing, searching, sorting, and many algorithmic operations.";
  }

  if (q.includes("synchronous") || q.includes("asynchronous")) {
    return "Synchronous programming executes tasks sequentially, meaning each operation must complete before the next one begins. This can lead to blocking behavior where the program waits for a task to finish before moving forward. While simple and predictable, synchronous execution can be inefficient for time-consuming operations like network requests or file I/O. Asynchronous programming, on the other hand, allows multiple operations to run independently without blocking the main execution thread. This is achieved using mechanisms such as callbacks, promises, and async/await in JavaScript. Asynchronous code improves performance and responsiveness, especially in environments like web browsers where non-blocking behavior is critical for user experience. For example, fetching data from an API asynchronously allows the application to continue running while waiting for the response. Modern applications heavily rely on asynchronous patterns to handle concurrent operations efficiently. Understanding both paradigms is important for writing scalable and responsive applications.";
  }

  if (q.includes("stack") && q.includes("function calls")) {
    return "A stack is a data structure that follows the Last In First Out (LIFO) principle, meaning the last element added is the first one removed. In programming, the call stack is used to manage function calls. When a function is invoked, a stack frame is created and pushed onto the stack, containing information such as local variables, parameters, and return address. When the function completes execution, its stack frame is popped off the stack. This mechanism allows the program to keep track of execution flow, especially when functions call other functions (nested calls). The stack is limited in size, and excessive recursion or deep function calls can lead to a stack overflow error. The stack is fast because memory allocation and deallocation follow a strict order. It is mainly used for static memory allocation, function execution tracking, and temporary variable storage. Understanding the stack is essential for debugging call-related issues and understanding recursion behavior.";
  }

  if (q.includes("heap") && q.includes("stack")) {
    return "The heap is a memory region used for dynamic memory allocation, while the stack is used for static memory allocation and function execution. The heap allows developers to allocate memory at runtime for objects, arrays, and data structures whose size may not be known in advance. Unlike the stack, memory in the heap is not automatically managed in a strict order, making it more flexible but also slower to access. Memory allocation and deallocation in the heap are handled manually in languages like C/C++, while in high-level languages like JavaScript, garbage collection automatically frees unused memory. The stack, in contrast, is organized and follows a LIFO structure, making it faster but limited in size. The heap is larger but more complex to manage, and improper handling can lead to memory leaks. In summary, the stack is used for short-lived, structured data tied to function calls, while the heap is used for long-lived, dynamic data.";
  }

  if (q.includes("time complexity") || q.includes("space complexity")) {
    return "Time complexity measures how the execution time of an algorithm grows with respect to the size of the input, while space complexity measures how much memory an algorithm uses as input size increases. These concepts are used to evaluate the efficiency and scalability of algorithms. Time complexity focuses on the number of operations performed, whereas space complexity focuses on memory consumption, including variables, data structures, and call stack usage. For example, an algorithm with linear time complexity O(n) means the execution time increases proportionally with input size. Space complexity might also be O(n) if additional memory grows with input. These metrics help developers compare different algorithms and choose the most efficient one for a given problem. Optimizing both time and space is important in large-scale applications where performance and resource usage matter. Trade-offs often exist between time and space, requiring careful design decisions.";
  }

  if (q.includes("big-o")) {
    return "Big-O notation is a mathematical representation used to describe the upper bound of an algorithm's time or space complexity. It helps analyze how an algorithm performs as the input size grows, focusing on the worst-case scenario. Common Big-O complexities include O(1) for constant time, O(log n) for logarithmic time, O(n) for linear time, O(n log n) for efficient sorting algorithms, and O(n^2) for nested loops. Big-O ignores constants and lower-order terms to emphasize scalability rather than exact performance. It is important because it allows developers to compare algorithms independently of hardware or implementation details. By understanding Big-O, developers can predict how their code will behave with large inputs and avoid inefficient solutions. It plays a crucial role in algorithm design, optimization, and technical interviews.";
  }

  if (q.includes("algorithm")) {
    return "An algorithm is a step-by-step procedure or set of instructions used to solve a problem or perform a computation. It takes input, processes it through a defined sequence of operations, and produces an output. Algorithms are fundamental to computer science and are used in everything from simple tasks like sorting numbers to complex operations like machine learning and data processing. A good algorithm should be correct, efficient, and easy to understand. Efficiency is often measured in terms of time and space complexity. Algorithms can be expressed in natural language, pseudocode, or implemented in programming languages. Common examples include sorting algorithms like quicksort and mergesort, searching algorithms like binary search, and graph algorithms like Dijkstra's algorithm. Designing efficient algorithms is key to building high-performance applications and solving computational problems effectively.";
  }

  if (q.includes("mutable") && q.includes("immutable")) {
    return "Mutable data types are those whose values can be changed after creation, while immutable data types cannot be modified once created. In mutable objects, changes affect the original data structure, whereas in immutable objects, any modification results in a new copy being created. Examples of mutable data types include arrays and objects in JavaScript, where elements can be updated directly. Immutable types include strings and numbers, where operations return new values instead of altering the original. Immutable data is useful for maintaining predictable state and avoiding unintended side effects, especially in functional programming and state management systems. Mutable data can be more memory efficient but requires careful handling to prevent bugs caused by shared references. Understanding the distinction is important for writing reliable and maintainable code, particularly in applications involving complex state transitions.";
  }

  // ===================== Web Development =====================

  if (q.includes("http") && q.includes("https")) {
    return "HTTP (HyperText Transfer Protocol) is a protocol used for communication between clients and servers over the web. HTTPS is the secure version of HTTP, where data is encrypted using SSL/TLS protocols. The main difference is that HTTPS ensures data confidentiality, integrity, and authentication, protecting against eavesdropping and man-in-the-middle attacks. HTTP transmits data in plain text, making it vulnerable to interception, while HTTPS encrypts the data before transmission. HTTPS also uses digital certificates issued by trusted Certificate Authorities to verify the identity of the server. Modern browsers often warn users when a site is not using HTTPS due to security risks. HTTPS is now the standard for most websites, especially those handling sensitive information like passwords, payment details, and personal data.";
  }

  if (q.includes("cookies")) {
    return "Cookies are small pieces of data stored in the user's browser by websites. They are used to maintain session state, track user activity, and store user preferences. When a user visits a website, the server can send a cookie that the browser stores and sends back with subsequent requests. This allows the server to recognize returning users and maintain login sessions. Cookies have attributes such as expiration time, domain, path, and security flags like HttpOnly and Secure. They are commonly used for authentication, personalization, and analytics. However, cookies can also raise privacy concerns, which is why modern browsers include controls for managing them. Proper use of cookies is essential for maintaining secure and user-friendly web applications.";
  }

  if (q.includes("localstorage") || q.includes("sessionstorage")) {
    return "localStorage and sessionStorage are web storage mechanisms used to store data in the browser. localStorage stores data with no expiration time, meaning the data persists even after the browser is closed and reopened. sessionStorage, on the other hand, stores data only for the duration of the page session and is cleared when the tab or browser is closed. Both store data as key-value pairs and are accessible via JavaScript. Unlike cookies, they are not sent to the server with every HTTP request, making them more efficient for client-side storage. localStorage is useful for storing preferences or cached data, while sessionStorage is useful for temporary data during a session. Both have storage limits and should not be used for sensitive information without proper security considerations.";
  }

  if (q.includes("cors")) {
    return "CORS (Cross-Origin Resource Sharing) is a security mechanism implemented by browsers to control how resources are requested from a different origin (domain, protocol, or port). By default, browsers restrict cross-origin HTTP requests initiated from scripts for security reasons. CORS allows servers to specify which origins are permitted to access their resources by using HTTP headers such as Access-Control-Allow-Origin. This is important because modern web applications often involve communication between different domains, such as frontend and backend servers. Without CORS, legitimate cross-origin requests would be blocked by the browser. CORS helps balance security with flexibility by enabling controlled access to resources. Proper configuration is essential to prevent unauthorized access while allowing trusted clients to interact with the server.";
  }

  if (q.includes("cdn")) {
    return "A CDN (Content Delivery Network) is a distributed network of servers that delivers web content to users based on their geographic location. Instead of serving content from a single origin server, a CDN caches and serves content from multiple edge servers located closer to users. This reduces latency, improves load times, and enhances user experience. CDNs are commonly used to deliver static assets like images, videos, CSS, and JavaScript files. They also help reduce the load on the origin server and improve scalability during high traffic. Additionally, CDNs provide security features such as DDoS protection and SSL encryption. Popular CDN providers include Cloudflare, Akamai, and Amazon CloudFront. By distributing content globally, CDNs ensure faster and more reliable content delivery.";
  }

  if (q.includes("lazy loading")) {
    return "Lazy loading is a performance optimization technique in web development where resources are loaded only when they are needed rather than all at once. For example, images or components are loaded when they come into the viewport instead of loading during the initial page load. This reduces initial load time, improves performance, and saves bandwidth. Lazy loading is commonly implemented using JavaScript, Intersection Observer API, or frameworks that support dynamic imports. It is especially useful in large applications with many images or components. By deferring non-critical resources, the application becomes faster and more responsive. Lazy loading contributes to better user experience and is widely used in modern web applications.";
  }

  if (q.includes("critical rendering path")) {
    return "The critical rendering path refers to the sequence of steps a browser takes to convert HTML, CSS, and JavaScript into a rendered webpage. It involves parsing HTML to build the DOM, parsing CSS to build the CSSOM, combining them into a render tree, and then performing layout and painting. JavaScript can block rendering if it is not handled properly, as it may require modifying the DOM. Optimizing the critical rendering path improves page load performance and user experience. Techniques include minimizing CSS and JavaScript, using async/defer attributes, and reducing render-blocking resources. Understanding this process helps developers build faster and more efficient web pages.";
  }

  if (q.includes("polymorphism")) {
    return "Polymorphism is an object-oriented programming concept that allows objects to be treated as instances of their parent class while still exhibiting their own behavior. The term means 'many forms,' and it enables a single interface to represent different underlying data types or behaviors. Polymorphism is commonly implemented through method overriding and method overloading. In method overriding, a subclass provides a specific implementation of a method that is already defined in its parent class. In method overloading, multiple methods share the same name but differ in parameters. Polymorphism improves code flexibility and reusability because the same function or method call can behave differently depending on the object it is acting upon. For example, a function that processes shapes might behave differently when handling a circle versus a rectangle. This concept is widely used in OOP languages like Java, C++, and JavaScript (through prototypes or class-based syntax). Polymorphism allows developers to write more generic and scalable code by reducing the need for conditional statements and improving extensibility.";
  }

  if (q.includes("encapsulation")) {
    return "Encapsulation is an object-oriented programming principle that involves bundling data (variables) and methods (functions) that operate on that data into a single unit, typically a class. It also restricts direct access to some of an object's components, which is known as data hiding. Encapsulation is important because it protects the internal state of an object from unintended interference and misuse. By controlling access through public methods (getters and setters), developers can enforce validation and maintain integrity of the data. This leads to more secure and maintainable code. Encapsulation also improves modularity by separating the internal implementation from the external interface. Users of a class do not need to know how it works internally; they only interact with its exposed methods. This abstraction of complexity makes large systems easier to manage. In addition, encapsulation supports better debugging and testing since changes inside a class do not affect other parts of the application as long as the interface remains consistent.";
  }

  if (q.includes("abstraction")) {
    return "Abstraction in programming is the concept of hiding complex implementation details and exposing only the essential features of an object or system. It allows developers to work with high-level interfaces without needing to understand the underlying complexity. Abstraction is achieved through abstract classes, interfaces, or simplified APIs. For example, when using a car, a driver does not need to understand how the engine works internally; they only interact with the steering wheel, pedals, and controls. Similarly, in programming, abstraction hides unnecessary details and focuses on what an object does rather than how it does it. This reduces complexity and improves code readability. Abstraction also promotes reusability and maintainability because changes in implementation do not affect the external interface. It is closely related to encapsulation but differs in that abstraction focuses on hiding implementation details, while encapsulation focuses on restricting access to data. Together, they are key principles of object-oriented design.";
  }

  if (q.includes("method overloading") || q.includes("method overriding")) {
    return "Method overloading and method overriding are two important concepts in object-oriented programming. Method overloading occurs when multiple methods in the same class have the same name but different parameter lists (different number or types of parameters). It allows a class to perform similar operations in different ways. Method overriding, on the other hand, occurs when a subclass provides a specific implementation of a method that is already defined in its parent class. Overriding is used to achieve runtime polymorphism, where the method that gets executed is determined at runtime based on the object type. Overloading is resolved at compile time, while overriding is resolved at runtime. Overloading improves code readability by allowing similar methods to share the same name, whereas overriding enables dynamic behavior and customization in inherited classes. Both concepts are widely used to enhance flexibility and extensibility in object-oriented systems.";
  }

  if (q.includes("design patterns")) {
    return "Design patterns are reusable solutions to common software design problems that occur frequently in software development. They are not finished code but templates or best practices that guide developers in solving recurring design challenges. Design patterns are generally categorized into three types: creational, structural, and behavioral. Creational patterns deal with object creation mechanisms, such as Singleton and Factory patterns. Structural patterns focus on object composition, such as Adapter and Decorator patterns. Behavioral patterns deal with communication between objects, such as Observer and Strategy patterns. Design patterns help improve code maintainability, scalability, and readability by providing proven approaches to common problems. They also promote consistency across teams and projects. Using design patterns allows developers to write more organized and flexible code that can adapt to future changes more easily.";
  }

  if (q.includes("garbage collection")) {
    return "Garbage collection is an automatic memory management process used in programming languages like JavaScript, Java, and Python to reclaim memory that is no longer in use. It helps prevent memory leaks by identifying objects that are no longer reachable from the program and freeing their allocated memory. The garbage collector periodically scans memory to determine which objects are still referenced and which are not. Objects that cannot be accessed are considered eligible for garbage collection. This process reduces the need for manual memory management, making development easier and safer. However, garbage collection can introduce performance overhead, as it runs in the background and may temporarily pause execution. Different algorithms are used for garbage collection, such as mark-and-sweep and generational garbage collection. Understanding how garbage collection works helps developers write more efficient code and avoid unnecessary memory consumption.";
  }

  // ===================== Web Development =====================

  if (q.includes("spa") && q.includes("mpa")) {
    return "Single Page Applications (SPA) and Multi Page Applications (MPA) differ in how they load and render content. In an SPA, the application loads a single HTML page initially and dynamically updates content using JavaScript without requiring full page reloads. This results in faster navigation and a smoother user experience. Frameworks like React, Angular, and Vue are commonly used to build SPAs. In contrast, MPAs consist of multiple HTML pages, and each navigation triggers a full page reload from the server. MPAs are traditional web applications and are often easier to implement for SEO and simpler applications. SPAs rely heavily on client-side rendering, while MPAs rely on server-side rendering. SPAs may require additional setup for SEO optimization, whereas MPAs naturally support it. The choice between SPA and MPA depends on the application's complexity, performance requirements, and user experience goals.";
  }

  if (q.includes("hydration")) {
    return "Hydration is a process used in modern frontend frameworks where server-rendered HTML is enhanced with JavaScript to make it interactive on the client side. When a page is initially rendered on the server (SSR), it sends static HTML to the browser. Hydration then attaches event listeners and restores the application's state on the client side without re-rendering the entire page. This allows the application to become fully interactive while maintaining fast initial load times. Hydration is commonly used in frameworks like Next.js and Nuxt.js. It bridges the gap between server-side rendering and client-side interactivity. Proper hydration ensures that the server-rendered content matches the client-side virtual DOM to avoid inconsistencies. While hydration improves performance and SEO, it can also introduce complexity if not managed properly, especially in large applications.";
  }

  if (q.includes("ssr") && q.includes("csr")) {
    return "Server-Side Rendering (SSR) and Client-Side Rendering (CSR) are two approaches to rendering web applications. In SSR, the server generates the complete HTML for a page and sends it to the browser, allowing users to see content faster and improving SEO. In CSR, the browser downloads a minimal HTML page and uses JavaScript to render content dynamically on the client side. CSR provides a more interactive experience after the initial load but may have slower initial rendering. SSR is beneficial for content-heavy websites, while CSR is ideal for highly interactive applications. Frameworks like Next.js support SSR, while React traditionally uses CSR. Each approach has trade-offs in terms of performance, SEO, and complexity, and modern applications often use a hybrid approach combining both SSR and CSR.";
  }

  if (q.includes("websocket")) {
    return "WebSockets are a communication protocol that provides full-duplex, persistent communication channels between a client and a server. Unlike HTTP, which is request-response based, WebSockets allow continuous two-way communication without repeatedly opening and closing connections. Once a WebSocket connection is established, both the client and server can send messages to each other at any time. This makes WebSockets ideal for real-time applications such as chat apps, online gaming, live notifications, and stock updates. WebSockets reduce latency and overhead compared to HTTP because they avoid repeated handshakes. In contrast, HTTP is stateless and each request is independent. WebSockets maintain an open connection, enabling efficient real-time data exchange. However, they require careful handling for scalability and security. They are commonly implemented using libraries and frameworks that abstract the low-level connection management.";
  }

  if (q.includes("event delegation")) {
    return "Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of adding multiple listeners to individual child elements. It works by taking advantage of event bubbling, where events propagate from the target element up through its ancestors in the DOM. When an event occurs on a child element, the parent can detect it and determine which child triggered the event. This approach improves performance by reducing the number of event listeners and simplifies code management. Event delegation is especially useful when dealing with dynamically added elements, as the parent listener automatically handles them without needing to attach new listeners. It is commonly used in large applications to optimize memory usage and maintain cleaner code.";
  }

  if (q.includes("event loop")) {
    return "The event loop is a core concept in JavaScript that enables asynchronous, non-blocking execution. JavaScript runs on a single thread, but the event loop allows it to handle multiple operations concurrently by managing a queue of tasks. When asynchronous operations like timers, network requests, or promises are executed, they are handled outside the main thread. Once completed, their callbacks are placed in the task queue or microtask queue. The event loop continuously checks the call stack and the queues, executing tasks when the stack is empty. Microtasks (like promises) have higher priority than macrotasks (like setTimeout). This mechanism ensures smooth execution of asynchronous code without blocking the main thread. Understanding the event loop is essential for writing efficient JavaScript applications and avoiding issues like race conditions or unexpected execution order.";
  }

  if (q.includes("bundling") || q.includes("webpack") || q.includes("vite")) {
    return "Bundling is the process of combining multiple JavaScript modules, assets, and dependencies into optimized files for deployment. Tools like Webpack and Vite are module bundlers and build tools used in modern web development. They take source code written in modular form and transform it into static assets that browsers can efficiently load. Bundling reduces the number of HTTP requests and improves load performance. These tools also support features like code splitting, tree shaking, and hot module replacement. Webpack is highly configurable and widely used, while Vite is known for faster development builds due to its use of native ES modules and optimized dev server. Bundlers also handle preprocessing tasks such as transpiling JavaScript (using Babel), compiling TypeScript, and processing CSS. They play a crucial role in optimizing frontend applications for production.";
  }

  if (q.includes("deep copy") && q.includes("shallow copy")) {
    return "A shallow copy creates a new object but does not recursively copy nested objects; instead, it copies references to them. This means that changes made to nested objects in the copied version will also reflect in the original object. In contrast, a deep copy creates a completely independent clone of the original object, including all nested objects and data structures. Any changes made to the deep copy do not affect the original object. Deep copying ensures full separation but is more expensive in terms of memory and performance because it duplicates all levels of data. Shallow copying is faster and sufficient when the object does not contain nested structures or when shared references are acceptable. In JavaScript, methods like spread operator or Object.assign create shallow copies, while deep copies can be achieved using structured cloning, recursion, or libraries. Understanding the difference is important to avoid unintended side effects when working with complex data structures.";
  }

  if (q.includes("closure")) {
    return "A closure is a function that retains access to variables from its outer (lexical) scope even after the outer function has finished executing. Closures are created whenever a function is defined inside another function and references variables from the parent scope. This allows the inner function to 'remember' the environment in which it was created. Closures are widely used in JavaScript for data encapsulation, private variables, and functional programming patterns. For example, a function can return another function that still has access to the original variables, even though the outer function has already returned. Closures help maintain state across function calls without using global variables. They are also useful in event handlers, callbacks, and asynchronous programming. However, closures can sometimes lead to memory leaks if not managed properly because they keep references to variables in memory. Overall, closures are a powerful feature that enables advanced programming techniques and better control over variable scope.";
  }

  if (q.includes("interface") && q.includes("oop")) {
    return "Interfaces in object-oriented programming define a contract that classes must follow without specifying the implementation details. They declare methods and properties that implementing classes are required to provide. Interfaces promote abstraction and ensure consistency across different classes. For example, multiple classes can implement the same interface but provide their own specific behavior for each method. This allows developers to write flexible and extensible code that relies on contracts rather than concrete implementations. Interfaces are commonly used in strongly typed languages like Java, C#, and TypeScript. They support polymorphism by allowing different objects to be treated uniformly based on the interface they implement. Interfaces also improve code maintainability and scalability because changes to implementation do not affect the interface contract. In summary, interfaces help enforce structure, improve code organization, and enable loose coupling between components.";
  }

  if (q.includes("generics")) {
    return "Generics are a programming feature that allows developers to write functions, classes, or data structures that can operate on different data types while maintaining type safety. Instead of specifying a concrete type, generics use placeholders that are defined when the code is used. This enables reusable and flexible code without sacrificing type checking. For example, a generic function can accept an array of any type and return the same type without losing type information. Generics are commonly used in strongly typed languages like TypeScript, Java, and C#. They help avoid code duplication by allowing a single implementation to handle multiple data types. Generics also improve code reliability by catching type-related errors at compile time rather than runtime. In data structures like lists, stacks, and queues, generics ensure that only the specified type of elements can be stored. Overall, generics enhance code reusability, maintainability, and type safety.";
  }

  if (q.includes("strongly typed") || q.includes("weakly typed")) {
    return "Strongly typed languages enforce strict type rules, meaning variables must be declared with specific data types and type conversions are checked at compile time. Examples include Java, C#, and TypeScript. Weakly typed languages are more flexible with types and may allow implicit type conversions, often performing type coercion at runtime. JavaScript is considered weakly typed because it can automatically convert between types in certain situations. Strong typing reduces runtime errors by catching type mismatches early, making code more predictable and safer. Weak typing offers flexibility and ease of use but can sometimes lead to unexpected behavior if type coercion occurs unintentionally. Strongly typed languages often require more explicit code, while weakly typed languages allow more dynamic operations. The choice between them depends on the project requirements, balancing safety, flexibility, and developer productivity.";
  }

  if (q.includes("higher-order functions")) {
    return "Higher-order functions are functions that either take other functions as arguments, return functions as their result, or both. They are a key concept in functional programming and are widely used in JavaScript. Examples include functions like map, filter, and reduce, which take callback functions to process data collections. Higher-order functions allow developers to write more abstract and reusable code by separating logic from behavior. For instance, instead of writing loops manually, a higher-order function can apply a given operation to each element in an array. They also enable function composition, currying, and callback-based asynchronous programming. Higher-order functions improve code readability and modularity by encapsulating common patterns into reusable utilities. They are particularly useful when dealing with transformations, event handling, and functional pipelines.";
  }

  // ===================== Web Development =====================

  if (q.includes("reflow") || q.includes("repaint")) {
    return "DOM reflow and repaint are processes the browser uses to render and update web pages. Reflow occurs when changes affect the layout of the page, such as modifying element dimensions, positioning, or adding/removing elements. It forces the browser to recalculate layout and positioning of elements, which can be performance-intensive. Repaint occurs when changes affect visual appearance without altering layout, such as changing colors or visibility. Repaint is less expensive than reflow because it does not require recalculating layout. Frequent reflows can degrade performance, so developers aim to minimize them by batching DOM updates or using efficient CSS practices. Understanding these processes helps optimize frontend performance and improve user experience.";
  }

  if (q.includes("controlled") && q.includes("uncontrolled")) {
    return "Controlled components are those where form data is managed by the component's state, typically using state variables in frameworks like React. Every change in the input field updates the state, and the UI is driven by this state. This provides better control over form behavior and validation. Uncontrolled components, on the other hand, store their own state internally in the DOM, and data is accessed using references instead of state. Controlled components are more predictable and easier to validate, while uncontrolled components are simpler and require less boilerplate code. Controlled components are preferred in complex forms, while uncontrolled components may be used in simpler scenarios or when integrating with non-React libraries.";
  }

  if (q.includes("debouncing") || q.includes("throttling")) {
    return "Debouncing and throttling are techniques used to control how frequently a function is executed in response to events. Debouncing ensures that a function is only executed after a certain period of inactivity, making it useful for scenarios like search input where API calls should only be made after the user stops typing. Throttling, on the other hand, ensures that a function is executed at most once in a specified time interval, regardless of how many times the event occurs. This is useful for events like scrolling or resizing, where continuous execution would be inefficient. Both techniques help improve performance by limiting unnecessary function calls and reducing resource consumption.";
  }

  if (q.includes("status codes")) {
    return "HTTP status codes are standard responses sent by servers to indicate the result of a client's request. They are grouped into categories such as 2xx for success, 4xx for client errors, and 5xx for server errors. For example, 200 OK indicates a successful request, 404 Not Found means the requested resource could not be found, and 500 Internal Server Error indicates a server-side failure. Status codes help clients understand the outcome of their requests and take appropriate actions. They are essential for debugging, error handling, and communication between client and server in web applications.";
  }

  if (q.includes("service worker")) {
    return "A service worker is a script that runs in the background of a web application, separate from the main browser thread. It acts as a proxy between the application and the network, enabling features like caching, offline support, and push notifications. Service workers intercept network requests and can serve cached responses when the network is unavailable. They are a key component of Progressive Web Apps (PWAs). Service workers improve performance by reducing network requests and enabling offline functionality. They must be registered by the application and operate under strict security rules, including HTTPS. They run independently and do not have direct access to the DOM.";
  }

  if (q.includes("pwa")) {
    return "A Progressive Web App (PWA) is a type of web application that combines the features of traditional web apps and native mobile apps. PWAs are designed to be reliable, fast, and engaging. They use modern web technologies like service workers, caching, and manifests to provide offline capabilities, push notifications, and app-like experiences. PWAs can be installed on a user's device without going through an app store. They are responsive, work across different devices, and load quickly even on slow networks. PWAs improve user engagement and performance while maintaining the accessibility of web applications. They are widely used by modern companies to deliver seamless user experiences.";
  }

  if (q.includes("tree shaking")) {
    return "Tree shaking is a build optimization technique used in frontend tools to remove unused or dead code from the final bundle. It works by analyzing the dependency graph of a project and eliminating code that is not actually imported or used. This reduces the bundle size, leading to faster load times and improved performance. Tree shaking is typically used in conjunction with ES modules, as static imports allow bundlers like Webpack or Vite to determine which parts of the code are unused. It is an important optimization technique in modern web development to ensure efficient delivery of applications to users.";
  }

  // ===================== Backend Systems =====================

  if (
    q.includes("id generation") ||
    q.includes("uuid") ||
    q.includes("auto-increment")
  ) {
    return "ID generation strategies are used to uniquely identify records in a system. Auto-increment IDs are sequential numbers generated by the database, which are simple and efficient but may expose information like record count. UUIDs (Universally Unique Identifiers) are 128-bit values that are globally unique and do not require coordination between systems. They are useful in distributed systems where multiple services generate IDs independently. Auto-increment is easier to implement but less scalable in distributed environments. UUIDs are more complex and larger in size but provide uniqueness across systems. The choice depends on scalability, security, and system architecture requirements.";
  }

  if (q.includes("distributed computing")) {
    return "Distributed computing is a model where multiple computers work together over a network to perform tasks. These systems divide workloads across multiple nodes to improve performance, scalability, and fault tolerance. Distributed systems are used in cloud computing, microservices architectures, and large-scale applications. They introduce challenges such as network latency, consistency, and coordination between nodes. Techniques like load balancing, replication, and consensus algorithms are used to manage distributed systems effectively. Distributed computing enables systems to handle large volumes of data and traffic by leveraging multiple machines instead of relying on a single server.";
  }

  if (q.includes("concurrency") && q.includes("parallelism")) {
    return "Concurrency and parallelism are related but distinct concepts. Concurrency refers to the ability of a system to handle multiple tasks at overlapping time periods, often by switching between tasks. Parallelism, on the other hand, involves executing multiple tasks simultaneously using multiple processors or cores. Concurrency is about structure, while parallelism is about execution. A system can be concurrent without being parallel, but parallel systems are inherently concurrent. Concurrency improves responsiveness, while parallelism improves performance. Both are used to optimize applications depending on hardware and workload requirements.";
  }

  if (q.includes("locks")) {
    return "Locks are synchronization mechanisms used in backend systems to control access to shared resources in concurrent environments. They prevent race conditions by ensuring that only one process or thread can access a resource at a time. Common types of locks include mutexes, read-write locks, and spinlocks. Locks are essential in multi-threaded and distributed systems where multiple processes may attempt to modify shared data simultaneously. Improper use of locks can lead to performance bottlenecks or deadlocks. Proper locking strategies ensure data consistency and integrity while balancing performance and concurrency.";
  }

  if (q.includes("deadlock")) {
    return "A deadlock occurs when two or more processes are unable to proceed because each is waiting for resources held by the other. This creates a circular dependency where no process can continue execution. Deadlocks are common in systems that use locks or shared resources. They can be prevented or handled using techniques such as resource ordering, timeout mechanisms, deadlock detection algorithms, and avoiding circular wait conditions. Preventing deadlocks requires careful design of resource allocation strategies to ensure that processes do not get stuck waiting indefinitely.";
  }

  if (q.includes("cron job")) {
    return "A cron job is a scheduled task that runs automatically at specified intervals in a system. It is commonly used in backend systems for repetitive tasks such as database backups, sending emails, cleaning logs, and running periodic reports. Cron jobs are configured using time-based expressions that define when the task should run (e.g., every minute, hourly, daily). They are widely used in Unix-based systems and server environments. Cron jobs help automate routine tasks, improving efficiency and reducing manual intervention.";
  }

  if (q.includes("observability")) {
    return "Observability in backend systems refers to the ability to understand the internal state of a system based on its external outputs such as logs, metrics, and traces. It helps developers monitor, debug, and analyze system behavior in production environments. Observability is typically achieved through logging (recording events), metrics (quantitative measurements), and tracing (tracking requests across services). It is essential in distributed systems where issues may be difficult to detect. Observability tools help identify performance bottlenecks, errors, and system health in real time.";
  }

  // ===================== Databases =====================

  if (q.includes("clustered") && q.includes("non-clustered")) {
    return "A clustered index determines the physical order of data in a table, meaning the data rows are stored in the same order as the index. Each table can have only one clustered index because the data itself can be sorted in only one way. A non-clustered index, on the other hand, is a separate structure that stores pointers to the actual data rows. It does not affect the physical order of data. Non-clustered indexes allow multiple indexes per table and are used to speed up queries by providing quick access paths to data. Clustered indexes are generally faster for range queries, while non-clustered indexes are useful for specific lookups.";
  }

  if (q.includes("acid") && q.includes("base")) {
    return "ACID and BASE are two models used to describe database transaction properties. ACID stands for Atomicity, Consistency, Isolation, and Durability, and is commonly used in relational databases to ensure reliable transactions. BASE stands for Basically Available, Soft state, and Eventual consistency, and is used in distributed NoSQL systems. ACID prioritizes strict consistency and reliability, while BASE prioritizes availability and scalability. ACID systems ensure that transactions are fully completed or rolled back, whereas BASE systems allow temporary inconsistencies that are eventually resolved. The choice between ACID and BASE depends on system requirements, with ACID being used for critical financial systems and BASE for large-scale distributed systems.";
  }

  if (q.includes("composite index")) {
    return "A composite index is an index that includes multiple columns in a database table. It is used to optimize queries that filter or sort data based on multiple fields. By combining columns into a single index, the database can efficiently locate records that match specific criteria involving those columns. The order of columns in a composite index is important because it affects how the index is used in queries. Composite indexes improve query performance but may increase storage and write overhead. They are useful when queries frequently involve multiple columns in WHERE clauses.";
  }

  if (q.includes("query execution plan")) {
    return "A query execution plan is a detailed breakdown of how a database engine executes a SQL query. It shows the steps involved, such as table scans, index usage, joins, and sorting operations. The execution plan helps developers understand how queries are optimized and where performance bottlenecks may occur. By analyzing the execution plan, developers can identify inefficient queries and improve them using indexes, query restructuring, or other optimization techniques. Database tools often provide visual representations of execution plans to aid in performance tuning.";
  }

  if (q.includes("lock escalation")) {
    return "Lock escalation is a process in database systems where multiple fine-grained locks (such as row-level locks) are converted into a higher-level lock (such as a table-level lock) to reduce overhead. When a transaction acquires too many locks, the database may escalate locks to improve performance and reduce memory usage. While this improves efficiency, it can reduce concurrency because larger portions of the database become locked. Lock escalation is a trade-off between performance and concurrency management.";
  }

  if (q.includes("isolation levels")) {
    return "Isolation levels define how transaction integrity is maintained in a database when multiple transactions are executed concurrently. Common isolation levels include Read Uncommitted, Read Committed, Repeatable Read, and Serializable. These levels control phenomena such as dirty reads, non-repeatable reads, and phantom reads. Higher isolation levels provide stronger consistency but may reduce concurrency and performance. Lower isolation levels improve performance but allow more anomalies. Choosing the appropriate isolation level depends on the application's consistency requirements and performance constraints.";
  }

  if (q.includes("write-ahead logging")) {
    return "Write-Ahead Logging (WAL) is a technique used in databases to ensure durability and recoverability. Before any changes are applied to the database, they are first recorded in a log. This log is written to stable storage, ensuring that even if a system crashes, the changes can be recovered by replaying the log. WAL improves reliability by guaranteeing that no data is lost in case of failure. It is widely used in relational databases to maintain transaction integrity and support crash recovery mechanisms.";
  }

  // ===================== APIs =====================

  if (q.includes("hateoas")) {
    return "HATEOAS (Hypermedia as the Engine of Application State) is a constraint of REST APIs where responses include links to related resources. This allows clients to dynamically navigate the API without needing prior knowledge of its structure. Instead of hardcoding endpoints, clients discover actions through hypermedia links provided in responses. HATEOAS improves API discoverability and flexibility by enabling self-descriptive interactions. It is part of the REST architectural style but is not always implemented in practical APIs due to complexity. However, when used, it enhances decoupling between client and server.";
  }

  if (q.includes("pagination")) {
    return "API pagination is the process of dividing large datasets into smaller chunks or pages when returning responses from an API. This improves performance and reduces the amount of data transferred in a single request. Common pagination types include offset-based pagination, where a page number and limit are used, and cursor-based pagination, where a pointer (cursor) is used to fetch the next set of results. Cursor-based pagination is more efficient for large datasets and avoids issues with data consistency during changes. Pagination is essential for APIs that return large collections of data.";
  }

  if (q.includes("idempotency key")) {
    return "An API idempotency key is a unique identifier used to ensure that multiple identical requests produce the same result without performing duplicate operations. It is commonly used in scenarios like payment processing to prevent duplicate charges if a request is retried. When a client sends a request with an idempotency key, the server stores the result associated with that key and returns the same response if the same request is received again. This ensures safety in network retries and prevents unintended side effects. Idempotency is critical in distributed systems where network failures may cause repeated requests.";
  }

  if (q.includes("tail recursion")) {
    return "Tail recursion is a form of recursion where the recursive call is the last operation executed in a function. This means there is no additional computation after the recursive call returns. Some programming languages optimize tail-recursive functions using a technique called tail call optimization (TCO), which reuses the current function's stack frame instead of creating a new one. This prevents the call stack from growing with each recursive call, avoiding stack overflow errors in deep recursion scenarios. Tail recursion is especially useful in functional programming languages like Scheme, Haskell, and Scala. It allows recursive algorithms to run efficiently with constant stack space. Without tail optimization, recursion can consume significant memory due to repeated function calls stacking up. By restructuring recursion into tail-recursive form, developers can write recursive solutions that behave like iterative loops internally. This improves both performance and memory usage while maintaining readability.";
  }

  if (q.includes("memoization")) {
    return "Memoization is an optimization technique used to speed up function execution by caching previously computed results. When a function is called with the same inputs, the cached result is returned instead of recomputing the value. This significantly improves performance for expensive or repetitive computations, such as recursive algorithms like Fibonacci sequences or dynamic programming problems. Memoization reduces redundant calculations by storing results in a lookup structure like a map or dictionary. It trades memory for speed, as it requires additional storage to keep cached results. Memoization is commonly implemented manually or using utility libraries. It is particularly effective in cases where function outputs are deterministic and depend only on their inputs (pure functions). By avoiding repeated work, memoization can reduce exponential time complexity to linear time in some cases, making algorithms much more efficient.";
  }

  if (q.includes("imperative") && q.includes("declarative")) {
    return "Imperative programming focuses on describing how a program should execute step by step, specifying the exact control flow, loops, and state changes. It is more concerned with the sequence of operations and how tasks are performed. Declarative programming, on the other hand, focuses on describing what the program should accomplish without specifying the exact steps to achieve it. In declarative programming, the underlying system determines how to execute the instructions. Examples of imperative languages include C and JavaScript (when using loops and conditions), while declarative styles are seen in SQL, HTML, and functional programming. Declarative code is often more readable and concise because it abstracts away control flow details. Imperative code provides more control but can become complex. Modern frameworks often encourage declarative approaches to improve maintainability and reduce complexity.";
  }

  if (q.includes("pure function")) {
    return "A pure function is a function that always returns the same output for the same input and has no side effects. Side effects include modifying external variables, changing global state, or interacting with external systems like databases or APIs. Pure functions are deterministic and predictable, making them easier to test, debug, and reason about. They do not depend on or alter external state, which ensures consistency. Pure functions are a core concept in functional programming and are often used in combination with immutability. Because they avoid side effects, pure functions are inherently thread-safe and work well in concurrent systems. They also enable optimizations like memoization since their outputs are consistent. Using pure functions leads to cleaner, more maintainable, and more reliable code.";
  }

  if (q.includes("immutability")) {
    return "Immutability refers to the concept where data cannot be changed after it is created. Instead of modifying existing data structures, new ones are created with updated values. This approach is widely used in functional programming and modern frontend frameworks. Immutability helps prevent unintended side effects, making code more predictable and easier to debug. In concurrent systems, immutability is especially useful because multiple threads can read data without worrying about synchronization issues or race conditions. Since immutable data cannot be altered, it eliminates the need for locks in many cases, improving performance and simplifying design. Although immutability may involve creating additional copies of data, modern techniques and optimizations mitigate performance concerns. Overall, immutability enhances reliability, safety, and maintainability in complex systems.";
  }

  if (q.includes("race condition")) {
    return "A race condition occurs when multiple threads or processes access shared data simultaneously, and the final outcome depends on the timing or order of execution. This can lead to inconsistent or unexpected results because operations may interfere with each other. Race conditions are common in concurrent and multi-threaded environments where proper synchronization is not implemented. For example, two processes updating the same variable at the same time without locks may overwrite each other's changes. To prevent race conditions, developers use synchronization techniques such as locks, mutexes, semaphores, or atomic operations. Proper design and thread-safe programming practices are essential to avoid race conditions and ensure data consistency. Race conditions can be difficult to detect and debug because they may not occur consistently and often depend on timing issues.";
  }

  // ===================== Web Development =====================

  if (q.includes("critical css")) {
    return "Critical CSS refers to the CSS required to render the above-the-fold content of a webpage. It is extracted and inlined in the HTML document to allow the browser to render visible content quickly without waiting for external CSS files to load. This improves perceived performance and reduces render-blocking resources. Non-critical CSS can be loaded asynchronously after the initial render. By prioritizing critical styles, the page becomes visible to users faster, enhancing user experience and performance metrics like First Contentful Paint (FCP). Tools and build processes are often used to automatically extract critical CSS. This technique is especially useful for optimizing large stylesheets in production environments.";
  }

  if (q.includes("code splitting")) {
    return "Code splitting is a technique used in frontend development to break down large JavaScript bundles into smaller chunks that can be loaded on demand. Instead of loading the entire application at once, only the necessary code is loaded initially, and additional code is fetched when required. This improves performance by reducing initial load time and bandwidth usage. Code splitting is commonly implemented using dynamic imports and supported by bundlers like Webpack and Vite. It is particularly useful in large applications with many routes or features. By loading only what is needed, code splitting enhances user experience and scalability.";
  }

  if (q.includes("hydration mismatch")) {
    return "A hydration mismatch occurs in server-side rendered (SSR) applications when the HTML generated on the server does not match the HTML generated on the client during hydration. This inconsistency can cause warnings, errors, or unexpected UI behavior. It usually happens when dynamic data differs between server and client rendering, such as time-dependent values, random values, or client-specific states. Frameworks like React and Next.js expect the server-rendered markup to match the client-side virtual DOM exactly. To avoid hydration mismatches, developers must ensure deterministic rendering and avoid client-only logic during SSR. Proper synchronization of data between server and client is essential to maintain consistency.";
  }

  if (q.includes("prefetch") || q.includes("preload")) {
    return "Prefetching and preloading are resource hint techniques used to optimize web performance. Preloading is used to load critical resources that are needed for the current page as soon as possible, such as fonts or important scripts. Prefetching, on the other hand, loads resources that may be needed in the future, such as assets for the next page. Preload has higher priority and is used for immediate rendering needs, while prefetch is lower priority and used for anticipated navigation. Both techniques help improve performance by reducing perceived latency and ensuring resources are available when needed. Proper use of these hints enhances user experience by making navigation smoother and faster.";
  }

  if (q.includes("browser caching") || q.includes("cache control")) {
    return "Browser caching is a mechanism that stores copies of web resources (such as HTML, CSS, JavaScript, and images) locally in the browser to reduce repeated network requests. Cache control is managed using HTTP headers like Cache-Control, Expires, and ETag, which define how long resources should be cached and under what conditions they should be revalidated. Caching improves performance by reducing load times and server load. When a resource is requested, the browser checks if a cached version exists and whether it is still valid. If valid, it serves the cached version instead of fetching it again. Proper cache configuration is essential to balance performance and freshness of data.";
  }

  if (q.includes("http/1.1") && q.includes("http/2")) {
    return "HTTP/1.1 and HTTP/2 are versions of the HyperText Transfer Protocol with significant differences in performance and architecture. HTTP/1.1 uses text-based communication and allows only one request per connection at a time, often requiring multiple connections for parallel requests. HTTP/2 introduces binary framing, multiplexing, and header compression. Multiplexing allows multiple requests and responses to be sent simultaneously over a single connection, reducing latency. HTTP/2 also improves performance by minimizing overhead and enabling server push. Overall, HTTP/2 is more efficient and optimized for modern web applications compared to HTTP/1.1.";
  }

  if (
    q.includes("web api") ||
    q.includes("fetch api") ||
    q.includes("geolocation")
  ) {
    return "Web APIs are browser-provided interfaces that allow JavaScript to interact with browser features and external services. Examples include the Fetch API for making network requests, the Geolocation API for accessing user location, the DOM API for manipulating HTML elements, and the Storage API for localStorage and sessionStorage. These APIs are not part of the JavaScript language itself but are provided by the browser environment. They enable web applications to perform tasks like fetching data, accessing device capabilities, and interacting with the user. Web APIs are essential for building dynamic and interactive web applications.";
  }

  // ===================== Backend Systems =====================

  if (q.includes("distributed cache")) {
    return "A distributed cache is a caching system that spans multiple servers to store and manage cached data across a distributed environment. Instead of relying on a single machine, data is shared among multiple nodes, improving scalability, availability, and performance. Distributed caches reduce database load by serving frequently requested data from memory. They are commonly used in large-scale systems to handle high traffic and ensure low latency. Examples include Redis and Memcached. Distributed caching requires strategies for data consistency, eviction policies, and synchronization across nodes. It plays a crucial role in modern scalable architectures.";
  }

  if (q.includes("redis")) {
    return "Redis is an in-memory data structure store used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, and sorted sets. Redis is widely used for caching, session storage, real-time analytics, and pub/sub messaging. Because it stores data in memory, it provides extremely fast read and write operations. Redis also supports persistence by saving data to disk periodically. Its performance and flexibility make it a popular choice in backend systems for improving response times and reducing database load.";
  }

  if (q.includes("eventual consistency") && q.includes("strong consistency")) {
    return "Strong consistency ensures that all users see the same data immediately after a write operation, while eventual consistency allows temporary inconsistencies but guarantees that data will become consistent over time. Strong consistency is commonly used in systems where accuracy is critical, such as financial applications. Eventual consistency is often used in distributed systems where availability and scalability are prioritized over immediate consistency. In eventual consistency, updates propagate asynchronously across nodes. The choice between the two depends on system requirements and trade-offs between performance, availability, and consistency.";
  }

  if (q.includes("service discovery")) {
    return "Service discovery is a mechanism used in microservices architectures to automatically detect and locate services within a network. Instead of hardcoding service locations, services register themselves with a registry, and clients query this registry to find available instances. This allows services to scale dynamically and handle failures gracefully. Tools like Consul, Eureka, and Zookeeper are commonly used for service discovery. It simplifies communication between microservices and supports dynamic scaling and load balancing.";
  }

  if (q.includes("orchestration") && q.includes("choreography")) {
    return "API orchestration and choreography are two patterns for managing interactions between services. In orchestration, a central controller manages and coordinates the workflow between services, directing each step. In choreography, services communicate with each other directly through events without a central controller. Orchestration provides centralized control and easier monitoring, while choreography offers more decoupled and scalable systems. The choice depends on system complexity and architectural preferences.";
  }

  if (q.includes("schema registry")) {
    return "A schema registry is a centralized repository used in event-driven systems to store and manage data schemas. It ensures that producers and consumers of messages agree on the structure of data being exchanged. Schema registries are commonly used with message brokers like Kafka. They help maintain compatibility between different versions of schemas and prevent data inconsistencies. By enforcing schema validation, they improve reliability and versioning in distributed systems.";
  }

  if (q.includes("blue-green deployment")) {
    return "Blue-green deployment is a deployment strategy where two identical environments (blue and green) are maintained. One environment serves live traffic while the other is used for deploying and testing new versions. Once the new version is verified, traffic is switched from the old environment to the new one. This approach minimizes downtime and reduces risk during deployments. If issues arise, traffic can be quickly switched back to the previous environment. It is widely used for safe and reliable deployments.";
  }

  // ===================== Databases =====================

  if (q.includes("materialized view")) {
    return "A materialized view is a database object that stores the result of a query physically, unlike a regular view which is computed dynamically. Materialized views improve performance by precomputing and storing complex query results, allowing faster retrieval. However, they require periodic refreshes to stay up to date with underlying data. They are useful in scenarios involving heavy aggregation or reporting queries. The trade-off is between storage usage and query performance.";
  }

  if (q.includes("oltp") && q.includes("olap")) {
    return "OLTP (Online Transaction Processing) systems are designed for handling transactional workloads with frequent reads and writes, such as banking systems. They prioritize consistency and fast query execution. OLAP (Online Analytical Processing) systems are designed for complex queries and data analysis, often used in data warehouses. OLAP systems handle large volumes of historical data and support aggregations and reporting. OLTP focuses on real-time operations, while OLAP focuses on analytics and decision-making.";
  }

  if (q.includes("data partitioning")) {
    return "Data partitioning is the process of dividing a database into smaller, more manageable pieces called partitions. These partitions can be stored across different servers or storage systems to improve performance, scalability, and manageability. Partitioning can be horizontal (splitting rows) or vertical (splitting columns). It helps distribute load and improves query performance by reducing the amount of data scanned. It is commonly used in large-scale database systems.";
  }

  if (q.includes("composite query")) {
    return "A composite query involves combining multiple conditions or operations in a single SQL query, often using joins, subqueries, or multiple filters. Query optimization techniques such as indexing, query rewriting, and execution plan analysis are used to improve performance. Databases use query planners to determine the most efficient way to execute composite queries. Proper indexing and query design significantly impact performance.";
  }

  if (q.includes("bcnf")) {
    return "BCNF (Boyce-Codd Normal Form) is an advanced form of database normalization that ensures stronger data integrity than 3NF. A table is in BCNF if every determinant is a candidate key. It eliminates redundancy and dependency anomalies that may still exist in 3NF. BCNF is used when stricter normalization is required, although it may sometimes lead to more complex table structures. It improves consistency but may increase the number of joins required in queries.";
  }

  if (q.includes("referential integrity")) {
    return "Referential integrity ensures that relationships between tables remain consistent in a relational database. It is enforced using foreign keys, which link one table to another. Referential integrity guarantees that a foreign key value must match an existing primary key or be null. This prevents orphan records and maintains data consistency across related tables. It is a fundamental concept in relational database design.";
  }

  if (q.includes("indexing strategy")) {
    return "Indexing strategy refers to the approach used to create and manage indexes in a database to optimize query performance. Choosing the right indexes depends on query patterns, data size, and read/write balance. Indexes speed up read operations but can slow down write operations due to additional overhead. Composite indexes, unique indexes, and partial indexes are used based on specific needs. Proper indexing improves query performance but must be balanced to avoid excessive storage and maintenance costs.";
  }

  // ===================== APIs =====================

  if (q.includes("openapi") || q.includes("swagger")) {
    return "OpenAPI (formerly Swagger) is a specification for describing RESTful APIs in a standardized format. It allows developers to define API endpoints, request/response structures, authentication methods, and documentation in a machine-readable format. Tools like Swagger UI can automatically generate interactive documentation from OpenAPI definitions. It helps developers understand, test, and integrate APIs بسهولة. OpenAPI improves collaboration between frontend and backend teams by providing a clear contract for API behavior.";
  }

  if (q.includes("api gateway")) {
    return "API gateway authentication refers to authenticating requests at the gateway level before routing them to backend services, while service-level authentication occurs within individual services. An API gateway acts as a single entry point for clients, handling authentication, routing, rate limiting, and logging. It centralizes security and simplifies backend services by offloading cross-cutting concerns. Service-level authentication adds an additional layer of security within each microservice. Together, they provide a secure and scalable architecture.";
  }

  if (q.includes("graphql resolver")) {
    return "A GraphQL resolver is a function responsible for fetching the data for a specific field in a GraphQL query. When a query is executed, the GraphQL engine calls resolvers to retrieve data from databases, APIs, or other sources. Each field in a query can have its own resolver. Resolvers work together to construct the final response. Internally, GraphQL parses the query, builds an execution plan, and invokes resolvers in a hierarchical manner. Resolvers enable flexibility in fetching data and allow clients to request exactly what they need, avoiding over-fetching or under-fetching.";
  }

  if (q.includes("what is ram", "ram")) {
    return "RAM (Random Access Memory) is a computer's high-speed, short-term memory that temporarily stores active data and applications for immediate access by the CPU. It enables fast read speeds for running tasks, but unlike a hard drive, it is volatile, meaning data is lost when the computer is turned off.  ";
  }
  if (q.includes("what is motherboard", "motherboard")) {
    return "A motherboard is the main printed circuit board (PCB) in a computer that acts as the central hub, connecting all components CPU, memory, storage, and graphics card—and allowing them to communicate. It acts as the backbone or central nervous system, distributing power and enabling data flow between hardware.";
  }
  // fallback
  return `I couldn't find a direct match for your query. You can try asking about:
- Programming concepts
- Web development
- Backend systems
- Databases
- APIs 
Please rephrase or include a specific keyword so I can assist you better.`;
}
