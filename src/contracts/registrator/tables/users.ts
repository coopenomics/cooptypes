import { Actors } from '../../../common'
import type * as Registrator from '../../../interfaces/registrator'

/**
 * Имя таблицы
 */
export const tableName = 'users'

/**
 * Таблица хранится в {@link Actors._coopname | области памяти кооператива}.
 */
export const scope = Actors._coopname

/**
 * @interface
 * Таблица содержит реестр пользователей-пайщиков кооператива.
 */
export type IUsers = Registrator.IUsers
