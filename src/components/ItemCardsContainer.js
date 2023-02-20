import ItemCard from "./components/ItemCard";
export default function ItemCardsContainer({ data }) {
  const colors = [
    "#FF8B64",
    "#55C2E6",
    "#FF5E7D",
    "#FF8B64",
    "#55C2E6",
    "#4BCF82",
    "#7335D2",
    "#F1C75B",
    "#4BCF82",
    "#7335D2",
  ];
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div
          className="outer-container"
          key={item.id}
          style={{ backgroundColor: colors[index] }}
        >
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
