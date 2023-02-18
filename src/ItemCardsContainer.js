import ItemCard from "./components/ItemCard";
export default function ItemCardsContainer({ data }) {
  return (
    <div className="card-container">
      {data.map((item) => (
        <div className="outer-container">
          <ItemCard
            key={item.id}
            price={item.price}
            category={item.category}
            title={item.title}
            count={item.rating.count}
          />
        </div>
      ))}
    </div>
  );
}
