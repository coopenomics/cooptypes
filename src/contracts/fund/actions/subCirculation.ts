import * as Permissions from '../../../common/permissions'
import * as ContractNames from '../../../common/names'
import type * as Fund from '../../../interfaces/fund'

export const authorizations = [{ permissions: [Permissions.active], actor: ContractNames._gateway }] as const

/**
 * Имя действия
 */
export const actionName = 'subcirculate'

/**
 * @interface
 */
export type ISubCirculation = Fund.ISubcirculate
