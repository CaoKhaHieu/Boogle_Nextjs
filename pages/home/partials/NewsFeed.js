import React, { useEffect, useState, useRef, useCallback } from 'react';
import Post from '../../../shared/components/post';
import SkeletonNewsfeed from '../../../shared/components/skeleton-component/SkeletonNewsfeed';
import axios from 'axios';

const NewsFeed = ({ data }) => {
  const [loadMore, setLoadMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const loading = false;
  const posts = [
    {
      _id: 1,
      title: ' How to use webpack?',
      comments: [],
      likes: 4,
      user: {
        picture: 'https://image.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-260nw-2072628056.jpg',
        displayName: 'Hieu Cao K.',
        lastName: 'Hieu',
      },
      cover: 'https://picsum.photos/536/354',
      description: 'Webpack from zero to hero',
      tags: ['html', 'css', 'js'],
      createdAt: '',
    },
    {
      _id: 1,
      title: ' How to use webpack?',
      comments: [],
      likes: 4,
      user: {
        picture: 'https://image.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-260nw-2072628056.jpg',
        displayName: 'Hieu Cao K.',
        lastName: 'Hieu',
      },
      cover: 'https://picsum.photos/536/354',
      description: 'Webpack from zero to hero',
      tags: ['html', 'css', 'js'],
      createdAt: '',
    },
    {
      _id: 1,
      title: ' How to use webpack?',
      comments: [],
      likes: 4,
      user: {
        picture: 'https://image.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-260nw-2072628056.jpg',
        displayName: 'Hieu Cao K.',
        lastName: 'Hieu',
      },
      cover: 'https://picsum.photos/536/354',
      description: 'Webpack from zero to hero',
      tags: ['html', 'css', 'js'],
      createdAt: '',
    },
    {
      _id: 1,
      title: ' How to use webpack?',
      comments: [],
      likes: 4,
      user: {
        picture: 'https://image.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-260nw-2072628056.jpg',
        displayName: 'Hieu Cao K.',
        lastName: 'Hieu',
      },
      cover: 'https://picsum.photos/536/354',
      description: 'Webpack from zero to hero',
      tags: ['html', 'css', 'js'],
      createdAt: '',
    },
    {
      _id: 1,
      title: ' How to use webpack?',
      comments: [],
      likes: 4,
      user: {
        picture: 'https://image.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-260nw-2072628056.jpg',
        displayName: 'Hieu Cao K.',
        lastName: 'Hieu',
      },
      cover: 'https://picsum.photos/536/354',
      description: 'Webpack from zero to hero',
      tags: ['html', 'css', 'js'],
      createdAt: '',
    },
    {
      _id: 1,
      title: ' How to use webpack?',
      comments: [],
      likes: 4,
      user: {
        picture: 'https://image.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-260nw-2072628056.jpg',
        displayName: 'Hieu Cao K.',
        lastName: 'Hieu',
      },
      cover: 'https://picsum.photos/536/354',
      description: 'Webpack from zero to hero',
      tags: ['html', 'css', 'js'],
      createdAt: '',
    },
  ];
  const observer = useRef();
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
    <section className="section-new-post">
      <div className="container">
        <ul className="row group-item">
          {posts?.map((post, index) => (
            <Post post={post} key={index} />
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
  );
};
export default NewsFeed;
