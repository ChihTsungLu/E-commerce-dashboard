import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider'
import { pieChartData } from '../../data/dummy'
import { Header } from '../../components' 

const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Project Cost Breakdown"/>
      <AccumulationChartComponent 
        id='charts'
        height="420px"
        chartArea={{ border: {width: 0}}}
        tooltip={{ enable: true}}
        background= { currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
      <Inject services={[PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
        {pieChartData.map((item,index)=>
        <AccumulationSeriesDirective key={index} {...item}
          name="Sale"
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
              
          },
        }}
        
        />)}
        
       
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
    </div>
  )
}

export default Pie