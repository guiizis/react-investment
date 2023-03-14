import { checkRentability } from '../services/checkRentability'
import { getID } from '../services/getID'
import { getMonthName } from '../services/getMonthName'

export function InvestmentsCard({ data }) {
  const arrayData = JSON.parse(data)
  const title = arrayData.pop()
  const income = (arrayData[arrayData.length -1]['value'] - arrayData[0]['value']).toFixed(2)
  const percentIncome = ((arrayData[arrayData.length -1]['value']/arrayData[0]['value'] -1) * 100).toFixed(2)

  return (
    <div className='border p-2 m-4'>
      <h3 className='text-center'>{title}</h3>
      <h3 className='text-center'>Rendimento Total: R${income} ({percentIncome}%)</h3>
      {arrayData.map((monthData, index) => {
        const rentability = checkRentability(monthData, arrayData[index -1])
        const classRentability = rentability >= 0 ? 'text-green-400' : 'text-red-400'
        return (
          <ul key={getID()} className='border p-2'>
            <li>
              <div>
                <span>{getMonthName(monthData.month)}/{monthData.year}</span>
                <span className='ml-5'>{monthData.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
              <span className={`mt-2 ${classRentability}`}>{rentability}%</span>
            </li>
          </ul>
        )
      })}
    </div>
  )
}