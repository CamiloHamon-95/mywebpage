
import { ProjectBox } from './ProjectBox';
import './ProjectsSection.css';
import React from 'react';

function ProjectsSection () {

  const textAboutMe=`
  Welcome to my personal web page, developed with ReactJS! 
  This project showcases my skills in modern web development, 
  featuring interactive effects, dynamic state management, 
  and efficient context usage. By leveraging React's 
  powerful features, such as hooks and references, 
  I have created a seamless and engaging user experience. 
  Explore the site to see how I utilize these techniques 
  to build a responsive and intuitive interface, 
  reflecting my interest for front-end development 
  and my commitment to continuous learning and innovation.
  `;

  const djangoProject=`
  This Django-based project is an eCommerce platform dedicated to selling guitars. 
  The platform allows users to browse through a wide variety of guitars, 
  add them to their cart, and make purchases. It incorporates several key Django 
  features to enhance functionality and maintainability like Decorators, 
  Mixins and Forms. The platform features a robust admin panel for managing products, 
  orders, and users, along with a user-friendly interface for customers. 
  The use of Django's powerful ORM simplifies database interactions, 
  ensuring efficient data management and retrieval.
  `;

  const teleProject=`
  This telemarketing management software is developed using Google Apps Script 
  with JavaScript, CSS, and HTML. The software is designed to streamline the management 
  of clients, events such as demonstrations and follow-ups, and sales processes. 
  Key features of the software include: Client Management, Event Management, Google Calendar Integration, 
  Reporting, Employee Follow-up. The software leverages the power of Google Apps Script to integrate 
  seamlessly with Google Workspace, providing a comprehensive solution 
  for telemarketing needs. Its user-friendly interface, built with HTML and CSS, 
  ensures ease of use and accessibility for all users.
  `;

  const dutiesFrontend=`
  This duties management software is a frontend application built with React.js, 
  designed to help users create and manage tasks with detailed descriptions 
  and due dates. Key features of the software include: Task Creation,
  React's state management, React's Context, React's useEffect, React Portals.
  The software offers a user-friendly interface for adding, editing, and deleting tasks, 
  ensuring an efficient and seamless task management experience. 
  By leveraging the power of React.js, it provides a highly responsive 
  and interactive user experience.
  `;

  const dutiesBackend=`
  This backend software is developed using FastAPI and is connected to a MongoDB 
  database. It provides a simple and efficient CRUD (Create, Read, Update, Delete) 
  functionality for managing tasks. Key features of the software include:
  Task Creation, Task Retrieval, Task Modification, ask Deletion,FastAPI Integration,
  MongoDB Connection. The software provides a robust backend solution for task 
  management, ensuring seamless communication between the front end and the database. 
  Its implementation with FastAPI and MongoDB ensures high performance, 
  scalability, and ease of use.
  `;

  const dataAnalytics=`
  This data analysis project focuses on analyzing running events 
  across the United States using powerful data science tools such as Pandas, 
  NumPy, and Jupyter Notebook. This project provides valuable insights into running 
  events in the United States, helping organizers, participants, and sponsors make 
  informed decisions. By leveraging Pandas, NumPy, and Jupyter Notebook, 
  e project ensures efficient data handling, thorough analysis, 
  and clear presentation of results. This project is a Replica from 
  Ryan Nolan Data https://www.youtube.com/watch?v=4sZFkPw87ng&t=16s.
  `;

  const texto='Hola';

  return (
    <section  id='projects'>
      <div className="general-title">
        <h1>
          Projects
          <span>
              Showcase
          </span>
        </h1>
      </div>
      <div className='ct-project'>
        <ProjectBox
          nameImage='image0'
          title='About Me Web Page'
          content={textAboutMe}
          box={false}
          project={1}
        />
        <ProjectBox
          nameImage='image01'
          title='FrontEnd Home Duties Web Page'
          content={dutiesFrontend}
          box={true}
          project={2}
        />
        <ProjectBox
          nameImage='image01'
          title='Backend Home Duties Web Page'
          content={dutiesBackend}
          box={false}
          project={6}
        />
        <ProjectBox
          nameImage='image02'
          title='Guitars Ecommerce Web Page'
          content={djangoProject}
          box={true}
          project={3}
        />
        <ProjectBox
          nameImage='image03'
          title='Telemarketing Web App'
          content={teleProject}
          box={false}
          project={4}
        />
        <ProjectBox
          nameImage='image04'
          title='Tools from Data Analytics'
          content={dataAnalytics}
          box={true}
          project={5}
        />
      </div>
    </section>
  )
};
  
export { ProjectsSection };