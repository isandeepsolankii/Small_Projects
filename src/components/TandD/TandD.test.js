import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TandD from './TandD';

describe('TandD', () => {
  let props;
  let shallowTandD;
  let renderedTandD;
  let mountedTandD;

  const shallowTestComponent = () => {
    if (!shallowTandD) {
      shallowTandD = shallow(<TandD {...props} />);
    }
    return shallowTandD;
  };

  const renderTestComponent = () => {
    if (!renderedTandD) {
      renderedTandD = render(<TandD {...props} />);
    }
    return renderedTandD;
  };

  const mountTestComponent = () => {
    if (!mountedTandD) {
      mountedTandD = mount(<TandD {...props} />);
    }
    return mountedTandD;
  };  

  beforeEach(() => {
    props = {};
    shallowTandD = undefined;
    renderedTandD = undefined;
    mountedTandD = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
