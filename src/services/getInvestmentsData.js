import data from '../data/investments.json'

export function getInvestmentsData() {
  const {investments,reports} = data
  const allInvestmentTypes = getInvestmentType()
  return allInvestmentTypes

  function getInvestmentType() {
    const allInvestments = investments.map(investment => {
      let newInvestment = reports.filter(report => report.investmentId === investment.id)
      newInvestment.push(investment.description)
      return orderByMonth(newInvestment)
    })
    return allInvestments
  }

  function orderByMonth(investmentYear) {
    return investmentYear.sort(function (a, b) {
      const x = a['month']; const y = b['month'];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  function orderByMonth(investmentYear) {
    return investmentYear.sort(function (a, b) {
      const x = a['month']; const y = b['month'];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
}