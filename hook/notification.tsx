'use client';

interface NotificationMessage {
  title: string;
  message: string;
  variant?: 'default' | 'success' | 'destructive' | 'info'; // Add more variants if needed
}

const Notification = ({ title, message, variant = 'default' }: NotificationMessage) => {
    console.log("title",title,"message",message,"variant",variant)
  return null; // No visible UI for this component; just handle notifications
};

export default Notification;
