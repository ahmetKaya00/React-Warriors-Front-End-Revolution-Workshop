import React from 'react'
import { blogs } from '../data'
import { Row, Col } from 'reactstrap';
import BlogCard from './BlogCard';

const Bloglist = ({onCategorySelect, onBlogSelect}) => {
  const filteredBlogs = onCategorySelect 
    ? blogs.filter(blog => blog.category === onCategorySelect && blog.isActive)
    : blogs.filter(blog => blog.isActive);

    return(
      <Row>
        {filteredBlogs.map(blog => (
          <Col sm="12" key={blog.id}>
            <BlogCard blog={blog} onClick={onBlogSelect}/>
          </Col>
        ))}
      </Row>
    );
}

export default Bloglist;
