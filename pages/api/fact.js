export default (_req, result) => {
  fetch("https://easterfunction.azurewebsites.net/api/eastertrigger").then(res => res.text()).then(res => {
    const message = res;
    const numberID = (Math.floor((message.length * 2) / (message.split(" ").length / 16))) % 125;
    result.status(200).json({ result: message, number: numberID });
  });
};
