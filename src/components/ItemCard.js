export default function ItemCard({ price, category, title, count }) {
  return (
    <div className="card">
      <div className="row">
        <span className="card-category">{category}</span>
        <span className="more">...</span>
      </div>

      <span className="itemPrice"> {price}$ </span>

      <div className="item-description row">
        <span className="item-title"> {title} </span>
        <span className="item-count ">
          Instore
          <br />
          <span>{count}</span>
        </span>
      </div>
    </div>
  );
}
