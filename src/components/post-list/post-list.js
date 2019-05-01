/* Vendor imports */
import React from 'react';
import ClampLines from 'react-clamp-lines';
import { FaRegCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
/* App imports */
import style from './post-list.module.less';
import TagList from '../tag-list';
import Utils from '../../utils';

const PostList = ({ posts }) => (
  <div className={style.container}>
    {posts.map((post, index) => {
      const { title, date, path, tags, cover, excerpt } = post.node.frontmatter;
      debugger;
      return (
        <div key={title} className={style.post}>
          <div className={style.cover}>
            <Link to={Utils.resolvePageUrl(path)}>
              <Img
                fluid={cover.childImageSharp.fluid}
                title={excerpt}
                alt={title}
              />
            </Link>
          </div>
          <div className={style.content}>
            <Link to={Utils.resolvePageUrl(path)}>
              <h2>{title}</h2>
              <label>
                {date ? (
                  <strong>
                    <FaRegCalendarAlt /> <label>{date}</label>{' '}
                  </strong>
                ) : null}
              </label>
              <ClampLines
                text={excerpt}
                lines={2}
                ellipsis="..."
                buttons={false}
                innerElement="p"
              />
            </Link>
            <TagList tags={tags} />
          </div>
        </div>
      );
    })}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string,
          path: PropTypes.string.isRequired,
          tags: PropTypes.arrayOf(PropTypes.string).isRequired,
          cover: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      }),
    }),
  ),
};

export default PostList;
