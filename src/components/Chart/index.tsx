import React from 'react';
import { ResponsiveLine, Serie } from '@nivo/line';
import { ChartRoot } from './styles';
import { darken } from 'polished';

type Props = {
  data: Serie[];
};

const Chart: React.FC<Props> = ({ data }) => {
  return (
    <ChartRoot>
      <ResponsiveLine
        data={data}
        margin={{
          top: 50,
          right: 260,
          bottom: 50,
          left: 50,
        }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          reverse: false,
        }}
        enableGridX={false}
        axisLeft={null}
        useMesh={true}
        theme={{
          fontSize: 14,
          fontFamily: 'Source Sans Pro',
        }}
        pointSize={12}
        colors={{ scheme: 'category10' }}
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            translateX: 220,
            itemWidth: 200,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: darken(0.05, '#ffffff'),
                },
              },
            ],
          },
        ]}
      />
    </ChartRoot>
  );
};

export default Chart;
