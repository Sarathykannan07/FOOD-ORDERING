import { useEffect, useState } from "react";

function Body({ searchText }) {
  const [data, setData] = useState([]);
  const baseLink = "https://media-assets.swiggy.com/swiggy/image/upload/";

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((val) => {
        const cards = val?.data?.cards || [];
        const restaurantCard = cards.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setData(restaurants);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const filteredData = searchText
    ? data.filter((res) =>
        res.info?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : data;

  return (
    <div className="restaurant-container">
      {filteredData.length === 0 ? (
        <p>Loading....</p>
      ) : (
        filteredData.map((x) => {
          const id = x.info?.cloudinaryImageId;
          const imgSrc = id
            ? id.startsWith("IMAGES/")
              ? `${baseLink}${id}`
              : `${baseLink}f_auto,q_auto,w_660/${id}`
            : "fallback.jpg";

          return (
            <div className="restaurant-card" key={x.info.id}>
              <img src={imgSrc} alt={x.info.name} />
              <div className="restaurant-info">
                <div>{x.info.name}</div>
                <div>⭐ {x.info.avgRating}</div>
                <div>{x.info.cuisines.join(", ")}</div>
                <div>{x.info.areaName}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Body;
