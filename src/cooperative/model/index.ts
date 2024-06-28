import type { SovietContract } from '../../contracts'
import type { IIndividualData, IOrganizationData } from '../users'

export interface ICooperativeData extends IOrganizationData {
  is_branched: boolean
  registration: string
  initial: string
  minimum: string
  members: MembersData[]
  chairman: IIndividualData
  totalMembers: number
}

export interface MembersData extends SovietContract.Interfaces.IBoardMember, IIndividualData {
  is_chairman: boolean
}
