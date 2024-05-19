import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProjectOutput from './ProjectOutput';

describe('ProjectOutput', () => {
  let props;
  let shallowProjectOutput;
  let renderedProjectOutput;
  let mountedProjectOutput;

  const shallowTestComponent = () => {
    if (!shallowProjectOutput) {
      shallowProjectOutput = shallow(<ProjectOutput {...props} />);
    }
    return shallowProjectOutput;
  };

  const renderTestComponent = () => {
    if (!renderedProjectOutput) {
      renderedProjectOutput = render(<ProjectOutput {...props} />);
    }
    return renderedProjectOutput;
  };

  const mountTestComponent = () => {
    if (!mountedProjectOutput) {
      mountedProjectOutput = mount(<ProjectOutput {...props} />);
    }
    return mountedProjectOutput;
  };  

  beforeEach(() => {
    props = {};
    shallowProjectOutput = undefined;
    renderedProjectOutput = undefined;
    mountedProjectOutput = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
