import { COLORS } from '../../theme/colors'

export const TxType = {
  auto: 'Auto',
  education: 'Education',
  entertainment: 'Entertainment',
  food: 'Food',
  housing: 'Housing',
  other: 'Other',
  subscriptions: 'Subscriptions'
}

export const txTypeToColor = (type) => {
  switch (type) {
    case TxType.auto:
      return COLORS.purple
    case TxType.education:
      return COLORS.green
    case TxType.entertainment:
      return COLORS.primary
    case TxType.food:
      return COLORS.tertiary
    case TxType.housing:
      return COLORS.orange
    case TxType.subscriptions:
      return COLORS.pink
    case TxType.other:
    default:
      return COLORS.grey
  }
}
