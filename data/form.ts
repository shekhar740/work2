import dashboardIcon from "@/public/dashboard/dashboard.svg";
import bankmoneyIcon from "@/public/dashboard/bankmoney.svg";
import analysisIcon from "@/public/dashboard/analysis.svg";
import activityIcon from "@/public/dashboard/activity.svg";
import settingsIcon from "@/public/dashboard/settings.svg";
import image from "@/public/dashboard/logout.svg"
import calculator from "@/public/dashboard/Calculator.svg"
import invoice from "@/public/dashboard/Invoice.svg"
import khatabook from "@/public/dashboard/khatabook.svg"
import sales from "@/public/dashboard/Sell.svg"
import notes from "@/public/dashboard/notes.svg"
import cash from "@/public/dashboard/moneyc.svg"
export const inputFields = [
    { type: "text", name: "shopName", placeholder: "Shop name..." },
    { type: "text", name: "username", placeholder: "User name..." },
    { type: "text", name: "merchantId", placeholder: "Merchant ID..." },
    { type: "email", name: "email", placeholder: "User email..." },
    { type: "text", name: "mobile", placeholder: "User Mobile No..." },
  ];
  import inventory from "@/public/home/secured.svg"
  import crm from "@/public/home/dashboard.svg"
  import saled from "@/public/home/monitored.svg"
  import daily from "@/public/home/seamless.svg"
  import secures from "@/public/home/easytouse.svg"
  import secured from "@/public/home/dashboard.svg"
  import { FaClipboardList, FaUserFriends, FaChartLine, FaTasks, FaLock, FaCreditCard } from 'react-icons/fa';

  export const chooses = [
    {
        title: "Inventory Management",
        description: "Effortlessly track and manage your inventory levels in real-time. Receive alerts for low stock and automate reordering processes.",
        icon: secured
    },
    {
        title: "Customer Relationship Management (CRM)",
        description: "Build strong relationships with customers by storing information, tracking interactions, and analyzing purchasing behavior.",
        icon:crm
    },
    {
        title: "Sales Analytics and Reporting",
        description: "Gain insights into sales performance with detailed analytics and reports to enhance your business strategy.",
        icon: saled
    },
    {
        title: "Daily Shop Activity Controls",
        description: "Manage daily operations effectively with controls designed for everyday use to monitor activities and track performance.",
        icon: daily
    },
    {
        title: "Secured Data",
        description: "Ensure the safety of your business information with robust data protection measures to safeguard sensitive data.",
        icon: inventory
    },
    {
        title: "Seamless Transactions",
        description: "Facilitate smooth transactions with multiple payment options and quick processing to enhance the shopping experience.",
        icon: secured
    }
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
    icon: JSX.Element;
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



export const sidebarMap = [
  {
    title: "Dashboard",
    link: "/dashboard",
    description: "Dashboard",
    image: dashboardIcon,
    children: [
      { title: "Overview", link: "/dashboard/overview" },
      { title: "Analytics", link: "/dashboard/analytics" },
      { title: "Reports", link: "/dashboard/reports" },
      { title: "Monitoring", link: "/dashboard/monitoring" },
    ],
  },
  {
    title: "Transactions",
    link: "/dashboard/transactions",
    description: "View and manage transactions",
    image: bankmoneyIcon,
    children: [
      { title: "All Transactions", link: "/dashboard/transactions/all" },
      { title: "Incoming", link: "/dashboard/transactions/incoming" },
      { title: "Outgoing", link: "/dashboard/transactions/outgoing" },
      { title: "Recurring", link: "/dashboard/transactions/recurring" },
    ],
  },
  {
    title: "Analysis",
    link: "/dashboard/analysis",
    description: "Analyze data and generate reports",
    image: analysisIcon,
    children: [
      { title: "Financial Analysis", link: "/dashboard/analysis/financial" },
      { title: "Customer Analysis", link: "/dashboard/analysis/customer" },
      { title: "Product Analysis", link: "/dashboard/analysis/product" },
      { title: "Market Analysis", link: "/dashboard/analysis/market" },
    ],
  },
  {
    title: "Daily Report",
    link: "/dashboard/daily-report",
    description: "View daily reports",
    image: activityIcon,
    children: [
      { title: "Sales Report", link: "/dashboard/daily-report/sales" },
      { title: "Inventory Report", link: "/dashboard/daily-report/inventory" },
      { title: "Revenue Report", link: "/dashboard/daily-report/revenue" },
      { title: "Expense Report", link: "/dashboard/daily-report/expense" },
    ],
  },
  {
    title: "Settings",
    link: "/dashboard/settings",
    description: "Configure application settings",
    image: settingsIcon,
    children: [
      { title: "General Settings", link: "/dashboard/settings/general" },
      { title: "User Management", link: "/dashboard/settings/users" },
      { title: "Permissions", link: "/dashboard/settings/permissions" },
      { title: "Integrations", link: "/dashboard/settings/integrations" },
    ],
  },
];



export const otherServices = [
  { title: "Calculator", link: "/dashboard/calculator", image: calculator },
  { title: "Invoice", link: "/dashboard/invoice", image: invoice },
  { title: "Khatabook", link: "/dashboard/khatabook", image: khatabook },
  { title: "Sales", link: "/dashboard/sales", image: sales },
  { title: "Notes", link: "/dashboard/notes", image: notes },
  { title: "Cash", link: "/dashboard/cash", image: cash },
  { title: "Cash", link: "/dashboard/cash", image: cash },
  { title: "Cash", link: "/dashboard/cash", image: cash },
];
import image16 from "@/public/home/stockupdates.png"
import image17 from "@/public/home/automated.png";
import image18 from "@/public/home/scan.png";
import image19 from "@/public/home/bestcrm.png";
export const ourServices = [
  {
      title: "Real-Time Stock Management",
      description: "Monitor inventory levels in real-time to ensure optimal stock availability, reduce wastage, and prevent stockouts.",
      image : image16
  },
  {
      title: "Automated Daily Sales Reports",
      description: "Receive automated daily sales reports that provide insights into sales performance, helping you make informed business decisions.",
      image : image17
  },
  {
      title: "Scan to Add Products",
      description: "Effortlessly add products to your inventory by scanning barcodes, streamlining the inventory management process.",
      image : image18
  },
  {
      title: "Customer Relationship Management",
      description: "Utilize our comprehensive CRM tools to manage customer interactions, track sales history, and personalize customer experiences.",
      image : image19
  },
];


export const Prici = [
  {
    ttile : "Weekly Insights",
    para : "Essential weekly AI communication with you",
    points : ["Basic AI Chat related your weeekly activity","weekly Performance reports","",""],
    price : 299
  },
  {
    ttile : "Monthly Momentum",
    para : "Daily acvitiy report updated you on message ata tnight",
    points : ["Advanced AI inisights recommendations","Bi-daily performance reports on message","priority email support",""],
    price : 299
  },
  {
    ttile : "Annual Advantage",
    para : "Maximize returns with yearly exclusive benefits.",
    points : ["Real-time Ai recommendations","monthly Performance reports","Dedicated support line","add some from bito ai"],
    price : 299
  }
]

import realtIme from "@/public/home/realtimeorder.png"
import autoBIll from "@/public/home/automated.png"
import deilirRports from "@/public/home/dailyreports.png"
import aiintegration from "@/public/home/aiintegration.png"
import sellingsuggestion from "@/public/home/sellingsuggestion.png"
import scalbility from "@/public/home/scalability.png"
import userfriendly from "@/public/home/dashboard.png"
import customreNotifcation from "@/public/home/customnotification.png"
import offerssdfd from "@/public/home/offerssending.png"
import factor from "@/public/home/twofactor.jpg"
import paymentgatesway from "@/public/home/payment.png"


export const mobileCOmpo = [
  {
    title: "Real-time Tracking",
    description: "Track your orders with real-time updates for transparency and convenience.",
    image: realtIme
  },
  {
    title: "Automated Invoicing",
    image: autoBIll,
    description: "Automatically generate invoices for every transaction, reducing errors."
  },
  {
    title: "Daily Reports",
    image: deilirRports,
    description: "Get daily reports with key business insights and performance metrics."
  },
  {
    title: "AI Low Inventory Alerts",
    image: aiintegration,
    description: "Receive AI notifications when inventory is low to prevent stockouts."
  },
  {
    title: "AI Selling Suggestions",
    image: sellingsuggestion,
    description: "AI recommends the best products to sell based on sales trends."
  },
  {
    title: "High Scalability",
    image: scalbility,
    description: "Handle high traffic with scalable architecture for consistent performance."
  },
  {
    title: "Custom Notifications",
    image: customreNotifcation,
    description: "Set personalized notifications to stay updated on important events."
  },
  {
    title: "Daily User Offers",
    image: offerssdfd,
    description: "Send daily offers to keep users engaged and boost repeat purchases."
  },
  {
    title: "Secure Payments",
    image: paymentgatesway,
    description: "Seamlessly process payments with support for multiple methods."
  }
]


