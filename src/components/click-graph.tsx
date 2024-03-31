import { type Database } from '@/types/database.types'
import { type FC } from 'react'
import { BarChart } from 'keep-react'
import { DAYS_GRAPH_VISIT_LINKS, TIME_GRAPH_VISIT_LINKS } from '@/types/const'
import { type TypeChartData } from '@/types/types'

const WIDTH = 800
const HEIGHT = 250

interface Props {
  visitsLinks: Array<Database['public']['Tables']['visits_links']['Row']>
}

export const ClickGraph: FC<Props> = ({ visitsLinks }) => {
  const dateNow = new Date()
  const initialDate = new Date(dateNow.getTime() - TIME_GRAPH_VISIT_LINKS)
  const barChartData: TypeChartData[] = []

  for (let i = 0; DAYS_GRAPH_VISIT_LINKS >= i; i++) {
    const visitDay = visitsLinks.filter(
      visit => new Date(visit.created_at).getDate() === initialDate.getDate()
    ).length
    barChartData.push({
      name: initialDate.toLocaleDateString('es-CO', {
        day: 'numeric',
        month: 'numeric'
      }),
      // clicks: Math.floor(Math.random() * 31)
      clicks: visitDay
    })
    initialDate.setDate(initialDate.getDate() + 1)
  }

  return (
    <article
      className="w-full mb-8 overflow-hidden rounded-lg"
    >
      <div className='w-auto overflow-x-auto md:flex md:items-center md:justify-center'>
        <div
          className={`-ml-10 py-2 min-h-[${HEIGHT}px]`}
        >
          <BarChart
            height={HEIGHT}
            width={WIDTH}
            dataKey="clicks"
            XAxisDataKey='name'
            chartData={barChartData}
            barRadius={[4, 4, 0, 0]}
            showXaxis={true}
            showYaxis={true}
            showTooltip={true}
            active={true}
            activeIndex={barChartData.length - 1}
            barSize={20}
            showGridLine
            activeColor="#6b21a8"
            inActiveColor="#3b0764"
            tooltipBtnStyle='bg-purple-700 py-1 px-4'
          />
        </div>
      </div>
    </article>
  )
}
