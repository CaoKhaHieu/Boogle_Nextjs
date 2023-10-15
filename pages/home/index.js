import { useCallback, useEffect, useRef, useState } from 'react';

import SlideItem from './partials/SlideItem';
import Post from './partials/Post';
import SkeletonNewsfeed from '../../components/skeleton/SkeletonNewsfeed';

export default function HomePage({ postList, newsList }) {
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState(postList);

  const [newsFeed, setNewsFeed] = useState(newsList.data);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(newsList?.hasMore || false);
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => (prev > 1 ? 0 : prev + 1));
    }, 10000);
  }, []);

  useEffect(() => {
    fetchNewsfeedAPI(pageNumber);
  }, [pageNumber]);

  const fetchNewsfeedAPI = async (pageNumber) => {
    setLoading(true);
    const response = await fetch(`https://boogle.onrender.com/api/posts/public?page=${pageNumber}`);
    const data = await response.json();

    if (pageNumber === 1) {
      setNewsFeed(data.data);
    } else {
      setNewsFeed([...newsFeed, ...data.data]);
    }
    setLoadMore(data?.hasMore);
    setLoading(false);
  };

  const loadMoreElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && loadMore) {
            setPageNumber(pageNumber + 1);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1,
        }
      );
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div className='app'>
      {/* Slide Post */}
      <section className="section-slide">
        <div className="container">
          <h2 className="slide-title">Trending</h2>
          <div className="slide-content">
            <ul className="list-post">
              {posts.length > 0 && posts?.map((item, indexSlide) => (
                <SlideItem key={indexSlide} post={item} index={index} />
              ))}
            </ul>
            <div className="slide-dots">
              {posts.length > 0 && posts?.map((item, indexItem) => (
                <span
                  key={indexItem}
                  className={index === indexItem ? 'dot-item active' : 'dot-item'}
                  onClick={() => setIndex(indexItem)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News feed */}
      <section className="section-new-post">
        <div className="container">
          <ul className="row group-item">
            {newsFeed?.map((post) => (
              <Post post={post} />
            ))}
          </ul>
          {loading && (
            <ul className="row group-item">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <SkeletonNewsfeed key={n} />
              ))}
            </ul>
          )}
        </div>
        {loadMore && (
          <div className="load-more-wrap" ref={loadMoreElementRef}>
            <div className="load-more">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const [postListRes, newsListRes] = await Promise.all([
    fetch(`https://boogle.onrender.com/api/posts/recommend?page=1&size=3`), 
    fetch(`https://boogle.onrender.com/api/posts/public?page=1`)
  ]);

  const [postList, newsList] = await Promise.all([
    postListRes.json(), 
    newsListRes.json()
  ]);
  return { props: { postList, newsList } };
}
