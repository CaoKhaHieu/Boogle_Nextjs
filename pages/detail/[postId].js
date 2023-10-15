import Image from 'next/image';
import React, { useState } from 'react'

const PostDetail = ({ postData }) => {
  const userCurrent = {};
  const [post, setPost] = useState(postData);
  const [follow, setFollow] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [isMyself, setIsMyself] = useState(false);
  const [comments, setComments] = useState([]);

  return (
    <div>
      <div className="detail-page">
        <div className="container">
          <div className="row">
            <aside className="author-interact">
              <ul className="interact-action-list">
                <li className="interact-action-item">
                  {post.isLiked ? (
                    <span className="item-icon active">
                      <i className="fas fa-heart"></i>
                    </span>
                  ) : (
                    <span className="item-icon">
                      <i className="fal fa-heart"></i>
                    </span>
                  )}
                </li>
                {!isMyself && (
                  <li
                    className="interact-action-item"
                    // onClick={handleFollowUser}
                  >
                    {follow ? (
                      <span className="item-icon active">
                        <i className="fas fa-user-check"></i>
                      </span>
                    ) : (
                      <span className="item-icon">
                        <i className="far fa-user-plus"></i>
                      </span>
                    )}
                  </li>
                )}

                <li
                  className="interact-action-item"
                  // onClick={handleAddBookmark}
                >
                  {bookmark ? (
                    <span className="item-icon active">
                      <i className="fas fa-bookmark"></i>
                    </span>
                  ) : (
                    <span className="item-icon">
                      {' '}
                      <i className="fal fa-bookmark"></i>
                    </span>
                  )}
                </li>
              </ul>
            </aside>
            <article className="post-detail col-8 offset-2 col-lg-12 offset-lg-0">
              <div className="post-header">
                <h2 className="post-title">{post.title}</h2>
              </div>
              <div className="author-detail">
                <ul className="author-info-list">
                  <li className="author-info-item">
                    <a
                      href={
                        userCurrent?.email === post.user.email
                          ? '/wall/me'
                          : `/wall/${post.user._id}`
                      }
                      className="author-avatar"
                    >
                      <img
                        src={
                          post.user.picture
                            ? `${post.user.picture}`
                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTht9-qZYmqErdGMhJVbRf7BfhLRGspNWaFnR8nddu3x7Da7nqh23vsG6VWtG_VE9G9kLU&usqp=CAU'
                        }
                        alt={post.user?.displayName}
                      />
                    </a>
                  </li>
                  <li className="author-info-item">
                    <a
                      href={
                        userCurrent?.email === post.user.email
                          ? '/wall/me'
                          : `/wall/${post.user._id}`
                      }
                      className="text-primary author-name"
                    >
                      <h3>
                        {post.user?.displayName
                          ? post.user?.displayName
                          : post.user?.lastName}
                      </h3>
                    </a>
                  </li>
                </ul>
                <ul className="interact-detail-list">
                  <li
                    className="interact-detail-item"
                    // onClick={handleAddBookmark}
                  >
                    {bookmark ? (
                      <i className="fas fa-bookmark"></i>
                    ) : (
                      <i className="fal fa-bookmark"></i>
                    )}
                  </li>
                  {!isMyself && (
                    <li
                      className="interact-detail-item"
                      // onClick={handleFollowUser}
                    >
                      {follow ? (
                        <i className="fas fa-user-check"></i>
                      ) : (
                        <i className="far fa-user-plus"></i>
                      )}
                    </li>
                  )}
                </ul>
              </div>
              <div className="post-image">
                <img
                  src={post.cover}
                  alt="post-cover"
                />
              </div>
              <div className="post-content">
                <div
                  className="post-description"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </div>
              <div className="post-footer">
                <ul className="interact-detail-list">
                  <li
                    className="interact-detail-item"
                    // onClick={handleLikePost}
                  >
                    {/* {formatNumber(post.likes)}{' '} */}
                    10
                    {post.isLiked ? (
                      <i className="fas fa-heart"></i>
                    ) : (
                      <i className="fal fa-heart"></i>
                    )}
                  </li>
                  <li className="interact-detail-item">
                    {/* {formatNumber(comments.length)}{' '} */}
                    10
                    <i className="fal fa-comment-alt-lines"></i>
                  </li>
                </ul>
              </div>
              <div className="interact-box">
                Responses ({comments.length})
              </div>
              {/* <form
                className="form-comment"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  className="comment-input"
                  {...register('content')}
                ></input>
                <button className="btn btn-primary">Comment</button>
              </form> */}
            </article>
            {/* <ul className="list-user-comment col-8 offset-2 col-lg-12 offset-lg-0">
              {comments.length > 0 &&
                comments
                  ?.slice(0)
                  .reverse()
                  .map((props: any) => {
                    return <UserComment props={props} />;
                  })}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail;

export async function getServerSideProps(context) {
  const url = 'https://boogle.onrender.com/api/posts/63e263e8f2d93f7de4bdbb17';

  const response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      postData: data,
    }
  }
}
