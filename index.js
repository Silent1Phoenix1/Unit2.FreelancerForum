const names = ["Alice", "Bob", "Carol", "David", "Eve"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Marketer"];

let freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 }
];

function renderFreelancers() {
  const freelancersList = document.querySelector('.freelancers-list');
  freelancersList.innerHTML = '';

  freelancers.forEach(freelancer => {
    const freelancerElement = document.createElement('div');
    freelancerElement.classList.add('freelancer');
    freelancerElement.innerHTML = `
      <h3>${freelancer.name}</h3>
      <p>Occupation: ${freelancer.occupation}</p>
      <p>Starting Price: $${freelancer.price}</p>
    `;
    freelancersList.appendChild(freelancerElement);
  });
}

function generateRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 30; // Random price between 30 and 129
  return { name: randomName, occupation: randomOccupation, price: randomPrice };
}

function updateAveragePrice() {
  const averagePriceDisplay = document.getElementById('average-price-display');
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const averagePrice = totalPrices / freelancers.length;
  averagePriceDisplay.textContent = `$${averagePrice.toFixed(2)}`;
}

const maxInputs = 10;
let inputCount = 0;

function addFreelancerAndUpdate() {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers();
  updateAveragePrice();
  inputCount++;

  if (inputCount === maxInputs) {
    clearInterval(intervalId); 
  }
}

const intervalId = setInterval(addFreelancerAndUpdate, 2000);

renderFreelancers();
updateAveragePrice();