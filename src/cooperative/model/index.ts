import type { SovietContract } from '../../contracts'
import type { IIndividualData, IOrganizationData } from '../users'

export interface ICooperativeData extends IOrganizationData {
  announce: string
  description: string
  is_branched: boolean
  is_enrolled: boolean
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
