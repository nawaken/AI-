// ノード名の例：Login_HTML_Wrap
// Input : items[i].json.body に HTML が入っている想定
// Output: items[i].json.HTML_LOGIN.raw_html に詰め直す
const item = $input.first().json['data ']
const newItems = [];
const setCookie = $input.first().json.headers['set-cookie']

let cookieHeader = '';
if (Array.isArray(setCookie)) {
    cookieHeader = setCookie
      .map(c => c.split(';')[0])
      .join('; ');
  } else if (typeof setCookie === 'string') {
    cookieHeader = setCookie.split(';')[0];
  }

  newItems.push({
    json: {
      cookie: cookieHeader,
      HTML_LOGIN: {
        raw_html: item,
      },
    },
  });


return newItems;