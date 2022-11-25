let obj = JSON.parse($response.body);
obj = {
  "license": {
    "policy": "eyJkZXZpY2VJRCI6IjJlMTgwZGEyOGM4NTA2ZWMxOWFiMWZkYmIyYzEzZmMwIiwiZGJ1dWlkIjoiNDA4YzViNjAtNmJlMC0xMWVkLWI0ZmItNDNhYTVjZGNjMTE3IiwicG9saWN5RXhwaXJhdGlvbkRhdGUiOjE3MDA4MjA2NDEsInN1YnNjcmlwdGlvbkVuZERhdGUiOjE2Njk4ODk0MzcsIm5vdyI6MTY2OTI4NDY0MSwiZXhwaXJlZCI6ZmFsc2UsInJldm9rZWQiOmZhbHNlfQ==",
    "sign": "hsKLfpuqCJbhe+nxHs2wSkvjwhQzlUMtDzwwq+856rTHiAqQVkt7bsylGjh67HdyIwSf2aQW20p8feYlBA0BAg=="
  }
}
$done({body: JSON.stringify(obj)});
