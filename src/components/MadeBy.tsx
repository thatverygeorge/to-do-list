interface IMadeByProps {
  modifier: string;
}

function MadeBy(props: IMadeByProps) {
  const { modifier } = props;

  return (
    <section className={`made-by ${modifier}__made-by`}>
      <h2 className="made-by__title">Made by @thatverygeorge</h2>
      <ul className="made-by__list">
        <li>
          <a
            className="link made-by__link"
            href="https://github.com/thatverygeorge"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="link made-by__link"
            href="https://twitter.com/thatverygeorge"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a className="link made-by__link" href="https://t.me/thatverygeorge" target="_blank">
            Telegram
          </a>
        </li>
      </ul>
    </section>
  );
}

export default MadeBy;
