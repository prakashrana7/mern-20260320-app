import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">The shoe profile you are looking for does not exist or has been removed.</p>
      <Link href="/products" className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium">
        Back to all Products
      </Link>
    </div>
  );
}
