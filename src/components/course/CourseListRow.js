import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CourseListRow = ({ course, deleteClick }) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><a href="#" id={course.id} onClick={deleteClick}>Delete</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleteClick: PropTypes.func
};

export default CourseListRow;
