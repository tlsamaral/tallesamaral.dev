import propTypes from 'prop-types';

interface IIconProps {
  className?: string;
}

function TwitterIcon({ className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="30"
      fill="none"
      viewBox="0 0 37 30"
      className={className}
    >
      <path
        fill="#B3B3B3"
        d="M36.184 4.247a15.08 15.08 0 01-4.191 1.137 7.335 7.335 0 003.214-4.032c-1.432.853-3 1.454-4.635 1.776A7.281 7.281 0 0018.14 9.771 20.673 20.673 0 013.133 2.15a7.388 7.388 0 00-.977 3.677 7.264 7.264 0 003.232 6.056 7.193 7.193 0 01-3.303-.906v.09a7.282 7.282 0 005.86 7.103 6.979 6.979 0 01-1.953.302 8.707 8.707 0 01-1.368-.124 7.3 7.3 0 006.803 5.044 14.599 14.599 0 01-8.987 3.125 14.076 14.076 0 01-1.776-.106 20.549 20.549 0 0011.171 3.285A20.583 20.583 0 0032.632 8.954v-.942a14.973 14.973 0 003.552-3.765z"
      ></path>
    </svg>
  );
}

export default TwitterIcon;

TwitterIcon.propTypes = {
  className: propTypes.string,
};
