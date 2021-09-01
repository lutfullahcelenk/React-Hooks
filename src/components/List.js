import React from "react";
import ListItem from "./ListItem";

const List = React.memo(({ students, add }) => {
  return (
    <div className="list">

      {students?.map((student) => {
        return <ListItem key={student.id} student={student} add={add} />;
      })}

    </div>
  );
});

export default List;
