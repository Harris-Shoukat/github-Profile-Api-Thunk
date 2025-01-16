import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getAlldata } from "./feature/gitUserSlice";

function App() {
  const dispatch = useDispatch();

  const gitInfo = useSelector((state) => {
    return state.app;
  });
  return (
    <div className="App text-2xl my-9 ">
      <h1 className="text-5xl mb-5">Hello Github</h1>
      <button
        onClick={() => dispatch(getAlldata())}
        className="bg-orange-600 text-white text-2xl px-3 py-2 rounded-md shadow-lg  mb-5"
      >
        get users
      </button>
      <div className="w-4/5 mx-auto bg-slate-100 grid grid-cols-3 gap-5 items-center py-10 px-5">
        {gitInfo.users.map((item) => (
          <div
            className="max-w-md border bg-white border-gray-200 rounded-lg p-4 shadow-md my-4 flex"
            key={item.id}
          >
            <img
              src={item.avatar_url}
              alt="User Avatar"
              className="w-32 h-32 rounded-full mx-auto mb-2"
            />
            <div className="flex justify-center items-center flex-col mx-auto">
              <p className="text-2xl text-gray-700 mb-2">{item.login}</p>
              <p className="text-lg text-gray-500 mb-2">
                Profile: {item.user_view_type}
              </p>
              <a
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Visit Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
