import { Prisma } from "@/client";

const IMP_LINK_SEED: Prisma.ImportantLinkCreateInput[] = [
  {
    category: "University",
    title: "Vinoba Bhave University (VBU)",
    url: "http://vbu.ac.in/",
    description: "Official website of Vinoba Bhave University",
  },
  {
    category: "University Services",
    title: "Examination",
    url: "https://www.vbuuniv.in",
    description:
      "University examination, admit card service portal for students",
  },
  {
    category: "Admissions",
    title: "Admission",
    url: "https://jharkhanduniversities.nic.in/home",
    description:
      "Official admission portal for university programs. Apply online for all courses",
  },
  {
    category: "Library Resources",
    title: "Library e-Resources",
    url: "https://library.vbu.ac.in",
    description: "Digital library resources and online materials for students",
  },
  {
    category: "Notices",
    title: "All New Notices",
    url: "https://www.vbu.ac.in/notice/notice",
    description: "Latest notices and updates from the university",
  },
  {
    category: "Results",
    title: "Examination Results",
    url: "https://www.vbu.ac.in/notice/results",
    description: "Check your examination results online. migration only",
  },
  {
    category: "Results",
    title: "Examination Results",
    url: "http://result.vbuuniv.in/vbuuniv/login",
    description: "Check your examination results online. marks only",
  },
  {
    category: "Department",
    title: "Official site of the Department of computer application",
    url: "https://www.vbumca.in",
    description: "Official website of the Department of Computer Applications",
  },
  {
    category: "Syllabus",
    title: "Download Syllabus",
    url: "https://www.vbu.ac.in/regulation_syllabi, https://www.vbu.ac.in/PGSyllab",
    description:
      "Download the syllabus for various courses offered by the university",
  },
];

export const createImportantLinks = async (
  txPrisma: Prisma.TransactionClient
) => {
  await txPrisma.importantLink.createMany({
    data: IMP_LINK_SEED,
  });
};
