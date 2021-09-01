import React, {memo} from "react";
import cw from "../assets/cw_logo.png";

const Header = React.memo(({img}) => {

  console.log("Rendering: Header Comp!");

  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="CW_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
});

export default memo(Header);
















//**********REACT MEMO ILE KULLANIM***************

// const Header = React.memo(({img}) => {

//     console.log("Rendering: Header Comp!");
  
//     return (
//       <div className="header">
//         <img
//           src={img ? img : cw}
//           alt="CW_logo"
//           style={{ margin: "1rem", maxHeight: "200px" }}
//         />
//       </div>
//     );
//   });




//************Yine memo ile en sona ekleme */
// const Header = React.memo(({img}) => {

//     console.log("Rendering: Header Comp!");
  
//     return (
//       <div className="header">
//         <img
//           src={img ? img : cw}
//           alt="CW_logo"
//           style={{ margin: "1rem", maxHeight: "200px" }}
//         />
//       </div>
//     );
//   });
  
//   export default React.memo(Header);