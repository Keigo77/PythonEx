import './App.css'
import Card from './Card/Card'
import { useState } from 'react'

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
      title: '第1回　出力・入力',
      contents: [
        { name: '講義資料', link: 'https://drive.google.com/file/d/1zL3uqdsD9rUnHkarW1L5zkkWx7SRNzzz/view?usp=drive_link' },
        { name: 'ミニテスト1', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdbGsw1omhpFAdBmFCRDld2duOiHE6vxz18Aq0G5zsnAvnyqw/viewform?usp=sharing&ouid=118130846844221537487' },
      ]
    },
    {
      id: 'lecture2',
      title: '第2回　変数と演算',
      contents: [
        { name: '講義資料', link: 'https://drive.google.com/file/d/1AXCIwKfLfsdC0-3FvofjFUmxSPmXOP8A/view?usp=drive_link' },
        { name: 'ミニテスト2', link: 'https://docs.google.com/forms/d/e/1FAIpQLSd3Sp-MG-qHpiJ4b3H0H27CYXetqPfphw78ZwueOaOl9UFXRw/viewform?usp=sharing&ouid=118130846844221537487' },
        { name: '課題2', link: 'https://drive.google.com/file/d/1cnPgmn2UyaVbhkNJCt63gR6pfz4zLuj9/view?usp=drive_link' },
        { name: '課題2 提出フォーム', link: 'https://docs.google.com/forms/d/e/1FAIpQLScklvim-jPvWePvjIT87RJq9SKVx7S06MKUo8wVxOOHuYWuXg/viewform?usp=sharing&ouid=118130846844221537487'},
      ]
    },
    {
      id: 'lecture3',
      title: '第3回　条件分岐と繰り返し',
      contents: [
        { name: '講義資料', link: 'https://drive.google.com/file/d/14M9Fs93pvdrEBESlXmKippQGqG1CuOjT/view?usp=drive_link' },
        { name: 'ミニテスト3', link: 'https://docs.google.com/forms/d/e/1FAIpQLSce0n3qTMHZVs0FUDmYzdiGUa4ZHqmRdt-LY15zmZVNszKi8Q/viewform?usp=sharing' },
        { name: '課題3', link: 'https://drive.google.com/file/d/1eduu103vK6VC0U5Iyw2c65RAh7YqNlPQ/view?usp=drive_link' },
        { name: '課題3 提出フォーム', link: 'https://docs.google.com/forms/d/e/1FAIpQLScWCuJAZmxg2muRixBORQcPCfSYR-BH_5Brz5hukRjk0E5Xhw/viewform?usp=sharing&ouid=118130846844221537487'},
      ]
    },
    {
      id: 'middle-test',
      title: '中間試験',
      contents: [
        { name: '中間試験について', link: 'https://drive.google.com/file/d/1BQLC6_E0oFOqYUd7HZF4oERkFJbmJHeC/view?usp=drive_link' },
        { name: '中間試験対策問題', link: 'https://drive.google.com/file/d/1EeJb7joEUIqpwIKRnSYm9rL50PGoOjqn/view?usp=drive_link' },
        { name: 'AIの使い方', link: 'https://drive.google.com/file/d/1T0NgMsisglIPU5kU0QqTwn6MumMDeJuX/view?usp=drive_link' },
        { name: '試験問題(2026/08/20 20時に公開)', link:'https://drive.google.com/file/d/1KdO1SpbRUVhYDFOHoIL3iBT1rytgcC2v/view?usp=drive_link', openDate: '2026-08-20T20:00:00' },
        { name: '解答(2026/08/20 20時に公開)', link:'https://drive.google.com/file/d/18qbz2uRTajgE2kUoY7mdddalCV6f8TyI/view?usp=drive_link', openDate: '2026-08-20T20:10:00'},
      ]
    },
    {
      id: 'middle-ex',
      title: '中間課題',
      contents: [
        { name: '問題', link: 'https://drive.google.com/file/d/1vtBUw8FmTVcxQVu-D4ii0sNvED5Tn3IX/view?usp=drive_link'},
        { name: '提出フォーム', link: 'https://docs.google.com/forms/d/e/1FAIpQLSenwU9aBT7bnsmEMVPb8OoQJ28bqWN8N5EEB-GObZm-ZqRk5w/viewform?usp=sharing&ouid=118130846844221537487'},
      ]
    },
    {
      id: 'lecture4',
      title: '第4回　配列と辞書',
      contents: [
        { name: '講義資料', link: '' },
        { name: 'ミニテスト4', link: '' },
        { name: '課題4', link: '' },
        { name: '課題4 提出フォーム', link: ''},
      ]
    },
    {
      id: 'lecture5',
      title: '第5回　2次元配列',
      contents: [
        { name: '講義資料', link: '' },
        { name: 'ミニテスト5', link: '' },
        { name: '課題5', link: '' },
        { name: '課題5 提出フォーム', link: ''},
      ]
    },
    {
      id: 'lecture6',
      title: '第6回　関数',
      contents: [
        { name: '講義資料', link: '' },
        { name: 'ミニテスト6', link: '' },
        { name: '課題6', link: '' },
        { name: '課題6 提出フォーム', link: ''},
      ]
    },
    {
      id: 'lecture6',
      title: '第7回　ファイルの入出力',
      contents: [
        { name: '講義資料', link: '' },
        { name: 'ミニテスト7', link: '' },
        { name: '課題7', link: '' },
        { name: '課題7 提出フォーム', link: ''},
      ]
    },
    {
      id: 'Final-test',
      title: '最終試験',
      contents: [
        { name: '最終試験について', link: '' },
        { name: '試験対策問題', link: '' },
        { name: '試験問題', link: '' },
        { name: '解答', link: ''},
      ]
    },
    {
      id: 'Final-ex',
      title: '最終課題',
      contents: [
        { name: '最終課題', link: '' },
        { name: '提出フォーム', link: '' },
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
