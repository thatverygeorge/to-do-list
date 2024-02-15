import { showMore } from '../stores/countFilter';

interface IButtonShowMoreProps {
  modifier: string;
}

function ButtonShowMore(props: IButtonShowMoreProps) {
  const { modifier } = props;

  return (
    <button className={`button ${modifier}__button-show-more`} type="button" onClick={showMore}>
      show more
    </button>
  );
}

export default ButtonShowMore;
