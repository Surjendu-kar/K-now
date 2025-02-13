const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: true,
    sub_menus: [
      { link: "/", title: "Home Style 1" },
      { link: "/home-2", title: "Home Style 2" },
      { link: "/home-3", title: "Home Style 3" },
    ],
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "About Us" },
      { link: "/affiliation", title: "Affiliation" },
      { link: "/infrastucture", title: "Infrastucture" },
      { link: "/admission", title: "Admission" },
      { link: "/principal's-message", title: "Principal's Message" },
      { link: "/mandatory-disclosure", title: "Mandatory Disclosure" },
    ],
  },
  {
    id: 3,
    title: "Administration",
    link: "/administration",
    has_dropdown: true,
    sub_menus: [
      { link: "/staff-details", title: "Staff Details" },
      { link: "/school-comittee", title: "School Comittee" },
      { link: "/student-enrol", title: "Student Enrol" },
      { link: "/fee-and-scholarship", title: "Fee and Scholarship" },
      { link: "/teachers-training", title: "Teachers Training" },
      { link: "/tc-sample", title: "TC Sample" },
    ],
  },
  {
    id: 4,
    title: "Academics",
    link: "/academics",
    has_dropdown: true,
    sub_menus: [
      { link: "/school-curriculum", title: "School Curriculum" },
      { link: "/list-of-books", title: "List of Books" },
      { link: "/school-at-glance", title: "School at Glance" },
      { link: "/holidays-list", title: "Holidays List" },
      { link: "/cbse-result", title: "CBSE Result" },
    ],
  },
  {
    id: 5,
    title: "More",
    link: "/more",
    has_dropdown: true,
    sub_menus: [
      { link: "/co-curricular-activities", title: "Co Curricular Activities" },
      { link: "/school-activities", title: "School Activities" },
      { link: "/achievements", title: "Achievements" },
      { link: "/olympiad", title: "Olympiad" },
      { link: "/community-services", title: "Community Services" },
      { link: "/sports", title: "Sports" },
      { link: "/cbse-activities", title: "CBSE Activities" },
    ],
  },
  {
    id: 6,
    title: "Gallery",
    link: "/gallery",
    has_dropdown: false
  },
  {
    id: 7,
    title: "Contact Us",
    link: "/contact",
    has_dropdown: false
  }
];

export default menu_data;
