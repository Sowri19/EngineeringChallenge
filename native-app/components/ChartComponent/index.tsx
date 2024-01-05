import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, Text, View } from "react-native";
import { ChartContainer, ChartTitle } from "./styles";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const processData = (data) => {
  const machineData = {};

  data.forEach((entry) => {
    Object.keys(entry.machineScores).forEach((machine) => {
      if (!machineData[machine]) {
        machineData[machine] = [];
      }
      machineData[machine].push({
        timestamp: entry.timestamp,
        score: entry.machineScores[machine],
      });
    });
  });

  return machineData;
};

const ChartComponent = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <Text>No data available</Text>;
  }

  const machineData = processData(data);
  const screenWidth = Dimensions.get("window").width;

  const renderChart = (scores, machineName) => {
    const lineChartData = {
      labels: scores.map((item) => formatDate(item.timestamp)),
      datasets: [{ data: scores.map((item) => parseFloat(item.score)) }],
    };

    return (
      <ChartContainer key={machineName}>
        <ChartTitle>{machineName} Scores</ChartTitle>
        <LineChart
          data={lineChartData}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
        />
      </ChartContainer>
    );
  };

  return (
    <View>
      {Object.keys(machineData).map((machine) =>
        renderChart(machineData[machine], machine)
      )}
      {/* Create a chart for Factory Scores */}
      {data[0]?.factory && (
        <ChartContainer>
          <ChartTitle>Factory Scores</ChartTitle>
          <LineChart
            data={{
              labels: data.map((item) => formatDate(item.timestamp)),
              datasets: [
                { data: data.map((item) => parseFloat(item.factory)) },
              ],
            }}
            width={screenWidth}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
          />
        </ChartContainer>
      )}
    </View>
  );
};

export default ChartComponent;
