/** Twinkling dot cluster used in the Services, About and Contact heroes. */
const DOTS: [number, number, number][] = [
  [48, 48, 3.4], [55.8, 59.6, 2.6], [41.8, 60.6, 3], [34, 48.9, 2.2], [40.2, 36.4, 3.4],
  [54.2, 35.4, 2.6], [62, 47.1, 3], [37.4, 73.9, 2.2], [25.1, 64, 3.4], [20, 49.1, 2.6],
  [23.9, 33.8, 3], [35.4, 23, 2.2], [50.9, 20.2, 3.4], [65.5, 26.1, 2.6], [74.5, 39.1, 3],
  [75.2, 54.8, 2.2], [67.2, 68.4, 3.4], [53.1, 75.5, 2.6], [10.3, 61.4, 3], [8.1, 44.9, 2.2],
  [12.8, 29, 3.4], [23.6, 16.3, 2.6], [38.6, 9.1, 3], [55.2, 8.7, 2.2], [70.6, 15, 3.4],
  [82.1, 27.1, 2.6], [87.7, 42.7, 3], [86.4, 59.3, 2.2], [78.4, 73.9, 3.4], [65.3, 84.1, 2.6],
  [49.1, 88, 3], [32.7, 85, 2.2], [19, 75.6, 3.4],
];

export function DotCluster({ size = 96, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      className={`mz-dots ${className}`}
      width={size}
      height={size}
      viewBox="0 0 96 96"
      aria-hidden="true"
    >
      {DOTS.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#0A0A0A" />
      ))}
    </svg>
  );
}
