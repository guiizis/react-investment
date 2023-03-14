import { getInvestmentsData } from "../services/getInvestmentsData";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { InvestmentsCard } from "../components/InvestmentCard";
import { getID } from "../services/getID";

export function MainPage() {
  const investmentsData = getInvestmentsData()
  return (
    <div>
      <Header />
      <Main>
        {
          investmentsData.map(investment => {
            return <InvestmentsCard data={JSON.stringify(investment)} key={getID()}/>
          })
        }
      </Main>
    </div>
  )
}