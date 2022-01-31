import React, { useCallback, useState } from 'react';
import { Serie } from '@nivo/line';
import CodeEditor from './components/CodeEditor';
import Chart from './components/Chart';
import formatRawData from './utils/formatRawData';
import ChartData from './models/ChartData';
import { Footer, Header, Main } from './styles';

const defaultRawData = `{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862600000}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862600000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}
{type: 'data', timestamp: 1519862600000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862600000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
{type: 'data', timestamp: 1519862600000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}
{type: 'stop', timestamp: 1519862600000}`;

function App() {
  const [rawData, setRawData] = useState<string>(defaultRawData);
  const [series, setSeries] = useState<Serie[]>([]);

  const handleChartGeneration = useCallback(() => {
    const formattedRawData = formatRawData(rawData);

    const chartData = new ChartData(formattedRawData);

    setSeries(chartData.series);
  }, [rawData]);

  return (
    <>
      <Header>Leonardo's Challenge</Header>
      <Main>
        <CodeEditor rawData={rawData} onChange={setRawData} />
        <Chart data={series} />
      </Main>
      <Footer>
        <button onClick={handleChartGeneration}>GENERATE CHART</button>
      </Footer>
    </>
  );
}

export default App;
