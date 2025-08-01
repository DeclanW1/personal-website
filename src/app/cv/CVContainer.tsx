import CVContent from "./CVContent";

export default function CVContainer() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-600 px-4">
      <div className="bg-white border-2 border-gray-300 shadow-xl rounded-lg p-10 w-full max-w-3xl">
        <CVContent />
      </div>
    </main>
  );
}

