// import React, { useEffect, useMemo, useState } from "react";
// import "./style.css";

// const Pagination = ({Pages}) => {
//   const [currentButton, setCurrentButton] = useState(1);
//   const [arrOfCurrButtons, setarrOfCurrButtons] = useState([]);
//   const pages = `${Pages}`;
  
//   const numberOfPages = [];
//   for (let i = 1; i <= pages; i++) {
//     numberOfPages.push(i);
//   }
//   // console.log(numberOfPages)
//   useEffect(() => {
//     let tempNumberOfPages = [...numberOfPages];

//     // let dots = "..."
//     let dotsLeft = "...";
//     let dotsRight = "...";

//     if (currentButton >= 1 && currentButton <= 3) {
//       tempNumberOfPages = [1, 2, 3, 4, dotsRight, numberOfPages.length];
//     } else if (currentButton === 4) {
//       const sliced = numberOfPages.slice(0, 5);
//       tempNumberOfPages = [...sliced, dotsRight, numberOfPages.length];
//     } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
//       const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
//       const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
//       tempNumberOfPages = [
//         1,
//         dotsLeft,
//         ...sliced1,
//         ...sliced2,
//         dotsRight,
//         numberOfPages.length,
//       ];
//     } else if (currentButton > numberOfPages.length - 3) {
//       const sliced = numberOfPages.slice(numberOfPages.length - 4);
//       tempNumberOfPages = [1, dotsLeft, ...sliced];
//     } else if (currentButton === dotsLeft) {
//       setCurrentButton(arrOfCurrButtons[3] - 2);
//     } else if (currentButton === dotsRight) {
//       setCurrentButton(arrOfCurrButtons[3] + 3);
//     }
//     setarrOfCurrButtons(tempNumberOfPages);
//   }, [currentButton]);

//   return (
//     <>
//     <div className="paginationWrapper">
//       <div className="paginationContainer">
//         <p
//           className={currentButton === 1 ? "disabled" : ""}
//           onClick={() =>
//             setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
//         }
//         >
//           Prev
//         </p>
//         <div className="numswraper">
//         {arrOfCurrButtons.map((value, index) => (
//             <p
//             key={index}
//             onClick={() => setCurrentButton(value)}
//             className={currentButton === value ? "active" : ""}
//             >
//             {value}
//           </p>
//         ))}
//         </div>
//         <p
//           className={currentButton === numberOfPages.length ? "disabled" : ""}
//           onClick={() =>
//             setCurrentButton((prev) =>
//             prev === numberOfPages.length ? prev : prev + 1
//             )
//         }
//         >
//           Next
//         </p>
//       </div>
//             </div>
//     </>
//   );
// };

// export default Pagination;
