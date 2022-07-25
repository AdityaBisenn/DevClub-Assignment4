async function fetchdata(){
    const url = "https://api.covid19api.com/summary";
    const url1 = "https://api.covid19api.com/total/dayone/country/india";
    const response = await fetch(url);
    const response1 = await fetch(url1);
    const data1 = await response.json();
    const data2 = await response1.json();

    // console.log(data1);
    // console.log(data2);
    let totData = [];
    
    // console.log(data2[1].Date);


    let data_points = [];
    let dates = [];
    let data_date = [];
    for(let i=data2.length-31;i<data2.length;i++){
        a = data2[i].Date;
        dates.push(a.slice(0,10));
        let confirm = data2[i].Confirmed-data2[i-1].Confirmed;
        data_date.push(confirm);
    }
    // console.log(data_date);

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'new',
        'new1',
      ];
    
      const data = {
        labels: dates,
        datasets: [{
          label: 'Last 30 days confirmed cases in India',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: data_date,
          borderWidth: 1,
        }]
      };
    
      const config = {
        type: 'line',
        data: data,
        options: {}
      };
    
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
};

fetchdata();




