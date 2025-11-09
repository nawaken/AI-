// Hidden_Extract_JS
// Input : items[i].json.HTML_LOGIN.raw_html にログインページHTML
// Output: items[i].json に Hidden_JSON を詰める

// name="..." value="..." の hidden input から value を取り出すヘルパー


function extractHidden(html, name) {
  // container_0$Referrer みたいに $ があるのでエスケープ
  const escapedName = name.replace(/\$/g, "\\$");

  const re = new RegExp(
    `<input[^>]+name=["']${escapedName}["'][^>]*value=["']([^"']*)["']`,
    "i"
  );
  const m = html.match(re);
  return m ? m[1] : null;
}

const newItems = [];
const cookies = $input.first().json.cookie

  const html =　$('HTTP Request').first().json['data ']


  const COUNTRY_CODE =
    extractHidden(html, "COUNTRY_CODE") || "JP";

  const VIEWSTATE =
    extractHidden(html, "__VIEWSTATE") || "";

  const VIEWSTATEG =
    extractHidden(html, "__VIEWSTATEGENERATOR") || "";

  const EVENTVALIDATION =
    extractHidden(html, "__EVENTVALIDATION") || "";

  const SCROLL_X =
    extractHidden(html, "__SCROLLPOSITIONX") || "0";

  const SCROLL_Y =
    extractHidden(html, "__SCROLLPOSITIONY") || "0";

  const Referrer =
    extractHidden(html, "container_0$Referrer") ||
    "/miruden/mypage";

  const hiddenJson = {
    COUNTRY_CODE,
    VIEWSTATE,
    VIEWSTATEG,
    EVENTVALIDATION,
    SCROLL_X,
    SCROLL_Y,
    Referrer,
    cookies,
  };

  newItems.push({
    json: hiddenJson,
  });


return newItems;
