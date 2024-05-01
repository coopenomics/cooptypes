import { Actors } from '../../../common'
import type * as Registrator from '../../../interfaces/registrator'
/**
 * Имя таблицы
 */
export const tableName = 'balances'

/**
 * Таблица хранится в {@link Actors._coopname | области памяти кооператива}.
 */
export const scope = Actors._coopname

/**
 * @interface
 * Таблица содержит баланс для регистрации новых аккаунтов кооперативом.
 */
export type IBalances = Registrator.IBalancesBase
