import React, { useEffect, useState, useRef, useCallback } from "react";
import useBookSearch from "../../hooks/useBookSearch";

export default function InfiniteScroll() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const observer = useRef(null);
  const { books, isLoading, hasMore } = useBookSearch(search, page);
  function handleChange(e) {
    setSearch(e.target.value);
  }
  useEffect(() => {
    if (search === "") {
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lastElement = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading]
  );

  return (
    <>
      <div className="text-center">
        <input
          placeholder="Search Books ..."
          onChange={handleChange}
          value={search}
          className="p-2 border-none rounded-lg w-96 mt-8"
        />
        <div>
          {isLoading && <span>Loading......</span>}
          {books.map((book, index) => {
            if (index + 1 === books.length) {
              return <div className="dark:text-white " ref={lastElement}>{book.title}</div>;
            }
            return <div  className="dark:text-white text-lg ">{book.title}</div>;
          })}
        </div>
      </div>
    </>
  );
}
