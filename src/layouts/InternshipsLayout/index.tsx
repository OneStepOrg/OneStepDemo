import React from 'react';

interface InternshipsLayoutProps {
  children: React.ReactNode;
}

const InternshipsLayout: React.FC<InternshipsLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default InternshipsLayout;
