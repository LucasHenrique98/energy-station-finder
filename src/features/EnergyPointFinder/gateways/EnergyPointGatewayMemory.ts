import { EnergyStation } from '../../../shared/entities/EnergyStation';
import { IEnergyPoint } from './IEnergyPoint';

export class EnergyPointGatewayMemory implements IEnergyPoint {
  private energyPointsList: Array<EnergyStation> = [
    {
      latitude: -23.5983,
      longitude: -46.5339,
    },
    {
      latitude: -23.5736,
      longitude: -46.5471,
    },
    {
      latitude: -23.5672,
      longitude: -46.5162,
    },
    {
      latitude: -23.5853,
      longitude: -46.5266,
    },
    {
      latitude: -23.5813,
      longitude: -46.5308,
    },
  ];

  async getEnergyStationsPoint(): Promise<any> {
    return this.energyPointsList;
  }
}
