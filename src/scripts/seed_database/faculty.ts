import { Prisma } from "@/client";

const FACULTIES_SEED: Prisma.FacultyCreateInput[] = [
  {
    name: "Santosh Kumar Srivastava",
    designation: "Assistant Professor",
    qualification: "P.G.(Maths), MCA, M. Phil, PH.D. (Persuing)",
    specialization: "Wireless Sensor Network",
    experience: 9,
    contact_email: "srivastava_santosh2@rediffmail.com",
    resumeUrl:
      "https://www.vbu.ac.in/ftpwebapps/vbu/resources/vbu_web/dept/mca/santoshsrivastava.doc",
  },
  {
    name: "Ashutosh Kumar Singh",
    designation: "Assistant Professor",
    qualification: "B.E. (CSE), MBA",
    specialization: "Distributed Systems",
    experience: 6,
    contact_email: "ashu187@rediffmail.com",
    resumeUrl:
      "https://www.vbu.ac.in/ftpwebapps/vbu/resources/vbu_web/dept/mca/ashutoshkumarsingh.doc",
  },
  {
    name: "Manish Kumar",
    designation: "Assistant Professor",
    qualification: "B.Tech (CSE), M.Tech (CSE)",
    specialization: "Software Engineering",
    experience: 6,
    contact_email: "manish14.kk@gmail.com",
    resumeUrl:
      "https://www.vbu.ac.in/ftpwebapps/vbu/resources/vbu_web/dept/mca/manishkumar.doc",
  },
  {
    name: "Santosh Kumar Singh",
    designation: "Assistant Professor",
    qualification: "MCA, M.Phil (CS)",
    specialization: "Data Mining and Warehousing",
    experience: 7,
    contact_email: "Sksbol1@gmail.com",
    resumeUrl:
      "https://www.vbu.ac.in/ftpwebapps/vbu/resources/vbu_web/dept/mca/santoshkumarsingh.doc",
  },
  {
    name: "Rahul Prasad",
    designation: "MCA, M.Tech (IT)",
    specialization: "Object Oriented Programming",
    experience: 9,
    contact_email: "gdrahul31@rediffmail.com",
    resumeUrl:
      "https://www.vbu.ac.in/ftpwebapps/vbu/resources/vbu_web/dept/mca/rahulprasad.doc",
  },
  {
    name: "Manisha Baxla",
    designation: "Assistant Professor",
    qualification: "B.E. (C.S.E)",
    specialization: "Digital Electonics",
    experience: 4,
    contact_email: "manishabaxla07@gmail.com",
    resumeUrl:
      "https://www.vbu.ac.in/ftpwebapps/vbu/resources/vbu_web/dept/mca/manishabaxla.doc",
  },
  {
    name: "Prabhat Kumar",
    designation: "Assistant Professor",
    qualification: "MCA",
    specialization: "Compiler Design",
    experience: 4,
    contact_email: "praansu@gmail.com",
    resumeUrl:
      "https://www.vbu.ac.in/ftpwebapps/vbu/resources/vbu_web/dept/mca/prabhatkumar.doc",
  },
];

const FACULTY_SUBJECTS_SEED: Prisma.FacultySubjectCreateManyInput[] = [
  // SEM 1
  {
    subjectCode: "MCA C1001",
    facultyId: 10,
  },
  {
    subjectCode: "MCA C1002",
    facultyId: 9,
  },
  {
    subjectCode: "MCA C1003",
    facultyId: 14,
  },
  {
    subjectCode: "MCA C1004",
    facultyId: 13,
  },
  {
    subjectCode: "MCA C1005",
    facultyId: 15,
  },
  {
    subjectCode: "MCA C1006",
    facultyId: 11,
  },
  // SEM 2
  {
    subjectCode: "MCA C2001",
    facultyId: 13,
  },
  {
    subjectCode: "MCA C2002",
    facultyId: 12,
  },
  {
    subjectCode: "MCA C2003",
    facultyId: 15,
  },
  {
    subjectCode: "MCA C2004",
    facultyId: 9,
  },
  {
    subjectCode: "MCA C2005",
    facultyId: 11,
  },
];

export async function seedFaculty(txPrisma: Prisma.TransactionClient) {
  // await txPrisma.faculty.createMany({
  //   data: FACULTIES_SEED,
  // });

  await txPrisma.facultySubject.createMany({
    data: FACULTY_SUBJECTS_SEED,
  });
}
