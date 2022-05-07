import "./styles.css";

export const NavItem = ({ label, link, isActive, onClick }) => {
  return (
    <li
      className={`nav-item ${isActive ? "active" : ""}`}
      onClick={() => onClick(link)}
    >
      {label}
    </li>
  );
};

/* This is for students */

// export const NavItem = ({ label, link, isActive, onClick }) => {
//   const classList = ["nav-item"];
//   if (isActive) {
//     classList.push("active");
//   }

//   return (
//     <li className={classList.join(" ")} onClick={() => onClick(link)}>
//       {label}
//     </li>
//   );
// };

// export const NavItem = ({ label }) => {
//   const styles = {
//     color: "red",
//     fontSize: "30px",
//   };
//   return (
//     <li style={styles} className="nav-item">
//       {label}
//     </li>
//   );
// };
