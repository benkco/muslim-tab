export default function BackIcon(props) {
  return (
    <svg
      width={props.size || '1em'}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fill={props.color || '#fff'}
        d='M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22198L13.192 5.63598L7.828 11Z'
      />
    </svg>
  );
}