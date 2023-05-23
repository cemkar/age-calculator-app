import './App.css';

function App() {
  return (
    <main className="h-screen w-screen flex justify-center bg-gray-100">
      <section
        className="
        bg-white ml-12 mr-12 mt-12 mb-12 rounded-xl rounded-br-[124px]
      "
      >
        <div className="flex flex-row h-auto w-10/12 ml-10 border-b border-b-slate-400 border-solid relative">
          <div className="flex flex-col pt-10 pr-10">
            <label className="poppins-bold text-zinc-500">D A Y</label>
            <input
              className="w-24 h-12 border-zinc-300 border rounded-md poppins-extra-bold text-xl pl-2 input-border-red"
              required
              maxlength="2"
              placeholder="DD"
            />
          </div>
          <div className=" flex flex-col p-10">
            <label className="poppins-bold text-zinc-500 ">M O N T H</label>
            <input
              className="w-24 h-12 border-zinc-300 border rounded-md poppins-extra-bold text-xl pl-2 input-border-red"
              required
              maxlength="2"
              placeholder="MM"
            />
          </div>
          <div className=" flex flex-col p-10">
            <label className="poppins-bold text-zinc-500">Y E A R</label>
            <input
              className="w-24 h-12 border-solid border-zinc-300 border rounded-md poppins-extra-bold text-xl pl-2 input-border-red"
              required
              maxlength="4"
              placeholder="YYYY"
            />
          </div>
          <div className="w-[75px] h-[75px] bg-black rounded-[50%] top-[75%] left-[95%] absolute">
            
          </div>
        </div>
        <div className="flex flex-col p-10 italic poppins-extra-bold-italic">
          <h1 className="text-8xl">
            <span className="text-purple-500">--</span> years
          </h1>
          <h1 className="text-8xl">
            <span className="text-purple-500">--</span> months
          </h1>
          <h1 className="text-8xl">
            <span className="text-purple-500">--</span> days
          </h1>
        </div>
      </section>
    </main>
  );
}

export default App;
