import Navbar from '../components/Navbar'

function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default RootLayout
