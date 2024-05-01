import * as Permissions from '../../../common/permissions'
import type * as Token from '../../../interfaces/eosio.token'
import { Actors } from '../../../common'

export const authorizations = [{ permissions: [Permissions.active], actor: Actors._username }] as const

/**
 * Имя действия
 */
export const actionName = 'open'

/**
 * @interface
 */
export type IOpen = Token.IOpen
