import { Link } from "react-router-dom";
import { AppRoutes } from "../const";

function NotFoundScreen() {
  return (
    <section className="not-found container">
      <h1 className="not-found__title">404. not found</h1>
      <Link className="link not-found__link" to={AppRoutes.MAIN}>
        go home
      </Link>
    </section>
  );
}

export default NotFoundScreen;

