import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt={item.title} />
      <h3 className="project__title">{item.title}</h3>
      <a href={item.link} className="project__button" target="_blank" rel="noopener noreferrer">
        Demo <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
    </div>
  );
}

export default ProjectItems;
