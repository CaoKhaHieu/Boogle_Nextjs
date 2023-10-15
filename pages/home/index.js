import { useEffect, useState } from 'react';

import SlideItem from './partials/SlideItem';

export default function HomePage({ postList }) {
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState(postList);

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => (prev > 1 ? 0 : prev + 1));
    }, 10000);
  }, []);

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
    </div>
  );
};

export async function getServerSideProps(context) {
  const url = 'https://boogle.onrender.com/api/posts/recommend?page=1&size=3';

  const response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      postList: data,
    }
  }
}
