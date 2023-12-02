/**
 * POST /api/submit
 */

export async function onRequestPost(context) {
  try {
    let input = await context.request.formData();

    // Extract user ID and user data from the form
    const playername = input.get('playername');
    const playerid = input.get('playerid');
    const userData = input.get('userData');

    // Create a KV pair
    const kvKey = `${playername}:${playerid}`;
    await fd54ed96cae7443b828873e6deeffbe9.put(kvKey, userData);

    // Return a response indicating success
    return new Response('KV pair created successfully', {
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    });
  } catch (err) {
    return new Response('Error processing the form data', { status: 400 });
  }
}

// export async function onRequestPost(context) {
//     try {
//       let input = await context.request.formData();
  
//       // Convert FormData to JSON
//       // NOTE: Allows multiple values per key
//       let output = {};
//       for (let [key, value] of input) {
//         let tmp = output[key];
//         if (tmp === undefined) {
//           output[key] = value;
//         } else {
//           output[key] = [].concat(tmp, value);
//         }
//       }
  
//       let pretty = JSON.stringify(output, null, 2);
//       return new Response(pretty, {
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//         },
//       });
//     } catch (err) {
//       return new Response('Error parsing JSON content', { status: 400 });
//     }
//   }