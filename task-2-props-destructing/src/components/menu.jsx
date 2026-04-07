// The Menu: Create a FoodItem component that takes name and isVeg. Use an icon to show if it's veg or non-veg

export default function MenuCard({ menu, isVeg }) {
  return (
    <div className="flex items-center justify-between py-2">
      <h1>{menu}</h1>
      <span>{isVeg ? "🟢" : "🔴"}</span>
    </div>
  );
}
