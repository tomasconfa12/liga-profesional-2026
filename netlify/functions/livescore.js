exports.handler = async function(event, context) {
  const RAPIDAPI_KEY  = 'f3103911bfmsh6ef810da59dc43bp1cd5a3jsn8f6163f93b94';
  const RAPIDAPI_HOST = 'free-api-live-football-data.p.rapidapi.com';

  try {
    const response = await fetch(
      `https://${RAPIDAPI_HOST}/football-current-live`,
      {
        headers: {
          'x-rapidapi-key':  RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
          'Content-Type':    'application/json'
        }
      }
    );
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
