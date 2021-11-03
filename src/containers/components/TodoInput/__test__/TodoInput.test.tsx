import {TodoInput} from '../TodoInput';
import {describe, expect} from '@jest/globals'
import {mount} from "enzyme"
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

describe('TodoInput', () => {
    let someBigString = "2qpqoiwuijegpoqweqqpowjf91928rgpqwpgjqpworirgjpqowiejgpoiqwegpoqwhegpoiqwhepgoiqwwqwpeorigjqpwoiegjp9qwehgpquwhg0uq3h4jgqhnpweourghppwewghhqwpoegupqweugpoqwugpw"
    let wrapper:any;
    beforeEach(() => {
      wrapper = mount(<Provider store={store}><TodoInput/></Provider>)
    });
    
    afterEach(() => {
      wrapper.unmount()
    });
  
    it('TodoInput component should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it('should render one input correctly', () => {
        wrapper.find('input')
        expect (wrapper.length).toBe(1)
    });

    it('Input should work correct', () => {
      wrapper.find('input').simulate('change', {target: {value: "Testing"}});
      expect(wrapper.find('[data-test-id="paragraph-for-input-test"]').text()).toBe("Testing")
    });

    it('span should have correct text', () => {
        expect(wrapper.find('span').text()).toBe('Доступное количество символов: 160')
    });

    it('span should be error', () => {
        const someInput = wrapper.find('[className="todo-input"]');
        someInput.simulate("change", {target :{value: someBigString}});
        expect(wrapper.find('[className="input-counter-error"]').text()).toBe("Превышен лимит текста!")
    });
    it('should render one button correctly', () => {
        wrapper.find('button')
        expect (wrapper.length).toBe(1)
    });
  });