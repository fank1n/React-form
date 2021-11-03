import App from '../App';
import {describe, expect} from '@jest/globals'
import {mount} from "enzyme"
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('App', () => {
  
  let wrapper:any;

  beforeEach(() => {
    wrapper = mount(<Provider store={store}><App/></Provider>)
  });
  
  afterEach(() => {
    wrapper.unmount()
  });

  it('App component snapshot should be correct', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('TodoInput component should render correctly',() => {
    expect(wrapper.find('TodoInput')).toBeTruthy()
  });

  it('TodoItemsList component should render correctly',() => {
    expect(wrapper.find('TodoItemsList')).toBeTruthy()
  });
});
