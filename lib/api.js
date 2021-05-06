const data = [{
  id: "diamond-bracelet",
  image: "/images/sabrinna-ringquist-2z7MxnXQs3k-unsplash.jpg",
  name: "Diamond Bracelet",
  category: "bracelet",
  price: 140,
}, {
  id: "copper-bracelet",
  image: "/images/sabrinna-ringquist-3jReOOzIQPI-unsplash.jpg",
  name: "Copper Bracelet",
  category: "bracelet",
  price: 190
}, {
  id: "diamond-ring",
  image: "/images/sabrinna-ringquist-4eivCfZmyEA-unsplash.jpg",
  name: "Diamond Ring",
  category: "ring",
  price: 230
}, {
  id: "sapphire-ring",
  image: "/images/sabrinna-ringquist-9rMQr74Xlak-unsplash.jpg",
  name: "Sapphire Ring",
  category: "ring",
  price: 190
}, {
  id: "star-ring",
  image: "/images/sabrinna-ringquist-CCpQ12CZ2Pc-unsplash.jpg",
  name: "Star Cut Diamond Ring",
  category: "ring",
  price: 270
}, {
  id: "garnet-ring",
  image: "/images/sabrinna-ringquist-CKqpE-enyLY-unsplash.jpg",
  name: "Garnet Ring",
  category: "ring",
  price: 150
}, {
  id: "ruby-necklace",
  image: "/images/sabrinna-ringquist-cthZ7gFWH2o-unsplash.jpg",
  name: "Ruby Necklace",
  category: "",
  price: 90
}, {
  id: "topaz-ring",
  image: "/images/sabrinna-ringquist-D8yVEK7owhE-unsplash.jpg",
  name: "Topaz Ring",
  category: "ring",
  price: 160
}, {
  id: "diamond-wedding-bands",
  image: "/images/sabrinna-ringquist-Eulnh2kzUR0-unsplash.jpg",
  name: "Diamond Wedding Bands",
  category: "ring",
  price: 470
}, {
  id: "woven-diamond-bracelet",
  image: "/images/sabrinna-ringquist-Fux05TApirY-unsplash.jpg",
  name: "Woven Diamond Bracelet",
  category: "bracelet",
  price: 350
}, {
  id: "emerald-signet",
  image: "/images/sabrinna-ringquist-gWgnFkDVvY4-unsplash.jpg",
  name: "Emerald Signet Ring",
  category: "ring",
  price: 210
}, {
  id: "royal-sapphire-ring",
  image: "/images/sabrinna-ringquist-KSDaYilI75Q-unsplash.jpg",
  name: "Royal Sapphire Ring",
  category: "ring",
  price: 350
}, {
  id: "double-band",
  image: "/images/sabrinna-ringquist-kuko1hX_kXw-unsplash.jpg",
  name: "Double Diamond Band",
  category: "ring",
  price: 240
}, {
  id: "diamond-earrings",
  image: "/images/sabrinna-ringquist-LRubu3f5yWM-unsplash.jpg",
  name: "Diamond Earrings",
  category: "earring",
  price: 260
}, {
  id: "ruby-ring",
  image: "/images/sabrinna-ringquist-mjr5izNMxc8-unsplash.jpg",
  name: "Ruby Ring",
  category: "ring",
  price: 220
}, {
  id: "oval-sapphire-ring",
  image: "/images/sabrinna-ringquist-mmCm6c2ru5A-unsplash.jpg",
  name: "Oval Sapphire Ring",
  category: "ring",
  price: 280
}, {
  id: "ruby-moon-necklace",
  image: "/images/sabrinna-ringquist-rhJopRzes44-unsplash.jpg",
  name: "Ruby Moon Necklace",
  category: "necklace",
  price: 320
}, {
  id: "diamond-teardrop-ring",
  image: "/images/sabrinna-ringquist-tIcUqqPx0Ww-unsplash.jpg",
  name: "Diamond Teardrop Ring",
  category: "ring",
  price: 170
}, {
  id: "dragon-clasp-necklace",
  image: "/images/sabrinna-ringquist-v0fSc3Cz4Wk-unsplash.jpg",
  name: "Dragon Clasp Necklace",
  category: "necklace",
  price: 320
}, {
  id: "double-diamond-ring",
  image: "/images/sabrinna-ringquist-x4Hbw4Y77K0-unsplash.jpg",
  name: "Double Diamond Ring",
  category: "ring",
  price: 260
}]

export async function getProductById (id) {
  return data.find(product => product.id === id)
}

export async function getProducts () {
  return data
}
