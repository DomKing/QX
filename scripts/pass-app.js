
let obj = JSON.parse($response.body);
let url = $request.url;

const init = '/device/init';
const receipt = '/device/iap-receipt';
const manage = '/device/management';

if (url.indexOf(init) != -1 || url.indexOf(receipt) != -1) {
  obj = {
    "license" : {
      "policy" : "eyJkZXZpY2VJRCI6IkYzM0M0OTFBMzQ3RCIsImRidXVpZCI6IjQwOGM1YjYwLTZiZTAtMTFlZC1iNGZiLTQzYWE1Y2RjYzExNyIsInBvbGljeUV4cGlyYXRpb25EYXRlIjoxNzAwOTI0NTM2LCJzdWJzY3JpcHRpb25FbmREYXRlIjoxNjY5ODg5NDM3LCJub3ciOjE2NjkzODg1MzYsImV4cGlyZWQiOmZhbHNlLCJyZXZva2VkIjpmYWxzZX0=",
      "sign" : "xJIB6NnCyB9eAhXR9da/83AyvGQYSQ+nFWll132iWy1s4xyaU/FsuLg8Z88IodFlFOp3rD5DBKK2trNFrqDDDw=="
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
