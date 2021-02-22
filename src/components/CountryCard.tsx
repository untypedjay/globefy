import React from 'react';

interface Props {
  children: any;
}

export default function CountryCard({ children }: Props) {
  console.log(children);
  return (
    <div>
      { children.name }
    </div>
  );
}