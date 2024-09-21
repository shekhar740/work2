import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  otp : string,
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  otp
}) => (
  <div>
    <h1>Welcome, {firstName || "shekhare metre"}!
      Your otp is {otp};
    </h1>
  </div>
);
