import type * as Draft from '../contracts/draft'
import { coopname, username } from './base'

export * as Interfaces from '../contracts/draft'

export const Accounts = {
  production: 'draft',
  testnet: 'drafttest222',
} as const

export const Scopes = {
  global: Accounts,
  coopname,
  username,
} as const

export const TablesAndScopes = [{
  translations: {
    name: 'translations',
    scope: Scopes.global,
  },
}] as const

/**
 * @category General Use
 */
// eslint-disable-next-line ts/no-namespace
export namespace Actions {
  /**
   * вававава
   * @group Events
   */
  export type ITranslations = Draft.ITranslations
}

export interface Tables {
  /** Перевод такой хороший */
  translations: Draft.ITranslations // < Перевод,
}
