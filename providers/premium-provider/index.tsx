import React, { FC, createContext, useContext, PropsWithChildren } from 'react';

type PremiumProviderProps = PropsWithChildren & {
  isPremium: boolean;
};

const PremiumContext = createContext({ isPremium: false });

export const usePremium = () => useContext(PremiumContext);

export const PremiumProvider: FC<PremiumProviderProps> = (props) => {
  const { children, isPremium } = props;

  // get isPremium Value from a local state

  const isSubscribed = false;

  return (
    <PremiumContext.Provider value={{ isPremium: isSubscribed }}>
      {children}
    </PremiumContext.Provider>
  );
};
