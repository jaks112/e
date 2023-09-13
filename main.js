function ReviewCreator(id, firstName, lastNameInitial, stars, imageSrc, reviewStatement) {
  (this.id = id),
    (this.firstName = firstName),
    (this.lastNameInitial = lastNameInitial),
    (this.reviewStatement = reviewStatement),
    (this.stars = stars),
    (this.imageSrc = imageSrc);
}

const reviews = [
  new ReviewCreator(
    'review1',
    'Jordan',
    'P.',
    5,
    'https://media.istockphoto.com/id/874791758/photo/senior-man-sitting-on-sofa-at-home-with-pet-labrador-dog.jpg?s=612x612&w=0&k=20&c=xqTNUh_JdUoRbUNY-naiolgaLXoVcUTR3MqWRCe-Plw=',
    'Chaley\'s reliable, trustworthy, and clearly cares about the dogs she works with.'
  ),

  new ReviewCreator(
    'review2', 
    'Mae',
    'N.', 
    5,
    'https://www.thoughtco.com/thmb/zhFfbobnHNA5ka9hhBA4wAwcnLk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-599299394-58acfdc45f9b58a3c9db4fa7.jpg',
    'I\'m so grateful to have found Chaley!'
  ),

  new ReviewCreator(
    'review3',
    'Marcus',
    'M.', 
    5, 
    'https://media.istockphoto.com/id/1149947881/photo/man-and-his-best-friend.jpg?s=612x612&w=0&k=20&c=RSk93aAAZBWpiLvIXwc_ygjua4R-IIYQJDtStoI68I8=',
    'Chaley takes great care of my dog Kip and always goes above and beyond. I highly recommend her!'
  ),

  new ReviewCreator(
    'review4',
    'Jack',
    'P.',
    4,
    'https://people.com/thmb/oni3ZYC5MJBRdc_dI65sgjnex0s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/dog-hug-2f174202e9cf4b36bc6c81b196a6d7bd.jpg',
    "Chaley's warm personality makes Dug feel loved. I can always trust that he is in good hands with her."
  ),

  new ReviewCreator(
    'review5', 
    'Alyssa', 
    'K.', 
    5, 
    'https://cff2.earth.com/uploads/2022/10/11065524/Dog-personally-scaled.jpg', 
    'What I appreciate most about Chaley is how attentive she is to Marlin\'s individual needs.' 
  )
];

// Created a function that creates and returns an element 
function createReviewCard(review) {
  const { id, imageSrc, reviewStatement, firstName, lastNameInitial, stars } = review

  const reviewCard = document.createElement('div');
  reviewCard.id = id;
  reviewCard.classList.add('review-card')

  const nameElement = document.createElement('h3');
  nameElement.innerText = `${firstName} ${lastNameInitial}`;
  nameElement.classList.add('name');

  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.classList.add('review-img')

  const pElement = document.createElement('p');
  pElement.innerText = reviewStatement;
  pElement.classList.add('review-statement');

  const reviewStars = document.createElement('div')
  reviewStars.classList.add('review-stars')

  let starsArray = [];

  for(let x = 1; x <= stars; x++) {
    const star = document.createElement('i')
    star.classList.add('fa-solid','fa-star');
    starsArray.push(star)
  }

  reviewStars.append(...starsArray)

  reviewCard.append(imgElement, nameElement, pElement, reviewStars);

  return reviewCard;
} 

// Created a place to store those elments
let reviewCards = []

// Looped through the reviews and called createReviewCard for each
for(let x = 0; x < reviews.length; x++) { 
  reviewCards.push(createReviewCard(reviews[x]))
}

// Located the place to store those elements
let parentElement = document.getElementById("review-card-container");

// Looped through the elements and placed inside parent
for(let x = 0; x < reviewCards.length; x++) {
  parentElement.appendChild(reviewCards[x]);
}