import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChildItem({ src }) {
  return (
    <div className="container__menu__item" onClick={() => console.log(src)}>
      <div className="item">
        <div className="item__thumb">
          <img src={src} alt="" />
        </div>
        <div className="item__content">
          <h4>
            JUST FEATURED <span>GAMES</span>
          </h4>
          <div className="description">
            <FontAwesomeIcon icon={["fas", "bell"]} />
            <span>Playstation 5 , Xbox</span>
          </div>
        </div>
        <div className="item__content__overlay">
          <div className="icon">
            <img
              src="https://themebeyond.com/html/geco/Geco/img/icon/featured_game_icon.png"
              alt=""
            />
          </div>
          <h4>
            JUST FEATURED <span>GAMES</span>
          </h4>
          <div className="meta">
            <FontAwesomeIcon icon={["fas", "bell"]} />
            <span>Playstation 5 , Xbox</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChildItem;
