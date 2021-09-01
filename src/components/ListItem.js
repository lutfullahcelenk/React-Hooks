import React from "react";


const ListItem = ({ student, add }) => {

  console.log("Rendering: List Item Comp!");

  return (
    <div className="listitem" onClick={() => add(student)}>
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${student.id}.svg`}
        alt=""
      />
      {student?.name}
    </div>
  );
};
export default ListItem;
