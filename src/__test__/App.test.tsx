import React from 'react';
// import { render, screen } from '@testing-library/react';
import App from '../App';
import {describe, expect, test} from '@jest/globals'
import Enzyme, {shallow, render, mount} from "enzyme"
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  let wrapper:any;

  beforeEach(() => {
    wrapper = mount(<App/>)
  });
  afterEach(() => {
    wrapper.unmount()
  });

  it('component should render correctly', () => {
    expect(wrapper).toMatchSnapshot
  });
});
