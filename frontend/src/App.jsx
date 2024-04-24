import { useState } from "react";
import axiosInstance from "./utils/AxiosInstance";
import { BASE_URL } from "./utils/Config";
import back_img from "./assets/back.gif";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [multi, setMulti] = useState(0);
  const [exp, setExp] = useState(0);
  //Set first input Value
  const handleNumber1 = (value) => {

    if (!isContain(value) && getNumberLength(value) < 3) {
      setValue1(value)
    }
  }
  //Set Second input Value
  const handleNumber2 = (value) => {
    if (!isContain(value) && getNumberLength(value) < 3) {
      setValue2(value)
    }
  }
  //Send first data to server to calculate
  const sendValue1 = () => {
    if (value1 === "" || value1 === undefined) {
      toast.error("Please check input value", {
        position: "top-right"
      });
      return
    }
    axiosInstance({
      method: "post",
      url: `${BASE_URL}/getMulti`,
      params: {
        value: value1
      }
    })
      .then((res) => {
        if (res.data.status === "true") {
          setMulti(res.data.result)
        } else {
          toast.error("Failed calculate error !", {
            position: "top-right"
          });
        }
      })
      .catch((err) => {
        toast.error("Please check connection with server !", {
          position: "top-right"
        });
        console.log(err)
      })
  }
  //Send Second data to server to calculate
  const sendValue2 = () => {
    if (value2 === "" || value2 === undefined) {
      toast.error("Please check input value", {
        position: "top-right"
      });
      return
    }
    axiosInstance({
      method: "post",
      url: `${BASE_URL}/getExp`,
      params: {
        value: value2
      }
    })
      .then((res) => {
        if (res.data.status === "true") {
          setExp(res.data.result)
        } else {
          toast.error("Failed calculate error !", {
            position: "top-right"
          });
        }
      })
      .catch((err) => {
        toast.error("Please check connection with server !", {
          position: "top-right"
        });
        console.log(err)
      })
  }
  const getNumberLength = (num) => {
    return num.toString().length;
  }
  const isContain = (num) => {
    if (num.toString().includes(".")) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div
      className="w-full h-full items-stretch bg-center flex justify-center"
      style={{ backgroundImage: `url(${back_img})` }}
    >
      <div className="my-auto">
        <div className="text-[50px] text-[#FFFFFF] font-serif">Calculator</div>
        <div className="w-[600px] h-[200px] bg-[#fefefeba] border-4 rounded-lg flex flex-row justify-center shadow-lg p-2">
          <div className="flex flex-col">
            <div className="flex justify-center my-5 items-center gap-2 h-[50px]">
              <input
                className="w-[100px] bg-transparent border rounded focus:outline-double focus:outline-[#2d34b0] p-1 text-center"
                type="number"
                onChange={(e) => handleNumber1(e.target.value)}
                value={value1}
              ></input>
              <p>* 2</p>
              <p className="text-[30px]">=</p>
              <p className="w-[70px] text-center overflow-ellipsis">{multi}</p>
            </div>
            <div className="flex justify-center my-5 items-center gap-2 h-[50px]">
              <p>(</p>
              <input
                className="w-[100px] bg-transparent border rounded focus:outline-double focus:outline-[#2d34b0] p-1 text-center"
                type="number"
                onChange={(e) => handleNumber2(e.target.value)}
                value={value2}
              ></input>
              <p>* 2) ^ 2</p>
              <p className="text-[30px]">=</p>
              <p className="w-[70px] text-center overflow-ellipsis">{exp}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center my-5 h-[50px]">
              <button
                className="px-3 py-1 text-[24px] text-[#FFFFFF] font-serif bg-[#39987b] rounded-md outline-2"
                onClick={sendValue1}
              >
                <i>Calculate</i>
              </button>
            </div>
            <div className="flex justify-center my-5 h-[50px]">
              <button
                className="px-3 py-1 text-[24px] text-[#FFFFFF] font-serif bg-[#39987b] rounded-md outline-2"
                onClick={sendValue2}
              >
                <i>Calculate</i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>



  );
}

export default App;
