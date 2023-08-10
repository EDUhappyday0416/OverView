<script setup>
import {  ref  } from 'vue'
import VueApexCharts from "vue3-apexcharts";/* import specific icons */
const series = ref([
    {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148 , 148,  148,  148]
    }
])
const chartOptions = ref({
    chart: {
        type: 'area',
        zoom: {
            enabled: false
        },
        responsive: {
            breakpoint: 1300,
            options: {
                plotOptions: {
                    line: {
                        horizontal: true
                    }
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' , 'Sep', 'Sep', 'Sep'],
    },
    
})

</script>

<template>
    <div class="dashboard">
        <div class="dashboard__overview">
            <div>
                My Wallet
            </div>
            <div>
                $385
            </div>
        </div>
        <div>
            
        </div>
        
        <div class="dashboard__card">
            <VueApexCharts
            type="area" 
            :options="chartOptions"
            :series="series"></VueApexCharts>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dashboard {
    padding: 10px;

    &__overview {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
       
    }
    &__card{
        padding: 10px 0;
        border-radius: 11px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        &__content {
            height: 10vh;
            max-width: 100px;
            background-color: aliceblue;
            border-radius: 10px;
            padding: 10px;
            margin: 10px;
        }
    }

    /*&__card::-webkit-scrollbar {
        overflow: auto;
        display: none; 
    }*/

}


</style>


