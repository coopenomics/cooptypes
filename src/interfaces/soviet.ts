// Generated by eosio-abi2ts 1.2.2 - eosio::abi/1.2

export type IAsset = string
export type IName = string
export type IChecksum256 = string
export type IPublicKey = string
export type ISignature = string
export type ITimePointSec = string
export type IUint64 = number | string

export interface IAct {
  coopname: IName
  username: IName
  action: IName
  decision_id: IUint64
  document: IDocument
}

export interface IAddbalance {
  coopname: IName
  username: IName
  quantity: IAsset
}

export interface IAddprogbal {
  coopname: IName
  username: IName
  program_id: IUint64
  quantity: IAsset
}

export interface IAddress {
  id: IUint64
  coopname: IName
  departname: IName
  data: IAddressData
  meta: string
}

export interface IAddressData {
  latitude: string
  longitude: string
  country: string
  state: string
  city: string
  district: string
  street: string
  house_number: string
  building_section: string
  unit_number: string
  directions: string
  phone_number: string
  business_hours: string
}

export interface IAddstaff {
  coopname: IName
  chairman: IName
  username: IName
  rights: IRight[]
  position_title: string
}

export interface IAuthorize {
  coopname: IName
  chairman: IName
  decision_id: IUint64
  document: IDocument
}

export interface IAutomate {
  coopname: IName
  board_id: IUint64
  member: IName
  action_type: IName
  provider: IName
  encrypted_private_key: string
}

export interface IAutomator {
  id: IUint64
  coopname: IName
  board_id: IUint64
  member: IName
  action_type: IName
  permission_name: IName
  encrypted_private_key: string
}

export interface IAutosigner {
  decision_id: IUint64
}

export interface IBatch {
  coopname: IName
  action: IName
  batch_id: IUint64
}

export interface IBlockbal {
  coopname: IName
  username: IName
  quantity: IAsset
}

export interface IBoardMember {
  username: IName
  is_voting: boolean
  position_title: string
  position: IName
}

export interface IBoards {
  id: IUint64
  type: IName
  name: string
  description: string
  members: IBoardMember[]
  created_at: ITimePointSec
  last_update: ITimePointSec
}

export interface ICancelvote {
  coopname: IName
  member: IName
  decision_id: IUint64
}

export interface IChange {
  coopname: IName
  parent_username: IName
  username: IName
  exchange_id: IUint64
  money_contributor: IName
  product_contributor: IName
}

export interface IChanges {
  id: IUint64
  exchange_id: IUint64
  contribution_product_decision_id: IUint64
  return_product_decision_id: IUint64
}

export interface ICounts extends ICountsBase {
}

export interface ICountsBase {
  key: IName
  secondary_key: IName
  value: IUint64
}

export interface ICreaddress {
  coopname: IName
  chairman: IName
  departname: IName
  data: IAddressData
  meta: string
}

export interface ICreateboard {
  coopname: IName
  chairman: IName
  type: IName
  members: IBoardMember[]
  name: string
  description: string
}

export interface ICreateprog {
  coopname: IName
  chairman: IName
  title: string
  announce: string
  description: string
  preview: string
  images: string
  calculation_type: IName
  fixed_membership_contribution: IAsset
  membership_percent_fee: IUint64
}

export interface IDecision {
  id: IUint64
  coopname: IName
  username: IName
  type: IName
  batch_id: IUint64
  votes_for: IName[]
  votes_against: IName[]
  validated: boolean
  approved: boolean
  authorized: boolean
  authorization: IDocument
  created_at: ITimePointSec
}

export interface IDeladdress {
  coopname: IName
  chairman: IName
  address_id: IUint64
}

export interface IDisableprog {
  coopname: IName
  id: IUint64
}

export interface IDisautomate {
  coopname: IName
  board_id: IUint64
  member: IName
  automation_id: IUint64
}

export interface IDocument {
  hash: IChecksum256
  public_key: IPublicKey
  signature: ISignature
  meta: string
}

export interface IDraft {
  coopname: IName
  username: IName
  decision_id: IUint64
}

export interface IEditaddress {
  coopname: IName
  chairman: IName
  address_id: IUint64
  departname: IName
  data: IAddressData
  meta: string
}

export interface IEditprog {
  coopname: IName
  id: IUint64
  title: string
  announce: string
  description: string
  preview: string
  images: string
}

export interface IExec {
  executer: IName
  coopname: IName
  decision_id: IUint64
}

export interface IFundwithdraw {
  coopname: IName
  username: IName
  type: IName
  withdraw_id: IUint64
  document: IDocument
}

export interface IInit {
}

export interface IJoincoop {
  coopname: IName
  username: IName
  document: IDocument
}

export interface IJoincoops {
  id: IUint64
  username: IName
  is_paid: boolean
  statement: IDocument
  notice: string
}

export interface IOnewallet {
  username: IName
  coopname: IName
  available: IAsset
  blocked: IAsset
  minimum: IAsset
}

export interface IParticipants {
  username: IName
  created_at: ITimePointSec
  last_update: ITimePointSec
  last_min_pay: ITimePointSec
  status: IName
  is_initial: boolean
  is_minimum: boolean
  has_vote: boolean
}

export interface IProgcomarket {
  id: IUint64
  coopname: IName
  is_active: boolean
  title: string
  announce: string
  description: string
  preview: string
  images: string
  meta: string
  calculation_type: IName
  membership_percent_fee: IUint64
  fixed_membership_contribution: IAsset
}

export interface IProgram {
  coopname: IName
  program_id: IUint64
}

export interface IProgwallet {
  id: IUint64
  coopname: IName
  program_id: IUint64
  username: IName
  available: IAsset
}

export interface IRecieved {
  coopname: IName
  exchange_id: IUint64
}

export interface IRegpaid {
  coopname: IName
  username: IName
}

export interface IRight {
  contract: IName
  action_name: IName
}

export interface IRmstaff {
  coopname: IName
  chairman: IName
  username: IName
}

export interface ISetrights {
  coopname: IName
  chairman: IName
  username: IName
  rights: IRight[]
}

export interface IStaff {
  username: IName
  position_title: string
  roles: IName[]
  rights: IRight[]
  created_at: ITimePointSec
  updated_at: ITimePointSec
}

export interface IStatement {
  coopname: IName
  username: IName
  action: IName
  decision_id: IUint64
  document: IDocument
}

export interface ISubbalance {
  coopname: IName
  username: IName
  quantity: IAsset
}

export interface ISubprogbal {
  coopname: IName
  username: IName
  program_id: IUint64
  quantity: IAsset
}

export interface IUnblockbal {
  coopname: IName
  username: IName
  quantity: IAsset
}

export interface IUpdateboard {
  coopname: IName
  chairman: IName
  board_id: IUint64
  members: IBoardMember[]
  name: string
  description: string
}

export interface IValidate {
  coopname: IName
  username: IName
  decision_id: IUint64
}

export interface IVoteagainst {
  coopname: IName
  member: IName
  decision_id: IUint64
}

export interface IVotefor {
  coopname: IName
  member: IName
  decision_id: IUint64
}

export interface IWithdraw {
  coopname: IName
  username: IName
  withdraw_id: IUint64
}
