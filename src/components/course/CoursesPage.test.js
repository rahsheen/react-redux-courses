import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import { CoursesPage } from './CoursesPage';

function setup(numCourses) {
  const courses = new Array(numCourses);

  return mount(<CoursesPage courses={courses} />);
}

describe('CoursesPage', () => {
  it('renders No Courses if no courses', () => {
    const wrapper = setup(0);
    const addButton = wrapper.find('input').first();
    expect(addButton.prop('type')).toBe('submit');
    expect(addButton.prop('value')).toBe('Add Course');
    expect(wrapper.find('h1').text()).toEqual('No Courses');
  });
});
