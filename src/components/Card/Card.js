import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card);
  };

  render() {
    return (
      <article className="card">
        <img
          onClick={this.handleClick}
          className="card__image"
          alt={`Изображение ${this.props.card.name}`}
          src={this.props.card.link}
        />
        <div className="card__info">
          <h2 className="card__title">{this.props.card.name}</h2>
          <div className="card__like">
            <button
              className="card__button card__button_type_like"
              type="button"
              aria-label="Кнопка лайк"
            ></button>
            <p className="card__like-text">
              {this.props.card.likes.length}
            </p>
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
}
