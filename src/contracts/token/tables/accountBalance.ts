import { Actors } from '../../../common'
import type * as Token from '../../../interfaces/eosio.token'

/**
 * Имя таблицы
 */
export const tableName = 'accounts'

/**
 * Таблица хранится в {@link Actors._username | области памяти пользователя}.
 */
export const scope = Actors._username

/**
 * @interface
 * Таблица содержит переводы черновиков документов.
 */
export type IAccountBalance = Token.IAccount
