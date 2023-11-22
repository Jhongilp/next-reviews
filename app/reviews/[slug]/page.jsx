import { getReviews } from "@/lib/reviews";

export default function ReviewsPage({ params: { slug } }) {
  const review = getReviews(slug);
  return (
    <>
      <h1>Review for {slug}</h1>
      <img
        src="/images/hollow-knight.jpg"
        width="640"
        height="360"
        alt=""
        className="mb-2 rounded"
      />
      <p>{review}</p>
    </>
  );
}
