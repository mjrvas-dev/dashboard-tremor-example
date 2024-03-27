import { CardUsageExample } from '@/app/components/CardStat'
import { ListUsageExample } from './components/ListExample'
import { AreaChartHero } from './components/AreaChart'

import { Card } from '@tremor/react';
import { TableUsageExample } from './components/TableExample';
import FormExample from './components/FormExample';

function Page() {
  return (
    <div className='container mx-auto pt-10'>
      <div className='grid grid-cols-4 gap-2'>
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />

        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
      </div>

      <div className='grid grid-cols-4 mt-10'>
        <div className='col-span-2 px-2'>
          <ListUsageExample />
          <div className='pt-5'>
            <TableUsageExample />
          </div>
        </div>
        <div className='col-span-2 px-2'>
          <Card>
            <AreaChartHero />
          </Card>
          <Card className='mt-4'>
            <FormExample />
          </Card>
        </div>
      </div>

    </div>
  )
}

export default Page