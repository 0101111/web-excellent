export const secondsToTime = (value: number): string => {
  const hours: number = Math.floor(value / 3600);
  const minutes: number = Math.floor((value % 3600) / 60);
  const seconds: number = Math.floor(value - minutes * 60);

  const h: string | number = hours > 9 ? hours : ('0' + hours).slice(-1);
  const m: string = ('00' + minutes).slice(-2);
  const s: string = ('00' + seconds).slice(-2);

  return `${h}h:${m}m:${s}s`;
};
