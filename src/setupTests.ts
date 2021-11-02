// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';

import Enzyme, {shallow, render, mount} from "enzyme"
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"
import toJson from "enzyme-to-json"

Enzyme.configure({adapter: new EnzymeAdapter()})

// global.shallow = shallow;
// global.render = render;
// global.mount = mount;
// global.toJson = toJson;
