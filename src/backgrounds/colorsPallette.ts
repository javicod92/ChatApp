export type backgroundProps = {
  id: number;
  color: string;
}[];

export const colorsPallette: backgroundProps = [
  { id: 0, color: "#464646ff" },
  { id: 1, color: "#ff00bfff" },
  { id: 2, color: "#2049ff" },
  { id: 3, color: "#ff8800" },
  {
    id: 4,
    color: "linear-gradient(135deg, #e100ff, #2049ff, #0b7dff, #d9ff00)",
  },
  {
    id: 5,
    color: "linear-gradient(135deg, #3b0a50, #8e0e4f, #c44536, #ff8800)",
  },
  {
    id: 6,
    color: "linear-gradient(135deg, #ff512f, #dd2476, #1fa2ff, #12d8fa)",
  },
  {
    id: 7,
    color: "linear-gradient(135deg, #f7971e, #ffd200, #21d4fd, #b721ff)",
  },
];
