import { createContext } from 'react';
import { IEnergyPoint } from '../features/EnergyPointFinder/gateways/IEnergyPoint';
import { EnergyPointGatewayMemory } from '../features/EnergyPointFinder/gateways/EnergyPointGatewayMemory';

type DependenciesTypes = {
  energyPointsGateway: IEnergyPoint;
};

const dependencies: DependenciesTypes = {
  energyPointsGateway: new EnergyPointGatewayMemory(),
};

export const DependencyInjectionContext =
  createContext<DependenciesTypes>(dependencies);

type DependencyInjectionContainerProps = {
  children: React.ReactNode;
};

export function DependencyInjectionContainer({
  children,
}: DependencyInjectionContainerProps) {
  return (
    <DependencyInjectionContext.Provider value={dependencies}>
      {children}
    </DependencyInjectionContext.Provider>
  );
}
