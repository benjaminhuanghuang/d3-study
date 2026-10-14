import { csv, csvFormat } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';
      
// Fetch
const promise = fetch(csvUrl);
promise.then(response => {
    console.log(response.text());
    response.text().then(text=>{
        console.log(text);
    })
})

// async
const fetchText = async (url) => {
    const response  = await fetch(url);
    return await response.text();
}

fetchText(csvUrl).then(text => {
    console.log(text);
})

// With d3.csv
csv(csvUrl).then(data => {
  let message = '';
  message = message + Math.round(csvFormat(data).length / 1024) + ' kB\n';
  message = message + data.length + ' rows\n';
  message = message + data.columns.length + ' columns';
  document.getElementById('message-container').textContent = message;
});