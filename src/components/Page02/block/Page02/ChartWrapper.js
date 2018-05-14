import styled from 'styled-components';

const ChartWrapper = styled.div`
  margin-top: 30px;
  .recharts-wrapper {
    border-radius: 8px;
    border: 1px solid rgb(235, 235, 235);
  }
  .recharts-cartesian-axis-ticks {
    display: none;
  }
  .xAxis {
    display: none;
  }
`

export default ChartWrapper;