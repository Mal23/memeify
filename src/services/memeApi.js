export const postMeme = meme => {
  return fetch('http://ec2-18-217-211-152.us-east-2.compute.amazonaws.com:7890/api/v1/memes', {
    method: 'POST',
    body: JSON.stringify(meme),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(([ok, json]) => {
      if(!ok) throw 'Error, meme not posted to database.';
      return console.log('Success', json);
    });
};
