export default function powerRange(power) {
  if (power >= 90) {
    return 'red';
  } if (power >= 70) {
    return 'green';
  } if (power >= 50) {
    return 'orange';
  } if (power >= 0) {
    return 'brown';
  }
  return 'white';
}
