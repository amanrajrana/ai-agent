import { Prisma } from "@/client";

const FAQS_SEED: Prisma.FAQCreateInput[] = [
  {
    question: "What is the official website of Vinoba Bhave University?",
    answer:
      "The official website of Vinoba Bhave University is http://vbu.ac.in/",
    category: "University",
  },
  {
    question:
      "Where can I find the university examination portal or download my admit card?",
    answer:
      "You can visit the examination and admit card portal at https://www.vbuuniv.in",
    category: "University Services",
  },
  {
    question: "How can I apply for admission to university courses?",
    answer:
      "You can apply online for university admissions at https://jharkhanduniversities.nic.in/home",
    category: "Admissions",
  },
  {
    question: "Where can I access the digital library or e-resources?",
    answer:
      "Digital library resources and online materials for students are available at https://library.vbu.ac.in",
    category: "Library Resources",
  },
  {
    question: "Where can I find the latest university notices and updates?",
    answer:
      "Latest notices and updates from the university are available at https://www.vbu.ac.in/notice/notice",
    category: "Notices",
  },
  {
    question: "How can I check my examination results for migration purposes?",
    answer:
      "You can check your migration examination results online at https://www.vbu.ac.in/notice/results",
    category: "Results",
  },
  {
    question: "Where can I check my university marks online?",
    answer:
      "You can check your marks online at http://result.vbuuniv.in/vbuuniv/login",
    category: "Results",
  },
  {
    question:
      "What is the official site for the Department of Computer Applications?",
    answer:
      "The official website of the Department of Computer Applications is https://www.vbumca.in",
    category: "Department",
  },
  {
    question:
      "Where can I download the syllabus for various university courses?",
    answer:
      "You can download the syllabus from https://www.vbu.ac.in/regulation_syllabi or https://www.vbu.ac.in/PGSyllab",
    category: "Syllabus",
  },
];

export const createFAQ = async (txPrisma: Prisma.TransactionClient) => {
  await txPrisma.fAQ.createMany({
    data: FAQS_SEED,
  });
};
