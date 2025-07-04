-- Insert sample teachers
INSERT INTO teachers (id, name, email, subject, department, experience, qualifications, classes, phone, office) VALUES
('teacher1', 'Dr. Sarah Johnson', 'sarah.johnson@college.edu', 'Computer Science', 'Computer Science', 8, 'PhD in Computer Science, MS in Software Engineering', ARRAY['B.Tech CSE 1st Year', 'B.Tech CSE 2nd Year'], '+1-555-0101', 'CS-201'),
('teacher2', 'Prof. Michael Chen', 'michael.chen@college.edu', 'Mathematics', 'Mathematics', 12, 'PhD in Applied Mathematics, MS in Statistics', ARRAY['B.Tech 1st Year Math', 'B.Tech 2nd Year Math'], '+1-555-0102', 'MATH-105'),
('teacher3', 'Dr. Emily Rodriguez', 'emily.rodriguez@college.edu', 'Physics', 'Physics', 6, 'PhD in Physics, MS in Quantum Mechanics', ARRAY['B.Tech 1st Year Physics', 'B.Tech 2nd Year Physics'], '+1-555-0103', 'PHY-301');

-- Insert sample fee structures
INSERT INTO fee_structures (id, "className", year, "tuitionFee", "labFee", "libraryFee", "examFee", "otherFees", "totalFee", description) VALUES
('fee1', 'B.Tech CSE 1st Year', '2024-25', 50000, 5000, 2000, 3000, 5000, 65000, 'First year Computer Science Engineering fees'),
('fee2', 'B.Tech CSE 2nd Year', '2024-25', 52000, 6000, 2000, 3000, 5000, 68000, 'Second year Computer Science Engineering fees'),
('fee3', 'B.Tech ECE 1st Year', '2024-25', 48000, 5500, 2000, 3000, 4500, 63000, 'First year Electronics and Communication Engineering fees');

-- Insert sample syllabus
INSERT INTO syllabus (id, course, year, semester, subject, topics, credits, description, "pdfUrl") VALUES
('syl1', 'B.Tech CSE', '1st Year', 'Semester 1', 'Programming Fundamentals', ARRAY['Introduction to Programming', 'Variables and Data Types', 'Control Structures', 'Functions', 'Arrays'], 4, 'Basic programming concepts using C language', '/syllabus/programming-fundamentals.pdf'),
('syl2', 'B.Tech CSE', '1st Year', 'Semester 1', 'Mathematics I', ARRAY['Calculus', 'Linear Algebra', 'Differential Equations', 'Probability', 'Statistics'], 4, 'Mathematical foundations for engineering', '/syllabus/mathematics-1.pdf'),
('syl3', 'B.Tech CSE', '1st Year', 'Semester 2', 'Data Structures', ARRAY['Arrays and Linked Lists', 'Stacks and Queues', 'Trees', 'Graphs', 'Sorting and Searching'], 4, 'Fundamental data structures and algorithms', '/syllabus/data-structures.pdf');

-- Insert sample admission process
INSERT INTO admission_processes (id, step, title, description, requirements, deadline, "isActive") VALUES
('adm1', 1, 'Online Application', 'Submit your application form online with required documents', ARRAY['High School Certificate', 'Entrance Exam Score', 'Identity Proof', 'Passport Photos'], '2024-06-30 23:59:59', true),
('adm2', 2, 'Document Verification', 'Verify your submitted documents at the admission office', ARRAY['Original Certificates', 'Photocopies', 'Entrance Exam Scorecard'], '2024-07-15 17:00:00', true),
('adm3', 3, 'Fee Payment', 'Pay the admission fee to confirm your seat', ARRAY['Admission Letter', 'Fee Receipt', 'Bank Draft'], '2024-07-30 17:00:00', true),
('adm4', 4, 'Orientation', 'Attend the orientation program for new students', ARRAY['Admission Confirmation', 'College ID'], '2024-08-15 09:00:00', true);

-- Insert sample important links
INSERT INTO important_links (id, title, url, description, category, "isActive") VALUES
('link1', 'Student Portal', 'https://portal.college.edu', 'Access your academic records, grades, and course materials', 'Academic', true),
('link2', 'Library Resources', 'https://library.college.edu', 'Digital library with books, journals, and research papers', 'Resources', true),
('link3', 'Fee Payment Gateway', 'https://fees.college.edu', 'Online fee payment system', 'Administrative', true),
('link4', 'Placement Cell', 'https://placements.college.edu', 'Career guidance and placement opportunities', 'Career', true),
('link5', 'Academic Calendar', 'https://calendar.college.edu', 'Important academic dates and events', 'Academic', true);

-- Insert sample FAQs
INSERT INTO faqs (id, question, answer, category, "isActive") VALUES
('faq1', 'What are the admission requirements for B.Tech CSE?', 'You need to have completed 12th grade with Physics, Chemistry, and Mathematics. A valid entrance exam score (JEE/State CET) is required. Minimum 60% marks in 12th grade.', 'Admission', true),
('faq2', 'How can I pay my fees online?', 'You can pay fees through our online portal at fees.college.edu. We accept credit cards, debit cards, and net banking. You can also pay through UPI.', 'Fees', true),
('faq3', 'What is the refund policy for fees?', 'Fees are refundable up to 30 days from the date of payment, subject to a processing fee of 5%. After 30 days, fees are non-refundable except in exceptional circumstances.', 'Fees', true),
('faq4', 'How do I access the digital library?', 'Use your student ID and password to log into library.college.edu. You can access e-books, journals, and research databases 24/7.', 'Academic', true),
('faq5', 'What are the hostel facilities available?', 'We provide separate hostels for boys and girls with modern amenities including Wi-Fi, mess facilities, recreation rooms, and 24/7 security.', 'Facilities', true);

-- Insert sample support tickets
INSERT INTO support_tickets (id, title, description, category, priority, status, "studentName", "studentEmail", "assignedTo", resolution, "createdAt", "updatedAt") VALUES
('ticket1', 'Unable to access student portal', 'I am getting an error message when trying to log into the student portal. It says invalid credentials but I am sure my password is correct.', 'Technical', 'MEDIUM', 'OPEN', 'John Smith', 'john.smith@student.edu', NULL, NULL, NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'),
('ticket2', 'Fee payment not reflecting', 'I paid my semester fees 3 days ago but it is still showing as pending in my account. Transaction ID: TXN123456789', 'Administrative', 'HIGH', 'IN_PROGRESS', 'Sarah Wilson', 'sarah.wilson@student.edu', 'Finance Team', NULL, NOW() - INTERVAL '3 days', NOW() - INTERVAL '1 day'),
('ticket3', 'Syllabus clarification needed', 'I need clarification about the Data Structures course syllabus. Are we covering advanced topics like Red-Black trees in this semester?', 'Academic', 'LOW', 'RESOLVED', 'Mike Johnson', 'mike.johnson@student.edu', 'Dr. Sarah Johnson', 'Yes, Red-Black trees are covered in Week 10-11. Please refer to the detailed syllabus on the student portal.', NOW() - INTERVAL '5 days', NOW() - INTERVAL '1 day');

-- Insert admin user
INSERT INTO users (id, email, name, role) VALUES
('admin1', 'admin@college.edu', 'Admin User', 'ADMIN');
