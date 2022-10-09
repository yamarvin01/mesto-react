export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img
        onClick={handleClick}
        className="card__image"
        alt={`Изображение ${props.card.name}`}
        src={props.card.link}
      />
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button
            className="card__button card__button_type_like"
            type="button"
            aria-label="Кнопка лайк"
          ></button>
          <p className="card__like-text">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className="card__button card__button_type_delete"
        type="button"
        aria-label="Кнопка удаления"
      ></button>
    </article>
  );
}
