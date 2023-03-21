import StudySummary from './StudySummary';
import classes from './studySummary.module.css';

import Card from '../UI/Card';
import { BrowserRouter } from 'react-router-dom';
import MainPage from '../RoadMap/MainPage';
import { Link } from 'react-router-dom';
const courseList = [
  {
    id: 'a1',
    name: 'JAVA',
    path: '/java',
  },
  {
    id: 'a2',
    name: 'PYTHON',
    path: '/python',
  },
  {
    id: 'a3',
    name: 'JavaScript',
    path: '/js',
  },
];
const Study = (props) => {
  const list = courseList.map((item) => (
    <div>
      <BrowserRouter>
        <li className={classes.list}>
          <h3>{item.name}</h3>
          <Link to={item.path}>
            <p>OPEN</p>
          </Link>
        </li>
        <MainPage />
      </BrowserRouter>
    </div>
  ));

  return (
    <section className={classes.meals}>
      <StudySummary />
      <Card>
        <ul>{list}</ul>
      </Card>
    </section>
  );
};

export default Study;
