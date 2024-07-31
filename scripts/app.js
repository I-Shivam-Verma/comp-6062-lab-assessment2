// Create a new Vue app
const app = Vue.createApp({
    // Define the data for the app
    data() {
        return {
            studentName: "Shivam Verma",
            pressure: 65,
            min: 0,
            max: 100,
            pressureLevels: [
                { id: 'danger-low', color: 'danger', label: 'Danger - Low!', min: 0, max:
                10 },
                { id: 'warn-low', color: 'warning', label: 'Warning - Low', min: 11, max:
                30 },
                { id: 'safe', color: 'safe', label: 'Safe', min: 31, max: 70 },
                { id: 'warn-high', color: 'warning', label: 'Warning - High', min: 71,
                max: 90 },
                { id: 'danger-high', color: 'danger', label: 'Danger - High', min: 91,
                max: 100 }
                ]
        };
    },
    // Define the methods for the app
    methods: {
        isActive(level) {
            // Console.log level here to see the data structure, then check pressure against the current level and return TRUE or FALSE boolean
            if(this.pressure >= level.min && this.pressure <= level.max)
                {return true;}
            else{return false;}
        }
    }
});

// Mount the app to the #app element
app.mount('#app');