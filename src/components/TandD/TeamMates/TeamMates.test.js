import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TeamMates from './TeamMates';

describe('TeamMates', () => {
  let props;
  let shallowTeamMates;
  let renderedTeamMates;
  let mountedTeamMates;

  const shallowTestComponent = () => {
    if (!shallowTeamMates) {
      shallowTeamMates = shallow(<TeamMates {...props} />);
    }
    return shallowTeamMates;
  };

  const renderTestComponent = () => {
    if (!renderedTeamMates) {
      renderedTeamMates = render(<TeamMates {...props} />);
    }
    return renderedTeamMates;
  };

  const mountTestComponent = () => {
    if (!mountedTeamMates) {
      mountedTeamMates = mount(<TeamMates {...props} />);
    }
    return mountedTeamMates;
  };  

  beforeEach(() => {
    props = {};
    shallowTeamMates = undefined;
    renderedTeamMates = undefined;
    mountedTeamMates = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
