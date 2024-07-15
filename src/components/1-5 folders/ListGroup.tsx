import { useState } from "react";

interface LGProps {
  ListItems: string[];
  Heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ ListItems, Heading, onSelectItem }: LGProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{Heading}</h1>
      {ListItems.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {ListItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
