import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', () => {
  let props;
  let shallowCalculator;
  let renderedCalculator;
  let mountedCalculator;

  const shallowTestComponent = () => {
    if (!shallowCalculator) {
      shallowCalculator = shallow(<Calculator {...props} />);
    }
    return shallowCalculator;
  };

  const renderTestComponent = () => {
    if (!renderedCalculator) {
      renderedCalculator = render(<Calculator {...props} />);
    }
    return renderedCalculator;
  };

  const mountTestComponent = () => {
    if (!mountedCalculator) {
      mountedCalculator = mount(<Calculator {...props} />);
    }
    return mountedCalculator;
  };  

  beforeEach(() => {
    props = {};
    shallowCalculator = undefined;
    renderedCalculator = undefined;
    mountedCalculator = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
