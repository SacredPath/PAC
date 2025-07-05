document.addEventListener("DOMContentLoaded", function () {
  // Fake live data for seat availability
  const tiers = [
    { name: "Reserve", max: 75, element: null },
    { name: "Alignment", max: 30, element: null },
    { name: "Edge", max: 10, element: null }
  ];

  // Generate initial fake remaining values (varied for realism)
  tiers.forEach(tier => {
    tier.remaining = Math.floor(tier.max * (0.3 + Math.random() * 0.4)); // 30-70%
  });

  // Create seat indicators under each tier
  const tierElements = document.querySelectorAll(".tier");
  tierElements.forEach((el, idx) => {
    const data = tiers[idx];
    const counter = document.createElement("p");
    counter.style.color = "#ffa657";
    counter.style.fontSize = "14px";
    counter.innerText = `🔒 ${data.remaining} seats remaining`;
    el.appendChild(counter);
    data.element = counter;
  });

  // Simulate live countdown every 15–45 seconds
  setInterval(() => {
    const tier = tiers[Math.floor(Math.random() * tiers.length)];
    if (tier.remaining > 0) {
      tier.remaining--;
      tier.element.innerText = `🔒 ${tier.remaining} seats remaining`;
    }
  }, Math.floor(15000 + Math.random() * 30000)); // 15–45s
});
