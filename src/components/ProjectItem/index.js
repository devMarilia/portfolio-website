import React from 'react';
import { Link } from 'react-router-dom';
import ProjectImg from '../../assets/images/projectImg.png';
import {ProjectItemStyles} from './ElementsProjectItem'

export default function ProjectItem({
    img = ProjectImg,
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }) {
    return (
      <ProjectItemStyles>
        <Link to="/projects" className="projectItem__img">
          <img src={img} alt="project img" />
        </Link>
        <div className="projectItem__info">
          <Link to="#">
            <h3 className="projectItem__title">{title}</h3>
          </Link>
          <p className="projectItem__desc">{desc}</p>
        </div>
      </ProjectItemStyles>
    );
  }
