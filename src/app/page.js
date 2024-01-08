import Image from 'next/image'
import NavBar from './components/navbar'
import Content from './components/content'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className='bg-white'>
      <NavBar />
      <Content />
      <Footer />
    </div>
  )
}
