import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Weather from './Weather';

describe('Weather', () => {
  let props;
  let shallowWeather;
  let renderedWeather;
  let mountedWeather;

  const shallowTestComponent = () => {
    if (!shallowWeather) {
      shallowWeather = shallow(<Weather {...props} />);
    }
    return shallowWeather;
  };

  const renderTestComponent = () => {
    if (!renderedWeather) {
      renderedWeather = render(<Weather {...props} />);
    }
    return renderedWeather;
  };

  const mountTestComponent = () => {
    if (!mountedWeather) {
      mountedWeather = mount(<Weather {...props} />);
    }
    return mountedWeather;
  };  

  beforeEach(() => {
    props = {};
    shallowWeather = undefined;
    renderedWeather = undefined;
    mountedWeather = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
