import { useState } from "react";
import Testmonial from "./Testmonial";

const Testmonials = () => {
  const [reviews, setReviews] = useState([]);

  const salonReviews = [
    {
      _id: 1,
      name: "Nash Patrik",
      image: "https://i.ibb.co/yqHCLKX/review1.jpg", // Add the URL of the reviewer's image
      date_of_review: "2024-01-18",
      review: 5,
      comment: "Excellent service! Loved the ambiance and attention to detail.",
    },
    {
      _id: 2,
      name: "Emma Johnson",
      image: "https://i.ibb.co/JkLq4Zr/review2.jpg", // Add the URL of the reviewer's image
      date_of_review: "2024-01-17",
      review: 4,
      comment:
        "Great experience overall. Friendly staff and a relaxing atmosphere.",
    },
    {
      _id: 3,
      name: "Holophera",
      image: " https://i.ibb.co/Fx1dX1n/review3.jpg", // Add the URL of the reviewer's image
      date_of_review: "2024-01-16",
      review: 5,
      comment:
        "Highly recommend! The quality of service exceeded my expectations.",
    },
    {
      _id: 4,
      name: "Holophera",
      image: " https://i.ibb.co/Fx1dX1n/review3.jpg", // Add the URL of the reviewer's image
      date_of_review: "2024-01-16",
      review: 5,
      comment:
        "Highly recommend! The quality of service exceeded my expectations.",
    },
  ];
  const scrollbarStyle = {
    // WebKit-based browsers (Chrome, Safari)
    WebkitScrollbar: {
      width: "5px", // Set the width of the scrollbar
    },
    WebkitScrollbarThumb: {
      backgroundColor: "#888", // Set the color of the scrollbar thumb
      borderRadius: "10px", // Set the border-radius of the scrollbar thumb
    },

    // Firefox
    scrollbarWidth: "thin",
    scrollbarColor: "#888 transparent", // Set the color of the scrollbar thumb and track
  };
  setTimeout(() => {
    setReviews(salonReviews);
  }, 0);
  return (
    <div className="px-4 md:px-12 xl:px-20 py-10 md:py-12 xl:py-16">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl xl:text-6xl font-semibold">
          Testmonials{" "}
        </h1>
      </div>
      <div className="py-14">
        <div
          style={scrollbarStyle}
          className="flex overflow-x-scroll w-[100%] py-5"
        >
          <div className="flex gap-5">
            {reviews.map((review) => (
              <Testmonial key={review._id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
