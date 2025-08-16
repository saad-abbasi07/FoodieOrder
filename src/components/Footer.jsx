export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} FoodieOrder. All rights reserved.</p>
        <p className="mt-2">Made with for food lovers.</p>
      </div>
    </footer>
  );
}
