import { ICounterItem } from 'types'

export const COUNTERS: ICounterItem[] = [
  {
    companyName: 'КП “Львівводоканал”',
    utilityType: 'хол. вода і відведення',
    personalAccount: '670000080671',
    counterState: 54500,
    newCounterState: 54617,
  },
  {
    companyName: 'КП “ЛьвівСвітло”',
    utilityType: 'електропостачання',
    personalAccount: '480052080600',
    counterState: 68000,
    newCounterState: 68152,
  },
  {
    companyName: 'КП “ЛьвівГаз”',
    utilityType: 'опалення',
    personalAccount: '50490051667',
    counterState: 140500,
    newCounterState: 140556,
  },
]

export default { COUNTERS }
