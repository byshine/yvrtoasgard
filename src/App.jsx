import React, { useEffect, useRef } from "react";
import "./App.css";
import { RiInstagramLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import { increment, decrement } from "./features/page/pageSlice";
import AppRouter from "./components/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  let app = useRef();

  function isBottom() {
    return (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop ===
      document.documentElement.clientHeight
    );
  }

  const debouncedWheel = debounce((e) => {
    if (e.deltaY <= 0) {
      dispatch(decrement());
    } else if (e.deltaY > 0 && isBottom()) {
      dispatch(increment());
    }
  }, 100);

  const handleWheel = (e) => {
    debouncedWheel(e);
  };

  return (
    <div ref={app} onWheel={handleWheel} className="bg-[#2b2b2b]">
      <div className="absolute top-0 right-0 left-0 z-30 h-[50px]">
        <div className="flex justify-end p-5 text-white text-2xl opacity-60">
          <RiInstagramLine></RiInstagramLine>
        </div>
      </div>
      <div className="right-0 bottom-0 top-0 z-40 absolute flex items-center pr-3">
        <div>
          <SidebarTrack />
        </div>
      </div>

      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

function SidebarTrack() {
  const page = useSelector((state) => state.page);
  const track = [];

  for (let i = 0; i < page.total; i++) {
    if (page.value - 1 === i) {
      track.push(
        <div
          key={`${track}-${i}`}
          className="w-2 h-2 rounded-full border-yellow-500 border border-opacity-100 mt-2 bg-yellow-400"
        ></div>
      );
    } else {
      track.push(
        <div
          key={`${track}-${i}`}
          className="w-2 h-2 rounded-full border-white border border-opacity-50 mt-2"
        ></div>
      );
    }
  }
  return <>{track}</>;
}

export default App;
