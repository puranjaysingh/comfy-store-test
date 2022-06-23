// domain/.netlify/functions/hello
const items = [
  { id: 1, name: "Puranjay" },
  { id: 2, name: "Singh" },
];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
