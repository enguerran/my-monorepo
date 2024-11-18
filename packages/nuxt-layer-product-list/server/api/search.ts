export default defineEventHandler(async (event) => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      description:
        "A sleek and ergonomic wireless mouse for smooth navigation.",
      image: "https://picsum.photos/200?random=1",
      price: "$25.99",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      description:
        "A high-performance mechanical keyboard with customizable keys.",
      image: "https://picsum.photos/200?random=2",
      price: "$89.99",
    },
    {
      id: 3,
      name: "Gaming Headset",
      description:
        "Immersive sound experience with noise-cancelling microphone.",
      image: "https://picsum.photos/200?random=3",
      price: "$59.99",
    },
    {
      id: 4,
      name: "4K Monitor",
      description: "Ultra HD 4K monitor with vibrant colors and sharp details.",
      image: "https://picsum.photos/200?random=4",
      price: "$299.99",
    },
    {
      id: 5,
      name: "External SSD",
      description:
        "Fast and reliable external SSD for data storage and transfer.",
      image: "https://picsum.photos/200?random=5",
      price: "$129.99",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with rich sound and deep bass.",
      image: "https://picsum.photos/200?random=6",
      price: "$45.99",
    },
    {
      id: 7,
      name: "Webcam",
      description:
        "High-definition webcam for clear video calls and streaming.",
      image: "https://picsum.photos/200?random=7",
      price: "$39.99",
    },
    {
      id: 8,
      name: "Smartwatch",
      description:
        "Feature-packed smartwatch with fitness tracking and notifications.",
      image: "https://picsum.photos/200?random=8",
      price: "$199.99",
    },
    {
      id: 9,
      name: "USB-C Hub",
      description: "Multi-port USB-C hub for expanded connectivity options.",
      image: "https://picsum.photos/200?random=9",
      price: "$34.99",
    },
    {
      id: 10,
      name: "Wireless Charger",
      description:
        "Fast wireless charger compatible with all Qi-enabled devices.",
      image: "https://picsum.photos/200?random=10",
      price: "$29.99",
    },
    {
      id: 11,
      name: "Noise-Cancelling Earbuds",
      description:
        "Compact earbuds with active noise cancellation for immersive sound.",
      image: "https://picsum.photos/200?random=11",
      price: "$79.99",
    },
    {
      id: 12,
      name: "Laptop Stand",
      description: "Adjustable laptop stand for ergonomic viewing and typing.",
      image: "https://picsum.photos/200?random=12",
      price: "$22.99",
    },
    {
      id: 13,
      name: "Smart Home Assistant",
      description:
        "Voice-controlled smart home assistant for convenience and automation.",
      image: "https://picsum.photos/200?random=13",
      price: "$99.99",
    },
    {
      id: 14,
      name: "Portable Projector",
      description: "Compact projector for big-screen entertainment anywhere.",
      image: "https://picsum.photos/200?random=14",
      price: "$249.99",
    },
    {
      id: 15,
      name: "Graphics Tablet",
      description:
        "Precision graphics tablet for digital artists and designers.",
      image: "https://picsum.photos/200?random=15",
      price: "$149.99",
    },
    {
      id: 16,
      name: "VR Headset",
      description:
        "Immersive virtual reality headset for gaming and experiences.",
      image: "https://picsum.photos/200?random=16",
      price: "$399.99",
    },
    {
      id: 17,
      name: "Portable Hard Drive",
      description: "High-capacity portable hard drive for secure data storage.",
      image: "https://picsum.photos/200?random=17",
      price: "$89.99",
    },
    {
      id: 18,
      name: "Wireless Earphones",
      description:
        "True wireless earphones with long battery life and great sound.",
      image: "https://picsum.photos/200?random=18",
      price: "$69.99",
    },
    {
      id: 19,
      name: "Smart Thermostat",
      description:
        "Energy-efficient smart thermostat for home climate control.",
      image: "https://picsum.photos/200?random=19",
      price: "$129.99",
    },
    {
      id: 20,
      name: "Action Camera",
      description:
        "Rugged action camera for capturing adventures in high definition.",
      image: "https://picsum.photos/200?random=20",
      price: "$199.99",
    },
    {
      id: 21,
      name: "Wireless Router",
      description:
        "High-speed wireless router for seamless internet connectivity.",
      image: "https://picsum.photos/200?random=21",
      price: "$79.99",
    },
    {
      id: 22,
      name: "Digital Photo Frame",
      description: "Display your favorite photos in a digital photo frame.",
      image: "https://picsum.photos/200?random=22",
      price: "$59.99",
    },
    {
      id: 23,
      name: "Bluetooth Keyboard",
      description: "Compact Bluetooth keyboard for easy typing on the go.",
      image: "https://picsum.photos/200?random=23",
      price: "$49.99",
    },
    {
      id: 24,
      name: "Smart Light Bulb",
      description:
        "Energy-efficient smart light bulb with customizable colors.",
      image: "https://picsum.photos/200?random=24",
      price: "$19.99",
    },
    {
      id: 25,
      name: "Fitness Tracker",
      description:
        "Track your fitness goals with this advanced fitness tracker.",
      image: "https://picsum.photos/200?random=25",
      price: "$69.99",
    },
    {
      id: 26,
      name: "E-Reader",
      description:
        "Portable e-reader with a high-resolution display for reading.",
      image: "https://picsum.photos/200?random=26",
      price: "$129.99",
    },
    {
      id: 27,
      name: "Smart Doorbell",
      description:
        "Smart doorbell with video and two-way audio for home security.",
      image: "https://picsum.photos/200?random=27",
      price: "$149.99",
    },
    {
      id: 28,
      name: "Portable Charger",
      description:
        "Compact portable charger for keeping devices powered on the go.",
      image: "https://picsum.photos/200?random=28",
      price: "$29.99",
    },
    {
      id: 29,
      name: "Noise-Cancelling Headphones",
      description:
        "Over-ear headphones with active noise cancellation for clear sound.",
      image: "https://picsum.photos/200?random=29",
      price: "$199.99",
    },
    {
      id: 30,
      name: "Smart Plug",
      description: "Control your devices remotely with this smart plug.",
      image: "https://picsum.photos/200?random=30",
      price: "$24.99",
    },
  ];

  const query = String(getQuery(event).q).toLowerCase();

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
  );
});
