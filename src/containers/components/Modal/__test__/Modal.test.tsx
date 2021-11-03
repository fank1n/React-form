// import React from 'react';
import Modal from '../Modal';
import {describe, expect} from '@jest/globals'
import {mount} from "enzyme"
import { Provider } from 'react-redux';
import { store } from "../../../../redux/store"

describe('Modal', () => {
    let wrapper:any
    let activeStatus = true
    const mockfunc = jest.fn()
    beforeEach(() => {
      wrapper = mount(<Provider store={store}><Modal setActive={mockfunc} active={activeStatus}/></Provider>)
    });

    afterEach(() => {
      wrapper.unmount()
    });
    
    it('Modal component snapshot should be correct', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it('Should close modal on close(cross) button', () => {
      wrapper.find('[className="modal-close-cross"]').simulate('click');
      expect(mockfunc).toBeCalledTimes(1)
    });

    it('Should close modal on close(Отмена) button', () => {
      wrapper.find('[data-test-id="cancel-btn"]').simulate('click');
      expect(mockfunc).toBeCalledTimes(1)
    });

    it('Modal component should render elements currectly', () => {
      expect(wrapper.find('[className="modal active"]')).toBeTruthy()
      expect(wrapper.find('[className="modal-close-cross"]')).toBeTruthy()
      expect(wrapper.find('[className="modal-cancel-btn"]')).toBeTruthy()
      expect(wrapper.find('[className="modal-confirm-btn"]')).toBeTruthy()
    });
  });

