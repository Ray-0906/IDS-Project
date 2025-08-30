import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-5xl font-bold tracking-tight">404</h1>
      <p className="mt-3 text-gray-600">Page not found.</p>
      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">Go home</Link>
      </div>
    </section>
  )
}

export default NotFound
