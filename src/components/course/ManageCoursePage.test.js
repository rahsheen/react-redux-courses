import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      actions: { saveCourse: () => { return Promise.resolve(); } },
      course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' },
      authors: [],
      route: {}
    };

    const context = {
      router: {
        setRouteLeaveHook: function () { }
      }
    };

    const wrapper = mount(<ManageCoursePage {...props} />, { context });
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
