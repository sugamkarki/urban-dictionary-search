import React from "react";
import "./Display-list.styles.scss";
import Item from "./../Item/Item.component";
// @ts-ignore
function Display({ data }) {
  //   console.log(data);
  return (
    <div className="displayList">
      {
        // @ts-ignore
        data.map(({ defid, ...otherProps }) => {
          // @ts-ignore

          return <Item key={defid} {...otherProps} />;
        })
      }
    </div>
  );
}

export default Display;
