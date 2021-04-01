export default (_req, res) => {
  const message = Math.random() > 0.5 ? 'An estimated $14.7 billion is spent in total for Easter in the US.' : "none";
  const numberID = Math.floor((message.length * 2) / (message.split(" ").length / 16));
  res.status(200).json({ result: message, number: numberID });
};
