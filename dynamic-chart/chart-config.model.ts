/* Guide 
  Chart layout https://plotly.com/javascript/line-charts/
  Chart config https://plotly.com/javascript/configuration-options/
*/
export class PlotChart {
    data: PlotData[];
    layout: PlotLayout;
    config: PlotConfig;
};

export class PlotData {
    x: number[];
    y: number[];
    type: 'scatter' | 'bar' | 'lines+markers' | string;
    name: string; // legend 
    text: string[]; // label for point
    marker: {
        color: string;
        size: number,
        line: {
          color:  string;
          width: number;
        }
    }
}
export class PlotLayout {
    width?: number;
    height?: number;
    responsive: boolean;
    title: {
        text: string;
    };
    xaxis: {
        title: {
            text: string;
        }
    };
    yaxis: {
        title: { 
            text: string; 
        }
    };
}

export class  PlotConfig {
    displayModeBar: boolean;
    modeBarButtonsToRemove: string[]; // 'toImage','pan2d','select2d','lasso2d','resetScale2d','zoomOut2d' 
}