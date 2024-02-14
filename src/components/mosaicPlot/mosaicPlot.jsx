import React ,{useRef,useEffect} from 'react'
import { Chart } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { LinearScale } from 'chart.js';
import "./mosaicPlot.css"
Chart.register(LinearScale, TreemapController, TreemapElement);
const myColors = ["#FF7D85","#725CFF","#70cf97","#FFDC6B"];
const helpers = {
    color(color) {
    
        return {
            alpha(alpha) {
                return {
                    rgbString() {
                        
                        return "rgba(0, 255, 0, " + alpha + ")";
                    },
                };
            },
        };
    },
};

function colorFromRaw(ctx) {
    if (ctx.type !== 'data') {
        return 'transparent';
    }
    
        const index=ctx.dataIndex%myColors.length;
        const color=myColors[index];
        return color;
}
const data = [
"Long",
"Medium",
"Short",
"Discharged"
];
const config = {
    type: 'treemap',
    data: {
        datasets: [
            {
                label: 'My treemap dataset',
                tree: [
                    { key: 'LONG', value: 10 },
                    { key: 'SHORT', value: 20 },
                    { key: 'MEDIUM', value: 3 },
                    { key: 'NO', value: 5 },
                ],
                
                borderWidth: 2,
                spacing: 0,
                backgroundColor: (ctx) => colorFromRaw(ctx),
                labels:{
                    display:true,
                    color:"white",
                    font:{
size:30,
style:"italic",
fontFamily:"'Times New Roman', Times, serif"
                    },
                    formatter:(ctx)=>{
                        console.log(ctx);
                        console.log(data[ctx.dataIndex],"  ",ctx.raw.v);
                        const key = data[ctx.dataIndex].key;
                        const value = data[ctx.dataIndex].value;
                        return `${data[ctx.dataIndex]}: ${ctx.raw.v}`;
                    }
                },
                key:'value',
            }
        ],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'My treemap chart'
            },
            legend: {
                display: false
            }
        }
    }
};



export default function mosaicPlot() {
    const chartContainer = useRef(null);
    useEffect(() => {
        const ctx = chartContainer.current.getContext('2d');
        new Chart(ctx, config);
    }, []);
  return (
    <div>
          <canvas className='map font-epi' ref={chartContainer} style={{ width: '72vw', height: '73vh',borderRadius:"20px" }}></canvas>
    </div>
  )
}
