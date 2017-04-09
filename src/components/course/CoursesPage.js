import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

export class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  deleteClick(event) {
    event.preventDefault();

    this.props.actions.deleteCourse(event.target.id)
      .then(() => toastr.success(`Course Deleted!`))
      .catch(error => {
        toastr.error(`Couldn't delete course!`);
      });
  }

  render() {
    const { courses } = this.props;

    if (courses.length > 0) {
      return (
        <div>
          <h1>Courses ({courses.length})</h1>
          <input type="button"
            value="Add Course"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage} />
          <CourseList courses={courses} deleteClick={this.deleteClick} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>No Courses</h1>
          <input type="submit"
            value="Add Course"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage} />
        </div>
      );
    }
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
