import React from 'react';
import { removeComment } from 'actions';
import useSomeActions from 'components/customHooks';

function CommentItem({ item }) {
  const [remove] = useSomeActions([removeComment]);
  return (
    <div>
      <li onClick={() => remove(item)}>{item} click on me to remove</li>
    </div>
  );
}

export default CommentItem;
