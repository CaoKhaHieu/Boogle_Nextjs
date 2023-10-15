import React, { useEffect, useState } from 'react';
import SlideItem from './SlideItem';

const Slide = () => {
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsDummy);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setIndex((prev) => (prev > 1 ? 0 : prev + 1));
    }, 10000);
  }, []);

  const postsDummy = [
    {
      _id: 1,
      cover: 'https://image.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-260nw-2072628056.jpg',
      title: 'How to build code using webpack as',
      topic: 'Infomation',
      user: {
        picture: 'https://image.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-260nw-2072628056.jpg',
        displayName: 'Hieu Cao K.',
        lastName: 'Hieu',
      }
    },
    {
      _id: 2,
      cover: 'https://image.shutterstock.com/image-photo/outdoor-fashion-portrait-young-lady-260nw-1259660212.jpg',
      title: 'How to build code using webpack dsca',
      topic: 'Infomation',
      user: {
        picture: 'https://image.shutterstock.com/image-photo/outdoor-fashion-portrait-young-lady-260nw-1259660212.jpg',
        displayName: 'Hieu Cao K.',
        lastName: 'Hieu',
      }
    },
    {
      _id: 3,
      cover: 'https://image.shutterstock.com/image-photo/green-facade-vertical-garden-architecture-260nw-313287029.jpg',
      title: 'How to build code using webpack a',
      topic: 'Infomation',
      user: {
        picture: 'https://image.shutterstock.com/image-photo/green-facade-vertical-garden-architecture-260nw-313287029.jpg',
        displayName: 'Hieu Cao K.',
        lastName: 'Hieu',
      }
    }
  ];

  return (
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
  );
};

export default Slide;
