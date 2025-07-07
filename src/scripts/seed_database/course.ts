import { Prisma } from "@/client";

const COURSE_SEED: Prisma.CourseCreateInput[] = [
  {
    id: "MCA",
    name: "Master of Computer Applications",
    description: "A three-year postgraduate program in computer applications.",
    duration: 2,
    degreeType: "MASTERS",
    semester: 4,
  },
  {
    id: "BCA",
    name: "Bachelor of Computer Applications",
    description: "A three-year undergraduate program in computer applications.",
    duration: 3,
    degreeType: "BACHELORS",
    semester: 6,
  },
];

const SUBJECT_SEED_MCA: Prisma.SubjectCreateManyInput[] = [
  {
    name: "Fundamentals of Computers",
    code: "MCA C1001",
    semester: 1,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      ". Introduction to Computer Science- ITL Education Solutions Limited, Pearson Education, 2004",
    ],
  },
  {
    name: "Data Structures through C",
    code: "MCA C1002",
    semester: 1,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "E. Balagurusamy - Programming in ANSI C, 3rd Edn. , TMH, New Delhi ; 2004",
      "Seymour Lipschutz, Data Structure With C, Schaum's Outline Series, TMH, 2017",
    ],
  },
  {
    name: "Operating System Concepts",
    code: "MCA C1003",
    semester: 1,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "A. Silberschatz, Galvin,-Operating System Concepts, 6th Edn, John Wiley, Indian Reprint,2003",
    ],
  },
  {
    name: "Database Management System",
    code: "MCA C1004",
    semester: 1,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      `Fundamentals of Database Systems "RamezElmasri", Pearson Education`,
    ],
  },
  {
    name: "Computer Organization & Architecture",
    code: "MCA C1005",
    semester: 1,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      `William Stallings- Computer Organization & Architecture: Designing for Performance, 7th Edn, Pearson Education, New Delhi-2006.`,
    ],
  },
  {
    name: "Management Information System",
    code: "MCA C1006",
    semester: 1,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      `John Wiley and Sons - "Software Engineering - Principles and Practice - 2nd Edn. Haus Van Vliet`,
      `Ian Sommerville - "Software Engineering", 7th Edn., Pearson Education.`,
    ],
  },
  {
    name: "Fundamentals of Computers Lab",
    code: "MCA P1007",
    semester: 1,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["From theory of Fundamentals of Computers"],
  },
  {
    name: "Data Structures Lab",
    code: "MCA P1008",
    semester: 1,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["From theory of Data Structures"],
  },
  {
    name: "Database Management System Lab",
    code: "MCA P1009",
    semester: 1,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["From theory of Database Management System"],
  },
  {
    name: "Advance Java Programming",
    code: "MCA C2001",
    semester: 2,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      `Wigglesworth & McMillan - JavaTM Programming Advanced Topics, 3rd Edn., India Edition,
Thomson Education, New Delhi, 2007`,
      `Richard A. Johnson, “ An Introduction to Java Programming and Object-Oriented Application
Development”, 1st Edn.,Thomson Learning, New Delhi - 2007`,
    ],
  },
  {
    name: "Design and Analysis of Algorithms",
    code: "MCA C2002",
    semester: 2,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "E.Horowitz. et.al.- Fundamentals of Computer Algorithms, Galgotia Publication Pvt.Ltd., New Delhi, 2004",
      "J.Kleinberg &amp; E. Tardos - Algorithm Design, Pearson Education, New Delhi, 2006",
    ],
  },
  {
    name: "Data Communication & Computer Networks",
    code: "MCA C2003",
    semester: 2,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "Forouzan B, ;Data Communications and Networking , 2nd Edition, Tata McGraw-Hill",
    ],
  },
  {
    name: "Discrete Mathematics",
    code: "MCA C2004",
    semester: 2,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "Discrete Mathematical Structures, Kolman, Busby, Ross, 5th Edition, Pearson Education",
    ],
  },
  {
    name: "Software Engineering",
    code: "MCA C2005",
    semester: 2,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "Roger S. Pressiman - “Software Engineering - A Practitioner’s Approach”, 6th Edn., McGraw Hill",
    ],
  },
  {
    name: "Advance Java Lab",
    code: "MCA P2006",
    semester: 2,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["From theory of Advance Java Programming"],
  },
  {
    name: "Algorithms Lab",
    code: "MCA P2007",
    semester: 2,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["From theory of Design and Analysis of Algorithms"],
  },
  {
    name: "Computer Networks Lab",
    code: "MCA P2008",
    semester: 2,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["From theory of Data Communication & Computer Networks"],
  },
  {
    name: "Cyber Security",
    code: "MCA E2009",
    semester: 2,
    credits: 4.0,
    marks: 100,
    paperType: "ELECTIVE",
    courseId: "MCA",
    textBook: [". Cyber Law in India by Farooq Ahmad - Pioneer Books"],
  },
  {
    name: "Artificial Intelligence",
    code: "MCA E2010",
    semester: 2,
    credits: 4.0,
    marks: 100,
    paperType: "ELECTIVE",
    courseId: "MCA",
    textBook: [
      "Russel S. and Norvig P., Artificial Intelligence a Modern Approach, 3rd edition, Pearson Education",
      "Rich E. & Knight K., Artificial Intelligence, 3rd edition, TMH, New Delhi",
    ],
  },
  {
    name: "Cloud Computing",
    code: "MCA E2011",
    semester: 2,
    credits: 4.0,
    marks: 100,
    paperType: "ELECTIVE",
    courseId: "MCA",
    textBook: [
      "Cloud Computing ”A Practical Approach” Anthony T. Velte, Toby J. Velte, Robert Elsenpeter McGraw‐Hill",
    ],
  },
  {
    name: "Data Warehousing & Data Mining",
    code: "MCA C3001",
    semester: 3,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "Data Mining - Concepts and Techniques - Jiawei Han & Micheline Kamber Harcourt India",
      "Data Mining Techniques - Arun K Pujari, University Press",
      "Building the DataWarehouse- W. H. Inmon, Wiley Dreamtech India Pvt.Ltd.",
    ],
  },
  {
    name: "Compiler Design",
    code: "MCA C3002",
    semester: 3,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "Kenneth C. Louden -“Compiler Construction - Principle and Practice”, Thomson2007",
      "John Martin -“Introduction to Languages and the Theory of Computation”, 3rd edition,TMH",
    ],
  },
  {
    name: "Programming in Python",
    code: "MCA C3003",
    semester: 3,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "Programming in Python, Pooja Sharma, BPB Publications, 2017",
      "Core Python Programming, R. Nageswara Rao, 2nd Edition, Dreamtech",
      "Python in a Nutshell, A. Martelli, A. Ravenscroft, S. Holden, OREILLY",
    ],
  },
  {
    name: "Soft Computing",
    code: "MCA C3004",
    semester: 3,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "S. Rajasekharan & G. A. Vijayalakshmi - “ Neural Network, Fuzzy Logic And Gentic Algorithm Synthesis And Applications”, Prentice Hall Of India PLT, Pai - 2004",
    ],
  },
  {
    name: "Financial Accounting",
    code: "MCA C3005",
    semester: 3,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: ["S.N. Maheshwari- Advance Accountancy, Vikas Publication"],
  },
  {
    name: "Python Lab",
    code: "MCA P3006",
    semester: 3,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["From theory of Programming in Python"],
  },
  {
    name: "Tally Lab",
    code: "MCA P3007",
    semester: 3,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["From theory of Tally ERP 9"],
  },
  {
    name: "Mini Project/Practical Training",
    code: "MCA P3008",
    semester: 3,
    credits: 2.0,
    marks: 50,
    paperType: "PROJECT",
    courseId: "MCA",
    textBook: ["N/A"],
  },
  {
    name: "Big Data Analytics",
    code: "MCA E3009",
    semester: 3,
    credits: 4.0,
    marks: 100,
    paperType: "ELECTIVE",
    courseId: "MCA",
    textBook: [
      "Michael Berthold, David J. Hand, “Intelligent Data Analysis”, Springer, 2007",
      "Tom White “Hadoop: The Definitive Guide” Third Edition, O'Reilly Media, 2012",
    ],
  },
  {
    name: "Software Testing",
    code: "MCA E3010",
    semester: 3,
    credits: 4.0,
    marks: 100,
    paperType: "ELECTIVE",
    courseId: "MCA",
    textBook: [
      "Software Testing: Principles and Practices by Srinivasan D and Gopalswamy R,PearsonEd, 2006",
    ],
  },
  {
    name: "Machine Learning",
    code: "MCA E3011",
    semester: 3,
    credits: 4.0,
    marks: 100,
    paperType: "ELECTIVE",
    courseId: "MCA",
    textBook: ["Mitchell Tom, Machine Learning, Latest Edition, Mc-Graw Hill"],
  },
  {
    name: "Computer Graphics",
    code: "MCA C4001",
    semester: 4,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: ["Computer Graphics by Amarendra Nath Sinha, Landmark Ltd"],
  },
  {
    name: "Operations Research",
    code: "MCA C4002",
    semester: 4,
    credits: 4.0,
    marks: 100,
    paperType: "THEORY",
    courseId: "MCA",
    textBook: [
      "Kanti Swarup, P.K. Gupta, Man Mohan - “Operations Research, Sultan Chand & Sons, New Delhi - 2001",
    ],
  },
  {
    name: "Personality Development",
    code: "MCA P4003",
    semester: 4,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["N/A"],
  },
  {
    name: "Android Application Development",
    code: "MCA P4004",
    semester: 4,
    credits: 2.0,
    marks: 50,
    paperType: "PRACTICAL",
    courseId: "MCA",
    textBook: ["N/A"],
  },
  {
    name: "Major Project",
    code: "MCA P4005",
    semester: 4,
    credits: 18.0,
    marks: 450,
    paperType: "PROJECT",
    courseId: "MCA",
    textBook: ["N/A"],
  },
];

const MCA_UNIT_SEED: Prisma.UnitCreateManyInput[] = [
  {
    unitNumber: 1,
    title: "Introduction to Computers and Computer Network",
    subjectCode: SUBJECT_SEED_MCA[0].code,
    content: `Introduction, Characteristics of Computers, Evolution of Computers, Evolution of Computers, Generations Of Computers, Classification of Computers, The Computer System, Application of Computers, Introduction, Data Communication, Transmission Media, Multiplexing, Switching, Computer Network, Network Topologies, Communication Protocols, Network Devices.`,
  },
  {
    unitNumber: 2,
    title: "Number Systems, Logic Gates and Computer Architecture",
    subjectCode: SUBJECT_SEED_MCA[0].code,
    content: `Introduction, Number Systems, Conversion between Number Bases, Arithmetic System, Concept of Overflow, Binary Coding, Logic Gates, Boolean algebra, Combination of Logic Gates. Central Processing Unit, Memory, Communication between Various Units of a Computer System, Processor Speed, Multiprocessor Systems.`,
  },
  {
    unitNumber: 3,
    title: "Primary Memory, Secondary Memory and Operating System",
    content: `Introduction, Memory Hierarchy, Random Access Memory (RAM), Types Of RAM, Read Only Memory (ROM), Types Of ROM, Classification of Secondary Storage Devices, Magnetic Tape, Magnetic Disk, Optical Disk Operating System, Evolution of Operating System, Types of Operating System, Functions of an Operating System, Modern Operating Systems.`,
    subjectCode: SUBJECT_SEED_MCA[0].code,
  },
  {
    unitNumber: 4,
    title: `Computer Languages & Computer Software`,
    subjectCode: SUBJECT_SEED_MCA[0].code,
    content: `Introduction, Evolution of Programming Languages, Classification of Programming Languages, Generations of Programming Languages, Features of a Good Programming Language, Selection of a Programming Language, Software: Definition, Relationship between Software and Hardware, Software Categories, System Software, Application Software, Software Terminology.`,
  },
  {
    unitNumber: 5,
    title: `Internet Basics`,
    subjectCode: SUBJECT_SEED_MCA[0].code,
    content: `Introduction, Evolution of Internet, Basic Internet Terms, Getting Connected To Internet, Internet Applications, Electronic Mail- An Introduction, How Email Works, Search Engines, Languages of Internet, Internet and viruses.`,
  },
  {
    unitNumber: 1,
    title:
      "Introduction, Operators, Decision Making & Branching, Array and String",
    subjectCode: SUBJECT_SEED_MCA[1].code,
    content: `History and Importance of C, Sample programming, Basic Structure and execution of C programs, Constants, Variables, and Data Types and various type of declarations, Different type operators and Expressions, Operator Precedence and Associability, Mathematical and Character Functions., Decision Making and Branching, Looping. One – dimensional Arrays and their declaration and Initializations, Two-dimensional Arrays and their initializations, Multidimensional Arrays, Dynamic Arrays, String handling functions.`,
  },
  {
    unitNumber: 2,
    title: "Function, Structure, Union and Pointer",
    subjectCode: SUBJECT_SEED_MCA[1].code,
    content: `Need and Elements for user –defined Functions, Definition of Functions, Return values and their types, Function calls and Declaration, Arguments and corresponding return values, Functions that return multiple values, Nesting of functions, Recursion, Defining Structure, Declaring Structure Variable and Accessing Structure Members, Initialization of Structure, Comparing Structure Variables, Arrays of Structures, and Structures within structures, Unions, Understanding Pointers, Accessing the Address of a Variable, Declaration and Initialization of Pointer Variables, Accessing a Variable through its Pointer, File Management in C.`,
  },
  {
    unitNumber: 3,
    title: "Introduction to Data Structure, Lists, Stacks and Queues",
    subjectCode: SUBJECT_SEED_MCA[1].code,
    content: `Need of Data Structure, Algorithm, Complexity, Asymptotic Notations, Introduction to linked lists; Linked list types, operations on linked list; Introduction and primitive operations on stack; Stack application; Infix, postfix, prefix expressions; Evaluation of postfix expression; Conversion between prefix, infix and postfix, introduction and primitive operation on queues.`,
  },
  {
    unitNumber: 4,
    title: "Trees, m–Way Trees and Graphs",
    subjectCode: SUBJECT_SEED_MCA[1].code,
    content: `Introduction, Tree terminology; Traversal of binary trees; Recursive algorithms for tree operations such as traversal, insertion, deletion; Binary Search Tree. The invention of B-Tree; Example for creating a B-Tree, B+ Tree, AVL tree. Graph Definition and Terminology, Directed and Undirected graph with adjacency Matrix; Weighted Graph, Graph Linked representation, DFS and BFS.`,
  },
  {
    unitNumber: 5,
    title: "Sorting & Searching Techniques",
    subjectCode: SUBJECT_SEED_MCA[1].code,
    content: `Sorting : Insertion sort, Selection sort, Merge sort, Bubble sort, Heap Sort. Searching Techniques: Linear search & Binary search.`,
  },
  {
    unitNumber: 1,
    title: "Introduction",
    subjectCode: "MCA C1003",
    content: `Introduction to OS Operating system functions, evaluation of O.S., Different types of O.S. batch, multi-programmed, time-sharing, real-time, distributed, parallel. System Structure Computer system operation, I/O structure, storage structure, storage hierarchy, different types of protections, operating system structure (simple, layered, virtual machine), O/S services, system calls.`,
  },
  {
    unitNumber: 2,
    title: "Processes",
    subjectCode: "MCA C1003",
    content: `Concept of processes, process scheduling, operations on processes, operating processes, inter-process communication. Process Synchronization: background, critical section problem, critical region, synchronization hardware, classical problems of synchronization, semaphores. Threads: overview, benefits of threads, user and kernel threads. CPU scheduling: scheduling criteria, preemptive & non-preemptive scheduling, scheduling algorithms, multi-processor scheduling.`,
  },
  {
    unitNumber: 3,
    title: "Deadlocks and Memory Management",
    subjectCode: "MCA C1003",
    content: `System model, deadlock characterization, methods for handling deadlocks, deadlock prevention, deadlock avoidance, deadlock detection, recovery from deadlock. Memory Management: background, logical vs. physical address space, swapping, contiguous memory allocation, paging, segmentation, segmentation with paging. Virtual Memory: background, demand paging, performance, page replacement, page replacement algorithms, allocation of frames, thrashing.`,
  },
  {
    unitNumber: 4,
    title: "File Systems and I/O Management",
    subjectCode: "MCA C1003",
    content: `File concept, access methods, directory structure, file system structure, allocation methods (contiguous, linked, indexed), free-space management (bit vector, linked list, grouping), directory implementation (linear list, hash table), efficiency & performance. I/O Management: I/O hardware, polling, interrupts, DMA, application I/O interface (block and character devices, network devices, clocks and timers, blocking and non-blocking I/O), kernel I/O subsystem (scheduling, buffering, caching, spooling and device reservation, error handling), performance.`,
  },
  {
    unitNumber: 1,
    title: "Introduction",
    subjectCode: "MCA C1004",
    content: `File systems versus Database systems, Advantages of DBMS, DBMS classification/types, DBMS structure, three schema DBMS architecture, Data Models, Data Independence, Data abstraction, Database Users, Database Schemas and Database Instances, Views and its advantages, Data dictionary, DBA and its functions, RDBMS, Difference between DBMS and RDBMS.`,
  },
  {
    unitNumber: 2,
    title: "E-R Model & Relational Model",
    subjectCode: "MCA C1004",
    content: `Entities and Entity Sets, Relationships and Relationship Sets, Mapping Cardinality, ER Diagram, Reducing ER Diagram to tables, Specialization, Generalization and Aggregation. Codd’s rule, RDBMS Concepts, Types of Keys, Constraints Types, Relational database Scheme, Procedural & Non Procedural Languages, Relational Algebra, Relational Calculus.`,
  },
  {
    unitNumber: 3,
    title: "SQL/PLSQL",
    subjectCode: "MCA C1004",
    content: `Basic Concepts, Basic SQL, Advance SQL, Database languages, Set operations, Aggregate Functions, Null Values, views, Sub-queries, Integrity Constraints (Entity integrity, Referential integrity and Domain constraint), SQL Constraints Types, Indexing, Cursors, Stored procedures and triggers.`,
  },
  {
    unitNumber: 4,
    title: "Database Design",
    subjectCode: "MCA C1004",
    content: `Pitfalls in relational database design, Normalization using functional dependency, Multivalued and join dependencies, Atomic values, Full and Partial Functional Dependency, 1NF, 2NF, 3NF, BCNF, 4NF, 5NF.`,
  },
  {
    unitNumber: 5,
    title: "Transaction Processing and Concurrency Control",
    subjectCode: "MCA C1004",
    content: `DBMS Transaction, ACID Properties, States of Transaction, Serializability, DBMS Concurrency control, DBMS deadlock, Deadlock avoidance, Deadlock detection, Deadlock Prevention, Schedules and Recovery, Locking and Timestamp Ordering for concurrency control.`,
  },
  {
    unitNumber: 1,
    title: "Fundamentals of Digital Logic Design",
    subjectCode: "MCA C1005",
    content: `Axioms and laws of Boolean algebra, Reduction of Boolean expressions, Logic gates, Conversion between canonical forms, Karnaugh map (4 variable), Combinational Circuits: Half Adder, Full adder, Decoder, Encoder, Multiplexer, Sequential Circuits: Flip-flop, SR, JK, T, D-Latch, Master slave.`,
  },
  {
    unitNumber: 2,
    title: "Computer System",
    subjectCode: "MCA C1005",
    content: `Comparison of Computer Organization & Architecture, Von-Neumann concept, Computer Components and Functions, Interconnection Structures. Bus Interconnections, Input / Output: I/O Module, Programmed I/O, Interrupt Driven I/O, Direct Memory Access.`,
  },
  {
    unitNumber: 3,
    title: "Memory Organization",
    subjectCode: "MCA C1005",
    content: `Classification and design parameters, Memory Hierarchy, RAM, SRAM and DRAM, Associative Memory. Cache Memory: Design Principles, Cache Memory mappings, Cache performance, Cache Coherence.`,
  },
  {
    unitNumber: 4,
    title: "Processor Organization",
    subjectCode: "MCA C1005",
    content: `Instruction Formats, Instruction Sets, Addressing Modes, Addressing Modes Examples with Assembly Language [8085/8086 CPU], Processor Organization, Structure and Function. Register Organization, Instruction Cycle, Multiplication algorithm (Booth’s), Divide algorithms (Restoring & Non-Restoring), Floating point representation. Control Unit: Micro-Operations, Functional Requirements, Processor Control, Hardwired Implementation, Micro-programmed Control.`,
  },
  {
    unitNumber: 5,
    title: "Pipelining",
    subjectCode: "MCA C1005",
    content: `Instruction Pipelining, Pipelining Hazards, Pipeline Performance Evaluation, RISC and CISC Architecture, Flynn’s classification – SISD, SIMD, MISD, MIMD.`,
  },
  {
    unitNumber: 1,
    title: "Introduction to MIS",
    subjectCode: "MCA C1006",
    content: `Systems, data, Information and knowledge, importance of MIS in competitive business environment. Introduction to information technology: Database management system, Networking, System and application software.`,
  },
  {
    unitNumber: 2,
    title: "Types of Information Systems",
    subjectCode: "MCA C1006",
    content: `Management information systems, Transaction processing systems, decision support systems, expert systems, Office automation systems and knowledge-based systems.`,
  },
  {
    unitNumber: 3,
    title: "Decision Making",
    subjectCode: "MCA C1006",
    content: `Structured decision making, Unstructured decision making and semi structured decision making.`,
  },
  {
    unitNumber: 4,
    title: "Functional Information System",
    subjectCode: "MCA C1006",
    content: `Marketing, Finance, HR, Production / Operations information systems.`,
  },
  {
    unitNumber: 5,
    title: "Enterprise Resource Planning",
    subjectCode: "MCA C1006",
    content: `Process Mapping, Implementation management, ERP System, Information systems Value and Effectiveness.`,
  },
  {
    unitNumber: 1,
    title: "Principles of Object-oriented Programming",
    subjectCode: "MCA C2001",
    content: `Object-oriented Programming, Paradigm, Basic Concepts of Object-oriented Programming, Benefits of OOPs, Application of OOP, Data Types, Operators, Control Structure and looping. Classes and Objects: Defining a Class, Adding Variables and Methods, Creating Objects, Accessing Class Members, Constructors, Methods Overloading, Static Members, Nesting of Methods, Arrays within a Class, Memory Allocation for Objects, Static Data Member, Static Member Functions, Arrays of Objects, Objects as Function Arguments.`,
  },
  {
    unitNumber: 2,
    title: "Inheritances, Interface & Packages",
    subjectCode: "MCA C2001",
    content: `Inheritance: Extending a Class, Overriding Methods, Final Variables and Methods, Final Classes, Finalize Methods, Abstract methods and Classes, Visibility Control. Interface & Packages: One-Dimensional & two Dimensional Array, Strings, Vectors, wrapper Classes, Defining Interface, Extending Interface, Implementing Interface, Accessing Interface, System Packages, Using System Package, Adding a Class to a Package, Hiding Classes.`,
  },
  {
    unitNumber: 3,
    title: "Threads",
    subjectCode: "MCA C2001",
    content: `Creating Threads, Extending the Threads Class, Stopping and Blocking a Thread, Life-Cycle of a Thread, Using Thread Methods, Thread Exceptions, Thread Priority, Synchronization, Implementing the Runnable Interface.`,
  },
  {
    unitNumber: 4,
    title: "Components and Facilities of Rich Graphical User Interfaces",
    subjectCode: "MCA C2001",
    content: `Programming with the JFC, Swing API Components, component Class, Windows, Dialog Boxes, and Panels, Labels, Buttons, and Check Boxes, Menus, Toolbars, and Actions, Sliders, Spinners, Progress Bars, and Scrollbars, Lists and Combo Boxes, Text-Entry Components, Color and File Choosers, Tables and Trees, Printing with the 2D API, Java Print Service API.`,
  },
  {
    unitNumber: 5,
    title: "Using Relational Database",
    subjectCode: "MCA C2001",
    content: `Introduction, Best Practices for Programming for Databases, JDBC Drivers for RDBM Systems, SQL to Java Type Mappings, Understanding the Database used in this chapter, Using the java.sql API, Coding Transactions, Working with Sockets.`,
  },
  {
    unitNumber: 6,
    title: "Building Web Applications",
    subjectCode: "MCA C2001",
    content: `Introduction, The Technology of the Web, J2EE Web Application Packaging, Servlets, The Servlet API, The User Experience, Building a Web App with Continuity, Java Server Pages, JSP Tags and API, How the Server Processes JSPs, Java Coding in JSPs, Frameworks for Building Web Applications, Building Robust WebApps.`,
  },
  {
    unitNumber: 1,
    title: "Introduction",
    subjectCode: "MCA C2002",
    content: `Algorithms and structured programming, analysing algorithms, asymptotic behaviour of an algorithm, Order notations, time and space complexities (polynomial, logarithmic and exponential), average and worst case analysis, lower and upper bounds.`,
  },
  {
    unitNumber: 2,
    title: "Advanced Data Structures",
    subjectCode: "MCA C2002",
    content: `Threaded trees, B-trees, Heaps and heapsort, sets and relations, Graphs, Hashing. Basic search & Traversal Techniques (Breadth first and Depth first traversals of Graphs).`,
  },
  {
    unitNumber: 3,
    title: "Algorithm Design Strategies",
    subjectCode: "MCA C2002",
    content: `Divide and conquer (Mergesort, Quicksort, matrix multiplication). Greedy method: General method, knapsack problem, job sequencing with deadlines, minimum cost spanning trees. Dynamic programming (0/1 knapsack, travelling salesman problem).`,
  },
  {
    unitNumber: 4,
    title: "Backtracking and Branch & Bound",
    subjectCode: "MCA C2002",
    content: `8 - Queens problem, Sum of Subsets, Graph coloring, 0/1 Knapsack. Branch & Bound (0/1 knapsack, Travelling salesman).`,
  },
  {
    unitNumber: 5,
    title: "Approximation Algorithms and Complexity",
    subjectCode: "MCA C2002",
    content: `Polynomial Time Approximation Schemes. Complexity: NP-Hard and NP-complete Problems, Cook's theorem, NP completeness reductions.`,
  },
  {
    unitNumber: 1,
    title: "Data Communication Basics",
    subjectCode: "MCA C2003",
    content: `Introduction: Definition and Uses of Computer Network, Criteria for a Data Communication Network, Classification of Computer network, Network Architecture, OSI Reference Model. Data communication: Data Communication, Transmission Impairments, Transmission Medium. Data Encoding: Line Encoding, Types of Line Coding, Analog-to-Digital Conversion- Pulse code modulation (PCM), Delta modulation (DM); Transmission Modes.`,
  },
  {
    unitNumber: 2,
    title: "Data Link Layer",
    subjectCode: "MCA C2003",
    content: `Data Link Layer Basics. Error Detection and Correction: One and two dimensional parity checks, Hamming code, Cyclic redundancy check (CRC). Framing: Character stuffing, Bit stuffing. Flow and Error Control Protocols: Stop-and-wait ARQ, Go back N ARQ, Selective repeat ARQ. MAC and LLC Sub-layers: Channel Allocation Problem, Pure ALOHA and Slotted ALOHA, Persistent and non-persistent CSMA. Ethernet and Wired LANs: IEEE 802 Standards, Standard Ethernet, Changes in the Standard, Fast Ethernet, Gigabit Ethernet.`,
  },
  {
    unitNumber: 3,
    title: "Network Layer",
    subjectCode: "MCA C2003",
    content: `IP Addressing Scheme, Subnet Addressing, Subnet Masks, IPV4 Addressing, IPV6 Addressing, Address Resolution Protocol (ARP), Reverse Address Resolution Protocol (RARP). Unicast Routing: Routing Characteristics, Routing Algorithms, Routing Table, Comparison of Routing Algorithms.`,
  },
  {
    unitNumber: 4,
    title: "Transport Layer",
    subjectCode: "MCA C2003",
    content: `Services of Transport Layer, Connection Establishment, Connection Release, Transport Layer Protocols: TCP protocol, UDP protocol.`,
  },
  {
    unitNumber: 5,
    title: "Traffic Engineering Principles",
    subjectCode: "MCA C2003",
    content: `Congestion Control Algorithms: General principles of congestion control, Congestion prevention policies. Quality of Service: Traffic shaping, Leaky bucket algorithm, Token bucket algorithm, Integrated Services.`,
  },
  {
    unitNumber: 1,
    title: "Logic & Counting",
    subjectCode: "MCA C2004",
    content: `Propositions and Logical Operations, Conditional Statements, Mathematical Induction. Permutation, Combination, Pigeonhole Principle, Elements of Probability.`,
  },
  {
    unitNumber: 2,
    title: "Relations and Digraphs",
    subjectCode: "MCA C2004",
    content: `Relations and partition, Graph, Relations and Digraphs, Paths in a Digraph, Matrix Representation of Relations and Digraphs, Operations on Relations, Transitive Closure, Euler’s graph, Hamiltonian graph, Planar graph.`,
  },
  {
    unitNumber: 3,
    title: "Lattice and Boolean Algebra",
    subjectCode: "MCA C2004",
    content: `Partial Ordered Sets, External Elements of Partially Ordered Sets, Lattices, Finite Boolean Algebra, Circuit Design.`,
  },
  {
    unitNumber: 4,
    title: "Trees",
    subjectCode: "MCA C2004",
    content: `Trees, Labelled Trees, Tree Searching, Minimum Spanning Trees: Prim’s and Kruskal’s algorithms.`,
  },
  {
    unitNumber: 5,
    title: "Semigroups and Groups",
    subjectCode: "MCA C2004",
    content: `Binary Operations, Semigroups, Products and Quotients of Semigroups, Groups, Products and Quotients of Groups.`,
  },
  {
    unitNumber: 1,
    title: "Introduction to Software Engineering",
    subjectCode: "MCA C2005",
    content: `Software Engineering – A layered Technology, Software Characteristics, Software Application, Software Engineering Process and SDLC Model, Waterfall Model, Prototype Model, Incremental Process Models, V Model, RAD Model, Spiral Model, Agile Process Model.`,
  },
  {
    unitNumber: 2,
    title: "Requirement & Design Engineering",
    subjectCode: "MCA C2005",
    content: `Requirement Analysis and Software Requirement Specifications, Requirements Gathering Methods, Data Flow Diagrams, Data Dictionaries, Entity-Relationship Diagram, Software Design Introduction, Coupling and Cohesion, Function Oriented Design and Object Oriented Design.`,
  },
  {
    unitNumber: 3,
    title: "Testing Strategies and Testing Tactics",
    subjectCode: "MCA C2005",
    content: `Strategic Approach to software Testing, Verification and Validation Testing, White Box Testing, Basic Path Testing, Control Structure Testing, Black Box Testing, Unit Testing, Integration Testing, Bottom-up and Top-down Testing, System Testing, Function Testing, Performance Testing, Acceptance Testing, Installation Testing, Test Case Generation.`,
  },
  {
    unitNumber: 4,
    title: "Software Metrics and Project Management",
    subjectCode: "MCA C2005",
    content: `Issues in Project Management, Management Functions, Software Project Management Plan, Software Management Structure, Software Project Complexity, Software Metrics – Basic Consideration, Size Oriented metrics and Function Point Oriented metrics; Software Cost Estimation Techniques, The COCOMO Model, Project Scheduling, Software Project Planning.`,
  },
  {
    unitNumber: 5,
    title: "Software Quality and Configuration Management",
    subjectCode: "MCA C2005",
    content: `Software Quality Concepts, Software Quality Assurance and Quality Control, Software Reliability, Software Configuration Management, SCM Repository, and SCM Process.`,
  },
  {
    unitNumber: 1,
    title: "Introduction to Cyber Security",
    subjectCode: "MCA E2009",
    content: `Overview of Cyber Security, Internet Governance – Challenges and Constraints, Cyber Threats: Cyber Warfare, Cyber Crime, Cyber terrorism, Cyber Espionage. Need for a Comprehensive Cyber Security Policy, Need for a Nodal Authority, Need for an International convention on Cyberspace.`,
  },
  {
    unitNumber: 2,
    title: "Cyber Security Vulnerabilities and Cyber Security Safeguards",
    subjectCode: "MCA E2009",
    content: `Cyber Security Vulnerabilities: Overview, vulnerabilities in software, System administration, Complex Network Architectures, Open Access to Organizational Data, Weak Authentication, Unprotected Broadband communications, Poor Cyber Security Awareness. Cyber Security Safeguards: Overview, Access control, Audit, Authentication, Biometrics, Cryptography, Deception, Denial of Service Filters, Ethical Hacking, Firewalls, Intrusion Detection Systems, Response, Scanning, Security policy, Threat Management.`,
  },
  {
    unitNumber: 3,
    title: "Securing Web Application, Services and Servers",
    subjectCode: "MCA E2009",
    content: `Introduction, Basic security for HTTP Applications and Services, Basic Security for SOAP Services, Identity Management and Web Services, Authorization Patterns, Security Considerations, Challenges.`,
  },
  {
    unitNumber: 4,
    title: "Intrusion Detection and Prevention",
    subjectCode: "MCA E2009",
    content: `Intrusion, Physical Theft, Abuse of Privileges, Unauthorized Access by Outsider, Malware infection. Intrusion detection and Prevention Techniques, Anti-Malware software, Network based Intrusion Detection Systems, Network based Intrusion Prevention Systems, Host based Intrusion Prevention Systems, Security Information Management, Network Session Analysis, System Integrity Validation.`,
  },
  {
    unitNumber: 5,
    title: "Cryptography and Network Security",
    subjectCode: "MCA E2009",
    content: `Introduction to Cryptography, Symmetric key Cryptography, Asymmetric key Cryptography, Message Authentication, Digital Signatures, Applications of Cryptography. Overview of Firewalls: Types of Firewalls, User Management, VPN Security. Security Protocols: Security at the Application Layer - PGP and S/MIME, Security at Transport Layer - SSL and TLS, Security at Network Layer - IPSec.`,
  },
  {
    unitNumber: 6,
    title: "Cyberspace and the Law",
    subjectCode: "MCA E2009",
    content: `Introduction, Cyber Security Regulations, Roles of International Law, the State and Private Sector in Cyberspace, Cyber Security Standards. The INDIAN Cyberspace, National Cyber Security Policy 2013.`,
  },
  {
    unitNumber: 1,
    title: "Introduction, Intelligent Agents and Problem Solving Space",
    subjectCode: "MCA E2010",
    content: `Introduction: Overview of Artificial Intelligence- Problems of AI, AI Technique, Tic-Tac-Toe Problem. Intelligent Agents: Agents & Environment, Nature Of Environment, Structure Of Agents, Goal Based Agents, Utility Based Agents, Learning Agents. Problem Solving: Problems, Problem Space & Search: Defining The Problem As State Space Search, Production System, Problem Characteristics, Issues In The Design Of Search Programs.`,
  },
  {
    unitNumber: 2,
    title: "Search Techniques",
    subjectCode: "MCA E2010",
    content: `Solving Problems By Searching, Problem Solving Agents, Searching For Solutions. Uniform Search Strategies: Breadth First Search, Depth First Search, Depth Limited Search, Bi-directional Search, Comparing Uniform Search Strategies. Heuristic Search Strategies: Greedy Best-First Search, A* Search. Memory Bounded Heuristic Search: Local Search Algorithms & Optimization Problems: Hill Climbing Search, Simulated Annealing Search, Local Beam Search, Genetic Algorithms. Constraint Satisfaction Problems, Local Search For Constraint Satisfaction Problems. Adversarial Search: Games, Optimal Decisions & Strategies in Games, The Mini Max Search Procedure, Alpha-Beta Pruning, Additional Refinements, Iterative Deepening.`,
  },
  {
    unitNumber: 3,
    title: "Knowledge & Reasoning",
    subjectCode: "MCA E2010",
    content: `Knowledge Representation Issues, Representation & Mapping, Approaches to Knowledge Representation, Issues in Knowledge Representation. Using Predicate Logic: Representing Simple Fact in Logic, Representing Instant & ISA Relationship, Computable Functions & Predicates, Resolution, and Natural Deduction. Representing Knowledge Using Rules: Procedural Verses Declarative Knowledge, Logic Programming, Forward Verses Backward Reasoning, Matching, Control Knowledge.`,
  },
  {
    unitNumber: 4,
    title: "Probabilistic Reasoning, Planning and Learning",
    subjectCode: "MCA E2010",
    content: `Representing Knowledge in an Uncertain Domain, Bayesian Networks, Dempster-Shafer Theory. Planning: Overview, Components of A Planning System, Goal Stack Planning, Hierarchical Planning. Learning: Forms Of Learning, Inductive Learning, Explanation Based Learning, Neural Net Learning & Genetic Learning.`,
  },
  {
    unitNumber: 5,
    title: "Natural Language Processing and Robotics",
    subjectCode: "MCA E2010",
    content: `Brief introduction to Syntactic Processing, Semantic Analysis, Discourse & Pragmatic Processing. Robotics: Introduction, Robot hardware, robotic perception, planning to move, planning uncertain movements, robotic software architecture, application domains.`,
  },
  {
    unitNumber: 1,
    title: "Cloud Computing Fundamentals",
    subjectCode: "MCA E2011",
    content: `Cloud Computing definition, Types of cloud, Cloud services: Benefits and challenges of cloud computing, Evolution of Cloud Computing, Applications cloud computing, Business models around Cloud – Major Players in Cloud Computing - Issues in Cloud - Eucalyptus - Nimbus - Open Nebula, CloudSim.`,
  },
  {
    unitNumber: 2,
    title: "Cloud Computing Models",
    subjectCode: "MCA E2011",
    content: `Cluster Computing, Grid Computing, Grid Computing Versus Cloud Computing, Key Characteristics of Cloud Computing. Cloud Models: Benefits of Cloud Models, Public Cloud, Private Cloud, Hybrid Cloud, Community Cloud, Shared Private Cloud, Dedicated Private Cloud, and Dynamic Private Cloud.`,
  },
  {
    unitNumber: 3,
    title: "Cloud Services and File System",
    subjectCode: "MCA E2011",
    content: `Types of Cloud services: Software as a Service, Platform as a Service, Infrastructure as a Service, Database as a Service, Monitoring as a Service, Communication as Services. Service providers: Google App Engine, Amazon EC2, Microsoft Azure, Sales force.`,
  },
  {
    unitNumber: 4,
    title: "Virtualization",
    subjectCode: "MCA E2011",
    content: `Basics of Virtualization, Types of Virtualization, Implementation Levels of Virtualization, Virtualization Structures, Tools and Mechanisms, Virtualization of CPU, Memory, I/O Devices, Virtual Clusters and Resource Management, Virtualization for Data-center Automation. Introduction to MapReduce, GFS, HDFS, Hadoop Framework.`,
  },
  {
    unitNumber: 5,
    title: "Security in the Cloud",
    subjectCode: "MCA E2011",
    content: `Security Overview, Cloud Security Challenges and Risks, Software-as-a-Service Security, Security Monitoring, Security Architecture Design, Data Security, Application Security, Virtual Machine Security, Identity Management and Access Control, Autonomic Security.`,
  },
  {
    unitNumber: 1,
    title: "Introduction",
    subjectCode: "MCA C3001",
    content: `Fundamentals of data mining, Data Mining Functionalities, Classification of Data Mining systems, Major issues in Data Mining, Data Warehouse and OLAP Technology for Data Mining, Data Warehouse, Multidimensional Data Model, Data Warehouse Architecture, Data Warehouse Implementation, Further Development of Data Cube Technology, From Data Warehousing to Data Mining.`,
  },
  {
    unitNumber: 2,
    title: "Data Preprocessing and System Architecture",
    subjectCode: "MCA C3001",
    content: `Needs Preprocessing the Data, Data Cleaning, Data Integration and Transformation, Data Reduction, Discretization and Concept Hierarchy Generation, Online Data Storage. Data Mining Primitives, Languages, and System Architectures: Data Mining Primitives, Data Mining Query Languages, Designing Graphical User Interfaces Based on a Data Mining Query Language, Architectures of Data Mining Systems.`,
  },
  {
    unitNumber: 3,
    title: "Concepts Description",
    subjectCode: "MCA C3001",
    content: `Characterization and Comparison: Data Generalization and Summarization-Based Characterization, Analytical Characterization: Analysis of Attribute Relevance, Mining Class Comparisons: Discriminating between Different Classes, Mining Descriptive Statistical Measures in Large Databases.`,
  },
  {
    unitNumber: 4,
    title: "Mining Association Rules in Large Databases",
    subjectCode: "MCA C3001",
    content: `Association Rule Mining, Mining Single-Dimensional Boolean Association Rules from Transactional Databases, Mining Multilevel Association Rules from Transaction Databases, Mining Multidimensional Association Rules from Relational Databases and Data Warehouses, From Association Mining to Correlation Analysis, Constraint-Based Association Mining.`,
  },
  {
    unitNumber: 5,
    title: "Classification, Prediction and Cluster Analysis",
    subjectCode: "MCA C3001",
    content: `Issues Regarding Classification and Prediction, Classification by Decision Tree Induction, Bayesian Classification, Classification by Backpropagation, Classification Based on Concepts from Association Rule Mining, Other Classification Methods, Prediction, Classifier Accuracy. Cluster Analysis Introduction: Types of Data in Cluster Analysis, A Categorization of Major Clustering Methods, Partitioning Methods, Density-Based Methods, Grid-Based Methods, Model-Based Clustering Methods, Outlier Analysis.`,
  },
  {
    unitNumber: 1,
    title: "Introduction to Compiler",
    subjectCode: "MCA C3002",
    content: `Compilers, Analysis of the source program, The phases of the compiler, Major data structures in a Compiler, Issues in a Compiler Structure, Bootstrapping and Porting. Scanning: Scanning Process.`,
  },
  {
    unitNumber: 2,
    title: "Regular Expressions and Finite Automata",
    subjectCode: "MCA C3002",
    content: `Regular languages and Regular Expressions, Memory required to recognize a language, Finite Automata, Deterministic Finite Automata, Non-Deterministic Finite Automata, NFA with e-moves, regular sets, Equivalence of DFA and NDFA, Regular and Non-regular languages: Criterion for Regularity, Minimal Finite Automata. Context Free Grammars: Introduction, definition, Regular Grammar, Derivation trees, Ambiguity, Simplified forms and Normal Forms.`,
  },
  {
    unitNumber: 3,
    title: "Parsing",
    subjectCode: "MCA C3002",
    content: `Top-down Parsing: Top down Parsing by Recursive Descent, LL(1), First and Follow sets, Recursive Descent Parser for a Tiny language, Error Recovery in Top-down Parser. Bottom-up Parsing: Overview of Bottom-up Parsing, LR(0) items and LR(0) Parsing, SLR(1), General LR(1) and LALR(1) Parsing, YACC, Error Recovery in Bottom-up Parser.`,
  },
  {
    unitNumber: 4,
    title: "Semantic Analysis",
    subjectCode: "MCA C3002",
    content: `Attributes and Attribute Grammars, Algorithms for Attribute Computation, Symbol Table, Data types and Data type Checking, Semantic Analyzer for Tiny language. Run-time Environments: Memory organization during program execution, Fully static run-time environment, Stack-based run-time environments, Dynamic memory, Parameter passing mechanism, Run-time environment for Tiny language.`,
  },
  {
    unitNumber: 5,
    title: "Code Generation",
    subjectCode: "MCA C3002",
    content: `Intermediate code and data structures for code generation, Basic code generation techniques, Code generation of Control statements and Logical expressions.`,
  },
  {
    unitNumber: 1,
    title: "Introduction to Python Programming Language",
    subjectCode: "MCA C3003",
    content: `Programming Language, History and Origin of Python Language, Features of Python, Limitations, Major Applications of Python, Getting, Installing Python, Setting up Path and Environment Variables, Running Python, First Python Program, Python Interactive Help Feature, Python differences from other languages.`,
  },
  {
    unitNumber: 2,
    title: "Python Data Types & Input/Output",
    subjectCode: "MCA C3003",
    content: `Keywords, Identifiers, Python Statement, Indentation, Documentation, Variables, Multiple Assignment, Understanding Data Type, Data Type Conversion, Python Input and Output Functions, Import command. Operators and Expressions: Operators in Python, Expressions, Precedence, Associativity of Operators, Non Associative Operators. Control Structures: Decision making statements, Python loops, Python control statements.`,
  },
  {
    unitNumber: 3,
    title: "Python Native Data Types and Functions",
    subjectCode: "MCA C3003",
    content: `Numbers, Lists, Tuples, Sets, Dictionary, Functions & Methods of Dictionary, Strings (in detail with their methods and operations). Python Functions: Functions, Advantages of Functions, Built-in Functions, User defined functions, Anonymous functions, Pass by value Vs. Pass by Reference, Recursion, Scope and Lifetime of Variables.`,
  },
  {
    unitNumber: 4,
    title: "Python Modules and Exception Handling",
    subjectCode: "MCA C3003",
    content: `Module definition, Need of modules, Creating a module, Importing module, Path Searching of a Module, Module Reloading, Standard Modules, Python Packages. Exception Handling: Exceptions, Built-in exceptions, Exception handling, User defined exceptions in Python.`,
  },
  {
    unitNumber: 5,
    title: "File Management and Object-Oriented Programming in Python",
    subjectCode: "MCA C3003",
    content: `Operations on files (opening, modes, attributes, encoding, closing), read() & write() methods, tell() & seek() methods, renaming & deleting files in Python, directories in Python. Classes and Objects: The concept of OOPS in Python, Designing classes, Creating objects, Accessing attributes, Editing class attributes, Built-in class attributes, Garbage collection, Destroying objects.`,
  },
  {
    unitNumber: 1,
    title: "Introduction to Artificial Intelligence",
    subjectCode: "MCA C3004",
    content:
      "Role of AI in engineering, AI in daily life, Intelligence and Artificial Intelligence, Different task domains of AI, Programming methods, Limitations of AI. Intelligent Agent: Agent, Performance Evaluation, task environment of agent, Agent classification, Agent architecture.",
  },
  {
    unitNumber: 2,
    title: "Concepts of Soft Computing",
    subjectCode: "MCA C3004",
    content:
      "Hard computing Vs Soft Computing, Soft computing constituents – ANN, Fuzzy Logic, GA, Applications of Soft Computing.",
  },
  {
    unitNumber: 3,
    title: "Neural Network",
    subjectCode: "MCA C3004",
    content:
      "Artificial Neural Network- Introduction, Fundamental Concept, Artificial Neural Network, Brain vs. Computer - Comparison Between Biological Neuron and Artificial Neuron, Basic Models of Artificial Neural Network. Supervised Learning Network - Linear Separability, Perceptron Networks, Adaptive Linear Neuron (Adaline), Multiple Adaptive Linear Neurons, Back-Propagation Network. Unsupervised Learning Networks - MaxNet.",
  },
  {
    unitNumber: 4,
    title: "Fuzzy Logic",
    subjectCode: "MCA C3004",
    content:
      "Introduction to Fuzzy Logic. Classical Sets and Fuzzy Sets: Introduction to Fuzzy Logic, Classical Sets (Crisp Sets), Fuzzy Sets. Classical Relations and Fuzzy Relations: Introduction, Cartesian Product of Relation, Classical Relation, Fuzzy Relations. Membership Functions: Introduction, Features of the Membership Functions, Fuzzification, Methods of Membership Value Assignments. Defuzzification: Introduction, Lambda-Cuts for Fuzzy Sets (Alpha-Cuts), Lambda-Cuts for Fuzzy Relations, Defuzzification Method.",
  },
  {
    unitNumber: 5,
    title: "Genetic Algorithm",
    subjectCode: "MCA C3004",
    content:
      "Genetic Algorithm: Basic concepts, Difference between genetic algorithm and traditional methods, Simple genetic algorithm, Working principle, Procedures of GA. Genetic operators: Reproduction, Mutation, Crossover.",
  },
  {
    unitNumber: 1,
    title: "Introduction",
    subjectCode: "MCA C3005",
    content:
      "Origin, People Interested in Accounts, Accounting Standards, Book-Keeping, Double Entry System, Classification of Business Accounts, “Golden Rules”, Journal, Subsidiary Books, Ledger Posting & Balancing, Concept of Trial Balance, Errors and Omission, Final Accounts with Adjustments, Inventories and its types, Introduction to Financial Accounting (Tally 7.2), Creating Company Master, Modification & Deletion.",
  },
  {
    unitNumber: 2,
    title: "Financial Accounting",
    subjectCode: "MCA C3005",
    content:
      "Definition, Aims, Traditional vs. Innovative Management Accounting Practices, Development of Throughput Accounting, An Alternative view of Management Accounting, Lean Accounting (Accounting for Lean), Fund Flow and Cash Flow Statement, C-V-P Analysis, MIS in Report Preparation, System Flow Chart and Data Flow Diagram.",
  },
  {
    unitNumber: 3,
    title: "Voucher Entry & Invoice",
    subjectCode: "MCA C3005",
    content:
      "Payments Voucher, Receipt Voucher, Journal Voucher, Supporting Voucher, Contra Voucher, Preparation of Invoice, Items included in the invoice, Difference between an invoice and a voucher, Tax Implication - CENVAT.",
  },
  {
    unitNumber: 4,
    title: "Report Generation",
    subjectCode: "MCA C3005",
    content:
      "Ledger, Posting, Trial Balance, Trading and Profit & Loss Account, Balance Sheet, Subsidiary Books and Cash Books.",
  },
  {
    unitNumber: 1,
    title: "Introduction to big data",
    subjectCode: "MCA E3009",
    content:
      "Introduction to Big Data Platform – Challenges of Conventional Systems - Intelligent data analysis – Nature of Data - Analytic Processes and Tools - Analysis vs Reporting.",
  },
  {
    unitNumber: 2,
    title: "Mining data streams",
    subjectCode: "MCA E3009",
    content:
      "Introduction To Streams Concepts – Stream Data Model and Architecture - Stream Computing - Sampling Data in a Stream – Filtering Streams – Counting Distinct Elements in a Stream – Estimating Moments – Counting Oneness in a Window – Decaying Window - Real time Analytics Platform(RTAP) Applications.",
  },
  {
    unitNumber: 3,
    title: "Case Studies",
    subjectCode: "MCA E3009",
    content: "Real Time Sentiment Analysis- Stock Market Predictions.",
  },
  {
    unitNumber: 4,
    title: "Hadoop",
    subjectCode: "MCA E3009",
    content:
      "History of Hadoop- the Hadoop Distributed File System – Components of Hadoop Analysing the Data with Hadoop- Scaling Out- Hadoop Streaming.",
  },
  {
    unitNumber: 5,
    title: "Design of HDFS-Java interfaces to HDFS Basics",
    subjectCode: "MCA E3009",
    content:
      "Developing a Map Reduce Application-How Map Reduce Works-Anatomy of a Map Reduce Job run- Failures-Job Scheduling-Shuffle and Sort – Task execution - Map Reduce Types and Formats- Map Reduce Features Hadoop environment.",
  },
  {
    unitNumber: 1,
    title: "Fundamentals of Testing",
    subjectCode: "MCA E3010",
    content:
      "Definition of Software Testing, Objectives of software Testing, Problem due to lack of testing, Test Environment, Responsibilities of Tester, Characteristics of tester, Test team hierarchy, Scope of Tester, Defect, Fault, Failure and Bug, Basic concept of verification and validation, criteria for completion of testing, Independent Testing, Quality Assurance versus Quality Control, Software Quality Factors, How Quality is Defined, Testing Levels: Unit Testing, Integration Testing, System Testing.",
  },
  {
    unitNumber: 2,
    title: "Role of Testing in SDLC",
    subjectCode: "MCA E3010",
    content:
      "SDLC Overview, Phases in SDLC, Popular SDLC Models (Waterfall Models, Spiral Model, RAD Model, V Model, Incremental Model, Prototype Model), Agile Methodology (Scrum and Its Uses), Structural versus Functional Testing, Mutation Testing, Object-oriented testing.",
  },
  {
    unitNumber: 3,
    title: "Test Case design",
    subjectCode: "MCA E3010",
    content:
      "Test Case (Characteristics Of Good Test Case, Test Case Template, Examples On Writing Test Cases), Test Case Design Techniques (Equivalence Partitioning, Boundary Value Analysis, Cause and Effect graph and Decision Table), Test Factors, Life Cycle of Testing and its Phases, Bug Life Cycle, Preparing bug report Template, Defect Tracking Tool- Bugzilla.",
  },
  {
    unitNumber: 4,
    title: "Approaches to Testing",
    subjectCode: "MCA E3010",
    content:
      "Static Testing: Formal review, Informal Review, Technical Review, Types of Reviews, Walkthrough, Inspection. Dynamic Testing: Structural, Functional and Non-Functional Testing, White Box Testing: Basic Path Testing (Flow graph and Cyclomatic Complexity), Statement and Branch Coverage Testing, Control Structure Testing, Data Flow graph Testing, Loop Testing, Glass Box Testing, Black Box Testing: Build Verification Testing (BVT), Smoke Testing, Sanity Testing, Integration Testing, Retesting, Regression Testing, Acceptance Testing, System Testing, Ad-hoc Testing, Grey Box Testing. Non-Functional Testing: Performance Testing (Load, Stress and Volume Testing), Security Testing, Compatibility Testing, Recovery Testing, Usability Testing.",
  },
  {
    unitNumber: 5,
    title: "Test Management & Strategies",
    subjectCode: "MCA E3010",
    content:
      "Test management Process, Test Plan, Test Design, Test Execution, Exit Criteria, Test Reporting, Test Plan Components, Test Reporting Template, Entry and Exit Criteria, Test Monitoring and Control, Configuration Management.",
  },
  {
    unitNumber: 1,
    title: "Introduction to Machine learning",
    subjectCode: "MCA E3011",
    content:
      "Machine Learning – what and why? Basics of Linear Algebra and Statistics, Overview of target function representations; Linear Regression.",
  },
  {
    unitNumber: 2,
    title: "Supervised Learning",
    subjectCode: "MCA E3011",
    content:
      "Basics of Feature Selection and Evaluation, Decision Tree, Overfitting and Pruning, Logistic regression, Support Vector Machine and Kernel; Noise, bias-variance trade-off, under-fitting and over-fitting concepts.",
  },
  {
    unitNumber: 3,
    title: "Neural Networks",
    subjectCode: "MCA E3011",
    content:
      "Perceptions: representational limitation and gradient descent training. Multilayer networks and back propagation. Hidden layers and constructing intermediate, distributed representations. Overfitting, learning network structure, recurrent networks.",
  },
  {
    unitNumber: 4,
    title: "Unsupervised and Semi Supervised Learning",
    subjectCode: "MCA E3011",
    content:
      "Learning from unclassified data. Clustering. Hierarchical Agglomerative Clustering. K-means partitional clustering. Expectation maximization (EM) for soft clustering. Semi-supervised learning with EM using labelled and unlabeled data.",
  },
  {
    unitNumber: 5,
    title: "Ensemble",
    subjectCode: "MCA E3011",
    content:
      "Committees of multiple hypotheses, bagging, boosting, active learning with ensembles.",
  },
  {
    unitNumber: 1,
    title: "Introduction to Computer Graphics",
    subjectCode: "MCA C4001",
    content:
      "What is Computer Graphics?, Application of Computer Graphics, Presentation Graphics Painting and Drawing, Input and Output Devices, Touch Pane, Light Pens, Graphic Tablets, Plotters, Film Recorders, Display Devices, Refreshing Display Devices, Raster-Scan, Random-Scan, Plasma Panel and LCD panels.",
  },
  {
    unitNumber: 2,
    title: "Graphics Primitives and 2-D & 3-D Graphics",
    subjectCode: "MCA C4001",
    content:
      "Points and Lines, Line-drawing Algorithms, DDA algorithm, Bresenham's line Algorithm, Circle-generating algorithm, Properties of Circles, Midpoint Circle Algorithm, Polygon Filling Algorithm: Scan-Line. Point Clipping, Line Clipping, Cohen-Sutherland Line Clipping, Polygon Clipping: Sutherland Hodgman Algorithm, Basic Transformations, Translation, Rotation, Scaling, Shear, Composite Transformations, Rotations about a point, Reflection about a line, Homogeneous Coordinate Systems, 3-D Transformations, Viewing Transformation.",
  },
  {
    unitNumber: 3,
    title: "Projections and Modeling & Rendering Curves and Surfaces",
    subjectCode: "MCA C4001",
    content:
      "Parallel Projection, Orthographic & Oblique Projections, Isometric Projections, Perspective Projections. Polygon Representation Methods, Polygon Surfaces, Polygon Tables, Plane Equations, Polygon Meshes, Bezier Curves and Surfaces, Properties of Bezier Curves, Bezier Surfaces, Surface of Revolution, Visible-Surface Detection, Depth Buffer Method, Scan-Line Method, Area-Subdivision Method.",
  },
  {
    unitNumber: 4,
    title: "Multimedia and Animation",
    subjectCode: "MCA C4001",
    content:
      "Basic of Animation, Types of Animation, Simulating Acceleration, Computer Animation Tools, Applications, Multimedia Concepts and Applications, Concepts of Hypertext/Hypermedia, Multimedia Applications: Education, Video Conferencing, Training, Entertainment, Electronic Encyclopedia.",
  },
  {
    unitNumber: 1,
    title: "Operation Research",
    subjectCode: "MCA C4002",
    content:
      "An overview, Origin and Development of OR, Nature and Features of OR, Modeling in OR, General Solution Methods for OR models, Scientific method in OR, Methodology of OR, Application, Opportunities and Shortcomings of OR. Linear Programming Problem: Introduction, Mathematical Formulation of the Problem, Graphical Solution Method, Some Exceptional Cases, General LPP, Canonical and Standard forms of LPP, Simplex Method: Introduction, Fundamental properties of solutions, the Computational Procedure, Use of Artificial variables, Solution to simulation Linear Equations, Inverting a Matrix using Simplex Method.",
  },
  {
    unitNumber: 2,
    title: "Duality in LPP",
    subjectCode: "MCA C4002",
    content:
      "Introduction, General Primal–Dual pair, Formulating a Dual Problem, Primal-Dual pair in Matrix form, Duality theorems, Dual simplex method, Post optimal Analysis, Introduction: Variation in cost vector, Requirement Vector, Coefficient Matrix, Structural Variation.",
  },
  {
    unitNumber: 3,
    title: "Integer Programming",
    subjectCode: "MCA C4002",
    content:
      "Introduction, Gomory Method, Construction of Gomory’s constraints, Fractional Cut Method: All Integer & Mixed Integer, Revised Simplex Method.",
  },
  {
    unitNumber: 4,
    title: "Dynamic Programming & Introduction",
    subjectCode: "MCA C4002",
    content:
      "Characteristics of Dynamic Programming, Dynamic Programming Algorithm, Solution of LPP by Dynamic Programming.",
  },
  {
    unitNumber: 5,
    title: "Transportation and Assignment Problem",
    subjectCode: "MCA C4002",
    content:
      "Transportation Problem: Introduction, Mathematical Model of Transportation Problem, The Transportation Algorithm, Methods for Finding Initial Solution. Assignment Problem: Introduction, Mathematical Model of Assignment Problem, Solution Methods of Assignment Problem.",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P1007",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P1008",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P1009",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P2006",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P2007",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P2008",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P3006",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P3007",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P3008",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P4003",
  },
  {
    unitNumber: 0,
    title: "Practical Based on Theory Subject",
    content:
      "This practical course draws its content and exercises from the corresponding theory subject syllabus. Refer to the theory subject for concepts and practical implementations.",
    subjectCode: "MCA P4004",
  },
  {
    unitNumber: 0,
    title: "Major Project Work",
    content:
      "This course involves the development of a comprehensive software project applying the knowledge and skills acquired throughout the MCA program. Students will identify a real-world problem, design a solution, implement and test it using appropriate tools and technologies, and document their entire development process. Emphasis is placed on problem-solving, team collaboration, project management, and presentation skills.",
    subjectCode: "MCA P4005",
  },
];

export const createCourses = async (txPrisma: Prisma.TransactionClient) => {
  await txPrisma.course.createMany({
    data: COURSE_SEED,
  });
};

export const createSubjects = async (txPrisma: Prisma.TransactionClient) => {
  await txPrisma.subject.createMany({
    data: SUBJECT_SEED_MCA,
  });
};

export const createUnits = async (txPrisma: Prisma.TransactionClient) => {
  await txPrisma.unit.createMany({
    data: MCA_UNIT_SEED,
  });
};
