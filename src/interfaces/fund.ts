// Generated by eosio-abi2ts 1.2.2 - eosio::abi/1.2

export type IAsset = string
export type IName = string
export type IChecksum256 = string
export type IPublicKey = string
export type ISignature = string
export type ITimePointSec = string
export type IUint64 = number | string

export interface IAccfund {
  id: IUint64
  coopname: IName
  contract: IName
  name: string
  description: string
  percent: IUint64
  available: IAsset
  withdrawed: IAsset
}

export interface IAddaccum {
  coopname: IName
  fund_id: IUint64
  quantity: IAsset
}

export interface IAddcirculate {
  coopname: IName
  quantity: IAsset
}

export interface IAddexpense {
  coopname: IName
  fund_id: IUint64
  quantity: IAsset
}

export interface IAuthorize {
  coopname: IName
  type: IName
  withdraw_id: IUint64
}

export interface IComplete {
  coopname: IName
  username: IName
  withdraw_id: IUint64
}

export interface ICounts extends ICountsBase {
}

export interface ICountsBase {
  key: IName
  secondary_key: IName
  value: IUint64
}

export interface ICreatefund {
  coopname: IName
  username: IName
  type: IName
  contract: IName
  name: string
  description: string
  percent: IUint64
}

export interface IDelfund {
  coopname: IName
  username: IName
  type: IName
  fund_id: IUint64
}

export interface IDocument {
  hash: IChecksum256
  public_key: IPublicKey
  signature: ISignature
  meta: string
}

export interface IEditfund {
  coopname: IName
  username: IName
  type: IName
  fund_id: IUint64
  contract: IName
  name: string
  description: string
  percent: IUint64
}

export interface IExpfund {
  id: IUint64
  coopname: IName
  contract: IName
  name: string
  description: string
  expended: IAsset
}

export interface IFundwallet {
  id: IUint64
  coopname: IName
  circulating: IAsset
  membership: IAsset
  accumulated: IAsset
  withdrawed: IAsset
  available: IAsset
  expended: IAsset
}

export interface IFundwithdraw {
  coopname: IName
  username: IName
  type: IName
  fund_id: IUint64
  document: IDocument
  quantity: IAsset
  bank_data_id: string
}

export interface IFwithdraw {
  id: IUint64
  coopname: IName
  username: IName
  status: IName
  type: IName
  fund_id: IUint64
  quantity: IAsset
  document: IDocument
  bank_data_id: string
  expired_at: ITimePointSec
}

export interface IInit {
  coopname: IName
  initial: IAsset
}

export interface INewfund {
  coopname: IName
  type: IName
  id: IUint64
}

export interface INewwithdraw {
  coopname: IName
  type: IName
  id: IUint64
}

export interface ISpreadamount {
  coopname: IName
  quantity: IAsset
}

export interface ISubaccum {
  coopname: IName
  fund_id: IUint64
  quantity: IAsset
}

export interface ISubcirculate {
  coopname: IName
  quantity: IAsset
}
