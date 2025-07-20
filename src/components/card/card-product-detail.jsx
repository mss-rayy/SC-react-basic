import { FaStar } from "react-icons/fa6";

export function CardProductDetails({
  thumbnail,
  price,
  title,
  description,
  rating,
  category,
  stock,
  warrantyInformation,
  reviews,
  returnPolicy
}) {
  console.log(" reviews: ", reviews);
  return (
    <>
      <section className="flex border border-slate-200 p-4">
        <div className="relative">
          <img className="object-cover " src={thumbnail} alt={title} />
          <span className="absolute -top-px -left-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase">
            Save 10%
          </span>
        </div>
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          {/* rating */}
          <div className="flex gap-1">
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <span className="text-sm bg-teal-100 text-teal-700 rounded-sm px-1.5">
              {rating}
            </span>
          </div>
        </div>
      </section>
      {/* Review section */}
      <section className="mt-5">
        <h2 className="text-teal-600 font-bold text-3xl">Review</h2>
        <hr />
        {reviews?.map((review, index) => (
          <div className="mt-4 border border-slate-300 p-4" key={index}>
            <p className="font-medium">{review.reviewerName}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </section>
    </>
  );
}
