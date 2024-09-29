export const inputFields = [
    { type: "text", name: "shopName", placeholder: "Shop name..." },
    { type: "text", name: "username", placeholder: "User name..." },
    { type: "text", name: "merchantId", placeholder: "Merchant ID..." },
    { type: "email", name: "email", placeholder: "User email..." },
    { type: "text", name: "mobile", placeholder: "User Mobile No..." },
  ];


  export const features = [
    {
      title: "Inventory Management",
      description: "Effortlessly track and manage your inventory levels in real-time. Receive alerts for low stock, automate reordering processes, and maintain optimal stock levels to prevent overstocking or stockouts."
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Build and maintain strong relationships with your customers. Store customer information, track interactions, and analyze purchasing behavior to tailor your marketing strategies and improve customer satisfaction."
    },
    {
      title: "Sales Analytics and Reporting",
      description: "Gain insights into your sales performance with detailed analytics and reports. Monitor sales trends, identify top-selling products, and make data-driven decisions to enhance your business strategy."
    },
    {
      title: "Multi-Channel Selling",
      description: "Expand your reach by selling across multiple platforms, including online stores, marketplaces, and physical locations. Seamlessly integrate all sales channels for a unified view of your business."
    },
    {
      title: "Order Management",
      description: "Streamline your order processing with an efficient order management system. Track orders from purchase to delivery, manage returns, and ensure timely fulfillment to enhance customer satisfaction."
    },
    {
      title: "Mobile Access",
      description: "Manage your retail and wholesale operations on the go with mobile access. Use your smartphone or tablet to check inventory, process orders, and communicate with your team, ensuring you stay connected wherever you are."
    }
  ];


  interface Plan {
    title: string;
    price: number;
    features: string[];
}

export const plans: Plan[] = [
    {
        title: "Intro",
        price: 19,
        features: [
            "All limited links",
            "Own analytics platform",
            "Chat support",
            "Optimize hashtags",
            "Unlimited users"
        ]
    },
    {
        title: "Popular",
        price: 99,
        features: [
            "All limited links",
            "Own analytics platform",
            "Chat support",
            "Optimize hashtags",
            "Unlimited users"
        ]
    },
    {
        title: "Enterprise",
        price: 199,
        features: [
            "All limited links",
            "Own analytics platform",
            "Chat support",
            "Optimize hashtags",
            "Unlimited users"
        ]
    }
];


export const companyLinks = [
  { name: 'Home', href: '#' },
  { name: 'Contact us', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Get started', href: '#' }
];

export const serviceLinks = [
  { name: 'App design', href: '#' },
  { name: 'Web design', href: '#' },
  { name: 'Logo design', href: '#' },
  { name: 'Banner design', href: '#' }
];

export const accountLinks = [
  { name: 'Profile', href: '#' },
  { name: 'My account', href: '#' },
  { name: 'Preferences', href: '#' },
  { name: 'Purchase', href: '#' }
];

export const courseLinks = [
  { name: 'HTML & CSS', href: '#' },
  { name: 'JavaScript', href: '#' },
  { name: 'Photography', href: '#' },
  { name: 'Photoshop', href: '#' }
];