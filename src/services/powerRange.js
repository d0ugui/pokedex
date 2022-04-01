export default function powerRange(power) {
  if (power >= 80) {
    return 'red';
  } if (power >= 50) {
    return 'green';
  } if (power >= 20) {
    return 'orange';
  }
  return 'white';
}
