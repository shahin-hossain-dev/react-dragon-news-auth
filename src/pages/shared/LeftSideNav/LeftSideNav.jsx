import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("categories.json");
      const data = await res.json();

      setCategories(data);
    };
    fetchData();
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-5">All Categories {categories.length}</h2>

      <div className="space-y-4 ">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="text-xl block"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
