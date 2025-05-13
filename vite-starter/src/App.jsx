import { useState, useEffect } from 'react';
import './App.css';
import { use } from 'react';

function App() {
    // 체크박스를 클릭하여 버튼을 비활성화
    // 버튼이 회색인지 확인하고
    // 버튼을 활성화하고 버튼이 다시 빨간색인지 확인
    // 또한 버튼을 클릭하여 색상을 변경한 후 버튼을 비활성화
    // 버튼이 회색인지 확인
    // 버튼을 활성화하고 버튼이 파란색인지 확인

    const [clicked, setClicked] = useState(false);
    const buttonStyle = clicked ? 'red' : 'gray';
    useEffect(() => {
        console.log(clicked);
    }, [clicked]);

    const handleCheckBoxClicked = (e) => {
        setClicked(!clicked);
    };
    return (
        <div>
            <button className={buttonStyle} onClick={handleCheckBoxClicked} disabled={clicked}>
                button is {clicked}
            </button>
        </div>
    );
}

export default App;
