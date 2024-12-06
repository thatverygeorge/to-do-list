interface IMadeByProps {
  modifier: string;
}

function MadeBy(props: IMadeByProps) {
  const { modifier } = props;

  return (
    <section className={`made-by ${modifier}__made-by container`}>
      <h2 className="made-by__title">
        made by{" "}
        <a className="link made-by__link" href="https://github.com/thatverygeorge" target="_blank">
          @thatverygeorge
        </a>
      </h2>
    </section>
  );
}

export default MadeBy;

