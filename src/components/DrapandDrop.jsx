import React, { useState } from "react";
import Image1 from "../assets/img1.jpg";
import Image2 from "../assets/img2.jpg";
import Image3 from "../assets/img3.jpg";
import Image4 from "../assets/img4.jpg";

const DrapandDrop = () => {
  const [items, setItems] = useState([
    { id: "1", img: Image1, name: "Jack Seen", dev: "Full Stack Developer" },
    { id: "2", img: Image2, name: "Michael Jeans", dev: "Frontend Developer" },
    { id: "3", img: Image3, name: "Tony Mark", dev: "Backnend Developer" },
    { id: "4", img: Image4, name: "Stnois Jain", dev: "Data Analyst" },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };


  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();

    const dragIndex = e.dataTransfer.getData("text/plain");
    const draggedItem = items[dragIndex];

    // Create a new array with the items in the same order, except for the dragged item
    const newItems = [...items];
    newItems.splice(dragIndex, 1); // Remove the dragged item
    newItems.splice(index, 0, draggedItem); // Insert the dragged item at the new position

    setItems(newItems);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="w-80 h-96 p-5 rounded-xl bg-gray-800 shadow-lg grid grid-cols-1 px-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="w-full h-20 cursor-pointer flex justify-between items-censtter text-white border-2 border-gray-700 rounded-xl px-5"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <div className="flex justify-center items-center space-x-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-400">{item.dev}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DrapandDrop;
