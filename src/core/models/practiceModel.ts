import { PracticeType } from '../../utils/consts/PracticeTypeEnum'

export interface Practice {
  id: number
  grand_prix_id: number
  type: keyof typeof PracticeType
  date: Date
}
