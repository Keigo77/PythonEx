import './App.css'
import Card from './Card/Card'

function App() {

  const sections = [
    {
      id: 'intro',
      title: 'はじめに',
      contents: [
        { name: '講義資料', link: 'https://drive.google.com/file/d/1vpsyLhUHGF5OTSp6gK9KXMYHJO4x6bX7/view?usp=drive_link' },
      ]
    },
    {
      id: 'lecture1',
      title: '第1回',
      contents: [
        { name: '講義資料', link: 'https://drive.google.com/file/d/1zL3uqdsD9rUnHkarW1L5zkkWx7SRNzzz/view?usp=drive_link' },
        { name: 'ミニテスト1', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdbGsw1omhpFAdBmFCRDld2duOiHE6vxz18Aq0G5zsnAvnyqw/viewform?usp=sharing&ouid=118130846844221537487' },
      ]
    },
    {
      id: 'lecture2',
      title: '第2回',
      contents: [
        { name: '講義資料', link: 'https://drive.google.com/file/d/1AXCIwKfLfsdC0-3FvofjFUmxSPmXOP8A/view?usp=drive_link' },
        { name: 'ミニテスト2', link: 'https://docs.google.com/forms/d/e/1FAIpQLSd3Sp-MG-qHpiJ4b3H0H27CYXetqPfphw78ZwueOaOl9UFXRw/viewform?usp=sharing&ouid=118130846844221537487' },
        { name: '課題2', link: 'https://drive.google.com/file/d/1cnPgmn2UyaVbhkNJCt63gR6pfz4zLuj9/view?usp=drive_link' },
        { name: '課題2 提出フォーム', link: 'https://docs.google.com/forms/d/e/1FAIpQLScklvim-jPvWePvjIT87RJq9SKVx7S06MKUo8wVxOOHuYWuXg/viewform?usp=sharing&ouid=118130846844221537487'},
      ]
    },
    {
      id: 'lecture3',
      title: '第3回',
      contents: [
        { name: '講義資料', link: 'https://drive.google.com/file/d/1AXCIwKfLfsdC0-3FvofjFUmxSPmXOP8A/view?usp=drive_link' },
        { name: 'ミニテスト3', link: 'https://docs.google.com/forms/d/e/1FAIpQLSd3Sp-MG-qHpiJ4b3H0H27CYXetqPfphw78ZwueOaOl9UFXRw/viewform?usp=sharing&ouid=118130846844221537487' },
        { name: '課題3', link: 'https://drive.google.com/file/d/1cnPgmn2UyaVbhkNJCt63gR6pfz4zLuj9/view?usp=drive_link' },
        { name: '課題3 提出フォーム', link: 'https://docs.google.com/forms/d/e/1FAIpQLScklvim-jPvWePvjIT87RJq9SKVx7S06MKUo8wVxOOHuYWuXg/viewform?usp=sharing&ouid=118130846844221537487'},
      ]
    },
    {
      id: 'middle',
      title: '中間試験',
      contents: [
        { name: '中間試験について', link: 'https://drive.google.com/file/d/1BQLC6_E0oFOqYUd7HZF4oERkFJbmJHeC/view?usp=drive_link' },
        { name: '中間試験対策問題', link: 'https://drive.google.com/file/d/1EeJb7joEUIqpwIKRnSYm9rL50PGoOjqn/view?usp=drive_link' },
        { name: 'AIの使い方', link: 'https://drive.google.com/file/d/1T0NgMsisglIPU5kU0QqTwn6MumMDeJuX/view?usp=drive_link' },
      ]
    },
    {
      id: 'middle',
      title: '中間試験',
      year: 2026, 
      month: 8,
      date: 21 ,
      contents: [
        { name: '試験問題'},
        { name: '解答'},
      ]
    },
  ];

  return (
    <>
      <h1 className='title'>Python演習 ホームページ</h1>

      <Card sections={sections}></Card>
    </>
  )
}

export default App
