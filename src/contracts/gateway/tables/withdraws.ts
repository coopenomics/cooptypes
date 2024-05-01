import type * as Gateway from '../../../interfaces/gateway'
import * as ContractNames from '../../../common/names'

/**
 * Имя таблицы
 */
export const tableName = 'withdraws'

/**
 * Таблица хранится в {@link ContractNames._gateway | области памяти контракта}.
 */
export const scope = ContractNames._gateway

/**
 * @interface
 * Таблица содержит переводы черновиков документов.
 */
export type IWithdraws = Gateway.IWithdraws
