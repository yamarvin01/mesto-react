import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.onCardClick(this.props.cardData);
  };

  render() {
    return (
      <article className="card">
        <img
          onClick={this.handleClick}
          className="card__image"
          alt={`Изображение ${this.props.cardData.name}`}
          src={this.props.cardData.link}
        />
        <div className="card__info">
          <h2 className="card__title">{this.props.cardData.name}</h2>
          <div className="card__like">
            <button
              className="card__button card__button_type_like"
              type="button"
              aria-label="Кнопка лайк"
            ></button>
            <p className="card__like-text">
              {this.props.cardData.likes.length}
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
