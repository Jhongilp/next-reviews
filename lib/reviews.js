const reviews = {
  "item1": "This is a review for item 1",
  "item2": "This is a review for item 2",
  "item3": "This is a review for item 3",
  "item4": "This is a review for item 4",
}

export function getReviews(itemKey) {
  return reviews[itemKey];
}