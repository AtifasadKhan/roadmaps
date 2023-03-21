import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Study from '../../Home/Study';
import classes from '../../Home/StudySummary';
import Markdown from 'markdown-to-jsx';

const JS = () => {
  const filename = 'javascript.md';

  const [post, setPost] = useState('');
  useEffect(() => {
    import(`../markdown/javascript/${filename}`)
      .then((res) => {
        fetch(res.default).then((res) =>
          res.text().then((res) => setPost(res))
        );
      })
      .catch((err) => console.log(err));
  });
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path='/Study' element={<Study />} />
        </Routes>

        <Link to='/'>
          <p className={classes.list}>HOME</p>
        </Link>
      </section>
      <div>
        <Markdown>{post}</Markdown>
      </div>
      <Link to='/'>
        <p className={classes.list}>HOME</p>
      </Link>
    </React.Fragment>
  );
};

export default JS;
