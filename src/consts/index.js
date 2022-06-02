export const NAVBAR_LINKS = {
  project: {
    link: "project",
    label: "Project",
  },
  contact: {
    link: "contact",
    label: "Contact",
  },
  aboutMe: {
    link: "",
    label: "About Me",
  },
};

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const SORT_FIELDS = [
  { label: "Default", value: "" },
  { label: "Created newest", value: "creation_date_newest" },
  { label: "Created oldest", value: "creation_date_oldest" },
  { label: "Completed newest", value: "completion_date_newest" },
  { label: "Completed oldest", value: "completion_date_oldest" },
  { label: "A - Z", value: "a-z" },
  { label: "Z - A", value: "z-a" },
];

export const FILTER_DATE_PICKERS = [
  { label: "Created later", value: "create_lte" },
  { label: "Created gratter", value: "create_gte" },
  { label: "Completed later", value: "complete_lte" },
  { label: "Completed gratter", value: "complete_gte" },
];
