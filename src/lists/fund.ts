import type * as Draft from '../contracts/fund'

export * from '../contracts/fund'

/** Контракт развернут на следующих аккаунтах в соответствующих сетях. */
/**
 * Comments for variable
 *
 * @source source tag comment?
 */
export const DraftContractAccounts = {
  production: 'draft',
  testnet: 'drafttest222',
}

export const coopname = 'системное_имя_кооператива'
export const username = 'системное_имя_пользователя'

export const TableScopes = {
  global: DraftContractAccounts,
  coopname,
  username,
}

export const DraftContractTablesAndScopes = [{
  translations: {
    name: 'translations',
    scope: TableScopes.global,
  },
}]

export interface Actions {
  /** Действие такое-сякое */
  // ICreatetrans: Draft.ICreatetrans
  DraftContract: {
    ICreatetrans: Draft.IAccfunds
  }
}

export interface Tables {
  /** Перевод такой хороший */
  ITranslations: {
    table: Draft.IAddcirculate // < Перевод
  }
}
