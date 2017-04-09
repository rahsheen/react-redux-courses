import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, deleteClick}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
        <CourseListRow key={course.id} course={course} deleteClick={deleteClick} />
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteClick: PropTypes.func
};

export default CourseList;
