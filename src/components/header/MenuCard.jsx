const MenuCard = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-3 text-sm font-medium transition hover:bg-neutral-100"
    >
      {label}
    </div>
  );
};

export default MenuCard;
