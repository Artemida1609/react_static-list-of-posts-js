import { UserInfo } from '../UserInfo';
// import { CommentList } from '../CommentList';
// import commentsFromServer from '../../api/comments.json';

// function getCommentsById(commentId) {
//   return commentsFromServer.filter(comment => comment.postId === commentId);
// }

export const PostInfo = ({ post }) => {
  // const postComments = getCommentsById(post.id) || [];

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          {post.user && <UserInfo user={post.user} />}
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
      <hr />
      {/* {postComments.length > 0 ? (
        (<CommentList comments={postComments}/>) :
        (<b data-cy="NoCommentsMessage">No comments yet</b>)
      )} */}
    </div>
  );
};
