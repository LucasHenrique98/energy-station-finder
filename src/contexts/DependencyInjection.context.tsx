import { createContext } from 'react';
import { IEnergyPoint } from '../features/EnergyPointFinder/gateways/IEnergyPoint';
import { EnergyPointGatewayMemory } from '../features/EnergyPointFinder/gateways/EnergyPointGatewayMemory';
import { IGeocoderService } from '../services/Geocoder/IGeocoderService';
import { RNGeocoding } from '../services/Geocoder/RNGeocoding';

type DependenciesTypes = {
  energyPointsGateway: IEnergyPoint;
  geocoderService: IGeocoderService;
};

const dependencies: DependenciesTypes = {
  energyPointsGateway: new EnergyPointGatewayMemory(),
  geocoderService: new RNGeocoding(),
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
