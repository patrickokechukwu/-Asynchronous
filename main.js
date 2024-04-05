//task 1
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
    }
  }

  //task 2
  async function awaitCall() {
    try {
      const response = await fetchDataFromAPI(); // Assuming fetchDataFromAPI is an async function that fetches data from an API
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  //task 3
  async function awaitCall() {
    try {
      const response = await fetchDataFromAPI(); // Assuming fetchDataFromAPI is an async function that fetches data from an API
      console.log(response);
    } catch (error) {
      console.error('Failed to fetch data:', error.message);
    }
  }

  //task 4
  async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('First async function');
  }
  
  async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Second async function');
  }
  
  async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Third async function');
  }
  
  async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
  }

  //task 5
  async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()]); // Assuming fetchDataFromAPI1 and fetchDataFromAPI2 are async functions that fetch data from APIs
      console.log('Response 1:', response1);
      console.log('Response 2:', response2);
    } catch (error) {
      console.error('Failed to fetch data:', error.message);
    }
  }

  //task 6
  async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(urls.map(url => fetch(url))); // Assuming fetch is a function that fetches data from a URL
      const data = await Promise.all(responses.map(response => response.json()));
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch data:', error.message);
    }
  }