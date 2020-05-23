import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

describe('useSomeActions custom hook', () => {
  const wrapper = mount(
    <Root>
      <CommentList />
    </Root>
  );

  it('renders comments list', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });
  it('updates store after dispatching action in child component using useSomeActions hook', () => {
    wrapper.find('li').at(1).simulate('click');
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);
  });
});
