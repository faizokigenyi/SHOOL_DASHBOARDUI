export default function Pagination() {
  return (
    <div className="p-4 flex justify-between  text-gray-500">
      <button
        disabled
        className="py-2 px-4 rounded-full bg-slate-200 text-xs font-semibold disabled:opacity-50 cursor-not-allowed"
      >
        Prev
      </button>

      <div className="flex items-center px-2 text-sm gap-2">
        <button className="px-2 rounded-sm bg-lamaSky">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>...
        <button className="px-2 rounded-sm">10</button>
      </div>

      <button className="py-2 px-4 rounded-full bg-slate-200 text-xs font-semibold disabled:opacity-50 cursor-not-allowed">
        Next
      </button>
    </div>
  );
}
