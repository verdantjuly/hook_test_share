import { useCallback, useState } from "react";
export default function Hook1() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log(`${count}번 버튼 클릭`);
  }, [count]);
  return (
    <div>
      <h1>{`${count} 번 클릭했습니다.`}</h1>
      <button onClick={handleClick}>클릭</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        카운트 증가
      </button>
    </div>
  );
}
