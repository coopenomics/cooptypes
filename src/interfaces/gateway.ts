/** Представляет значение актива */
export type IAsset = string

/** Представляет значение имени */
export type IName = string

/** Представляет значение времени в секундах */
export type ITimePointSec = string

/** Представляет 64-битное беззнаковое целое число */
export type IUint64 = number | string

export interface IBalances extends IBalancesBase {
}

export interface IBalancesBase {
  /** Уникальный идентификатор баланса */
  id: IUint64

  /** Имя контракта */
  contract: IName

  /** Количество актива */
  quantity: IAsset
}

export interface ICounts extends ICountsBase {
}

export interface ICountsBase {
  /** Значение ключа */
  key: IName

  /** Значение вторичного ключа */
  secondary_key: IName

  /** Значение, связанное с ключами */
  value: IUint64
}

export interface IDeposit {
  /** Имя кооператива */
  coopname: IName

  /** Имя пользователя */
  username: IName

  /** Тип депозита */
  type: IName

  /** Количество актива */
  quantity: IAsset
}

export interface IDeposits {
  /** Уникальный идентификатор депозита */
  id: IUint64

  /** Имя пользователя */
  username: IName

  /** Имя кооператива */
  coopname: IName

  /** Тип депозита */
  type: IName

  /** Имя контракта токена */
  token_contract: IName

  /** Количество актива */
  quantity: IAsset

  /** Статус депозита */
  status: IName

  /** Связанная ссылка с депозитом */
  link: string

  /** Дополнительное примечание для депозита */
  memo: string

  /** Время истечения срока действия депозита */
  expired_at: ITimePointSec
}

export interface IDocument {
  /** Хэш-значение документа */
  hash: string

  /** Публичный ключ, связанный с документом */
  pkey: string

  /** Подпись документа */
  sign: string

  /** Метаданные документа */
  meta: string
}

export interface IDpcomplete {
  /** Имя кооператива */
  coopname: IName

  /** Имя администратора */
  admin: IName

  /** Уникальный идентификатор депозита */
  deposit_id: IUint64

  /** Дополнительное примечание для завершения */
  memo: string
}

export interface IDpfail {
  /** Имя кооператива */
  coopname: IName

  /** Имя администратора */
  admin: IName

  /** Уникальный идентификатор депозита */
  deposit_id: IUint64

  /** Дополнительное примечание для отказа */
  memo: string
}

export interface INewdepositid {
  /** Имя пользователя */
  username: IName

  /** Уникальный идентификатор депозита */
  id: IUint64
}

export interface INewwithdrid {
  /** Имя пользователя */
  username: IName

  /** Уникальный идентификатор вывода */
  id: IUint64
}

export interface IWithdraw {
  /** Имя кооператива */
  coopname: IName

  /** Имя пользователя */
  username: IName

  /** Количество актива */
  quantity: IAsset

  /** Документ, связанный с выводом */
  document: IDocument

  /** Идентификатор банковских данных */
  bank_data_id: string

  /** Дополнительное примечание для вывода */
  memo: string
}

export interface IWithdrawauth {
  /** Имя кооператива */
  coopname: IName

  /** Уникальный идентификатор вывода */
  withdraw_id: IUint64
}

export interface IWithdraws {
  /** Уникальный идентификатор вывода */
  id: IUint64

  /** Имя пользователя */
  username: IName

  /** Имя кооператива */
  coopname: IName

  /** Идентификатор банковских данных */
  bank_data_id: string

  /** Имя контракта токена */
  token_contract: IName

  /** Количество актива */
  quantity: IAsset

  /** Статус вывода */
  status: IName

  /** Документ, связанный с выводом */
  document: IDocument

  /** Дополнительное примечание для вывода */
  memo: string

  /** Время создания вывода */
  created_at: ITimePointSec
}

export interface IWthdcomplete {
  /** Имя кооператива */
  coopname: IName

  /** Имя администратора */
  admin: IName

  /** Уникальный идентификатор вывода */
  withdraw_id: IUint64

  /** Дополнительное примечание для завершения */
  memo: string
}

export interface IWthdfail {
  /** Имя кооператива */
  coopname: IName

  /** Имя администратора */
  admin: IName

  /** Уникальный идентификатор вывода */
  withdraw_id: IUint64

  /** Дополнительное примечание для отказа */
  memo: string
}
