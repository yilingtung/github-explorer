import React from 'react';

interface ProviderComposerProps {
  providers: React.ReactElement[];
  children: React.ReactNode;
}

export const ProviderComposer = ({
  providers,
  children,
}: ProviderComposerProps) => {
  return (
    <>
      {providers.reduceRight((child, parent) => {
        return React.cloneElement(parent, {}, child);
      }, children)}
    </>
  );
};
