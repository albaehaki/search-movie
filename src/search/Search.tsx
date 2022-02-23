function Search({ click, keyword, change }: any) {
  return (
    <div className="flex m-auto">
      <form
        onSubmit={click}
        className="w-[70%] sm:w-[60%] md:w[50%] lg:w-[50%] grid grid-cols-12 m-auto border-[1px]"
      >
        <input
          placeholder="what's movie"
          onChange={change}
          value={keyword}
          className="col-span-8 sm:col-span-10 p-1 outline-none border-none bg-gray-50"
          type="text"
        />
        <button
          className="col-span-4 sm:col-span-2 p-1 bg-gray-50"
          type="submit"
          onClick={click}
        >
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
