import { Link } from 'react-router-dom';
import { AppRoutes } from '../const';

function NotFoundScreen() {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404. Not found</h1>
      <Link className="link not-found__link" to={AppRoutes.MAIN}>
        Go to the main page
      </Link>
    </section>
  );
}

export default NotFoundScreen;
