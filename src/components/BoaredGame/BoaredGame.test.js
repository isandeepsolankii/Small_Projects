import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BoaredGame from './BoaredGame';

describe('BoaredGame', () => {
  let props;
  let shallowBoaredGame;
  let renderedBoaredGame;
  let mountedBoaredGame;

  const shallowTestComponent = () => {
    if (!shallowBoaredGame) {
      shallowBoaredGame = shallow(<BoaredGame {...props} />);
    }
    return shallowBoaredGame;
  };

  const renderTestComponent = () => {
    if (!renderedBoaredGame) {
      renderedBoaredGame = render(<BoaredGame {...props} />);
    }
    return renderedBoaredGame;
  };

  const mountTestComponent = () => {
    if (!mountedBoaredGame) {
      mountedBoaredGame = mount(<BoaredGame {...props} />);
    }
    return mountedBoaredGame;
  };  

  beforeEach(() => {
    props = {};
    shallowBoaredGame = undefined;
    renderedBoaredGame = undefined;
    mountedBoaredGame = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
