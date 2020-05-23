import React from 'react';
import { connect } from 'react-redux';
import { sortComments } from 'actions';
import useSomeActions from 'components/customHooks';
import CommentItem from './CommentItem';

function CommentList({ comments }) {
  const [sort] = useSomeActions([sortComments]);

  return (
    <div>
      <h3>Comment List</h3>
      <ul>
        {comments.map((comment, i) => (
          <CommentItem item={comment} key={i} />
        ))}
      </ul>
      <button onClick={sort}>SORT</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(CommentList);
