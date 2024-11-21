import React, { useState } from 'react';
import { Copy } from 'lucide-react'; // 引入 lucide-react 的复制图标
import pinyin from 'pinyin'; // 引入 pinyin 库

function Pinyin() {
  const [chineseInput, setChineseInput] = useState(''); // 中文输入框
  const [pinyinOutput, setPinyinOutput] = useState(''); // 拼音输出框

  // 处理中文输入，输出拼音
  const handleInputChange = (event) => {
    const input = event.target.value;
    setChineseInput(input);

    // 使用 pinyin 库转换中文为拼音
    const pinyinResult = pinyin(input, {
      style: pinyin.STYLE_TONE, // 改为 STYLE_TONE 以显示声调
      heteronym: false, // 不处理多音字
    }).map(item => item[0]).join(' '); // 拼音输出格式
    setPinyinOutput(pinyinResult);
  };

  // 添加复制成功状态
  const [copySuccess, setCopySuccess] = useState(false);

  // 复制拼音到剪贴板
  const handleCopy = () => {
    navigator.clipboard.writeText(pinyinOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // 2秒后重置状态
  };

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 20px' 
    }}>
      <div style={{ 
        display: 'flex', 
        gap: '50px', 
        flexDirection: 'column' 
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '60px', 
          flexWrap: 'wrap' 
        }}>
          <div style={{ 
            flex: '1 1 400px',
            padding: '20px', 
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)' 
          }}>
            <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>中文输入</h3>
            <textarea
              value={chineseInput}
              onChange={handleInputChange}
              rows="10"
              style={{
                width: '100%',
                fontSize: '18px',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                resize: 'vertical'
              }}
              placeholder="请输入中文"
            />
          </div>

          <div style={{ 
            flex: '1 1 400px',
            padding: '20px', 
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)' 
          }}>
            <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>拼音输出</h3>
            <textarea
              value={pinyinOutput}
              readOnly
              rows="10"
              style={{
                width: '100%',
                fontSize: '18px',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                backgroundColor: '#f9f9f9',
                resize: 'vertical'
              }}
              placeholder="拼音会在这里显示"
            />
          </div>
        </div>

        <button
          onClick={handleCopy}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: copySuccess ? '#45a049' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'flex-start',
            transition: 'background-color 0.3s'
          }}
        >
          <Copy size={24} />
          {copySuccess ? '已复制！' : '复制拼音'}
        </button>
      </div>
    </div>
  );
}

export default Pinyin;
