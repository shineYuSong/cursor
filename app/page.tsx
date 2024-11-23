'use client'
import React, { useEffect } from 'react'
import AutoPlayVideo from '../components/AutoPlayVideo'
import HoverImage from '../components/HoverImage'

export default function Home() {
  useEffect(() => {
    // 平滑滚动
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')
        document.querySelector(targetId!)?.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  
  return (
    <main className="flex flex-col min-h-screen items-center">
      {/* 背景渐变 */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white -z-10"></div>
      
      {/* 主要内容区域 */}
      <div className="flex-grow w-full max-w-4xl px-4 flex flex-col items-center">
        <div className="content-block">
          <section id="home" className="content-center w-full">
            <div className="text-center-flex">
              <h1 className="text-5xl font-bold text-gray-800">
                欢迎来到我的个人主页
                <div className="title-decoration w-32"></div>
              </h1>
              <p className="text-xl text-gray-600">
                探索创意与技术的完美融合
              </p>
            </div>
            
            <div className="image-container hover-play transform hover:scale-105 transition-transform duration-500">
              <HoverImage
                staticSrc="/images/static.jpg"
                hoverSrc="/images/hover.gif"
                alt="悬停动画"
              />
            </div>
          </section>

          <section id="portfolio" className="content-center w-full">
            <div className="text-center-flex w-full">
              <h2 className="text-4xl font-bold text-gray-800">
                作品展示
                <div className="title-decoration w-24"></div>
              </h2>
              <div className="rounded-lg overflow-hidden shadow-2xl w-full max-w-3xl">
                <AutoPlayVideo 
                  src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 底部导航 */}
      <footer className="w-full bg-white/80 backdrop-blur-sm py-6 mt-auto">
        <nav className="max-w-4xl mx-auto px-4">
          <ul className="flex justify-center space-x-12 text-lg">
            <li><a href="#home" className="text-gray-600 hover:text-blue-500 transition-colors">首页</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">关于我</a></li>
            <li><a href="#portfolio" className="text-gray-600 hover:text-blue-500 transition-colors">作品集</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">联系方式</a></li>
          </ul>
        </nav>
      </footer>
    </main>
  )
} 