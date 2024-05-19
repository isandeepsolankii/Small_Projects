import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProjectList from './ProjectList';

describe('ProjectList', () => {
  let props;
  let shallowProjectList;
  let renderedProjectList;
  let mountedProjectList;

  const shallowTestComponent = () => {
    if (!shallowProjectList) {
      shallowProjectList = shallow(<ProjectList {...props} />);
    }
    return shallowProjectList;
  };

  const renderTestComponent = () => {
    if (!renderedProjectList) {
      renderedProjectList = render(<ProjectList {...props} />);
    }
    return renderedProjectList;
  };

  const mountTestComponent = () => {
    if (!mountedProjectList) {
      mountedProjectList = mount(<ProjectList {...props} />);
    }
    return mountedProjectList;
  };  

  beforeEach(() => {
    props = {};
    shallowProjectList = undefined;
    renderedProjectList = undefined;
    mountedProjectList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
