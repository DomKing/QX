
let obj = JSON.parse($response.body);
let url = $request.url;

const init = '/device/init';
const receipt = '/device/iap-receipt';
const manage = '/device/management';

if (url.indexOf(init) != -1 || url.indexOf(receipt) != -1) {
  obj = {
    "license": {
      "policy": "eyJkZXZpY2VJRCI6IjJlMTgwZGEyOGM4NTA2ZWMxOWFiMWZkYmIyYzEzZmMwIiwiZGJ1dWlkIjoiNDA4YzViNjAtNmJlMC0xMWVkLWI0ZmItNDNhYTVjZGNjMTE3IiwicG9saWN5RXhwaXJhdGlvbkRhdGUiOjE3MDA4MjA2NDEsInN1YnNjcmlwdGlvbkVuZERhdGUiOjE2Njk4ODk0MzcsIm5vdyI6MTY2OTI4NDY0MSwiZXhwaXJlZCI6ZmFsc2UsInJldm9rZWQiOmZhbHNlfQ==",
      "sign": "hsKLfpuqCJbhe+nxHs2wSkvjwhQzlUMtDzwwq+856rTHiAqQVkt7bsylGjh67HdyIwSf2aQW20p8feYlBA0BAg==",
    }
  }
}

if (url.indexOf(manage) != -1) {
  obj = {
    "email": null,
    "subscriptionBillingPeriod": "Y",
    "subscriptionEndDate": 1700820641,
    "subscriptionSource": "IAP",
    "autoRenew": true,
    "trial": false
  }
}
$done({body: JSON.stringify(obj)});
