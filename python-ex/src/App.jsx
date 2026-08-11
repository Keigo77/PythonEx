import './App.css'
import CardContent from './Card/CardContent'

function App() {

  return (
    <>
      <h1 className='title'>Python演習 ホームページ</h1>
      <div className='card'>
        <h2 className='card-title'>はじめに</h2>
        <CardContent link={'https://drive.google.com/file/d/1vpsyLhUHGF5OTSp6gK9KXMYHJO4x6bX7/view?usp=drive_link'}
        name={'講義資料'}></CardContent>
        <CardContent link={''}name={'ミニテスト(なし)'}></CardContent>
        <CardContent link={''}name={'課題(なし)'}></CardContent>
      </div>

      <div className='card'>
        <h2 className='card-title'>第1回</h2>
        <CardContent link={'https://drive.google.com/file/d/1zL3uqdsD9rUnHkarW1L5zkkWx7SRNzzz/view?usp=drive_link'}
        name={'講義資料'}></CardContent>
        <CardContent link={''}name={'ミニテスト'}></CardContent>
        <CardContent link={''}name={'課題'}></CardContent>
      </div>

      <div className='card'>
        <h2 className='card-title'>第2回</h2>
        <CardContent link={'https://drive.google.com/file/d/1AXCIwKfLfsdC0-3FvofjFUmxSPmXOP8A/view?usp=drive_link'}
        name={'講義資料'}></CardContent>
        <CardContent link={''}name={'ミニテスト(なし)'}></CardContent>
        <CardContent link={''}name={'課題(なし)'}></CardContent>
      </div>

      <div className='card'>
        <h2 className='card-title'>第3回</h2>
        <CardContent link={'https://drive.google.com/file/d/1vpsyLhUHGF5OTSp6gK9KXMYHJO4x6bX7/view?usp=drive_link'}
        name={'講義資料'}></CardContent>
        <CardContent link={''}name={'ミニテスト(なし)'}></CardContent>
        <CardContent link={''}name={'課題(なし)'}></CardContent>
      </div>

      <div className='card'>
        <h2 className='card-title'>中間試験</h2>
        <CardContent link={'https://drive.google.com/file/d/1vpsyLhUHGF5OTSp6gK9KXMYHJO4x6bX7/view?usp=drive_link'}
        name={'問題'}></CardContent>
        <CardContent link={''}name={'解答'}></CardContent>
      </div>
    </>
  )
}

export default App
