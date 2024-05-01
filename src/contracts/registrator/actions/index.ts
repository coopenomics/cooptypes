/**
 * Действие верификации аккаунта
 */
export * as verificateAccount from './verificateAccount'

/**
 * Действие обновления публичных данных аккаунта
 */
export * as updateAccount from './updateAccount'

/**
 * Действие создания нового аккаунта
 */
export * as createAccount from './createAccount'

/**
 * Действие регистрации карточки организации в кооперативе
 */
export * as registerOrganization from './registerOrganization'

/**
 * Действие замены активного ключа пользователя за подписью системного аккаунта делегатов.
 */
export * as changeKey from './changeKey'

/**
 * Действие подачи заявления на вступление в кооператив
 */
export * as joinCooperative from './joinCooperative'

/**
 * Действие, которое вызывается контрактом _soviet для подтверждения заявки на вступление в кооператив после принятия советом решения.
 * @private
 */
export * as confirmJoin from './confirmJoin'
