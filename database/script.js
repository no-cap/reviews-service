import http from 'k6/http';
import { check, sleep } from 'k6';

const businessId = (Math.floor(Math.random() * 1000000)) + 9000000;

// export default function() {
//   http.get(`http://localhost:3003/api/reviews/?businessId=${businessId}`);
//   sleep(1);
// }


export let options = {
  vus: 100,
  stages: [
    { duration: '1s', target: 100 },
    { duration: '120s', target: 1000 }
  ],
};

export default function() {
  let res = http.get(`http://localhost:3003/api/reviews/?businessId=${businessId}`);
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
}